const plantGuides = [
  {
    name: "Yarrow", botanical: "Achillea millefolium", art: "assets/plants/yarrow.webp",
    keyword: "Sacred Boundaries", accent: "#b6a36c",
    message: "Yarrow has long stood at the threshold between tenderness and protection. It arrives when your sensitivity needs a clear edge—not a wall, but a living boundary that lets care move without letting every energy enter.",
    practice: "Imagine a soft, luminous boundary around you: discerning, breathable, and wholly yours.",
  },
  {
    name: "Lavender", botanical: "Lavandula angustifolia", art: "assets/plants/lavender.webp",
    keyword: "Peaceful Clearing", accent: "#8875a8",
    message: "Lavender carries the memory of washing, soothing, and making a place ready. Let its purple hush clear the inner room without dimming your voice. Peace can be both gentle and quietly resistant.",
    practice: "Let each breath wash one layer of noise from your inner space until your own signal feels clear.",
  },
  {
    name: "Hibiscus", botanical: "Hibiscus rosa-sinensis", art: "assets/plants/hibiscus.webp",
    keyword: "Radiant Presence", accent: "#bc3f49",
    message: "Hibiscus opens boldly and does not apologize for its brief, brilliant bloom. It asks you to inhabit the beauty of this moment before it changes. Presence—not permanence—is what makes radiance real.",
    practice: "Picture one vivid bloom at your heart and let yourself be fully here for three slow breaths.",
  },
  {
    name: "Comfrey", botanical: "Symphytum officinale", art: "assets/plants/comfrey.webp",
    keyword: "Grow Together", accent: "#6f765f",
    message: "Comfrey's old name carries the idea of growing together. It appears when scattered pieces are ready to belong to one life again. Integration does not erase the break; it gives every piece a place in the whole.",
    practice: "Bring two separated parts of yourself into the same inner room and let them rest without argument.",
  },
  {
    name: "Chamomile", botanical: "Matricaria chamomilla", art: "assets/plants/chamomile.webp",
    keyword: "Gentle Resilience", accent: "#c7a955",
    message: "Chamomile meets pressure with softness that is not weakness. Its small bright flowers invite patience in adversity and remind you that gentleness can endure what force cannot. Rest may be part of your strength today.",
    practice: "Unclench your jaw and shoulders. Ask where a gentler response could carry you farther.",
  },
  {
    name: "Calendula", botanical: "Calendula officinalis", art: "assets/plants/calendula.webp",
    keyword: "Returning Light", accent: "#d58532",
    message: "Calendula holds sunlight close to the earth. It comes when joy feels distant, offering a modest, persistent brightness rather than forced positivity. Follow the smallest warm thing; light often returns by degrees.",
    practice: "Recall one honest spark of warmth from today and let it widen without asking it to solve everything.",
  },
  {
    name: "Plantain", botanical: "Plantago major", art: "assets/plants/plantain.webp",
    keyword: "Grounded Repair", accent: "#658259",
    message: "Broadleaf plantain thrives where feet, wheels, and weather press the ground. Often overlooked, it teaches the dignity of ordinary repair. What restores you may be close, humble, and already growing underfoot.",
    practice: "Feel the support beneath your feet and name one simple act that would help you mend today.",
  },
  {
    name: "Sunflower", botanical: "Helianthus annuus", art: "assets/plants/sunflower.webp",
    keyword: "Turn Toward Light", accent: "#d39b26",
    message: "Sunflower offers its whole face to illumination. Its message is not to deny the shadow, but to choose the direction that helps you grow. Orient yourself toward what is honest, nourishing, and alive.",
    practice: "Turn your attention toward one source of real light in your life and notice your body respond.",
  },
  {
    name: "Rosemary", botanical: "Salvia rosmarinus", art: "assets/plants/rosemary.webp",
    keyword: "Remember Yourself", accent: "#53786b",
    message: "Rosemary has traveled through ceremonies of remembrance and fidelity. It calls you back to the promise beneath distraction: the person you meant to be, the love you meant to tend, the truth you do not want to forget.",
    practice: "Name one promise worthy of remembrance and breathe it back into the center of your day.",
  },
  {
    name: "Garden Sage", botanical: "Salvia officinalis", art: "assets/plants/garden-sage.webp",
    keyword: "Wise Discernment", accent: "#75836d",
    message: "Garden sage asks for wisdom that can be used, not merely admired. Step back from urgency. Separate what you know, what you fear, and what you are assuming; the next clear choice may then become quiet and obvious.",
    practice: "Ask: What do I know, what am I assuming, and what still needs time? Listen without rushing.",
  },
  {
    name: "Mugwort", botanical: "Artemisia vulgaris", art: "assets/plants/mugwort.webp",
    keyword: "Dream Threshold", accent: "#79758d",
    message: "Mugwort stands at the imaginative threshold between waking attention and dream. It invites you to notice symbols without forcing them into certainty. Let mystery remain spacious enough to reveal its own pattern.",
    practice: "Hold one image from a dream or daydream in your mind. Ask what feeling it carries, not what it predicts.",
  },
  {
    name: "Rose", botanical: "Rosa damascena", art: "assets/plants/rose.webp",
    keyword: "Open Heart, Clear Thorns", accent: "#ad6a75",
    message: "Rose holds tenderness and protection on the same stem. Its open center does not require the thorns to disappear. Love can be generous while keeping a clear boundary around what is intimate and true.",
    practice: "Breathe into your heart. Let one petal open as one thorn quietly guards what matters.",
  },
  {
    name: "Dandelion", botanical: "Taraxacum officinale", art: "assets/plants/dandelion.webp",
    keyword: "Unapologetic Hope", accent: "#bd972c",
    message: "Dandelion turns disturbed ground into a place for gold, then releases its wishes to the wind. It asks you to persist without waiting for perfect conditions—and to let go when the next journey is ready.",
    practice: "Name one hope hardy enough for imperfect ground, then release how it must arrive.",
  },
  {
    name: "Stinging Nettle", botanical: "Urtica dioica", art: "assets/plants/stinging-nettle.webp",
    keyword: "Protective Fire", accent: "#4e7854",
    message: "Nettle's sting is a boundary you can feel. Behind it lives vigor, usefulness, and shelter for other beings. Your protective fire is not proof that you are difficult; it may be intelligence guarding what still needs care.",
    practice: "Notice where your body says no. Honor the information before deciding what action it asks of you.",
  },
  {
    name: "Peppermint", botanical: "Mentha × piperita", art: "assets/plants/peppermint.webp",
    keyword: "Fresh Current", accent: "#4d8b73",
    message: "Peppermint arrives like an open window. It clears stale momentum and welcomes a fresh current through mind and spirit. You do not need an entirely new life—only enough space for the next clean breath.",
    practice: "Imagine cool green air moving through you, making room for one clear and immediate next step.",
  },
  {
    name: "Basil", botanical: "Ocimum basilicum", art: "assets/plants/basil.webp",
    keyword: "Blessed Abundance", accent: "#47794c",
    message: "Basil has long belonged to gardens, kitchens, offerings, and thresholds. It reminds you that abundance is something tended and shared. Bless what already nourishes you, then make room for enough to circulate.",
    practice: "Offer gratitude for one sustaining thing, then imagine its goodness moving outward through your hands.",
  },
  {
    name: "Echinacea", botanical: "Echinacea purpurea", art: "assets/plants/echinacea.webp",
    keyword: "Enduring Strength", accent: "#9a667f",
    message: "Echinacea holds a strong center while its petals soften outward. It invites strength that is rooted, relational, and unafraid of tenderness. Return to your center before deciding what deserves your energy.",
    practice: "Picture a steady cone of light at your center with soft petals opening around it.",
  },
  {
    name: "Jasmine", botanical: "Jasminum officinale", art: "assets/plants/jasmine.webp",
    keyword: "Heavenly Joy", accent: "#8d8d67",
    message: "Jasmine's small pale flowers release a presence larger than their size. It carries an old association with heavenly happiness and loving devotion. Let joy be subtle, fragrant, and powerful enough to change the room.",
    practice: "Invite one quiet joy into awareness and let it expand beyond the space you think it deserves.",
  },
  {
    name: "Lemon Balm", botanical: "Melissa officinalis", art: "assets/plants/lemon-balm.webp",
    keyword: "Heart's Return", accent: "#6f8b5e",
    message: "Lemon balm has long been associated with bees, gladness, and lifting the heart. It comes as a gentle return rather than a demand to cheer up. Follow what helps your spirit remember its natural warmth.",
    practice: "Place a hand over your heart and welcome one small sweetness without needing to earn it.",
  },
  {
    name: "Red Clover", botanical: "Trifolium pratense", art: "assets/plants/red-clover.webp",
    keyword: "Reciprocal Plenty", accent: "#a65372",
    message: "Red clover feeds the soil while feeding pollinators, making abundance a relationship rather than a possession. It asks where giving and receiving can enrich the same ground. Plenty deepens when the whole field can flourish.",
    practice: "Picture a shared field. Ask what you can offer freely and what support you are ready to receive.",
  },
];

