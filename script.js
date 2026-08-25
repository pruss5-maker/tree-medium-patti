const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const rainCanvas = document.querySelector("[data-rain]");
const petalCanvas = document.querySelector("[data-petals]");
const mossCanvas = document.querySelector("[data-moss]");
const samaraCanvas = document.querySelector("[data-samaras]");
const magnoliaAccents = document.querySelectorAll("[data-magnolia]");
const termsModal = document.querySelector("[data-terms-modal]");
const termsDialog = document.querySelector("[data-terms-dialog]");
const termsOpenButtons = document.querySelectorAll("[data-terms-open]");
const termsCloseButtons = document.querySelectorAll("[data-terms-close]");
const termsConsent = document.querySelector("[data-terms-consent]");
const termsContinue = document.querySelector("[data-terms-continue]");

if (header && menuToggle) {
  if (!document.querySelector('link[href*="header-symbols.css"]')) {
    const symbolStyles = document.createElement("link");
    symbolStyles.rel = "stylesheet";
    symbolStyles.href = "/header-symbols.css?v=20260825-1";
    document.head.append(symbolStyles);
  }
  if (!header.querySelector(".header-triskele")) {
    const triskele = document.createElement("a");
    triskele.className = "header-triskele";
    triskele.href = "/#booking-terms";
    triskele.setAttribute("aria-label", "Book with Patti");
    menuToggle.before(triskele);
  }
}

window.KelaCompanions = (() => {
  const companionStorageKey = "kela-oracle-companions-v1";
  const companionDeckOrder = ["tree", "plant", "animal"];

  const companionDateKey = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  };

  const readCompanions = () => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(companionStorageKey));
      return saved?.date === companionDateKey() && saved.companions
        ? saved.companions
        : {};
    } catch {
      return {};
    }
  };

  const renderCompanions = () => {
    const savedCompanions = readCompanions();
    const companions = companionDeckOrder
      .map((deck) => savedCompanions[deck])
      .filter((companion) => companion?.name && companion?.image && companion?.href);
    let companionTray = document.querySelector("[data-oracle-companions]");

    if (!companions.length) {
      companionTray?.remove();
      return;
    }

    if (!companionTray) {
      companionTray = document.createElement("nav");
      companionTray.className = "oracle-companions";
      companionTray.dataset.oracleCompanions = "";
      companionTray.setAttribute("aria-label", "Your oracle companions for today");
      companionTray.setAttribute("aria-live", "polite");
      document.body.append(companionTray);
    }

    companionTray.replaceChildren();
    companions.forEach((companion) => {
      const link = document.createElement("a");
      const picture = document.createElement("span");
      const image = document.createElement("img");
      const name = document.createElement("span");

      link.className = `oracle-companion oracle-companion-${companion.deck}`;
      link.href = companion.href;
      link.setAttribute("aria-label", `Return to your ${companion.name} ${companion.deck} card`);
      picture.className = "oracle-companion-picture";
      image.src = companion.image.startsWith("/")
        ? companion.image
        : `/${companion.image.replace(/^\.?\/+/, "")}`;
      image.alt = "";
      image.width = 72;
      image.height = 72;
      image.decoding = "async";
      name.className = "oracle-companion-name";
      name.textContent = companion.name;
      picture.append(image);
      link.append(picture, name);
      companionTray.append(link);
    });
  };

  const remember = (companion) => {
    if (!companionDeckOrder.includes(companion?.deck)) return;
    const companions = readCompanions();
    companions[companion.deck] = companion;
    try {
      window.localStorage.setItem(
        companionStorageKey,
        JSON.stringify({ date: companionDateKey(), companions }),
      );
    } catch {
      return;
    }
    renderCompanions();
  };

  renderCompanions();
  return { remember, refresh: renderCompanions };
})();

let termsPreviousFocus = null;
let scrollSettledTimer = 0;

const setTermsConsentState = () => {
  if (!termsConsent || !termsContinue) return;
  const isAgreed = termsConsent.checked;
  termsContinue.classList.toggle("is-disabled", !isAgreed);
  termsContinue.setAttribute("aria-disabled", String(!isAgreed));
  termsContinue.tabIndex = isAgreed ? 0 : -1;
};

