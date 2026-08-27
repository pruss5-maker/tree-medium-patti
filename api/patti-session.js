const crypto = require("crypto");

const COOKIE_NAME = "kela_patti_session";
const SESSION_SECONDS = 60 * 60 * 24 * 30;

const json = (response, status, body) => {
  response.statusCode = status;
  response.setHeader("Cache-Control", "private, no-store, max-age=0");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.end(JSON.stringify(body));
};

const safeEqual = (left, right) => {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
};

const signatureFor = (payload, secret) => crypto
  .createHmac("sha256", secret)
  .update(payload)
  .digest("base64url");

const createSession = (secret) => {
  const payload = Buffer.from(JSON.stringify({
    subject: "patti",
    expires: Math.floor(Date.now() / 1000) + SESSION_SECONDS,
  })).toString("base64url");
  return `${payload}.${signatureFor(payload, secret)}`;
};

const parseCookies = (request) => Object.fromEntries(
  String(request.headers.cookie || "")
    .split(";")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const separator = entry.indexOf("=");
      if (separator < 0) return [entry, ""];
      return [entry.slice(0, separator), decodeURIComponent(entry.slice(separator + 1))];
    }),
);

const isValidSession = (request, secret) => {
  const token = parseCookies(request)[COOKIE_NAME];
  if (!token) return false;
  const separator = token.lastIndexOf(".");
  if (separator < 1) return false;
  const payload = token.slice(0, separator);
  const suppliedSignature = token.slice(separator + 1);
  if (!safeEqual(suppliedSignature, signatureFor(payload, secret))) return false;
  try {
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return decoded.subject === "patti"
      && Number.isFinite(decoded.expires)
      && decoded.expires > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
};

const requestBody = (request) => {
  if (request.body && typeof request.body === "object") return request.body;
  if (typeof request.body !== "string") return {};
  try {
    return JSON.parse(request.body);
  } catch {
    return {};
  }
};

module.exports = (request, response) => {
  const passcode = process.env.PATTI_STUDIO_PASSCODE;
  const sessionSecret = process.env.PATTI_SESSION_SECRET;

  if (!passcode || !sessionSecret) {
    return json(response, 503, { authenticated: false, error: "Patti Studio is not configured." });
  }

  if (request.method === "GET") {
    return json(response, 200, { authenticated: isValidSession(request, sessionSecret) });
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "GET, POST");
    return json(response, 405, { authenticated: false, error: "Method not allowed." });
  }

  const body = requestBody(request);
  if (body.action === "logout") {
    response.setHeader(
      "Set-Cookie",
      `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`,
    );
    return json(response, 200, { authenticated: false });
  }

  if (body.action !== "login" || !safeEqual(body.passcode || "", passcode)) {
    return json(response, 401, { authenticated: false, error: "That passcode did not open Patti Studio." });
  }

  response.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=${encodeURIComponent(createSession(sessionSecret))}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${SESSION_SECONDS}`,
  );
  return json(response, 200, { authenticated: true });
};
