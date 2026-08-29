const renderParams = new URLSearchParams(window.location.search);
const renderDeck = document.body.dataset.deck;
const renderIndex = Number.parseInt(renderParams.get("index"), 10) || 0;
const renderSide = renderParams.get("side") === "back" ? "back" : "front";
const renderData = renderDeck === "animal"
  ? animalGuides[renderIndex]
  : renderDeck === "plant" ? plantGuides[renderIndex] : treeGuides[renderIndex];
const renderSlug = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const renderDataSlug = renderData.assetSlug || renderSlug(renderData.name);
const renderGuideName = renderDeck === "tree" ? `${renderData.name} Tree` : renderData.name;
const renderBackProtection = `“Dear ${renderGuideName}, I can feel your presence within me. Please be the guardian of my mind. Please protect my thoughts and energy. Only allow kind and encouraging thoughts to enter my field. Amen.”`;
const renderBackArt = renderDeck === "animal"
  ? `assets/animals/cutouts-transparent/${renderDataSlug}.png`
  : renderData.art;
const renderFrontArt = renderDeck === "animal"
  ? `assets/animal-photos/${renderDataSlug === "crow" ? "crow-card-v2" : renderDataSlug}.webp`
  : renderData.art;
const renderBotanical = renderDeck !== "animal" ? `<p class="botanical"><em>${renderData.botanical}</em></p>` : "";
const renderDeckName = renderDeck === "animal"
  ? "ANIMAL ORACLE · CARD OF THE DAY"
  : renderDeck === "plant" ? "PLANT ORACLE · CARD OF THE DAY" : "TREE ORACLE · CARD OF THE DAY";
const renderCue = "TAP FOR MEANING";
const renderBackCue = renderDeck === "animal"
  ? "TAP TO SEE YOUR ANIMAL"
  : renderDeck === "plant" ? "TAP TO SEE YOUR PLANT" : "TAP TO SEE YOUR TREE";
const renderNameClass = renderData.name.length > 11 ? " long-name" : "";
const renderMessageClass = renderData.message.length > 205 ? " long-message" : "";
const renderBrand = (label) => `
  <header class="brand">
    <div class="brand-lockup">
      <p>KELA</p>
      <span>MESSAGES<br>FROM THE TREES</span>
    </div>
    <small>${label}</small>
  </header>`;

const renderFront = `
  <section class="front-photo ${renderDeck}">
    <img src="${renderFrontArt}" alt="">
  </section>
  <section class="front-name">
    <h1 class="${renderNameClass}">${renderData.name}</h1>
  </section>`;

const renderBack = `
  <img class="master" src="${document.body.dataset.master}" alt="">
  ${renderBrand(`${renderDeck.toUpperCase()} ORACLE · MEANING CARD`)}
  <section class="back-copy${renderMessageClass}">
    <section class="back-guide-intro">
      <div class="back-guide-art ${renderDeck}" aria-hidden="true">
        <img src="${renderBackArt}" alt="">
      </div>
      <div class="back-guide-text">
        <h1 class="${renderNameClass}">${renderData.name}</h1>
        ${renderBotanical}
        <p class="keyword" style="--accent:${renderData.accent}">${renderData.keyword}</p>
      </div>
    </section>
    <span class="ornament" aria-hidden="true">◆</span>
    <p class="message">${renderData.message}</p>
    <div class="protection-box">
      <strong>PROTECTION INVOCATION</strong>
      <p>${renderBackProtection}</p>
    </div>
    <div class="cue">${renderBackCue}</div>
  </section>`;

const canvas = document.querySelector("[data-canvas]");
canvas.className = `canvas ${renderDeck} ${renderSide}`;
canvas.dataset.slug = renderDataSlug;
canvas.innerHTML = renderSide === "front" ? renderFront : renderBack;

Promise.all(Array.from(document.images).map((image) => image.decode().catch(() => undefined))).then(() => {
  document.body.dataset.ready = "true";
});
