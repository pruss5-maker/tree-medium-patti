const plantGuides = [
  {
    name: "Yarrow", botanical: "Achillea millefolium", art: "assets/plants/yarrow.webp",
    keyword: "Many Parts, One Boundary", accent: "#b6a36c",
    message: "Yarrow gathers many tiny flower heads into one protective, level crown. It teaches that sensitivity becomes strength when every part agrees on the boundary. Draw a circle on paper. Write what belongs inside your field and what must remain outside.",
    practice: "Draw one circle. Place what nourishes you inside it and what drains or harms you outside it. Say aloud: My care has a clear edge.",
  },
  {
    name: "Lavender", botanical: "Lavandula angustifolia", art: "assets/plants/lavender.webp",
    keyword: "Peace Is Protection", accent: "#8875a8",
    message: "Lavender's fragrance has long marked cleansing, rest, and devotion. Lavender reminds you that peace is something you can protect. Take three slow breaths. Notice what disturbs your inner quiet, then choose one boundary that makes room for calm.",
    practice: "Breathe in lavender or imagine its scent. Say: Peace belongs in my body and my home. Set one gentle boundary today.",
  },
  {
    name: "Hibiscus", botanical: "Hibiscus rosa-sinensis", art: "assets/plants/hibiscus-real-saadtitan12-v1.webp",
    keyword: "Fully Here", accent: "#bc3f49",
    message: "A hibiscus flower may open for only one day, yet the plant keeps offering bloom after bloom. It does not confuse brief with unimportant. Choose one thing that matters today. Give it your full color and attention before this day closes.",
    practice: "Choose one person, task, or pleasure. Put your phone away and meet it fully for ten minutes.",
  },
  {
    name: "Comfrey", botanical: "Symphytum officinale", art: "assets/plants/comfrey.webp",
    keyword: "Return to Wholeness", accent: "#6f765f",
    message: "Comfrey's name means to grow together, and even a root piece left in the soil can begin again. Repair does not require pretending the break never happened. Gather one scattered piece of your life, such as a call, appointment, object, or promise, and return it to the whole.",
    practice: "Choose one loose end and give it a real place: schedule it, mend it, answer it, or release it.",
  },
  {
    name: "Chamomile", botanical: "Matricaria chamomilla", art: "assets/plants/chamomile.webp",
    keyword: "Rest Is Preparation", accent: "#c7a955",
    message: "Chamomile is a modest annual that makes many small flower heads from one season of growth. It reminds you that rest is not the opposite of becoming; it is part of how the next response is prepared. Unclench your jaw and protect ten quiet minutes before you answer the pressure.",
    practice: "Set a ten-minute timer. Rest without solving. When it ends, choose the gentlest useful response.",
  },
  {
    name: "Calendula", botanical: "Calendula officinalis", art: "assets/plants/calendula.webp",
    keyword: "Make Room for More Light", accent: "#d58532",
    message: "Calendula can bloom from summer into fall, and removing finished flowers encourages more to open. It teaches that honoring an ending can make room for returning light. Remove one expired task, object, or obligation today. Leave the new space open long enough to feel it.",
    practice: "Clear one thing that is truly finished. Say aloud: I release what has bloomed so the next light has room.",
  },
  {
    name: "Plantain", botanical: "Plantago major", art: "assets/plants/plantain.webp",
    keyword: "Repair Under Pressure", accent: "#658259",
    message: "Plantain keeps its leaves low in a basal rosette and survives on paths, roadsides, and compacted ground. Pressure does not make its work less worthy. Put both feet down. Choose one plain repair, such as water, food, sleep, a bandage, or an honest message, and do it before seeking a grand answer.",
    practice: "Feel the ground beneath both feet. Complete one humble act of repair within the next hour.",
  },
  {
    name: "Sunflower", botanical: "Helianthus annuus", art: "assets/plants/sunflower.webp",
    keyword: "Choose Your Dawn", accent: "#d39b26",
    message: "Young sunflowers track the sun; mature flower heads settle facing east, warming early and welcoming more pollinators. Growth needs movement, but maturity needs direction. Before tomorrow's noise begins, choose the one action your morning will face.",
    practice: "Write tomorrow's first meaningful action tonight. Put it where you will see it at dawn.",
  },
  {
    name: "Rosemary", botanical: "Salvia rosmarinus", art: "assets/plants/rosemary.webp",
    keyword: "Remember the Promise", accent: "#53786b",
    message: "Rosemary stays aromatic through dry ground and has carried the meaning of remembrance for centuries. Pressure can reveal what is essential instead of erasing it. Name one promise you do not want distraction to take from you. Complete one action that proves you remember.",
    practice: "Say one promise aloud, then do its smallest visible action before the day ends.",
  },
  {
    name: "Garden Sage", botanical: "Salvia officinalis", art: "assets/plants/garden-sage.webp",
    keyword: "Wisdom That Saves", accent: "#75836d",
    message: "Sage's pale, softly haired leaves help it live with heat and dryness. Its name, Salvia, comes from a root meaning to save or heal. Useful wisdom conserves your life-force. Divide a page into Fact, Fear, and Assumption. Make your next choice from the Fact column.",
    practice: "Write three headings: Fact, Fear, Assumption. Sort the thought, then choose from what is actually known.",
  },
  {
    name: "Mugwort", botanical: "Artemisia vulgaris", art: "assets/plants/mugwort.webp",
    keyword: "The Hidden Underside", accent: "#79758d",
    message: "Mugwort shows green above and a woolly silver underside, while unseen rhizomes travel below the ground. It asks you to turn the image over before calling it a message. Write one dream symbol and the feeling beneath it. Do not predict; notice what is already moving under the surface.",
    practice: "Write one dream image, then finish: Beneath this image, I feel… Let the feeling be enough for today.",
  },
  {
    name: "Rose", botanical: "Rosa damascena", art: "assets/plants/rose.webp",
    keyword: "Tenderness With Protection", accent: "#ad6a75",
    message: "Rose carries fragrant petals, protective prickles, and nourishing hips on one living body. Tenderness and defense are not opposites. Write one wholehearted yes and one necessary no. Speak both without apology so your love has a shape it can safely inhabit.",
    practice: "Say aloud: My yes is ___. My no is ___. Let both sentences protect what you love.",
  },
  {
    name: "Dandelion", botanical: "Taraxacum officinale", art: "assets/plants/dandelion.webp",
    keyword: "Root and Release", accent: "#bd972c",
    message: "Dandelion survives harsh ground through a deep taproot, then sends parachute seeds far beyond itself. It knows when to anchor and when to release. Write one hope you will root through daily care. Beneath it, cross out one rule about exactly how that hope must arrive.",
    practice: "Choose one daily root for your hope, then release one demand about the route it must take.",
  },
  {
    name: "Stinging Nettle", botanical: "Urtica dioica", art: "assets/plants/stinging-nettle.webp",
    keyword: "Boundary With Purpose", accent: "#4e7854",
    message: "Nettle's hollow stinging hairs make contact unmistakable, while the plant still feeds and shelters other lives. A boundary is not your whole identity; it protects what you are here to nourish. Name one no, then finish the sentence: This no protects my ability to…",
    practice: "Write: No to ___. This protects my ability to ___. Let the purpose guide how firmly you speak.",
  },
  {
    name: "Peppermint", botanical: "Mentha × piperita", art: "assets/plants/peppermint.webp",
    keyword: "Cooling Clarity", accent: "#4d8b73",
    message: "Peppermint's menthol activates the body's cold-sensing pathway, creating a cooling signal before the temperature itself changes. Not every urgent feeling requires an urgent act. Take three slow breaths, cool the response, then name the next useful step in one sentence.",
    practice: "Pause for three breaths. Say: I can feel urgency without obeying it. Choose one cool, useful action.",
  },
  {
    name: "Basil", botanical: "Ocimum basilicum", art: "assets/plants/basil.webp",
    keyword: "Tended Abundance", accent: "#47794c",
    message: "Pinching basil's growing centers encourages the plant to branch and become fuller. Abundance is shaped by attention, not endless accumulation. Choose what you want to grow. Tend it with one precise action, then share one leaf of its goodness with another person.",
    practice: "Tend one sustaining thing for ten minutes, then share a useful piece of it with someone else.",
  },
  {
    name: "Echinacea", botanical: "Echinacea purpurea", art: "assets/plants/echinacea.webp",
    keyword: "Strong Center", accent: "#9a667f",
    message: "Echinacea is named for its hedgehog-like, spiny center, where many small florets feed pollinators before the seed head feeds birds. A strong center can serve more than itself. Place a hand at your center. Decide where your energy can create nourishment and where it cannot.",
    practice: "Place a hand over your center. Name one worthy recipient of your energy and one place you will conserve it.",
  },
  {
    name: "Jasmine", botanical: "Jasminum officinale", art: "assets/plants/jasmine.webp",
    keyword: "Devotion to Yourself", accent: "#8d8d67",
    message: "Jasmine has long been woven into offerings, adornment, love, and devotion. Its evening fragrance can change the atmosphere around it. Jasmine is asking you to turn that devotion toward yourself. Choose one generous act of care, such as a warm bath, your favorite sugar scrub, or fresh sheets, and keep the appointment.",
    practice: "Create one unhurried care ritual: a warm bath, a gentle sugar scrub that agrees with your skin, fresh sheets, body lotion, or ten phone-free minutes. Choose what genuinely restores you, and do not rush it.",
  },
  {
    name: "Lemon Balm", botanical: "Melissa officinalis", art: "assets/plants/lemon-balm.webp",
    keyword: "Let Warmth Spread", accent: "#6f8b5e",
    message: "Lemon balm offers lemon-scented leaves, tiny flowers bees love, and rhizomes that keep spreading once it is established. Warmth often returns through something small and repeated. Choose one five-minute act that lifts your heart, then place it on tomorrow's calendar too.",
    practice: "Do one five-minute kindness for your nervous system. Schedule the same small kindness for tomorrow.",
  },
  {
    name: "Red Clover", botanical: "Trifolium pratense", art: "assets/plants/red-clover.webp",
    keyword: "Reciprocal Plenty", accent: "#a65372",
    message: "Red clover partners with soil bacteria to make nitrogen available and offers nectar when allowed to flower. Its abundance comes through relationship: root, microbe, bloom, pollinator, field. Give one useful thing today and make one clear request for support. Let plenty move both ways.",
    practice: "Offer one useful gift and ask for one needed form of support. Practice being part of the exchange.",
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
    image.src = `${cardAssetBase}-${side}.webp?v=20260827-5`;
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
  const cardFrontSrc = `${cardAssetBase}-front.webp?v=20260827-5`;
  const cardBackSrc = `${cardAssetBase}-back.webp?v=20260827-5`;
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
  plantArt.title = `${plant.name} Plant Oracle card: ${plant.keyword}`;
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
        image: `/${plant.art.replace(/^\/+/, "")}`,
        href: "/plant-oracle",
      });
    }
  }
}
