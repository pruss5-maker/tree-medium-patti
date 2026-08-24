const socialParams = new URLSearchParams(window.location.search);
const socialDeck = ["animal", "tree", "plant"].includes(socialParams.get("deck"))
  ? socialParams.get("deck")
  : "animal";
const socialCollection = socialDeck === "animal"
  ? animalGuides
  : socialDeck === "tree" ? treeGuides : plantGuides;
const socialIndex = Math.min(
  Math.max(Number.parseInt(socialParams.get("index"), 10) || 0, 0),
  socialCollection.length - 1,
);
const socialData = socialCollection[socialIndex];
const socialSlug = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const socialLabels = {
  animal: "ANIMAL ORACLE",
  tree: "TREE ORACLE",
  plant: "PLANT ORACLE",
};
const socialArt = socialDeck === "animal"
  ? socialData.isolatedArt || `assets/animals/cutouts/${socialSlug(socialData.name)}-cutout-v2.webp`
  : socialData.art;

const firstThought = (message) => {
  const matches = message.match(/[^.!?]+[.!?]+/g);
  if (!matches) return message;
  const candidate = matches.slice(0, 2).join(" ").trim();
  return candidate.length <= 235 ? candidate : matches[0].trim();
};

const botanical = socialData.botanical
  ? `<p class="social-botanical"><em>${socialData.botanical}</em></p>`
  : "";
const canvas = document.querySelector("[data-social-canvas]");

canvas.className = `social-canvas ${socialDeck}`;
canvas.dataset.slug = socialSlug(socialData.name);
canvas.style.setProperty("--accent", socialData.accent);
canvas.innerHTML = `
  <header class="social-brand-row">
    <div class="social-brand">KELA</div>
    <div class="social-brand-note">Messages from the Trees</div>
  </header>
  <p class="social-series">${socialLabels[socialDeck]} · CARD OF THE DAY</p>
  <article class="social-oracle-card">
    <div class="social-visual ${socialDeck}"><img src="${socialArt}" alt=""></div>
    <div class="social-title-panel">
      <p class="social-kind">THE ${socialDeck.toUpperCase()} CALLING YOU TODAY</p>
      <h1>${socialData.name}</h1>
      ${botanical}
      <p class="social-keyword">${socialData.keyword}</p>
    </div>
  </article>
  <section class="social-message"><p>${firstThought(socialData.message)}</p></section>
  <div class="social-cta">
    <strong>Take your free daily draw</strong>
    <span>treemedium.vercel.app/${socialDeck}-oracle</span>
  </div>
  <p class="social-footer">One card · One day · Notice what finds you</p>`;

Promise.all(Array.from(document.images).map((image) => image.decode().catch(() => undefined))).then(() => {
  document.body.dataset.ready = "true";
});
