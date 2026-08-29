const plantGuides = [
  {
    name: "Yarrow", botanical: "Achillea millefolium", art: "assets/plants/yarrow.webp",
    keyword: "Sacred Boundaries", accent: "#b6a36c",
    message: "Long associated with tending wounds, Yarrow carries the spiritual medicine of sacred boundaries. Your sensitivity is a gift, but it does not require unlimited access to you. Gather your energy, seal the places where it has been leaking, and let your care have a clear edge.",
    practice: "Draw a circle. Place what nourishes you inside it and what drains you outside it. Say: My sensitivity is protected. My care has a clear edge.",
  },
  {
    name: "Lavender", botanical: "Lavandula angustifolia", art: "assets/plants/lavender.webp",
    keyword: "Heavenly Protection", accent: "#8875a8",
    message: "Lavender carries a potent fragrance long associated with cleansing, calm, and devotion. Its message is that peace is not passive. Peace is a protective frequency. You are just as potent as the lavender and worthy of guarding the quiet within you.",
    practice: "Breathe in lavender or imagine its scent. Say: Peace fills my body and surrounds my mind. I am potent, peaceful, and protected.",
  },
  {
    name: "Hibiscus", botanical: "Hibiscus rosa-sinensis", art: "assets/plants/hibiscus-real-saadtitan12-v1.webp",
    keyword: "Radiant Life Force", accent: "#bc3f49",
    message: "Hibiscus carries the spiritual medicine of radiant life force. Its vivid bloom asks you to stop dimming your desire, beauty, or creative fire so others can remain comfortable. What is alive within you deserves color, expression, and room to be fully seen.",
    practice: "Place a hand over your heart. Ask: What wants to come alive through me today? Give the answer one visible expression.",
  },
  {
    name: "Comfrey", botanical: "Symphytum officinale", art: "assets/plants/comfrey.webp",
    keyword: "Return to Wholeness", accent: "#6f765f",
    message: "Comfrey has long carried names connected with knitting together and repair. Spiritually, it calls the scattered pieces of you home. Wholeness does not mean the break never happened. It means every part of your story is welcomed back into the life you are becoming.",
    practice: "Call one separated part of yourself home. Say: Nothing true within me is abandoned. I am returning to wholeness.",
  },
  {
    name: "Chamomile", botanical: "Matricaria chamomilla", art: "assets/plants/chamomile.webp",
    keyword: "Gentle Strength", accent: "#c7a955",
    message: "Chamomile has long been reached for when the body and spirit need soothing. Its spiritual medicine is gentle strength. You do not have to answer life from agitation. Let the inner disturbance settle so the quiet wisdom beneath it can finally be heard.",
    practice: "Unclench your jaw and take three slow breaths. Say: Softness is not weakness. I can become calm before I respond.",
  },
  {
    name: "Calendula", botanical: "Calendula officinalis", art: "assets/plants/calendula.webp",
    keyword: "Light in Tender Places", accent: "#d58532",
    message: "Calendula has long been associated with tending tender skin and minor wounds. Spiritually, it brings warmth to the places in you that still feel raw, overlooked, or unworthy of care. Healing begins when you stop abandoning the tender place and let light meet it gently.",
    practice: "Place your hand near the place that feels tender. Say: I will not abandon this part of me. Light and loving attention are welcome here.",
  },
  {
    name: "Plantain", botanical: "Plantago major", art: "assets/plants/plantain.webp",
    keyword: "Draw Out What Does Not Belong", accent: "#658259",
    message: "Plantain has long been valued as a humble plant of soothing and repair. Spiritually, it helps draw out the irritation, judgment, and energy that do not belong in your field. Medicine may be growing in an overlooked place, including the ordinary wisdom already within you.",
    practice: "Feel both feet on the ground. Say: I release what does not belong to me. I trust the simple medicine already within reach.",
  },
  {
    name: "Sunflower", botanical: "Helianthus annuus", art: "assets/plants/sunflower.webp",
    keyword: "Receive the Light", accent: "#d39b26",
    message: "Sunflower carries nourishment while continually orienting itself toward light. Spiritually, it teaches receptive confidence. You do not have to chase every source of approval. Turn toward what is life giving and allow warmth, encouragement, and divine light to reach you.",
    practice: "Face the morning light or imagine it above you. Say: I turn toward what nourishes me. I allow myself to receive.",
  },
  {
    name: "Rosemary", botanical: "Salvia rosmarinus", art: "assets/plants/rosemary.webp",
    keyword: "Remember Yourself", accent: "#53786b",
    message: "Rosemary has carried the medicine of remembrance for centuries. Spiritually, it calls you back from distraction, grief, and the identities others placed upon you. Beneath everything you have been asked to become, your original promise is still waiting to be remembered.",
    practice: "Say your name aloud, then finish: I remember that I am here to ___. Complete one small action that honors the answer.",
  },
  {
    name: "Garden Sage", botanical: "Salvia officinalis", art: "assets/plants/garden-sage.webp",
    keyword: "Sacred Discernment", accent: "#75836d",
    message: "Garden Sage has long been associated with wise care, clearing, and a strong voice. Its spiritual medicine is discernment. Not every thought is truth and not every fear is prophecy. Clear the inner room so your own knowing can speak without competing with inherited noise.",
    practice: "Write three headings: Truth, Fear, Inherited Belief. Sort the thought, then choose from what your clearest self knows.",
  },
  {
    name: "Mugwort", botanical: "Artemisia vulgaris", art: "assets/plants/mugwort.webp",
    keyword: "Dream Threshold", accent: "#79758d",
    message: "Mugwort has long stood at the threshold of ritual, dream, and intuition. It invites you to listen beneath the literal image without turning every symbol into a prediction. Something within you is speaking in feeling, memory, and metaphor. Meet it with curiosity instead of fear.",
    practice: "Write one dream image, then finish: Beneath this image, I feel... Let the feeling be the message for today.",
  },
  {
    name: "Rose", botanical: "Rosa damascena", art: "assets/plants/rose.webp",
    keyword: "Open Heart, Clear Thorns", accent: "#ad6a75",
    message: "Rose has long carried the medicines of love, beauty, grief, and protection. Spiritually, it teaches that an open heart still needs clear thorns. Your tenderness is sacred. Give it a safe shape by honoring both the wholehearted yes and the necessary no within you.",
    practice: "Say aloud: My loving yes is ___. My protective no is ___. Both belong to the wisdom of my heart.",
  },
  {
    name: "Dandelion", botanical: "Taraxacum officinale", art: "assets/plants/dandelion.webp",
    keyword: "Root and Release", accent: "#bd972c",
    message: "Dandelion carries the medicine of movement, release, and persistent life. Spiritually, it asks you to root deeply in your purpose while loosening your demand to control the path. Your wish needs faithful care, but it also needs enough freedom to travel farther than you planned.",
    practice: "Name one daily action that roots your hope. Then say: I release my demand to control exactly how this arrives.",
  },
  {
    name: "Stinging Nettle", botanical: "Urtica dioica", art: "assets/plants/stinging-nettle.webp",
    keyword: "Protective Fire", accent: "#4e7854",
    message: "Stinging Nettle is both nourishing and fiercely protective. Its spiritual medicine is the fire that rises when your life force has been crossed. Anger is not always an enemy. Listen for the boundary hidden inside it, then use that fire to protect what you are here to nourish.",
    practice: "Finish: My anger is showing me that ___. I now protect ___. Let the message become a clear boundary rather than a lasting burn.",
  },
  {
    name: "Peppermint", botanical: "Mentha × piperita", art: "assets/plants/peppermint.webp",
    keyword: "Cooling Clarity", accent: "#4d8b73",
    message: "Peppermint has long been turned to for digestive ease and its unmistakable cooling presence. Spiritually, it clears heat from crowded thoughts. Not every urgent feeling requires an urgent act. Let the inner air cool before deciding which thought deserves your energy.",
    practice: "Take three slow breaths. Say: I can feel urgency without obeying it. My mind is clear enough to choose one useful step.",
  },
  {
    name: "Basil", botanical: "Ocimum basilicum", art: "assets/plants/basil.webp",
    keyword: "Blessed Abundance", accent: "#47794c",
    message: "Basil has long brought fragrance, nourishment, and blessing into kitchens and homes. Its spiritual medicine is abundance shaped by devotion. What you consistently tend gathers life around it. Bless what is already growing before asking the universe to send you more.",
    practice: "Place your hands around something you are nurturing. Say: I bless what is growing here. May this abundance nourish more than me.",
  },
  {
    name: "Echinacea", botanical: "Echinacea purpurea", art: "assets/plants/echinacea.webp",
    keyword: "Intelligent Protection", accent: "#9a667f",
    message: "Echinacea has long been associated with supporting the body's defenses. Spiritually, it awakens the inner guardian who knows what belongs in your field and what does not. You do not need to harden against life. Welcome what strengthens you, refuse what drains you, and call your energy home.",
    practice: "Place one hand over your heart and one over your center. Say: I welcome what strengthens me. I release what is not mine. My field protects its peace.",
  },
  {
    name: "Jasmine", botanical: "Jasminum officinale", art: "assets/plants/jasmine.webp",
    keyword: "Sacred Pleasure", accent: "#8d8d67",
    message: "Jasmine has long been woven into love, beauty, offering, and devotion. Its spiritual medicine is sacred pleasure. You were not created only to endure, produce, and recover. Beauty can restore your field. Let receiving something lovely become part of your devotion to yourself.",
    practice: "Choose one unhurried pleasure that truly restores you. Receive it without earning it, explaining it, or rushing through it.",
  },
  {
    name: "Lemon Balm", botanical: "Melissa officinalis", art: "assets/plants/lemon-balm.webp",
    keyword: "The Heart's Return", accent: "#6f8b5e",
    message: "Lemon Balm has long been turned to for gentle rest, ease, and comfort. Spiritually, it signals the heart returning after a season of strain. Joy may not arrive as a thunderbolt. Welcome the small warmth, the unexpected smile, and the quiet desire to participate in life again.",
    practice: "Notice one small thing that warms your heart. Say: I do not have to force joy. I make room for its gentle return.",
  },
  {
    name: "Red Clover", botanical: "Trifolium pratense", art: "assets/plants/red-clover.webp",
    keyword: "Sacred Replenishment", accent: "#a65372",
    message: "Red Clover carries the medicine of replenishment through relationship. It reminds you that receiving support is not weakness and giving until you are empty is not sacred. Healthy abundance moves in a living circle. Let yourself be nourished as deeply as you nourish others.",
    practice: "Offer one sincere gift and make one clear request for support. Say: I belong within the circle of care, not outside it.",
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
const plantArtUrl = (plant) => `${plant.art}${plant.art.includes("?") ? "&" : "?"}v=20260828-2`;

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
    image.src = `${cardAssetBase}-${side}.webp?v=20260828-2`;
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
        image: `/${plantArtUrl(plant).replace(/^\/+/, "")}`,
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

const protectionText = (plant) =>
  `Cover your eyes and close your mind. Tune into ${plant.name} and its energy. When you feel its presence, ask out loud and in your mind: “Dear ${plant.name}, I can feel your presence within me. Please be the guardian of my mind. Please protect my thoughts and energy. Only allow kind and encouraging thoughts to enter my field. Amen.”`;

const updatePlantSeo = (plant) => {
  const slug = slugify(plant.name);
  const cardUrl = new URL("/plant-oracle", window.location.origin);
  const description = `${plant.name} Plant Oracle card: ${plant.keyword}. Read its original KELA meaning and meditation prompt.`;
  oracleCard.dataset.plantSlug = slug;
  plantFlip.dataset.plantSlug = slug;
  plantFlip.setAttribute("aria-label", `${plant.name} Plant Oracle card: reveal its meaning`);
  if (plantCaption) plantCaption.textContent = `${plant.name}: ${plant.keyword}, a KELA Plant Oracle card.`;
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
  const cardFrontSrc = `${cardAssetBase}-front.webp?v=20260828-2`;
  const cardBackSrc = `${cardAssetBase}-back.webp?v=20260828-2`;
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
  plantArt.src = plantArtUrl(plant);
  plantArt.alt = `Botanical portrait of ${plant.name}`;
  plantArt.title = `${plant.name} Plant Oracle card: ${plant.keyword}`;
  plantWatermark.src = plantArtUrl(plant);
  plantKeyword.textContent = plant.keyword;
  plantKeywordBack.textContent = plant.keyword;
  plantMessage.textContent = plant.message;
  plantMeditation.textContent = protectionText(plant);
};

const commitPlantFace = (showMeaning) => {
  const plant = plantGuides[activePlantIndex];
  plantFlip.classList.toggle("is-flipped", showMeaning);
  plantFlip.setAttribute("aria-pressed", String(showMeaning));
  plantFlip.setAttribute("aria-label", plant ? `${plant.name} Plant Oracle card: ${showMeaning ? "show its portrait" : "reveal its meaning"}` : "Reveal this plant's meaning");
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
  const text = [`${plant.name}: ${plant.keyword}`, plant.message, `Meditation & protection: ${protectionText(plant)}`, window.location.href].join("\n\n");
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
previewNext?.addEventListener("click", () => {
  showPlant(activePlantIndex < 0 ? 0 : (activePlantIndex + 1) % plantGuides.length, { focus: false, save: false });
});

const previewParams = new URLSearchParams(window.location.search);
const requestedPreview = Number.parseInt(previewParams.get("plant"), 10);
const requestedCardSlug = slugify(previewParams.get("card") || "");
const requestedCardIndex = plantGuides.findIndex((plant) => slugify(plant.name) === requestedCardSlug);
const requestedFoundSlug = slugify(previewParams.get("found") || "");
const savedFoundPlant = window.KelaCompanions?.getFound?.("plant");
const requestedFoundIndex = savedFoundPlant?.slug === requestedFoundSlug
  ? plantGuides.findIndex((plant) => slugify(plant.name) === requestedFoundSlug)
  : -1;

if (oracle && requestedFoundIndex >= 0) {
  showPlant(requestedFoundIndex, { focus: false, save: false });
  if (status) status.textContent = `${plantGuides[requestedFoundIndex].name} found you in the memory game.`;
} else if (oracle && isLocalPreview && requestedCardIndex >= 0) {
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
        image: `/${plantArtUrl(plant).replace(/^\/+/, "")}`,
        href: "/plant-oracle",
      });
    }
  }
}
