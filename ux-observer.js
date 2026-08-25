(() => {
  const loader = document.currentScript;
  const projectId = loader?.dataset.clarityProjectId?.trim();
  if (!projectId || !/^[a-z0-9]+$/i.test(projectId)) return;

  const storageKey = "kela-analytics-consent-v1";
  const readChoice = () => {
    try { return window.localStorage.getItem(storageKey); } catch { return null; }
  };
  const saveChoice = (choice) => {
    try { window.localStorage.setItem(storageKey, choice); } catch { /* Keep the current-page choice. */ }
  };

  const initializeClarityQueue = () => {
    window.clarity = window.clarity || function clarityQueue() {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
  };

  const loadClarity = () => {
    if (document.querySelector("script[data-kela-clarity]")) return;
    initializeClarityQueue();
    const script = document.createElement("script");
    script.async = true;
    script.dataset.kelaClarity = "true";
    script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`;
    script.addEventListener("load", () => {
      window.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
      window.clarity("set", "kela_page", document.body.className || "home");
    });
    document.head.append(script);
  };

  const removeBanner = () => document.querySelector("[data-analytics-consent]")?.remove();

  const choose = (choice) => {
    saveChoice(choice);
    removeBanner();
    if (choice === "accepted") {
      loadClarity();
      tagErrors();
      return;
    }
    if (window.clarity) {
      window.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
      window.clarity("consent", false);
      window.location.reload();
    }
  };

  const showBanner = () => {
    removeBanner();
    const aside = document.createElement("aside");
    aside.className = "analytics-consent";
    aside.dataset.analyticsConsent = "true";
    aside.setAttribute("aria-labelledby", "analytics-consent-title");
    aside.innerHTML = `
      <div>
        <p id="analytics-consent-title"><strong>Help us make the grove easier to explore?</strong></p>
        <p>Optional, privacy-conscious analytics show where visitors pause, scroll, or get stuck. We do not use this for advertising or record anything you type.</p>
        <a href="/privacy#optional-analytics">How optional analytics work</a>
      </div>
      <div class="analytics-consent-actions">
        <button class="button button-gold" type="button" data-analytics-accept>Allow analytics</button>
        <button class="text-link" type="button" data-analytics-decline>Continue without</button>
      </div>`;
    aside.querySelector("[data-analytics-accept]")?.addEventListener("click", () => choose("accepted"));
    aside.querySelector("[data-analytics-decline]")?.addEventListener("click", () => choose("declined"));
    document.body.append(aside);
  };

  const addSettingsControl = () => {
    const footer = document.querySelector(".footer-links, .legal-footer .shell");
    if (!footer || footer.querySelector("[data-analytics-settings]")) return;
    const button = document.createElement("button");
    button.className = "privacy-settings-link";
    button.type = "button";
    button.dataset.analyticsSettings = "true";
    button.textContent = "Privacy choices";
    button.addEventListener("click", showBanner);
    footer.append(button);
  };

  function tagErrors() {
    window.addEventListener("error", () => window.clarity?.("event", "javascript_error"));
    window.addEventListener("unhandledrejection", () => window.clarity?.("event", "unhandled_promise_rejection"));
  }

  addSettingsControl();
  const choice = readChoice();
  if (choice === "accepted") {
    loadClarity();
    tagErrors();
  } else if (choice !== "declined") {
    showBanner();
  }
})();