const openTerms = () => {
  if (!termsModal || !termsDialog || !termsConsent) return;
  closeMenu();
  termsPreviousFocus = document.activeElement;
  termsConsent.checked = false;
  setTermsConsentState();
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
termsContinue?.addEventListener("click", (event) => {
  if (!termsConsent?.checked) event.preventDefault();
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

const startRain = () => {
  if (!rainCanvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const context = rainCanvas.getContext("2d", { alpha: true });
  const hero = rainCanvas.closest(".hero");
  if (!context || !hero) return;

  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let previousFrame = 0;
  let isVisible = true;
  let resizeTimer = 0;
  let streaks = [];
  let beads = [];
  let imageScale = 1;
  let imageOffsetX = 0;
  let imageOffsetY = 0;

  const forestImage = new Image();
  forestImage.decoding = "async";
  forestImage.src = "assets/kela-tree-hero.webp";

  const randomBetween = (minimum, maximum) => minimum + Math.random() * (maximum - minimum);

  const makeStreak = (startInside = false) => ({
    x: randomBetween(-40, width + 20),
    y: startInside ? randomBetween(-height * 0.15, height) : randomBetween(-180, -20),
    length: randomBetween(10, 25),
    speed: randomBetween(650, 1080),
    drift: randomBetween(14, 38),
    width: randomBetween(0.45, 0.9),
    alpha: randomBetween(0.09, 0.23),
  });

  const makeBead = () => {
    const radius = Math.random() > 0.86
      ? randomBetween(4.8, 6.4)
      : randomBetween(1.4, 4.5);

    return {
      x: randomBetween(14, Math.max(15, width - 14)),
      y: randomBetween(8, height * 0.94),
      radius,
      stretch: randomBetween(0.96, 1.18),
      speed: randomBetween(2.8, 10),
      alpha: randomBetween(0.11, 0.22),
      trail: Math.random() > 0.87 ? randomBetween(9, 28) : 0,
    };
  };

  const positionForestImage = () => {
    if (!forestImage.naturalWidth || !width || !height) return;

    imageScale = Math.max(
      width / forestImage.naturalWidth,
      height / forestImage.naturalHeight,
    ) * 1.015;
    const renderedWidth = forestImage.naturalWidth * imageScale;
    const renderedHeight = forestImage.naturalHeight * imageScale;
    const horizontalPosition = width <= 760 ? 0.62 : 0.5;
    imageOffsetX = (width - renderedWidth) * horizontalPosition;
    imageOffsetY = (height - renderedHeight) * 0.5;
  };

  const resizeRain = () => {
    const bounds = rainCanvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
    width = bounds.width;
    height = bounds.height;
    rainCanvas.width = Math.max(1, Math.round(width * pixelRatio));
    rainCanvas.height = Math.max(1, Math.round(height * pixelRatio));
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    positionForestImage();

    const streakCount = Math.min(66, Math.max(20, Math.round((width * height) / 24000)));
    const beadCount = width < 640 ? 21 : 30;
    streaks = Array.from({ length: streakCount }, () => makeStreak(true));
    beads = Array.from({ length: beadCount }, makeBead);
  };

  const drawBead = (bead, elapsed) => {
    bead.y += bead.speed * elapsed;
    if (bead.y - bead.radius > height) {
      Object.assign(bead, makeBead(), { y: -bead.radius * 2 });
    }

    if (bead.trail) {
      const trail = context.createLinearGradient(
        bead.x,
        bead.y - bead.trail - bead.radius,
        bead.x,
        bead.y,
      );
      trail.addColorStop(0, "rgba(228, 242, 235, 0)");
      trail.addColorStop(1, `rgba(237, 247, 243, ${bead.alpha * 0.18})`);
      context.beginPath();
      context.moveTo(bead.x, bead.y - bead.trail - bead.radius);
      context.lineTo(bead.x, bead.y - bead.radius);
      context.lineWidth = Math.min(0.65, Math.max(0.38, bead.radius * 0.11));
      context.strokeStyle = trail;
      context.stroke();
    }

    context.save();
    context.translate(bead.x, bead.y);
    context.scale(1, bead.stretch);

    if (forestImage.complete && forestImage.naturalWidth) {
      const sourceX = (bead.x - imageOffsetX) / imageScale;
      const sourceY = (bead.y - imageOffsetY) / imageScale;
      const lensStrength = 0.82;
      const sourceWidth = (bead.radius * 2 * lensStrength) / imageScale;
      const sourceHeight = (bead.radius * 2 * bead.stretch * lensStrength) / imageScale;

      context.save();
      context.beginPath();
      context.arc(0, 0, bead.radius, 0, Math.PI * 2);
      context.clip();
      context.globalAlpha = 0.22;
      context.drawImage(
        forestImage,
        sourceX - sourceWidth / 2,
        sourceY - sourceHeight / 2,
        sourceWidth,
        sourceHeight,
        -bead.radius,
        -bead.radius,
        bead.radius * 2,
        bead.radius * 2,
      );
      context.restore();
    }

    const glow = context.createRadialGradient(
      -bead.radius * 0.32,
      -bead.radius * 0.42,
      0,
      0,
      0,
      bead.radius,
    );
    glow.addColorStop(0, `rgba(252, 255, 254, ${bead.alpha * 1.55})`);
    glow.addColorStop(0.34, `rgba(240, 249, 246, ${bead.alpha * 0.15})`);
    glow.addColorStop(0.76, `rgba(5, 24, 17, ${bead.alpha * 0.24})`);
    glow.addColorStop(1, "rgba(255, 255, 255, 0)");

    context.beginPath();
    context.arc(0, 0, bead.radius, 0, Math.PI * 2);
    context.fillStyle = glow;
    context.fill();

    context.beginPath();
    context.arc(0, 0, bead.radius * 0.94, 0.12, Math.PI * 1.72);
    context.lineWidth = 0.48;
    context.strokeStyle = `rgba(247, 253, 250, ${bead.alpha * 0.74})`;
    context.stroke();

    context.beginPath();
    context.arc(-bead.radius * 0.3, -bead.radius * 0.38, Math.max(0.5, bead.radius * 0.1), 0, Math.PI * 2);
    context.fillStyle = `rgba(255, 255, 255, ${bead.alpha * 1.5})`;
    context.fill();
    context.restore();
  };

  const drawStreak = (streak, elapsed) => {
    streak.x += streak.drift * elapsed;
    streak.y += streak.speed * elapsed;

    if (streak.y - streak.length > height || streak.x > width + 60) {
      Object.assign(streak, makeStreak());
    }

    context.beginPath();
    context.moveTo(streak.x, streak.y);
    context.lineTo(
      streak.x - (streak.drift / streak.speed) * streak.length,
      streak.y - streak.length,
    );
    context.lineWidth = streak.width;
    context.lineCap = "round";
    context.strokeStyle = `rgba(225, 242, 235, ${streak.alpha})`;
    context.stroke();
  };

  const renderRain = (timestamp) => {
    if (!isVisible || document.hidden) {
      animationFrame = 0;
      return;
    }

    if (timestamp - previousFrame < 30) {
      animationFrame = window.requestAnimationFrame(renderRain);
      return;
    }

    const elapsed = Math.min((timestamp - previousFrame) / 1000 || 0.03, 0.06);
    previousFrame = timestamp;
    context.clearRect(0, 0, width, height);
    beads.forEach((bead) => drawBead(bead, elapsed));
    streaks.forEach((streak) => drawStreak(streak, elapsed));
    animationFrame = window.requestAnimationFrame(renderRain);
  };

  const resumeRain = () => {
    if (!animationFrame && isVisible && !document.hidden) {
      previousFrame = 0;
      animationFrame = window.requestAnimationFrame(renderRain);
    }
  };

  const rainObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible) resumeRain();
  }, { threshold: 0.02 });

  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resizeRain, 140);
  }, { passive: true });
  document.addEventListener("visibilitychange", resumeRain);
  forestImage.addEventListener("load", positionForestImage, { once: true });

  resizeRain();
  rainObserver.observe(hero);
  resumeRain();
};

