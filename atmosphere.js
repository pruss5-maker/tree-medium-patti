(() => {
  const root = document.documentElement;
  const body = document.body;
  const headerActions = document.querySelector(".header-actions");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("[data-nav]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const themeKey = "kela-color-theme-v1";
  const controlRail = document.createElement("div");
  controlRail.className = "thumb-control-rail";
  controlRail.setAttribute("aria-label", "Site controls");
  body.append(controlRail);

  let theme = "dark";
  try {
    theme = window.localStorage.getItem(themeKey) === "light" ? "light" : "dark";
  } catch {
    theme = "dark";
  }
  root.dataset.theme = theme;

  if (menuToggle) controlRail.append(menuToggle);
  const triskele = headerActions?.querySelector(".header-triskele") || document.querySelector(".header-triskele");
  if (triskele) controlRail.append(triskele);

  if (menuToggle) {
    const themeButton = document.createElement("button");
    themeButton.className = "theme-toggle";
    themeButton.type = "button";
    themeButton.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true"></span><span class="sr-only" data-theme-label></span>';
    controlRail.append(themeButton);

    const updateThemeButton = () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      const label = `Switch to ${nextTheme} mode`;
      themeButton.setAttribute("aria-label", label);
      themeButton.title = label;
      themeButton.querySelector("[data-theme-label]").textContent = label;
    };

    themeButton.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      try {
        window.localStorage.setItem(themeKey, nextTheme);
      } catch {
        // The selected atmosphere still applies for this page.
      }
      updateThemeButton();
    });
    updateThemeButton();
  }

  if (reducedMotion) return;

  const startFallingSprites = ({ canvas, source, regions, count, size, speed, alpha, isActive, flip = false }) => {
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let previous = 0;
    let resizeTimer = 0;
    let particles = [];
    const image = new Image();
    const random = (minimum, maximum) => minimum + Math.random() * (maximum - minimum);

    image.decoding = "async";
    image.src = source;

    const makeParticle = (inside = false) => ({
      x: random(-40, width + 40),
      y: inside ? random(-30, height + 30) : random(-100, -20),
      size: random(size[0], size[1]),
      speed: random(speed[0], speed[1]),
      drift: random(-8, 10),
      sway: random(12, 38),
      swaySpeed: random(0.45, 0.9),
      phase: random(0, Math.PI * 2),
      rotation: random(0, Math.PI * 2),
      rotationSpeed: random(-1.8, 1.8),
      flipPhase: random(0, Math.PI * 2),
      flipSpeed: random(1.1, 2.2),
      alpha: random(alpha[0], alpha[1]),
      sprite: Math.floor(random(0, regions.length)),
    });

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: count(width) }, () => makeParticle(true));
    };

    const render = (timestamp) => {
      if (!isActive() || document.hidden) {
        frame = 0;
        context.clearRect(0, 0, width, height);
        return;
      }
      if (timestamp - previous < 34) {
        frame = window.requestAnimationFrame(render);
        return;
      }
      const elapsed = Math.min((timestamp - previous) / 1000 || 0.034, 0.08);
      previous = timestamp;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.y += particle.speed * elapsed;
        particle.x += particle.drift * elapsed;
        particle.phase += particle.swaySpeed * elapsed;
        particle.rotation += particle.rotationSpeed * elapsed;
        particle.flipPhase += particle.flipSpeed * elapsed;
        if (particle.y - particle.size > height || particle.x > width + 70 || particle.x < -70) {
          Object.assign(particle, makeParticle(false));
        }

        const region = regions[particle.sprite];
        const drawHeight = particle.size * (region.height / region.width);
        const x = particle.x + Math.sin(particle.phase) * particle.sway;
        context.save();
        context.translate(x, particle.y);
        context.rotate(particle.rotation);
        if (flip) context.scale(0.28 + Math.abs(Math.cos(particle.flipPhase)) * 0.72, 1);
        context.globalAlpha = particle.alpha;
        if (image.complete && image.naturalWidth) {
          context.drawImage(image, region.x, region.y, region.width, region.height, -particle.size / 2, -drawHeight / 2, particle.size, drawHeight);
        }
        context.restore();
      });
      frame = window.requestAnimationFrame(render);
    };

    const resume = () => {
      if (!frame && isActive() && !document.hidden) {
        previous = 0;
        frame = window.requestAnimationFrame(render);
      }
    };

    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => { resize(); resume(); }, 140);
    }, { passive: true });
    document.addEventListener("visibilitychange", resume);
    image.addEventListener("load", resume, { once: true });
    new MutationObserver(resume).observe(body, { attributes: true, attributeFilter: ["class"] });
    resize();
    resume();
  };

  if (nav) {
    const menuPetals = document.createElement("canvas");
    menuPetals.className = "menu-petal-canvas";
    menuPetals.setAttribute("aria-hidden", "true");
    nav.prepend(menuPetals);
    startFallingSprites({
      canvas: menuPetals,
      source: "/assets/cherry-blossom-sprites.png",
      regions: [
        { x: 52, y: 18, width: 558, height: 520 },
        { x: 648, y: 36, width: 570, height: 466 },
        { x: 18, y: 992, width: 270, height: 256 },
        { x: 308, y: 1012, width: 298, height: 232 },
      ],
      count: (width) => width < 640 ? 16 : 24,
      size: [18, 42],
      speed: [18, 34],
      alpha: [0.45, 0.78],
      isActive: () => body.classList.contains("menu-open"),
    });
  }

  if (body.classList.contains("portal-page")) {
    const portalMain = document.querySelector(".portal-main");
    if (!portalMain) return;
    const samaras = document.createElement("canvas");
    samaras.className = "portal-samara-canvas";
    samaras.setAttribute("aria-hidden", "true");
    portalMain.prepend(samaras);
    startFallingSprites({
      canvas: samaras,
      source: "/assets/maple-samara-sprites.png",
      regions: [
        { x: 0, y: 45, width: 520, height: 305 },
        { x: 455, y: 18, width: 450, height: 430 },
        { x: 380, y: 500, width: 525, height: 245 },
        { x: 0, y: 875, width: 555, height: 370 },
        { x: 575, y: 870, width: 679, height: 375 },
      ],
      count: (width) => width < 640 ? 10 : 16,
      size: [38, 72],
      speed: [14, 28],
      alpha: [0.2, 0.48],
      isActive: () => true,
      flip: true,
    });
  }
})();
