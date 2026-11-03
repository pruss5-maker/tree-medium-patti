/* Green code rain behind everything. Glyphs step down in chunky ticks, and every
   few seconds a hidden message decodes out of the rain. Static frame for reduced motion. */
(() => {
  const canvas = document.createElement("canvas");
  canvas.className = "matrix-canvas";
  canvas.setAttribute("aria-hidden", "true");
  const tree = document.querySelector("[data-net]");
  if (tree) tree.before(canvas); else document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const GLYPHS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789KELAROOT:+=*<>";
  const PHRASES = [
    "> you have popped out of the matrix",
    "> let's root new roots",
    "> wake up. the trees are calling",
    "> signal received from the root network",
    "> unplug. ground. breathe.",
    "> the old code is falling away",
    "> follow the roots, not the noise",
    "> you are already connected",
    "> lumenpleroma.com: set your intention",
    "> our voices, rooted together",
    "> no need to wait for the collapse",
  ];
  const BG = "2,4,9";
  const glyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  let w = 0, h = 0, dpr = 1, fs = 18, cols = [], tick = 0, phrase = null, nextPhrase = 3, lastPhrase = -1;
  let running = false, acc = 0, last = 0;
  const TPS = 4; // drops per second: slow, blocky, Tetris-like falls
  const STEP = 1000 / TPS;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fs = w < 700 ? 15 : 18;
    const n = Math.ceil(w / fs);
    cols = Array.from({ length: n }, () => ({ y: Math.floor(Math.random() * -40), every: 1 + Math.floor(Math.random() * 4) }));
    ctx.fillStyle = `rgb(${BG})`; ctx.fillRect(0, 0, w, h);
  };

  const CONTENT = "h1,h2,h3,h4,p,a,button,li,img,figure,input,select,label,header,nav,footer,canvas:not(.matrix-canvas):not(.net-canvas),[class*=card],[class*=panel],.net-readout,.net-steps,.prose,.oracle-kingdom-switcher,.thumb-control-rail,[role=dialog],[class*=legal],[class*=game],[class*=door],[class*=kela-],.oracle-companions,.matrix-msg";
  const isClear = (x, y, bw, bh) => {
    for (let i = 0; i <= 4; i++) {
      for (const yy of [y + 2, y + bh / 2, y + bh - 2]) {
        const el = document.elementFromPoint(x + (bw * i) / 4, yy);
        if (el && el.closest(CONTENT)) return false;
      }
    }
    return true;
  };

  const startPhrase = () => {
    let i;
    do { i = Math.floor(Math.random() * PHRASES.length); } while (i === lastPhrase && PHRASES.length > 1);
    lastPhrase = i;
    const text = PHRASES[i];
    const size = w < 700 ? 16 : 22;
    ctx.font = `700 ${size}px "JetBrains Mono", monospace`;
    const tw = ctx.measureText(text).width;
    // Only decode in empty space: try spots until none of the box sits on page content.
    for (let tries = 0; tries < 24; tries++) {
      const x = 20 + Math.random() * Math.max(0, w - tw - 40);
      const y = h * 0.14 + Math.random() * h * 0.76;
      if (isClear(x - 10, y - size, tw + 20, size * 1.5)) {
        phrase = { text, size, tw, x, y, shown: 0, hold: 0 };
        return;
      }
    }
  };

  const drawPhrase = () => {
    if (!phrase) return;
    const p = phrase;
    ctx.font = `700 ${p.size}px "JetBrains Mono", monospace`;
    ctx.fillStyle = `rgba(${BG},.9)`;
    ctx.fillRect(p.x - 10, p.y - p.size, p.tw + 20, p.size * 1.5);
    // Decoded letters glow green; the rest still scramble.
    let out = "";
    for (let i = 0; i < p.text.length; i++) out += i < p.shown || p.text[i] === " " ? p.text[i] : glyph();
    ctx.shadowColor = "#39ff14"; ctx.shadowBlur = 16;
    ctx.fillStyle = "#d8ffcc";
    ctx.fillText(out, p.x, p.y);
    ctx.shadowBlur = 0;
    if (p.shown < p.text.length) p.shown += 1;
    else if (++p.hold > TPS * 4) phrase = null; // hold ~4s, then let the rain wash it away
  };

  const step = () => {
    tick += 1;
    ctx.fillStyle = `rgba(${BG},.08)`;
    ctx.fillRect(0, 0, w, h);
    ctx.font = `${fs}px "JetBrains Mono", monospace`;
    ctx.textBaseline = "alphabetic";
    for (let i = 0; i < cols.length; i++) {
      const c = cols[i];
      if (tick % c.every) continue;
      c.y += 1;
      const x = i * fs, y = c.y * fs;
      if (y > 0) {
        // Re-ink the previous cell green, then a bright head.
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#39ff14";
        ctx.fillText(glyph(), x, y - fs);
        ctx.shadowColor = "#39ff14"; ctx.shadowBlur = 12;
        ctx.fillStyle = "#eaffdf";
        ctx.fillText(glyph(), x, y);
        ctx.shadowBlur = 0;
      }
      if (y > h && Math.random() > 0.96) { c.y = Math.floor(Math.random() * -20); c.every = 1 + Math.floor(Math.random() * 3); }
    }
    nextPhrase -= STEP / 1000;
    if (!phrase && nextPhrase <= 0) { startPhrase(); nextPhrase = phrase ? 6 + Math.random() * 6 : 1.5; }
    drawPhrase();
  };

  const loop = (now) => {
    acc += Math.min(now - last, 250); last = now;
    while (acc >= STEP) { acc -= STEP; step(); }
    if (document.hidden) { running = false; return; }
    requestAnimationFrame(loop);
  };
  const start = () => {
    if (running || still) return;
    running = true; last = performance.now();
    requestAnimationFrame(loop);
  };

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 200);
  });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) start(); });
  resize();
  if (still) {
    nextPhrase = Infinity;
    for (let i = 0; i < 80; i++) step();
    startPhrase();
    if (phrase) { phrase.shown = phrase.text.length; drawPhrase(); }
  }
  start();
})();