startRain();

const startPetals = () => {
  if (!petalCanvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const context = petalCanvas.getContext("2d", { alpha: true });
  const section = petalCanvas.closest(".intro");
  if (!context || !section) return;

  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let previousFrame = 0;
  let isVisible = false;
  let resizeTimer = 0;
  let petals = [];

  const randomBetween = (minimum, maximum) => minimum + Math.random() * (maximum - minimum);
  const blossomImage = new Image();
  const spriteRegions = [
    { x: 52, y: 18, width: 558, height: 520, blossom: true },
    { x: 648, y: 36, width: 570, height: 466, blossom: true },
    { x: 42, y: 520, width: 580, height: 480, blossom: true },
    { x: 646, y: 514, width: 575, height: 490, blossom: true },
    { x: 18, y: 992, width: 270, height: 256, blossom: false },
    { x: 308, y: 1012, width: 298, height: 232, blossom: false },
    { x: 622, y: 1000, width: 326, height: 246, blossom: false },
    { x: 982, y: 986, width: 268, height: 264, blossom: false },
  ];

  blossomImage.decoding = "async";
  blossomImage.src = "assets/cherry-blossom-sprites.png";

  const makePetal = (startInside = false) => {
    const blossom = Math.random() < 0.3;
    const spriteIndex = blossom
      ? Math.floor(randomBetween(0, 4))
      : Math.floor(randomBetween(4, 8));

    return {
      baseX: randomBetween(-42, width + 42),
      y: startInside ? randomBetween(-30, height + 30) : randomBetween(-90, -20),
      size: blossom ? randomBetween(34, 54) : randomBetween(18, 29),
      speed: blossom ? randomBetween(9, 18) : randomBetween(15, 27),
      drift: randomBetween(-5, 7),
      sway: randomBetween(12, 30),
      swaySpeed: randomBetween(0.4, 0.86),
      phase: randomBetween(0, Math.PI * 2),
      rotation: randomBetween(0, Math.PI * 2),
      rotationSpeed: blossom ? randomBetween(-0.14, 0.14) : randomBetween(-0.48, 0.48),
      alpha: blossom ? randomBetween(0.48, 0.72) : randomBetween(0.38, 0.64),
      spriteIndex,
    };
  };

  const resizePetals = () => {
    const bounds = petalCanvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
    width = bounds.width;
    height = bounds.height;
    petalCanvas.width = Math.max(1, Math.round(width * pixelRatio));
    petalCanvas.height = Math.max(1, Math.round(height * pixelRatio));
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const petalCount = width < 640 ? 15 : 24;
    petals = Array.from({ length: petalCount }, () => makePetal(true));
  };

  const drawPetal = (petal, elapsed) => {
    petal.y += petal.speed * elapsed;
    petal.baseX += petal.drift * elapsed;
    petal.phase += petal.swaySpeed * elapsed;
    petal.rotation += petal.rotationSpeed * elapsed;

    if (petal.y - petal.size * 3 > height || petal.baseX > width + 45 || petal.baseX < -45) {
      Object.assign(petal, makePetal(false));
    }

    const x = petal.baseX + Math.sin(petal.phase) * petal.sway;
    const sprite = spriteRegions[petal.spriteIndex];
    const displayHeight = petal.size * (sprite.height / sprite.width);
    context.save();
    context.translate(x, petal.y);
    context.rotate(petal.rotation);
    context.globalAlpha = petal.alpha;
    if (blossomImage.complete && blossomImage.naturalWidth) {
      context.drawImage(
        blossomImage,
        sprite.x,
        sprite.y,
        sprite.width,
        sprite.height,
        -petal.size / 2,
        -displayHeight / 2,
        petal.size,
        displayHeight,
      );
    }
    context.restore();
  };

  const renderPetals = (timestamp) => {
    if (!isVisible || document.hidden) {
      animationFrame = 0;
      return;
    }

    if (timestamp - previousFrame < 32) {
      animationFrame = window.requestAnimationFrame(renderPetals);
      return;
    }

    const elapsed = Math.min((timestamp - previousFrame) / 1000 || 0.032, 0.07);
    previousFrame = timestamp;
    context.clearRect(0, 0, width, height);
    petals.forEach((petal) => drawPetal(petal, elapsed));
    animationFrame = window.requestAnimationFrame(renderPetals);
  };

  const resumePetals = () => {
    if (!animationFrame && isVisible && !document.hidden) {
      previousFrame = 0;
      animationFrame = window.requestAnimationFrame(renderPetals);
    }
  };

  const petalObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible) resumePetals();
  }, { threshold: 0.02 });

  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resizePetals, 140);
  }, { passive: true });
  document.addEventListener("visibilitychange", resumePetals);
  blossomImage.addEventListener("load", resumePetals, { once: true });

  resizePetals();
  petalObserver.observe(section);
};

