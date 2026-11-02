/* Tree of Life: a glowing trunk with branches and roots that keep growing,
   fading and regrowing in the dark. Static fully-grown tree for reduced motion. */
(() => {
  const canvas = document.querySelector("[data-net]");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const base = document.createElement("canvas");
  const bctx = base.getContext("2d");
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const TAU = Math.PI * 2;
  const rand = (a, b) => a + Math.random() * (b - a);

  let w = 0, h = 0, dpr = 1, scale = 1, cx = 0, cy = 0;
  let t = 0, growers = [], mortal = [], perm = [], pulses = [];
  let spawnTimer = 0, pulseTimer = 0, frameDt = 1 / 60, maxMortal = 1200, running = false, last = 0;
  let tendrils = [], leaves = [], leafTimer = 0, globeR = 300;

  // Plasma globe: flickering filaments from the heart of the tree to a glass edge.
  // Soft round glow that fades to nothing at its edge.
  const softDot = (x, y, r, rgb, a) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${rgb},${a})`);
    g.addColorStop(1, `rgba(${rgb},0)`);
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
  };

  const makeTendril = () => ({ a: rand(0, TAU), va: rand(-0.25, 0.25), reach: rand(0.75, 1), phase: rand(0, 100), freq: rand(5, 9), amp: rand(10, 22), snap: rand(2, 7) });
  const seedTendrils = () => {
    const n = w < 700 ? 9 : 14;
    tendrils = Array.from({ length: n }, (_, i) => ({ ...makeTendril(), a: (i / n) * TAU + rand(-0.2, 0.2) }));
  };

  const tendrilPath = (td, r0, r1, a, amp) => {
    const pts = [], n = 26;
    const nx = -Math.sin(a), ny = Math.cos(a);
    for (let i = 0; i <= n; i++) {
      const k = i / n, r = r0 + (r1 - r0) * k;
      const wave = Math.sin(k * td.freq + t * 3.1 + td.phase) * 0.6 + Math.sin(k * td.freq * 2.3 - t * 5.3 + td.phase) * 0.4;
      const off = (wave * amp + rand(-2.5, 2.5) * scale) * Math.sin(k * Math.PI * 0.9 + 0.1);
      pts.push([cx + Math.cos(a) * r + nx * off, cy + Math.sin(a) * r + ny * off]);
    }
    return pts;
  };

  const strokePath = (pts, width, style) => {
    ctx.strokeStyle = style; ctx.lineWidth = width;
    ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.stroke();
  };

  const drawPlasma = () => {
    const flick = 0.85 + 0.15 * Math.sin(t * 23) * Math.sin(t * 7.7);
    // Faint glass edge.
    ctx.strokeStyle = "rgba(77,226,255,.05)"; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(cx, cy, globeR, 0, TAU); ctx.stroke();
    const rim = ctx.createRadialGradient(cx, cy, globeR * 0.85, cx, cy, globeR * 1.03);
    rim.addColorStop(0, "rgba(47,139,255,0)"); rim.addColorStop(0.9, "rgba(47,139,255,.045)"); rim.addColorStop(1, "rgba(47,139,255,0)");
    ctx.fillStyle = rim; ctx.beginPath(); ctx.arc(cx, cy, globeR * 1.03, 0, TAU); ctx.fill();
    for (const td of tendrils) {
      const pulse = 0.55 + 0.45 * Math.sin(t * 2.2 + td.phase) * Math.sin(t * 9 + td.phase * 2);
      const a = Math.max(0.15, pulse) * flick;
      const end = globeR * td.reach;
      const pts = tendrilPath(td, 14 * scale, end, td.a, td.amp * scale);
      strokePath(pts, 9 * scale, `rgba(47,139,255,${0.05 * a})`);
      strokePath(pts, 3 * scale, `rgba(77,226,255,${0.12 * a})`);
      strokePath(pts, 1, `rgba(200,235,255,${0.35 * a})`);
      // A smaller fork splits off near the glass.
      const fk = pts[17];
      const fa = td.a + Math.sin(td.phase) * 0.35;
      const fpts = tendrilPath(td, 0, end * 0.3, fa, td.amp * scale * 0.4).map(([x, y]) => [x - cx + fk[0], y - cy + fk[1]]);
      strokePath(fpts, 2 * scale, `rgba(77,226,255,${0.08 * a})`);
      strokePath(fpts, 0.8, `rgba(200,235,255,${0.22 * a})`);
      // Spark where the filament touches the glass.
      const tip = pts[pts.length - 1];
      softDot(tip[0], tip[1], 12 * scale, "77,226,255", 0.22 * a);
      ctx.fillStyle = `rgba(220,245,255,${0.5 * a})`;
      ctx.beginPath(); ctx.arc(tip[0], tip[1], 1.6, 0, TAU); ctx.fill();
    }
    // Bright core of the globe.
    const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, 34 * scale);
    core.addColorStop(0, `rgba(225,245,255,${0.55 * flick})`);
    core.addColorStop(0.35, `rgba(77,226,255,${0.25 * flick})`);
    core.addColorStop(1, "rgba(47,139,255,0)");
    ctx.fillStyle = core; ctx.beginPath(); ctx.arc(cx, cy, 34 * scale, 0, TAU); ctx.fill();
  };

  const updatePlasma = (dt) => {
    for (const td of tendrils) {
      td.a += td.va * dt;
      td.va += rand(-0.6, 0.6) * dt;
      td.va = Math.max(-0.4, Math.min(0.4, td.va));
      td.snap -= dt;
      // Filaments occasionally jump, like a finger on the glass.
      if (td.snap <= 0) Object.assign(td, makeTendril(), { a: td.a + rand(-0.8, 0.8) });
    }
  };

  // Glowing leaves drifting down from the crown.
  const makeLeaf = (anywhere) => {
    const crown = h * 0.32;
    return {
      x: cx + rand(-crown, crown),
      y: anywhere ? rand(0, h) : cy - rand(h * 0.12, h * 0.45),
      vy: rand(14, 30) * scale, sway: rand(12, 34) * scale, freq: rand(0.5, 1.2), ph: rand(0, TAU),
      rot: rand(0, TAU), vr: rand(-1.2, 1.2), size: rand(5, 9) * scale, born: anywhere ? -10 : t, x0: 0,
    };
  };

  const drawLeaf = (l) => {
    const fadeIn = Math.min((t - l.born) / 1.2, 1);
    const fadeOut = Math.max(0, Math.min((h + 10 - l.y) / (h * 0.25), 1));
    const a = fadeIn * fadeOut * (0.75 + 0.25 * Math.sin(t * 2 + l.ph));
    if (a < 0.02) return;
    const x = l.x + Math.sin(t * l.freq + l.ph) * l.sway;
    const L = l.size;
    ctx.save();
    ctx.translate(x, l.y);
    ctx.rotate(l.rot + Math.sin(t * l.freq + l.ph) * 0.6);
    softDot(0, 0, L * 3, "47,139,255", 0.22 * a);
    ctx.fillStyle = `rgba(77,226,255,${0.55 * a})`;
    ctx.beginPath();
    ctx.moveTo(0, -L);
    ctx.quadraticCurveTo(L * 0.7, 0, 0, L);
    ctx.quadraticCurveTo(-L * 0.7, 0, 0, -L);
    ctx.fill();
    ctx.strokeStyle = `rgba(220,245,255,${0.6 * a})`; ctx.lineWidth = 0.6;
    ctx.beginPath(); ctx.moveTo(0, -L * 0.85); ctx.lineTo(0, L * 0.85); ctx.stroke();
    ctx.restore();
  };

  const updateLeaves = (dt) => {
    leafTimer -= dt;
    const maxLeaves = w < 700 ? 18 : 40;
    if (leafTimer <= 0 && leaves.length < maxLeaves) {
      leafTimer = rand(0.3, 1.1);
      leaves.push(makeLeaf(false));
    }
    for (const l of leaves) { l.y += l.vy * dt; l.rot += l.vr * dt; }
    leaves = leaves.filter((l) => l.y < h + 30);
  };


  // Thick limbs glow cyan; fine growth deepens toward blue.
  const color = (gen, a) => {
    const k = Math.min(gen / 7, 1);
    return `rgba(${Math.round(77 - 30 * k)},${Math.round(226 - 87 * k)},255,${a})`;
  };

  const strokeSeg = (c, s, alpha) => {
    c.strokeStyle = color(s.gen, 0.035 * alpha);
    c.lineWidth = s.w * 3 + 3;
    c.beginPath(); c.moveTo(s.x1, s.y1); c.lineTo(s.x2, s.y2); c.stroke();
    c.strokeStyle = color(s.gen, 0.5 * alpha);
    c.lineWidth = Math.max(s.w, 0.5);
    c.beginPath(); c.moveTo(s.x1, s.y1); c.lineTo(s.x2, s.y2); c.stroke();
  };

  const addGrower = (g) => growers.push(g);

  const seed = () => {
    growers = []; mortal = []; perm = []; pulses = []; t = 0;
    bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    bctx.clearRect(0, 0, w, h);
    bctx.lineCap = "round"; bctx.globalCompositeOperation = "lighter";
    // Faint horizon where the crown meets the roots.
    const hz = bctx.createLinearGradient(0, 0, w, 0);
    hz.addColorStop(0, "rgba(47,139,255,0)"); hz.addColorStop(0.5, "rgba(77,226,255,.22)"); hz.addColorStop(1, "rgba(47,139,255,0)");
    bctx.fillStyle = hz; bctx.fillRect(0, cy - 0.5, w, 1);
    const trunk = h * 0.1;
    addGrower({ x: cx, y: cy, a: -Math.PI / 2, w: 5.5 * scale, len: trunk, gen: 0, dir: -1, parent: null, shoot: null });
    [-0.9, -0.45, 0, 0.45, 0.9].forEach((off) => addGrower({ x: cx, y: cy, a: Math.PI / 2 + off, w: 5 * scale, len: h * rand(0.08, 0.11), gen: 0, dir: 1, parent: null, shoot: null }));
  };

  const update = (dt) => {
    t += dt;
    const next = [];
    for (const g of growers) {
      let dist = (g.gen < 2 ? 55 : 42) * scale * dt;
      let alive = true;
      while (dist > 0 && alive) {
        const stepLen = Math.min(4 * scale, dist);
        dist -= stepLen;
        // Branches reach up and outward; roots reach down and outward.
        const spread = Math.max(-1.3, Math.min(1.3, ((g.x - cx) / (h * 0.28)) * 1.2));
        const target = g.dir < 0 ? -Math.PI / 2 + spread : Math.PI / 2 - spread;
        g.a += (target - g.a) * (g.gen === 0 ? 0.03 : 0.008) + rand(-0.12, 0.12) * (g.gen === 0 ? 0.25 : 1);
        const x2 = g.x + Math.cos(g.a) * stepLen, y2 = g.y + Math.sin(g.a) * stepLen;
        const s = { x1: g.x, y1: g.y, x2, y2, w: g.w, gen: g.gen, parent: g.parent, born: t, die: Infinity };
        if (!g.shoot && g.gen <= 3) {
          perm.push(s); strokeSeg(bctx, s, 1);
        } else {
          if (!g.shoot) g.shoot = { start: t, end: t + rand(25, 55) };
          // Tips retract first: later growth dies sooner.
          s.die = g.shoot.end - (t - g.shoot.start) * 0.4 + rand(0, 1.5);
          mortal.push(s);
        }
        g.parent = s; g.x = x2; g.y = y2; g.len -= stepLen; g.w *= 0.996;
        const out = x2 < -20 || x2 > w + 20 || y2 < -20 || y2 > h + 20;
        if (out || g.len <= 0 || g.w < 0.35) {
          alive = false;
          if (!out && g.gen < 8 && g.w > 0.45) {
            const forks = g.gen < 2 ? 3 : 2;
            for (let i = 0; i < forks; i++) {
              const off = forks === 3 ? (i - 1) * rand(0.6, 0.9) : (i ? 1 : -1) * rand(0.35, 0.7);
              addGrower({ x: x2, y: y2, a: g.a + off, w: g.w * rand(0.62, 0.78), len: h * rand(0.05, 0.09) * Math.pow(0.86, g.gen), gen: g.gen + 1, dir: g.dir, parent: s, shoot: g.shoot });
            }
          }
        } else if (g.gen >= 1 && Math.random() < (g.dir < 0 ? 0.011 : 0.005)) {
          addGrower({ x: x2, y: y2, a: g.a + (Math.random() < 0.5 ? -1 : 1) * rand(0.5, 0.9), w: g.w * 0.6, len: h * rand(0.03, 0.06), gen: g.gen + 2, dir: g.dir, parent: s, shoot: g.shoot });
        }
      }
      if (alive) next.push(g);
    }
    // for...of also visits children pushed during the loop, so next holds them.
    growers = next;
    if (mortal.length) mortal = mortal.filter((s) => s.die + 4 > t);

    // Renewal: new shoots sprout from older wood.
    if (!still) {
      spawnTimer -= dt;
      if (spawnTimer <= 0 && growers.length < 40 && mortal.length < maxMortal) {
        spawnTimer = rand(0.25, 0.8);
        const pool = Math.random() < 0.6 ? perm : mortal;
        const from = pool[Math.floor(Math.random() * pool.length)];
        if (from && from.gen >= 1) {
          const dir = from.y2 > cy ? 1 : -1;
          const a = Math.atan2(from.y2 - from.y1, from.x2 - from.x1) + (Math.random() < 0.5 ? -1 : 1) * rand(0.4, 0.9);
          addGrower({ x: from.x2, y: from.y2, a, w: Math.max(from.w * 0.7, 0.8), len: h * rand(0.05, 0.1), gen: from.gen + 1, dir, parent: from, shoot: null, renewal: true });
        }
      }
      pulseTimer -= dt;
      if (pulseTimer <= 0) {
        pulseTimer = rand(0.25, 0.8);
        const pool = mortal.length && Math.random() < 0.7 ? mortal : perm;
        let s = pool[Math.floor(Math.random() * pool.length)];
        const path = [];
        while (s && path.length < 400) { path.push(s); s = s.parent; }
        if (path.length > 10) {
          path.reverse();
          // Light rises from the heart of the tree toward the tip.
          pulses.push({ path, pos: 0, speed: rand(160, 260) * scale });
        }
      }
    }
  };

  const draw = () => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    // Breathing glow at the heart of the tree.
    const breathe = 0.75 + 0.25 * Math.sin(t * 0.6);
    const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.45);
    halo.addColorStop(0, `rgba(47,139,255,${0.16 * breathe})`);
    halo.addColorStop(1, "rgba(47,139,255,0)");
    ctx.fillStyle = halo; ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    drawPlasma();
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(base, 0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    ctx.lineCap = "round";
    for (const s of mortal) {
      const a = Math.min((t - s.born) / 0.5, 1) * Math.max(0, Math.min((s.die + 4 - t) / 4, 1));
      if (a > 0.01) strokeSeg(ctx, s, a);
    }
    for (const g of growers) {
      softDot(g.x, g.y, g.w * 3 + 6, "77,226,255", 0.2);
      ctx.fillStyle = "rgba(207,230,255,.9)";
      ctx.beginPath(); ctx.arc(g.x, g.y, Math.max(g.w * 0.6, 0.8), 0, TAU); ctx.fill();
    }
    pulses = pulses.filter((p) => {
      p.pos += p.speed * frameDt;
      const i = Math.floor(p.pos / (4 * scale));
      if (i >= p.path.length) return false;
      const s = p.path[i];
      softDot(s.x2, s.y2, 10, "77,226,255", 0.3);
      ctx.fillStyle = "rgba(225,245,255,.95)";
      ctx.beginPath(); ctx.arc(s.x2, s.y2, 1.6, 0, TAU); ctx.fill();
      return true;
    });
    for (const l of leaves) drawLeaf(l);
  };

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = base.width = Math.round(w * dpr);
    canvas.height = base.height = Math.round(h * dpr);
    scale = Math.max(0.6, Math.min(1.4, Math.min(w, h) / 800));
    // Wide screens: tree stands right of the hero text; narrow: centered behind it.
    cx = w > 1000 ? w * 0.7 : w * 0.5; cy = h * 0.55;
    maxMortal = Math.round(Math.max(700, Math.min(2400, (w * h) / 600)));
    globeR = Math.min(Math.min(w, h) * 0.46, w * 0.48);
    seedTendrils();
    leaves = Array.from({ length: w < 700 ? 8 : 18 }, () => makeLeaf(true));
    seed();
    if (still) {
      for (let i = 0; i < 4000 && growers.length; i++) update(1 / 30);
      draw();
    }
  };

  const tick = (now) => {
    const dt = Math.min((now - last) / 1000 || 0, 1 / 20);
    last = now;
    frameDt = dt;
    update(dt); updatePlasma(dt); updateLeaves(dt); draw();
    if (document.hidden) { running = false; return; }
    requestAnimationFrame(tick);
  };
  const start = () => {
    if (running || still) return;
    running = true; last = performance.now();
    requestAnimationFrame(tick);
  };

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 200);
  });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) start(); });
  resize(); start();
})();

