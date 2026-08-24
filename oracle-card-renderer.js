const renderParams = new URLSearchParams(window.location.search);
const renderDeck = document.body.dataset.deck;
const renderIndex = Number.parseInt(renderParams.get("index"), 10) || 0;
const renderSide = renderParams.get("side") === "back" ? "back" : "front";
const renderData = renderDeck === "animal" ? animalGuides[renderIndex] : treeGuides[renderIndex];
const renderSlug = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const renderProtection = `Tune into ${renderData.name}. Ask ${renderData.name} to protect your mind and energy today.`;
const renderArt = renderData.isolatedArt || renderData.art;
const renderBotanical = renderDeck === "tree" ? `<p class="botanical"><em>${renderData.botanical}</em></p>` : "";
const renderDeckName = renderDeck === "animal" ? "ANIMAL ORACLE · CARD OF THE DAY" : "TREE ORACLE · CARD OF THE DAY";
const renderCalling = renderDeck === "animal" ? "THE ANIMAL CALLING YOU TODAY" : "THE TREE CALLING YOU TODAY";
const renderCue = renderDeck === "animal" ? "TAP TO REVEAL ITS MEANING" : "TAP TO REVEAL ITS MEANING";
const renderBackCue = renderDeck === "animal" ? "TAP TO SEE YOUR ANIMAL" : "TAP TO SEE YOUR TREE";
const renderNameClass = renderData.name.length > 11 ? " long-name" : "";
const renderMessageClass = renderData.message.length > 205 ? " long-message" : "";

const renderFront = `
  <img class="master" src="${document.body.dataset.master}" alt="">
  <header class="brand">
    <p>KELA</p>
    <small>${renderDeckName}</small>
  </header>
  <section class="art-area ${renderDeck}">
    <img src="${renderArt}" alt="">
  </section>
  <section class="front-copy">
    <p class="calling">${renderCalling}</p>
    <h1 class="${renderNameClass}">${renderData.name}</h1>
    ${renderBotanical}
    <p class="keyword" style="--accent:${renderData.accent}">${renderData.keyword}</p>
    <span class="ornament" aria-hidden="true">◆</span>
    <p class="protection">${renderProtection}</p>
    <div class="cue">${renderCue}</div>
  </section>`;

const renderBack = `
  <img class="master" src="${document.body.dataset.master}" alt="">
  <header class="brand">
    <p>KELA</p>
    <small>MESSAGES FROM THE TREES</small>
  </header>
  <img class="watermark ${renderDeck}" src="${renderArt}" alt="">
  <section class="back-copy${renderMessageClass}">
    <p class="calling">YOUR ${renderDeck.toUpperCase()} ORACLE</p>
    <h1 class="${renderNameClass}">${renderData.name}</h1>
    ${renderBotanical}
    <p class="keyword" style="--accent:${renderData.accent}">${renderData.keyword}</p>
    <span class="ornament" aria-hidden="true">◆</span>
    <p class="message">${renderData.message}</p>
    <div class="protection-box">
      <strong>PROTECTION &amp; CONFIRMATION</strong>
      <p>${renderProtection}</p>
    </div>
    <div class="cue">${renderBackCue}</div>
  </section>`;

const canvas = document.querySelector("[data-canvas]");
canvas.className = `canvas ${renderDeck} ${renderSide}`;
canvas.dataset.slug = renderSlug(renderData.name);
canvas.innerHTML = renderSide === "front" ? renderFront : renderBack;

Promise.all(Array.from(document.images).map((image) => image.decode().catch(() => undefined))).then(() => {
  document.body.dataset.ready = "true";
});
