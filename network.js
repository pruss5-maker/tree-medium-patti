/* Network homepage: booking flow shared with script.js (details go straight to Stripe). */
(() => {
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const termsModal = document.querySelector("[data-terms-modal]");
const termsDialog = document.querySelector("[data-terms-dialog]");
const termsOpenButtons = document.querySelectorAll("[data-terms-open]");
const termsCloseButtons = document.querySelectorAll("[data-terms-close]");
const termsConsent = document.querySelector("[data-terms-consent]");
const termsContinue = document.querySelector("[data-terms-continue]");
const bookingFirst = document.querySelector("[data-booking-first]");
const bookingInitial = document.querySelector("[data-booking-initial]");
const bookingEmail = document.querySelector("[data-booking-email]");
const bookingStatus = document.querySelector("[data-booking-status]");
const paymentUrl = "https://buy.stripe.com/28E5kDecPeon1Rz6hQc7u05";
let termsPreviousFocus = null;
let scrollSettledTimer = 0;

const cleanBookingText = (value) => value.trim().replace(/\s+/g, " ");

const bookingIsReady = () => {
  if (!termsConsent?.checked || !bookingFirst || !bookingInitial) return false;
  const firstName = cleanBookingText(bookingFirst.value);
  const lastInitial = cleanBookingText(bookingInitial.value).replace(/\.$/, "");
  const email = (bookingEmail?.value || "").trim();
  return /^[\p{L}][\p{L}'’.\- ]{0,29}$/u.test(firstName)
    && /^[\p{L}]$/u.test(lastInitial)
    && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
};

const setBookingStatus = (message, isError = false) => {
  if (!bookingStatus) return;
  bookingStatus.textContent = message;
  bookingStatus.classList.toggle("is-error", isError);
};

const setTermsConsentState = () => {
  if (!termsConsent || !termsContinue) return;
  const isAgreed = bookingIsReady() && termsContinue.dataset.sending !== "true";
  termsContinue.classList.toggle("is-disabled", !isAgreed);
  termsContinue.setAttribute("aria-disabled", String(!isAgreed));
  termsContinue.tabIndex = isAgreed ? 0 : -1;
};

const resetBookingForm = () => {
  if (bookingFirst) bookingFirst.value = "";
  if (bookingInitial) bookingInitial.value = "";
  if (bookingEmail) bookingEmail.value = "";
  if (termsContinue) {
    delete termsContinue.dataset.sending;
    termsContinue.textContent = "Continue to Payment · $44";
  }
  setTermsConsentState();
  setBookingStatus("");
};

const openTerms = () => {
  if (!termsModal || !termsDialog || !termsConsent) return;
  closeMenu();
  termsPreviousFocus = document.activeElement;
  termsConsent.checked = false;
  resetBookingForm();
  termsModal.hidden = false;
  document.body.classList.add("terms-open");
  window.requestAnimationFrame(() => termsDialog.focus());
};

const closeTerms = () => {
  if (!termsModal) return;
  termsModal.hidden = true;
  document.body.classList.remove("terms-open");
  if (window.location.hash === "#booking-terms") {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
  if (termsPreviousFocus instanceof HTMLElement) termsPreviousFocus.focus();
};

const openTermsFromHash = () => {
  if (termsModal && window.location.hash === "#booking-terms") openTerms();
};

window.addEventListener("hashchange", openTermsFromHash);
if (window.location.hash === "#booking-terms") window.requestAnimationFrame(openTermsFromHash);

const trapTermsFocus = (event) => {
  if (event.key !== "Tab" || !termsDialog || termsModal?.hidden) return;
  const focusable = Array.from(
    termsDialog.querySelectorAll(
      'a[href]:not([tabindex="-1"]), button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};

termsOpenButtons.forEach((button) => button.addEventListener("click", openTerms));
termsCloseButtons.forEach((button) => button.addEventListener("click", closeTerms));
termsConsent?.addEventListener("change", setTermsConsentState);
[bookingFirst, bookingInitial, bookingEmail].forEach((field) => {
  field?.addEventListener("input", () => {
    setBookingStatus("");
    setTermsConsentState();
  });
});
termsContinue?.addEventListener("click", (event) => {
  event.preventDefault();
  if (!bookingIsReady() || termsContinue.dataset.sending === "true") {
    setBookingStatus("Add your name, your email, and your agreement before payment.", true);
    return;
  }
  const firstName = cleanBookingText(bookingFirst.value);
  const lastInitial = cleanBookingText(bookingInitial.value).replace(/\.$/, "").toLocaleUpperCase("en-US");
  const email = bookingEmail.value.trim();
  termsContinue.dataset.sending = "true";
  termsContinue.textContent = "Opening secure payment…";
  setTermsConsentState();
  setBookingStatus("");
  // No third-party email step: Stripe collects the email at checkout and notifies Patti of
  // each payment. The name rides along as the payment's reference (Stripe allows only
  // letters, numbers, dashes and underscores there, so "John S." becomes "John-S").
  const reference = `${firstName}-${lastInitial}`
    .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9_-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "kela-booking";
  window.location.assign(`${paymentUrl}?client_reference_id=${encodeURIComponent(reference)}&prefilled_email=${encodeURIComponent(email)}`);
});
// Coming back from Stripe with the Back button restores the old page; unstick the button.
window.addEventListener("pageshow", (event) => {
  if (!event.persisted || !termsContinue) return;
  delete termsContinue.dataset.sending;
  termsContinue.textContent = "Continue to Payment · $44";
  setTermsConsentState();
});
termsDialog?.addEventListener("keydown", trapTermsFocus);

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  nav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  const label = menuToggle?.querySelector(".sr-only");
  if (label) label.textContent = "Open navigation";
};

if (window.location.hash === "#booking-terms") openTerms();

menuToggle?.addEventListener("click", () => {
  const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  document.body.classList.toggle("menu-open", willOpen);
  nav?.classList.toggle("is-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  const label = menuToggle.querySelector(".sr-only");
  if (label) label.textContent = willOpen ? "Close navigation" : "Open navigation";
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("scroll", () => {
  setHeaderState();
  if (!header) return;
  header.classList.add("is-scrolling");
  window.clearTimeout(scrollSettledTimer);
  scrollSettledTimer = window.setTimeout(() => header.classList.remove("is-scrolling"), 650);
}, { passive: true });
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (termsModal && !termsModal.hidden) closeTerms();
    else closeMenu();
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMenu();
});

if (year) year.textContent = String(new Date().getFullYear());
setHeaderState();
})();
