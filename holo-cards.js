/* Hologram oracle cards: each drawn card shows its subject's line drawing as a
   glowing hologram inside a see-through HUD frame. The oracle scripts keep doing
   all the work; this only watches which card image they load and mirrors it.
   Shared by the Tree, Animal and Plant oracle pages. */
(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // assets/oracle-cards/<kingdom>/<slug>-front.webp → line drawing for the same subject.
  const parseCard = (src) => {
    const m = /oracle-cards\/(tree|animal|plant)\/([a-z0-9-]+?)-(?:front|back)/.exec(src || "");
    return m ? { kingdom: m[1], slug: m[2] } : null;
  };
  // Rare cards with their own gold treatment and commitment.
  const GOLDEN = {
    "tree/maple": "Golden ticket: commit 5 minutes every day to sitting with a tree.",
  };
  const lineArt = ({ kingdom, slug }) => `assets/memory-games/line-art/${kingdom}/${slug}.webp?v=20260826-1`;
  const signalId = (slug) => {
    let n = 0;
    for (const ch of slug) n = (n * 31 + ch.charCodeAt(0)) % 997;
    return String(n % 100).padStart(2, "0");
  };

  // Recolor a black-on-white drawing into cyan lines on transparent, in a canvas.
  // (CSS blending can't drop the white inside the 3D flip card, so do it in pixels.)
  const holoCache = new Map();
  const holoize = (src) => {
    if (holoCache.has(src)) return holoCache.get(src);
    const job = new Promise((resolve, reject) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        try {
          const c = document.createElement("canvas");
          c.width = img.naturalWidth; c.height = img.naturalHeight;
          const x = c.getContext("2d", { willReadFrequently: true });
          x.drawImage(img, 0, 0);
          const d = x.getImageData(0, 0, c.width, c.height);
          const px = d.data;
          for (let i = 0; i < px.length; i += 4) {
            const ink = 255 - (px[i] + px[i + 1] + px[i + 2]) / 3; // dark line → strong
            const a = Math.min(255, ink * 1.6) * (px[i + 3] / 255);
            px[i] = 170; px[i + 1] = 238; px[i + 2] = 255; px[i + 3] = a;
          }
          x.putImageData(d, 0, 0);
          resolve(c.toDataURL("image/png"));
        } catch (err) { reject(err); }
      };
      img.onerror = reject;
      img.src = src;
    });
    holoCache.set(src, job);
    return job;
  };
  const showHolo = (el, src, onFail) => {
    el.classList.remove("holo-ready");
    holoize(src).then((url) => { el.src = url; el.classList.add("holo-ready"); }).catch(onFail);
  };

  const figures = new Set(document.querySelectorAll("[data-card-figure],[data-tree-flip],[data-animal-flip],[data-plant-flip]"));
  figures.forEach((figure) => {
    figure.classList.add("holo-figure");
    const faces = figure.querySelectorAll(".oracle-card-raster-face");
    const front = faces[0], back = faces[1];
    if (!front) return;
    front.classList.add("holo-face", "holo-front");
    back?.classList.add("holo-face", "holo-back");

    const stage = document.createElement("div");
    stage.className = "holo-stage";
    stage.setAttribute("aria-hidden", "true");
    stage.innerHTML = '<div class="holo-hud"><span data-holo-label>KELA // SIGNAL</span><span data-holo-id>#00</span></div><div class="holo-ticket">★ GOLDEN TICKET ★</div><img class="holo-art" alt="" /><div class="holo-scan"></div>';
    front.prepend(stage);
    const art = stage.querySelector(".holo-art");
    const label = stage.querySelector("[data-holo-label]");
    const idEl = stage.querySelector("[data-holo-id]");
    const raster = front.querySelector("img.oracle-card-raster");
    // Fallback when there is no drawing yet (e.g. Maple): the photo, tinted as a feed.
    const photo = front.querySelector("img:not(.oracle-card-raster):not(.holo-art)");

    const sync = () => {
      const card = parseCard(raster?.getAttribute("src"));
      if (!card) return;
      const golden = GOLDEN[`${card.kingdom}/${card.slug}`];
      figure.classList.toggle("is-golden", Boolean(golden));
      label.textContent = golden ? "KELA // GOLDEN TICKET" : `KELA // ${card.kingdom.toUpperCase()} SIGNAL`;
      idEl.textContent = golden ? "#★" : `#${signalId(card.slug)}`;
      // The commitment is real text on the meaning side (readable by screen readers).
      let note = back?.querySelector(".holo-golden-note");
      if (golden && back) {
        if (!note) {
          note = document.createElement("p");
          note.className = "holo-golden-note";
          (back.querySelector(".oracle-message") || back).after(note);
        }
        note.textContent = `★ ${golden}`;
      } else note?.remove();
      // The card's original photograph, shown faded inside the frame.
      art.classList.remove("holo-ready");
      art.classList.add("is-photo");
      art.src = raster.getAttribute("src");
      // Replay the build-up each time a new card arrives.
      stage.classList.remove("is-building");
      void stage.offsetWidth;
      stage.classList.add("is-building");
    };
    if (raster) {
      new MutationObserver(sync).observe(raster, { attributes: true, attributeFilter: ["src"] });
      sync();
    }

    // The meaning types itself out each time the card is flipped to its back.
    const message = back?.querySelector(".oracle-message p");
    let typing = 0;
    const typeMessage = () => {
      if (!message || reduced) return;
      const text = message.querySelector(".holo-msg-src")?.textContent ?? message.textContent;
      if (!text.trim()) return;
      message.innerHTML = "";
      const src = document.createElement("span");
      src.className = "holo-msg-src";
      src.textContent = text;
      const copy = document.createElement("span");
      copy.className = "holo-msg-copy";
      copy.setAttribute("aria-hidden", "true");
      const caret = document.createElement("span");
      caret.className = "tw-caret";
      message.append(src, copy);
      copy.append(document.createTextNode(""), caret);
      const node = copy.firstChild;
      const run = ++typing;
      let i = 0, last = performance.now(), carry = 0;
      const step = (now) => {
        if (run !== typing) return;
        carry += now - last; last = now;
        while (carry >= 30 && i < text.length) { carry -= 30; i += 1; }
        node.nodeValue = text.slice(0, i);
        if (i < text.length) requestAnimationFrame(step);
        else caret.classList.add("is-idle");
      };
      requestAnimationFrame(step);
    };
    let wasFlipped = figure.classList.contains("is-flipped");
    new MutationObserver(() => {
      const flipped = figure.classList.contains("is-flipped");
      if (flipped && !wasFlipped) typeMessage();
      wasFlipped = flipped;
    }).observe(figure, { attributes: true, attributeFilter: ["class"] });
    // If the oracle rewrites the message (new card), drop our typed wrapper.
    if (message) new MutationObserver(() => {
      if (!message.querySelector(".holo-msg-src")) typing += 1;
    }).observe(message, { childList: true });
  });

  // Memory games: recolor on-screen drawings (board, hub, win screen) but never the printable deck.
  const MEMORY_IMGS = ".memory-board img, .memory-hub-art img, .memory-win-art img";
  const holoMemory = (root) => {
    root.querySelectorAll?.(MEMORY_IMGS).forEach((img) => {
      const src = img.getAttribute("src") || "";
      if (img.dataset.holoSrc === src || !src.includes("memory-games/line-art/")) return;
      // Swap the coloring-page outline for the matching oracle photograph.
      const m = /line-art\/(tree|animal|plant)\/([a-z0-9-]+)\.webp/.exec(src);
      if (!m) return;
      const photo = `assets/oracle-cards/${m[1]}/${m[2]}-front.webp?v=20260828-1`;
      img.dataset.holoSrc = photo;
      img.classList.add("memory-photo");
      img.onerror = () => { img.onerror = null; img.classList.remove("memory-photo"); img.dataset.holoSrc = src; img.src = src; };
      img.src = photo;
    });
  };
  holoMemory(document);
  if (document.querySelector(".memory-main")) {
    new MutationObserver(() => holoMemory(document)).observe(document.querySelector(".memory-main"), { subtree: true, childList: true, attributes: true, attributeFilter: ["src"] });
  }

  // "Continue with nature" cards and companion badges: show the drawings, not the old card art.
  document.querySelectorAll(".oracle-kingdom-link img, .oracle-companion img").forEach((img) => {
    const card = parseCard(img.getAttribute("src"));
    if (!card) return;
    const original = img.getAttribute("src");
    img.classList.add("photo-thumb");
  });
})();
