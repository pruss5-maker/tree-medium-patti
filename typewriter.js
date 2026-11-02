/* Typewriter: hero lines type on load; section headings type when scrolled into view.
   The real text stays in the DOM (transparent) so layout and screen readers are unaffected. */
(() => {
  const targets = Array.from(document.querySelectorAll("[data-type]"));
  if (!targets.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const prepare = (el) => {
    const src = document.createElement("span");
    src.className = "tw-src";
    while (el.firstChild) src.appendChild(el.firstChild);
    const copy = src.cloneNode(true);
    copy.className = "tw-copy";
    copy.setAttribute("aria-hidden", "true");
    el.classList.add("tw-host");
    el.append(src, copy);
    const nodes = [];
    const walker = document.createTreeWalker(copy, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      nodes.push({ node: walker.currentNode, text: walker.currentNode.nodeValue });
      walker.currentNode.nodeValue = "";
    }
    return { el, nodes, speed: Number(el.dataset.typeSpeed) || 42, done: false };
  };

  const items = new Map(targets.map((el) => [el, prepare(el)]));
  let activeCaret = null;
  const newCaret = () => {
    activeCaret?.remove();
    activeCaret = document.createElement("span");
    activeCaret.className = "tw-caret";
    return activeCaret;
  };

  const finish = (item) => {
    item.nodes.forEach((n) => { n.node.nodeValue = n.text; });
    item.done = true;
  };

  const type = (item, caret) => new Promise((resolve) => {
    if (item.done) { resolve(); return; }
    let ni = 0, ci = 0, carry = 0, last = performance.now();
    caret.classList.remove("is-idle");
    const step = (now) => {
      if (item.done) { resolve(); return; } // skipped
      carry += now - last; last = now;
      while (carry >= item.speed && ni < item.nodes.length) {
        carry -= item.speed;
        const n = item.nodes[ni];
        ci += 1;
        n.node.nodeValue = n.text.slice(0, ci);
        n.node.after(caret);
        // Brief pause after sentence punctuation, like a person at the keys.
        if (/[.!?…]/.test(n.text[ci - 1] || "")) carry -= item.speed * 8;
        if (ci >= n.text.length) { ni += 1; ci = 0; }
      }
      if (ni >= item.nodes.length) { item.done = true; resolve(); return; }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });

  const run = async (els) => {
    const caret = newCaret();
    for (const el of els) await type(items.get(el), caret);
    caret.classList.add("is-idle");
  };

  // One line types at a time, like a single terminal; hero goes first.
  let queue = Promise.resolve();
  const enqueue = (els) => { queue = queue.then(() => run(els)); };
  enqueue(targets.filter((el) => el.dataset.type === "hero"));

  // Each section types its own lines when it comes into view.
  const groups = new Map();
  targets.filter((el) => el.dataset.type === "scroll").forEach((el) => {
    const section = el.closest("section") || el;
    if (!groups.has(section)) groups.set(section, []);
    groups.get(section).push(el);
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      enqueue(groups.get(entry.target));
    });
  }, { threshold: 0.2 });
  groups.forEach((_, section) => io.observe(section));

  // A click or keypress finishes all typing at once for readers who don't want to wait.
  const skip = () => {
    items.forEach(finish);
    activeCaret?.classList.add("is-idle");
  };
  window.addEventListener("pointerdown", skip, { once: true });
  window.addEventListener("keydown", skip, { once: true });

  // Never leave text hidden when printing.
  window.addEventListener("beforeprint", () => items.forEach(finish));
})();