const oracle = document.querySelector("[data-plant-oracle]");
const oracleCard = document.querySelector("[data-plant-oracle-card]");
const oracleResult = document.querySelector("[data-plant-oracle-result]");
const oracleRitual = document.querySelector("[data-plant-oracle-ritual]");
const revealButton = document.querySelector("[data-reveal-plant]");
const status = document.querySelector("[data-plant-oracle-status]");
const previewTools = document.querySelector("[data-plant-preview-tools]");
const previewNext = document.querySelector("[data-plant-preview-next]");
const shareButton = document.querySelector("[data-share-plant]");
const plantName = document.querySelector("[data-plant-name]");
const plantNameBack = document.querySelector("[data-plant-name-back]");
const plantBotanical = document.querySelector("[data-plant-botanical]");
const plantArt = document.querySelector("[data-plant-art]");
const plantWatermark = document.querySelector("[data-plant-watermark]");
const plantKeyword = document.querySelector("[data-plant-keyword]");
const plantKeywordBack = document.querySelector("[data-plant-keyword-back]");
const plantMessage = document.querySelector("[data-plant-message]");
const plantMeditation = document.querySelector("[data-plant-meditation]");
const plantFlip = document.querySelector("[data-plant-flip]");
const plantFlipFront = document.querySelector("[data-plant-flip-front]");
const plantFlipBack = document.querySelector("[data-plant-flip-back]");
const plantCardFront = document.querySelector("[data-plant-card-front]");
const plantCardBack = document.querySelector("[data-plant-card-back]");
const plantCaption = document.querySelector("[data-plant-caption]");