startPetals();

const startSamaras = () => {
  if (!samaraCanvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const context = samaraCanvas.getContext("2d", { alpha: true });
  const section = samaraCanvas.closest(".time-section");
  if (!context || !section) return;

  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let previousFrame = 0;
  let isVisible = false;
  let resizeTimer = 0;
  let seeds = [];

  const randomBetween = (minimum, maximum) => minimum + Math.random() * (maximum - minimum);
  const samaraImage = new Image();
  const spriteRegions = [
    { x: 0, y: 45, width: 520, height: 305 },
    { x: 455, y: 18, width: 450, height: 430 },
    { x: 955, y: 18, width: 299, height: 470 },
    { x: 30, y: 395, width: 315, height: 475 },
    { x: 380, y: 500, width: 525, height: 245 },
    { x: 905, y: 400, width: 349, height: 490 },
    { x: 0, y: 875, width: 555, height: 370 },
    { x: 575, y: 870, width: 679, height: 375 },
  ];

  samaraImage.decoding = "async";
  samaraImage.src = "assets/maple-samara-sprites.png";

  const makeSeed = (startInside = false) => ({
    baseX: randomBetween(-55, width + 55),
    y: startInside ? randomBetween(-30, height + 30) : randomBetween(-110, -25),
    size: randomBetween(width < 640 ? 52 : 58, width < 640 ? 86 : 98),
    speed: randomBetween(20, 39),
    drift: randomBetween(-6, 11),
    sway: randomBetween(18, 48),
    swaySpeed: randomBetween(0.42, 0.86),
    phase: randomBetween(0, Math.PI * 2),
    rotation: randomBetween(0, Math.PI * 2),
    rotationSpeed: randomBetween(1.05, 2.45) * (Math.random() < 0.5 ? -1 : 1),
    flip: randomBetween(0, Math.PI * 2),
    flipSpeed: randomBetween(1.2, 2.5),
    alpha: randomBetween(0.64, 0.9),
    spriteIndex: Math.floor(randomBetween(0, spriteRegions.length)),
  });

  const resizeSamaras = () => {
    const bounds = samaraCanvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
    width = bounds.width;
    height = bounds.height;
    samaraCanvas.width = Math.max(1, Math.round(width * pixelRatio));
    samaraCanvas.height = Math.max(1, Math.round(height * pixelRatio));
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const seedCount = width < 640 ? 24 : 30;
    seeds = Array.from({ length: seedCount }, () => makeSeed(true));
  };

  const drawSeed = (seed, elapsed) => {
    seed.y += seed.speed * elapsed;
    seed.baseX += seed.drift * elapsed;
    seed.phase += seed.swaySpeed * elapsed;
    seed.rotation += seed.rotationSpeed * elapsed;
    seed.flip += seed.flipSpeed * elapsed;

    if (seed.y - seed.size > height || seed.baseX > width + 80 || seed.baseX < -80) {
      Object.assign(seed, makeSeed(false));
    }

    const sprite = spriteRegions[seed.spriteIndex];
    const displayHeight = seed.size * (sprite.height / sprite.width);
    const flipCosine = Math.cos(seed.flip);
    const horizontalScale = Math.sign(flipCosine || 1) * (0.24 + Math.abs(flipCosine) * 0.76);
    const x = seed.baseX + Math.sin(seed.phase) * seed.sway;

    context.save();
    context.translate(x, seed.y);
    context.rotate(seed.rotation);
    context.scale(horizontalScale, 1);
    context.globalAlpha = seed.alpha;
    if (samaraImage.complete && samaraImage.naturalWidth) {
      context.drawImage(
        samaraImage,
        sprite.x,
        sprite.y,
        sprite.width,
        sprite.height,
        -seed.size / 2,
        -displayHeight / 2,
        seed.size,
        displayHeight,
      );
    }
    context.restore();
  };

  const renderSamaras = (timestamp) => {
    if (!isVisible || document.hidden) {
      animationFrame = 0;
      return;
    }

    if (timestamp - previousFrame < 32) {
      animationFrame = window.requestAnimationFrame(renderSamaras);
      return;
    }

    const elapsed = Math.min((timestamp - previousFrame) / 1000 || 0.032, 0.07);
    previousFrame = timestamp;
    context.clearRect(0, 0, width, height);
    seeds.forEach((seed) => drawSeed(seed, elapsed));
    animationFrame = window.requestAnimationFrame(renderSamaras);
  };

  const resumeSamaras = () => {
    if (!animationFrame && isVisible && !document.hidden) {
      previousFrame = 0;
      animationFrame = window.requestAnimationFrame(renderSamaras);
    }
  };

  const samaraObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible) resumeSamaras();
  }, { threshold: 0.02 });

  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resizeSamaras, 140);
  }, { passive: true });
  document.addEventListener("visibilitychange", resumeSamaras);
  samaraImage.addEventListener("load", resumeSamaras, { once: true });

  resizeSamaras();
  samaraObserver.observe(section);
};

