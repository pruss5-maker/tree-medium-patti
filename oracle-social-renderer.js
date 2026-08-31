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
const socialDataSlug = socialData.assetSlug || socialSlug(socialData.name);
const socialCardFace = `assets/oracle-cards/${socialDeck}/${socialDataSlug}-front.webp?v=20260828-2`;
const socialProtection = `Your mind deserves to be a sanctuary. Tune into ${socialData.name} and hold one spiritual meaning: ${socialData.keyword}. “Dear ${socialData.name}, please protect my mind. Only let kind thoughts enter my field.”`;
const canvas = document.querySelector("[data-social-canvas]");

canvas.className = `social-canvas ${socialDeck}`;
canvas.dataset.slug = socialDataSlug;
canvas.style.setProperty("--accent", socialData.accent);
canvas.innerHTML = `
  <header class="social-brand-row">
    <div class="social-brand">KELA</div>
    <div class="social-brand-note">Messages from the Trees</div>
  </header>
  <p class="social-series">${socialLabels[socialDeck]} · CARD OF THE DAY</p>
  <article class="social-card-stage">
    <img class="social-card-face" src="${socialCardFace}" width="810" height="1012" alt="${socialData.name} ${socialLabels[socialDeck]} card">
  </article>
  <section class="social-protection">
    <p class="social-protection-label">KELA PROTECTION INVOCATION · YOUR MIND IS A SANCTUARY</p>
    <p>${socialProtection}</p>
  </section>
  <div class="social-cta">
    <strong>Take your free daily draw</strong>
    <span>treemedium.vercel.app/${socialDeck}-oracle</span>
  </div>
  <p class="social-footer">One card · One day · Notice what finds you</p>`;

Promise.all(Array.from(document.images).map((image) => image.decode().catch(() => undefined))).then(() => {
  document.body.dataset.ready = "true";
});
