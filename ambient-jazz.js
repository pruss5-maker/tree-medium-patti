(() => {
  const preferenceKey = "kela-ambient-jazz-muted-v1";
  const positionKey = "kela-ambient-jazz-position-v1";
  const rightsKey = "kela-ambient-jazz-rights-v1";
  const rightsUrl = "/assets/audio/music-rights.json";
  const twelveHours = 12 * 60 * 60 * 1000;
  const listeningVolume = 0.32;
  const fallbackTrack = {
    id: "woodland-afterglow",
    title: "Woodland Afterglow",
    status: "cleared",
    sources: [
      { src: "/assets/audio/woodland-afterglow.ogg", type: "audio/ogg" },
      { src: "/assets/audio/woodland-afterglow.mp3", type: "audio/mpeg" },
    ],
  };

  let isMuted = false;
  try {
    isMuted = window.localStorage.getItem(preferenceKey) === "true";
  } catch {
    isMuted = false;
  }

  const player = document.createElement("audio");
  player.className = "ambient-jazz-audio";
  player.loop = true;
  player.preload = "metadata";
  player.volume = 0;
  player.setAttribute("playsinline", "");
  player.setAttribute("aria-hidden", "true");

  const button = document.createElement("button");
  button.className = "ambient-jazz-toggle is-waiting";
  button.type = "button";
  button.innerHTML = `
    <svg class="ambient-jazz-icon" viewBox="0 0 32 32" aria-hidden="true">
      <g class="ambient-jazz-speaker">
        <path class="ambient-jazz-speaker-body" d="M4.5 12.5h5L16.5 7v18l-7-5.5h-5z"/>
        <path class="ambient-jazz-waves" d="M20.2 12.1a5.5 5.5 0 0 1 0 7.8M23.5 8.8a10 10 0 0 1 0 14.4"/>
      </g>
      <path class="ambient-jazz-slash" d="M6.5 6.5 25.5 25.5"/>
    </svg>
    <span class="sr-only" data-ambient-jazz-label></span>
  `;
  button.dataset.tooltip = "Soft jazz will begin after your first tap";

  const status = document.createElement("span");
  status.className = "sr-only";
  status.setAttribute("aria-live", "polite");

  const controlRail = document.querySelector(".thumb-control-rail");
  const themeToggle = controlRail?.querySelector(".theme-toggle");
  if (controlRail) {
    button.classList.add("is-header-control");
    controlRail.insertBefore(button, themeToggle || null);
    document.body.append(player, status);
  } else {
    document.body.append(player, button, status);
  }

  const label = button.querySelector("[data-ambient-jazz-label]");
  let selectedTrack = fallbackTrack;
  let hasStarted = false;
  let isReady = false;
  let fadeFrame = 0;

  const safeParse = (value) => {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  };

  const updateButton = () => {
    const waiting = !hasStarted && !isMuted;
    const accessibleLabel = isMuted || !hasStarted ? "Play soft background jazz" : "Mute soft background jazz";
    const tooltip = isMuted
      ? "Play soft jazz"
      : waiting
        ? "Soft jazz will begin after your first tap"
        : "Mute soft jazz";

    button.classList.toggle("is-muted", isMuted);
    button.classList.toggle("is-waiting", waiting);
    button.setAttribute("aria-label", accessibleLabel);
    button.setAttribute("title", tooltip);
    button.dataset.tooltip = tooltip;
    if (label) label.textContent = accessibleLabel;
  };

  const rememberPosition = () => {
    if (!hasStarted || !Number.isFinite(player.currentTime)) return;
    try {
      window.sessionStorage.setItem(positionKey, JSON.stringify({
        trackId: selectedTrack.id,
        currentTime: player.currentTime,
        savedAt: Date.now(),
        wasPlaying: !player.paused && !isMuted,
      }));
    } catch {
      return;
    }
  };

  const restorePosition = () => {
    let saved = null;
    try {
      saved = safeParse(window.sessionStorage.getItem(positionKey));
    } catch {
      return;
    }
    if (!saved || saved.trackId !== selectedTrack.id || !Number.isFinite(saved.currentTime)) return;
    const elapsed = saved.wasPlaying ? Math.max(0, (Date.now() - saved.savedAt) / 1000) : 0;
    const duration = Number.isFinite(player.duration) && player.duration > 0 ? player.duration : 0;
    player.currentTime = duration ? (saved.currentTime + elapsed) % duration : saved.currentTime;
  };

  const fadeTo = (target, duration = 700, onComplete) => {
    window.cancelAnimationFrame(fadeFrame);
    const from = player.volume;
    const startedAt = performance.now();

    const frame = (now) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      player.volume = Math.max(0, Math.min(1, from + (target - from) * eased));
      if (progress < 1) {
        fadeFrame = window.requestAnimationFrame(frame);
      } else {
        fadeFrame = 0;
        onComplete?.();
      }
    };

    fadeFrame = window.requestAnimationFrame(frame);
  };

  const announce = (message) => {
    status.textContent = "";
    window.requestAnimationFrame(() => {
      status.textContent = message;
    });
  };

  const startMusic = async ({ announceStart = false } = {}) => {
    if (isMuted || !isReady) return;
    try {
      await player.play();
      hasStarted = true;
      fadeTo(listeningVolume, 1100);
      updateButton();
      if (announceStart) announce(`Soft background jazz playing: ${selectedTrack.title}.`);
    } catch {
      button.classList.add("is-waiting");
      updateButton();
    }
  };

  const muteMusic = () => {
    isMuted = true;
    try {
      window.localStorage.setItem(preferenceKey, "true");
    } catch {
      // The preference remains active for this page when storage is unavailable.
    }
    rememberPosition();
    fadeTo(0, 420, () => player.pause());
    updateButton();
    announce("Background jazz muted.");
  };

  const unmuteMusic = async () => {
    isMuted = false;
    try {
      window.localStorage.setItem(preferenceKey, "false");
    } catch {
      // The preference remains active for this page when storage is unavailable.
    }
    updateButton();
    await startMusic({ announceStart: true });
  };

  const setTrack = (track) => {
    selectedTrack = track;
    player.replaceChildren();
    track.sources.forEach(({ src, type }) => {
      const source = document.createElement("source");
      source.src = src;
      source.type = type;
      player.append(source);
    });
    player.load();
    isReady = true;
    player.addEventListener("loadedmetadata", restorePosition, { once: true });
    updateButton();
  };

  let cachedRights = null;
  try {
    cachedRights = safeParse(window.localStorage.getItem(rightsKey));
  } catch {
    cachedRights = null;
  }
  const cachedTrack = cachedRights?.track?.status === "cleared" ? cachedRights.track : null;
  if (cachedTrack) setTrack(cachedTrack);
  else setTrack(fallbackTrack);

  const rightsAreFresh = cachedRights && Date.now() - cachedRights.checkedAt < twelveHours;
  if (!rightsAreFresh) {
    fetch(`${rightsUrl}?checked=${Date.now()}`, { cache: "no-store", credentials: "same-origin" })
      .then((response) => {
        if (!response.ok) throw new Error("Rights manifest unavailable");
        return response.json();
      })
      .then((manifest) => {
        const clearedTrack = manifest.tracks?.find((track) => track.status === "cleared" && track.sources?.length);
        if (!clearedTrack) {
          isReady = false;
          player.pause();
          button.disabled = true;
          button.dataset.tooltip = "Background music unavailable";
          button.title = "Background music unavailable";
          return;
        }
        window.localStorage.setItem(rightsKey, JSON.stringify({ checkedAt: Date.now(), track: clearedTrack }));
        if (clearedTrack.id !== selectedTrack.id) setTrack(clearedTrack);
      })
      .catch(() => {
        // The bundled original track remains the safe offline fallback.
      });
  }

  const beginAfterVisitorGesture = (event) => {
    if (event.type === "keydown" && ["Tab", "Shift", "Control", "Alt", "Meta"].includes(event.key)) return;
    if (event.target instanceof Element && event.target.closest(".ambient-jazz-toggle")) return;
    startMusic();
    document.removeEventListener("pointerdown", beginAfterVisitorGesture);
    document.removeEventListener("keydown", beginAfterVisitorGesture);
  };

  document.addEventListener("pointerdown", beginAfterVisitorGesture, { passive: true });
  document.addEventListener("keydown", beginAfterVisitorGesture);

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (isMuted || !hasStarted || player.paused) unmuteMusic();
    else muteMusic();
  });

  window.addEventListener("pagehide", rememberPosition);
  window.setInterval(rememberPosition, 5000);
  updateButton();
})();