startSamaras();

if (magnoliaAccents.length) {
  const magnoliaObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const accent = entry.target.matches("[data-magnolia]")
        ? entry.target
        : entry.target.querySelector("[data-magnolia]");
      accent?.classList.add("is-blooming");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.01, rootMargin: "-18% 0px -18% 0px" });

  magnoliaAccents.forEach((accent) => {
    const section = accent.closest(".method, .offer, .patti, .book, .site-footer");
    magnoliaObserver.observe(section || accent);
  });
}

const startMoss = () => {
  if (!mossCanvas) return;

  const context = mossCanvas.getContext("2d", { alpha: true });
  const section = mossCanvas.closest(".faq");
  if (!context || !section) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const totalGrowthTime = 10;
  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let previousFrame = 0;
  let growthTime = prefersReducedMotion ? totalGrowthTime : 0;
  let isVisible = false;
  let hasStarted = prefersReducedMotion;
  let resizeTimer = 0;
  let clusters = [];

  const colors = [
    [29, 70, 43],
    [51, 101, 51],
    [79, 125, 59],
    [119, 146, 78],
  ];
  const randomBetween = (minimum, maximum) => minimum + Math.random() * (maximum - minimum);

  const makeBottomCluster = (index, count) => {
    const clusterHeight = randomBetween(34, width < 640 ? 78 : 105);
    const spread = randomBetween(28, width < 640 ? 58 : 82);
    const anchorX = ((index + randomBetween(0.08, 0.92)) / count) * width;
    const anchorY = height + randomBetween(-8, 12);
    const dotCount = Math.round(randomBetween(22, 40));

    return {
      delay: randomBetween(0, 1.8),
      duration: randomBetween(4.5, 7),
      dots: Array.from({ length: dotCount }, () => {
        const rise = randomBetween(0, clusterHeight);
        const taper = 1 - (rise / clusterHeight) * 0.58;
        return {
          x: anchorX + randomBetween(-spread, spread) * taper,
          y: anchorY - rise,
          anchorX,
          anchorY,
          radius: randomBetween(2.1, 7) * taper,
          aspect: randomBetween(0.68, 1.08),
          rotation: randomBetween(-0.5, 0.5),
          threshold: Math.min(0.92, (rise / clusterHeight) * 0.72 + randomBetween(0, 0.22)),
          alpha: randomBetween(0.3, 0.62),
          color: Math.floor(randomBetween(0, colors.length)),
          tendril: Math.random() < 0.28,
        };
      }),
    };
  };

  const makeSideCluster = (side, index, count) => {
    const direction = side === "left" ? 1 : -1;
    const anchorX = side === "left" ? -4 : width + 4;
    const anchorY = ((index + randomBetween(0.25, 0.9)) / count) * height;
    const reach = randomBetween(34, width < 640 ? 62 : 88);
    const spread = randomBetween(32, 64);
    const dotCount = Math.round(randomBetween(18, 32));

    return {
      delay: randomBetween(0.8, 3),
      duration: randomBetween(4, 6.5),
      dots: Array.from({ length: dotCount }, () => {
        const distance = randomBetween(0, reach);
        const taper = 1 - (distance / reach) * 0.6;
        return {
          x: anchorX + distance * direction,
          y: anchorY + randomBetween(-spread, spread) * taper,
          anchorX,
          anchorY,
          radius: randomBetween(1.9, 6.1) * taper,
          aspect: randomBetween(0.68, 1.08),
          rotation: randomBetween(-0.5, 0.5),
          threshold: Math.min(0.94, (distance / reach) * 0.75 + randomBetween(0, 0.2)),
          alpha: randomBetween(0.23, 0.5),
          color: Math.floor(randomBetween(0, colors.length)),
          tendril: Math.random() < 0.24,
        };
      }),
    };
  };

  const buildMoss = () => {
    const bottomCount = width < 640 ? 11 : 19;
    const sideCount = width < 640 ? 4 : 7;
    clusters = [
      ...Array.from({ length: bottomCount }, (_, index) => makeBottomCluster(index, bottomCount)),
      ...Array.from({ length: sideCount }, (_, index) => makeSideCluster("left", index, sideCount)),
      ...Array.from({ length: sideCount }, (_, index) => makeSideCluster("right", index, sideCount)),
    ];
  };

  const resizeMoss = () => {
    const bounds = mossCanvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
    width = bounds.width;
    height = bounds.height;
    mossCanvas.width = Math.max(1, Math.round(width * pixelRatio));
    mossCanvas.height = Math.max(1, Math.round(height * pixelRatio));
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    buildMoss();
    drawMoss();
  };

  const easeOut = (value) => 1 - Math.pow(1 - value, 3);

  const drawMoss = () => {
    context.clearRect(0, 0, width, height);

    clusters.forEach((cluster) => {
      const rawProgress = (growthTime - cluster.delay) / cluster.duration;
      const progress = easeOut(Math.max(0, Math.min(1, rawProgress)));
      if (progress <= 0) return;

      cluster.dots.forEach((dot) => {
        if (progress <= dot.threshold) return;
        const localProgress = Math.min(1, (progress - dot.threshold) / 0.2);
        const [red, green, blue] = colors[dot.color];
        const alpha = dot.alpha * localProgress;

        if (dot.tendril) {
          context.beginPath();
          context.moveTo(dot.anchorX, dot.anchorY);
          context.quadraticCurveTo(
            dot.anchorX + (dot.x - dot.anchorX) * 0.42,
            dot.anchorY + (dot.y - dot.anchorY) * 0.7,
            dot.x,
            dot.y,
          );
          context.lineWidth = 0.55;
          context.strokeStyle = `rgba(61, 91, 65, ${alpha * 0.46})`;
          context.stroke();
        }

        context.beginPath();
        context.ellipse(
          dot.x,
          dot.y,
          dot.radius * 1.95 * localProgress,
          dot.radius * dot.aspect * 1.8 * localProgress,
          dot.rotation,
          0,
          Math.PI * 2,
        );
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha * 0.17})`;
        context.fill();

        context.beginPath();
        context.ellipse(
          dot.x,
          dot.y,
          dot.radius * localProgress,
          dot.radius * dot.aspect * localProgress,
          dot.rotation,
          0,
          Math.PI * 2,
        );
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        context.fill();
      });
    });
  };

  const renderMoss = (timestamp) => {
    if (!isVisible || document.hidden) {
      animationFrame = 0;
      return;
    }

    if (timestamp - previousFrame < 34) {
      animationFrame = window.requestAnimationFrame(renderMoss);
      return;
    }

    const elapsed = Math.min((timestamp - previousFrame) / 1000 || 0.034, 0.08);
    previousFrame = timestamp;
    growthTime = Math.min(totalGrowthTime, growthTime + elapsed);
    drawMoss();

    if (growthTime < totalGrowthTime) {
      animationFrame = window.requestAnimationFrame(renderMoss);
    } else {
      animationFrame = 0;
    }
  };

  const resumeMoss = () => {
    if (!prefersReducedMotion && hasStarted && growthTime < totalGrowthTime && !animationFrame && isVisible) {
      previousFrame = 0;
      animationFrame = window.requestAnimationFrame(renderMoss);
    }
  };

  const mossObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible && !hasStarted) hasStarted = true;
    if (isVisible) resumeMoss();
  }, { threshold: 0.08 });

  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resizeMoss, 140);
  }, { passive: true });
  document.addEventListener("visibilitychange", resumeMoss);

  resizeMoss();
  mossObserver.observe(section);
};

startMoss();

if (!document.querySelector('script[data-atmosphere]')) {
  const atmosphereScript = document.createElement("script");
  atmosphereScript.src = "/atmosphere.js?v=20260825-4";
  atmosphereScript.async = false;
  atmosphereScript.dataset.atmosphere = "";
  document.head.append(atmosphereScript);
}

if (!document.querySelector('script[data-ambient-jazz]')) {
  const ambientJazzScript = document.createElement("script");
  ambientJazzScript.src = "/ambient-jazz.js?v=20260825-4";
  ambientJazzScript.async = false;
  ambientJazzScript.dataset.ambientJazz = "";
  document.head.append(ambientJazzScript);
}