const storageKey = "kela-plant-oracle-v1";
const plantCardColors = [
  "#3f5034", "#44345f", "#6a2432", "#314a3c", "#665421",
  "#713f1d", "#2e553d", "#6b4e15", "#1c514d", "#40513f",
  "#373753", "#612d42", "#6c5319", "#244b34", "#20564a",
  "#214b2b", "#59344b", "#4b4a32", "#3c5532", "#622b45",
];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let activePlantIndex = -1;
let turnTimer = 0;

const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const preloadPlantCard = (index) => {
  const plant = plantGuides[index];
  if (!plant) return Promise.resolve();
  const cardAssetBase = `assets/oracle-cards/plant/${slugify(plant.name)}`;
  const preloadFace = (image, side) => new Promise((resolve) => {
    if (!image) return resolve();
    const finish = () => {
      image.removeEventListener("load", finish);
      image.removeEventListener("error", finish);
      resolve();
    };
    image.addEventListener("load", finish);
    image.addEventListener("error", finish);
    image.src = `${cardAssetBase}-${side}.webp?v=20260825-9`;
    if (image.complete && image.naturalWidth > 0) finish();
  });
  return Promise.all([
    preloadFace(plantCardFront, "front"),
    preloadFace(plantCardBack, "back"),
  ]);
};
const localDateKey = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
};

const readSavedPlant = () => {
  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey));
    if (saved?.date === localDateKey() && Number.isInteger(saved.index) && saved.index >= 0 && saved.index < plantGuides.length) return saved.index;
  } catch { return -1; }
  return -1;
};

const savePlant = (index) => {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify({ date: localDateKey(), index }));
    const plant = plantGuides[index];
    if (plant) {
      window.KelaCompanions?.remember({
        deck: "plant",
        name: plant.name,
        image: `/${plant.art.replace(/^\/+/, "")}`,
        href: "/plant-oracle",
      });
    }
  } catch { /* The oracle still works without storage. */ }
};

const randomPlantIndex = () => {
  if (!window.crypto?.getRandomValues) return Math.floor(Math.random() * plantGuides.length);
  const range = 0x100000000;
  const ceiling = Math.floor(range / plantGuides.length) * plantGuides.length;
  const value = new Uint32Array(1);
  do window.crypto.getRandomValues(value); while (value[0] >= ceiling);
  return value[0] % plantGuides.length;
};

const protectionText = (plant) => `Ask your ${plant.name} plant to protect your mind and energy in meditation. ${plant.practice}`;

const updatePlantSeo = (plant) => {
  const slug = slugify(plant.name);
  const cardUrl = new URL("/plant-oracle", window.location.origin);
  const description = `${plant.name} Plant Oracle card — ${plant.keyword}. Read its original KELA meaning and meditation prompt.`;
  oracleCard.dataset.plantSlug = slug;
  plantFlip.dataset.plantSlug = slug;
  plantFlip.setAttribute("aria-label", `${plant.name} Plant Oracle card — reveal its meaning`);
  if (plantCaption) plantCaption.textContent = `${plant.name} — ${plant.keyword}, a KELA Plant Oracle card.`;
  document.title = `${plant.name} Plant Oracle Card Meaning | KELA`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${plant.name} Plant Oracle Card | KELA`);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", cardUrl.href);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", cardUrl.href);
};

const fillPlant = (index) => {
  const plant = plantGuides[index];
  if (!plant || !oracleCard || !oracleResult) return;
  activePlantIndex = index;
  oracleCard.style.setProperty("--guide-accent", plant.accent);
  oracleCard.style.setProperty("--plant-card-color", plantCardColors[index] || plantCardColors[0]);
  updatePlantSeo(plant);
  const cardAssetBase = `assets/oracle-cards/plant/${slugify(plant.name)}`;
  const cardFrontSrc = `${cardAssetBase}-front.webp?v=20260825-9`;
  const cardBackSrc = `${cardAssetBase}-back.webp?v=20260825-9`;
  if (plantCardFront) {
    if (plantCardFront.getAttribute("src") !== cardFrontSrc) plantCardFront.src = cardFrontSrc;
    plantCardFront.alt = `${plant.name} KELA Plant Oracle card`;
  }
  if (plantCardBack) {
    if (plantCardBack.getAttribute("src") !== cardBackSrc) plantCardBack.src = cardBackSrc;
    plantCardBack.alt = `${plant.name} KELA Plant Oracle meaning card`;
  }
  plantName.textContent = plant.name;
  plantNameBack.textContent = plant.name;
  plantBotanical.textContent = plant.botanical;
  plantArt.src = plant.art;
  plantArt.alt = `Botanical portrait of ${plant.name}`;
  plantArt.title = `${plant.name} Plant Oracle card — ${plant.keyword}`;
  plantWatermark.src = plant.art;
  plantKeyword.textContent = plant.keyword;
  plantKeywordBack.textContent = plant.keyword;
  plantMessage.textContent = plant.message;
  plantMeditation.textContent = protectionText(plant);
};

const commitPlantFace = (showMeaning) => {
  const plant = plantGuides[activePlantIndex];
  plantFlip.classList.toggle("is-flipped", showMeaning);
  plantFlip.setAttribute("aria-pressed", String(showMeaning));
  plantFlip.setAttribute("aria-label", plant ? `${plant.name} Plant Oracle card — ${showMeaning ? "show its portrait" : "reveal its meaning"}` : "Reveal this plant's meaning");
  plantFlipFront.setAttribute("aria-hidden", String(showMeaning));
  plantFlipBack.setAttribute("aria-hidden", String(!showMeaning));
};

const setPlantFace = (showMeaning, { animate = false } = {}) => {
  if (!plantFlip) return;
  if (plantFlip.classList.contains("is-turning")) {
    if (animate) return;
    window.clearTimeout(turnTimer);
    plantFlip.classList.remove("is-turning");
    commitPlantFace(showMeaning);
    return;
  }
  if (plantFlip.classList.contains("is-flipped") === showMeaning) return;
  window.clearTimeout(turnTimer);
  if (!animate || prefersReducedMotion) return commitPlantFace(showMeaning);
  plantFlip.classList.add("is-turning");
  turnTimer = window.setTimeout(() => {
    commitPlantFace(showMeaning);
    window.requestAnimationFrame(() => plantFlip.classList.remove("is-turning"));
  }, 170);
};

const showPlant = (index, { focus = true, save = true } = {}) => {
  if (!oracleCard || !oracleResult || !oracleRitual) return;
  fillPlant(index);
  setPlantFace(false);
  if (save) savePlant(index);
  oracleResult.hidden = false;
  oracleRitual.hidden = true;
  oracleCard.classList.remove("is-listening");
  oracleCard.classList.add("is-revealed");
  if (status) status.textContent = `${plantGuides[index].name} is meeting you in the garden today.`;
  if (focus) window.setTimeout(() => {
    oracleCard.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" });
    oracleResult.focus({ preventScroll: true });
  }, prefersReducedMotion ? 0 : 550);
};

const beginReveal = () => {
  if (!oracleCard || !revealButton) return;
  revealButton.disabled = true;
  oracleCard.classList.add("is-listening");
  if (status) status.textContent = "The garden is listening. Take one slow breath.";
  const plantIndex = randomPlantIndex();
  const minimumPause = new Promise((resolve) => {
    window.setTimeout(resolve, prefersReducedMotion ? 50 : 2200);
  });
  const preloadLimit = new Promise((resolve) => window.setTimeout(resolve, 5000));
  Promise.all([minimumPause, Promise.race([preloadPlantCard(plantIndex), preloadLimit])])
    .then(() => showPlant(plantIndex));
};

const sharePlant = async () => {
  const plant = plantGuides[activePlantIndex];
  if (!plant || !shareButton) return;
  const text = [`${plant.name} — ${plant.keyword}`, plant.message, `Meditation & protection: ${protectionText(plant)}`, window.location.href].join("\n\n");
  try {
    if (navigator.share) return await navigator.share({ title: `My KELA plant: ${plant.name}`, text, url: window.location.href });
    await navigator.clipboard.writeText(text);
    shareButton.textContent = "Plant Message Copied";
    window.setTimeout(() => { shareButton.textContent = "Share My Plant"; }, 1800);
  } catch (error) {
    if (error?.name !== "AbortError") shareButton.textContent = "Sharing unavailable";
  }
};

revealButton?.addEventListener("click", beginReveal);
shareButton?.addEventListener("click", sharePlant);
plantFlip?.addEventListener("click", () => setPlantFace(!plantFlip.classList.contains("is-flipped"), { animate: true }));
plantFlip?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  setPlantFace(!plantFlip.classList.contains("is-flipped"), { animate: true });
});

const isLocalPreview = ["", "localhost", "127.0.0.1"].includes(window.location.hostname);
if (previewTools && isLocalPreview) previewTools.hidden = false;
previewNext?.addEventListener("click", () => showPlant(activePlantIndex < 0 ? 0 : (activePlantIndex + 1) % plantGuides.length, { focus: false, save: false }));

const previewParams = new URLSearchParams(window.location.search);
const requestedPreview = Number.parseInt(previewParams.get("plant"), 10);
const requestedCardSlug = slugify(previewParams.get("card") || "");
const requestedCardIndex = plantGuides.findIndex((plant) => slugify(plant.name) === requestedCardSlug);

if (oracle && isLocalPreview && requestedCardIndex >= 0) {
  showPlant(requestedCardIndex, { focus: false, save: false });
  if (previewParams.get("side") === "meaning") setPlantFace(true);
} else if (oracle && isLocalPreview && Number.isInteger(requestedPreview) && requestedPreview >= 0 && requestedPreview < plantGuides.length) {
  showPlant(requestedPreview, { focus: false, save: false });
  if (previewParams.get("side") === "meaning") setPlantFace(true);
} else {
  const savedPlantIndex = readSavedPlant();
  if (oracle && savedPlantIndex >= 0) {
    showPlant(savedPlantIndex, { focus: false, save: false });
    const plant = plantGuides[savedPlantIndex];
    if (plant) {
      window.KelaCompanions?.remember({
        deck: "plant",
        name: plant.name,
        image: `/${plant.art.replace(/^\/+/, "")}`,
        href: "/plant-oracle",
      });
    }
  }
}
