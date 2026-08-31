const animalGuides = [
  {
    name: "Owl",
    assetSlug: "blue-owl",
    art: "assets/animals/blue-owl.webp",
    isolatedArt: "assets/animals/blue-owl-cutout-v1.webp",
    keyword: "Listen Before Looking",
    accent: "#86b8d8",
    message:
      "Receive before you look for proof. The truth is already speaking.",
    echo:
      "When Owl returns, pause and listen. Let it confirm hearing, not fear.",
  },
  {
    name: "Octopus",
    art: "assets/animals/octopus.webp",
    keyword: "More Than One Way",
    accent: "#ad83bc",
    message:
      "You are not stuck. Another way is already here.",
    echo:
      "When Octopus returns, ask what other way is available.",
  },
  {
    name: "Tiger",
    art: "assets/animals/tiger.webp",
    keyword: "Gathered Power",
    accent: "#d79a55",
    message:
      "Hold your energy for one true move. Strength is quieter than chase.",
    echo:
      "When Tiger returns, go back to the one thing that matters.",
  },
  {
    name: "Parrot",
    art: "assets/animals/parrot.webp",
    keyword: "Kindness Comes Back",
    accent: "#79ad83",
    message:
      "Speak to yourself as you would to someone you love.",
    echo:
      "When Parrot returns, soften the inner voice.",
  },
  {
    name: "Fox",
    art: "assets/animals/fox.webp",
    keyword: "Choose the Wiser Path",
    accent: "#c8794f",
    message:
      "The wiser path is often the quieter one. Protect your energy as you move.",
    echo:
      "When Fox returns, pause before forcing the obvious route.",
  },
  {
    name: "Bunny Rabbit",
    art: "assets/animals/bunny-rabbit.webp",
    keyword: "Gentle Readiness",
    accent: "#d7b6aa",
    message:
      "Stay ready without living in panic. Softness can still be alert.",
    echo:
      "When Bunny Rabbit returns, soften your breath and stay gentle.",
  },
  {
    name: "Mole",
    art: "assets/animals/mole.webp",
    keyword: "Trust What You Can Touch",
    accent: "#9b876e",
    message:
      "You do not need to see everything. Trust what your hands already know.",
    echo:
      "When Mole returns, touch what is actually in front of you.",
  },
  {
    name: "Turtle",
    art: "assets/animals/turtle.webp",
    keyword: "Carry Your Center",
    accent: "#719b7b",
    message:
      "Take your safety with you. Slow is still progress.",
    echo:
      "When Turtle returns, return to your own pace.",
  },
  {
    name: "Hummingbird",
    art: "assets/animals/hummingbird.webp",
    keyword: "Joy and Restoration",
    accent: "#6ab3a9",
    message:
      "Joy is fuel. Rest keeps you able to receive it.",
    echo:
      "When Hummingbird returns, receive the joy and protect the rest.",
  },
  {
    name: "Bear",
    art: "assets/animals/bear.webp",
    keyword: "Seasonal Power",
    accent: "#9c765b",
    message:
      "Honor the season you are in. Rest and action both hold power.",
    echo:
      "When Bear returns, ask whether this is a season to act or restore.",
  },
  {
    name: "Deer",
    art: "assets/animals/deer.webp",
    keyword: "Sensitive Renewal",
    accent: "#b79a71",
    message:
      "Your sensitivity is strength. Release what no longer fits so you can hear.",
    echo:
      "When Deer returns, notice what your body has been repeating.",
  },
  {
    name: "Crow",
    art: "assets/animals/crow.webp",
    keyword: "Notice What Returns",
    accent: "#7f819a",
    message:
      "What keeps returning is asking for your attention.",
    echo:
      "When Crow returns, notice the thought present in that exact moment.",
  },
  {
    name: "Whale",
    art: "assets/animals/whale.webp",
    keyword: "Deep Breath, Far Voice",
    accent: "#6e9bb2",
    message:
      "Breathe, then speak the deeper truth.",
    echo:
      "When Whale returns, take a full breath before you answer.",
  },
  {
    name: "Frog",
    art: "assets/animals/frog.webp",
    keyword: "Make Room for Change",
    accent: "#75a765",
    message:
      "Change needs room, not pressure. Adjust what surrounds you.",
    echo:
      "When Frog returns, ask whether your surroundings support the change.",
  },
  {
    name: "Spider",
    art: "assets/animals/spider.webp",
    keyword: "Follow the Strongest Thread",
    accent: "#a38b71",
    message:
      "Not every pull deserves you. Follow the one thread that matters today.",
    echo:
      "When Spider returns, give the strongest thread your attention.",
  },
  {
    name: "Horse",
    art: "assets/animals/horse.webp",
    keyword: "Directed Momentum",
    accent: "#b08766",
    message:
      "Move with a destination, and with someone who can travel beside you.",
    echo:
      "When Horse returns, name the destination before you speed up.",
  },
  {
    name: "Elephant",
    art: "assets/animals/elephant.webp",
    keyword: "Collective Memory",
    accent: "#8d9694",
    message:
      "You do not have to remember alone. Ask the ones who still hold the story.",
    echo:
      "When Elephant returns, remember your living council.",
  },
  {
    name: "Moth",
    art: "assets/animals/moth.webp",
    keyword: "Choose True Light",
    accent: "#bcae83",
    message:
      "Brightness is not the same as guidance. Turn toward the quieter light.",
    echo:
      "When Moth returns, ask what has captured your attention.",
  },
  {
    name: "Bee",
    art: "assets/animals/bee.webp",
    keyword: "Follow What Is Sweet",
    accent: "#d1ad55",
    message:
      "Follow the sweetness, not the noise. The right work has a scent.",
    echo:
      "When Bee returns, notice what actually feels sweet.",
  },
  {
    name: "Dolphin",
    art: "assets/animals/dolphin.webp",
    keyword: "Ask Clearly",
    accent: "#61a9bc",
    message:
      "Name what you need. A clear invitation is a form of love.",
    echo:
      "When Dolphin returns, make one clear invitation.",
  },
  {
    name: "Snake",
    art: "assets/animals/snake.webp",
    keyword: "Shed What No Longer Fits",
    accent: "#78965f",
    message:
      "You are allowed to outgrow what once protected you.",
    echo:
      "When Snake returns, ask what you are ready to stop carrying.",
  },
  {
    name: "Dragonfly",
    art: "assets/animals/dragonfly.webp",
    keyword: "Change Your View",
    accent: "#78b7ae",
    message:
      "Some answers need a new place to stand, not more effort in the old one.",
    echo:
      "When Dragonfly returns, change your view before you push harder.",
  },
];

const oracle = document.querySelector("[data-oracle]");
const oracleCard = document.querySelector("[data-oracle-card]");
const oracleResult = document.querySelector("[data-oracle-result]");
const oracleRitual = document.querySelector("[data-oracle-ritual]");
const revealButton = document.querySelector("[data-reveal-guide]");
const status = document.querySelector("[data-oracle-status]");
const previewTools = document.querySelector("[data-preview-tools]");
const previewNext = document.querySelector("[data-preview-next]");
const shareButton = document.querySelector("[data-share-guide]");
const guideName = document.querySelector("[data-guide-name]");
const guideNameBack = document.querySelector("[data-guide-name-back]");
const guideGlyph = document.querySelector("[data-guide-glyph]");
const guideGlyphEcho = document.querySelector("[data-guide-glyph-echo]");
const guideGlyphBack = document.querySelector("[data-guide-glyph-back]");
const guideTattoo = document.querySelector("[data-guide-tattoo]");
const animalCardFront = document.querySelector("[data-animal-card-front]");
const animalCardBack = document.querySelector("[data-animal-card-back]");
const guideKeyword = document.querySelector("[data-guide-keyword]");
const guideKeywordBack = document.querySelector("[data-guide-keyword-back]");
const guideMessage = document.querySelector("[data-guide-message]");
const guideWatch = document.querySelector("[data-guide-watch]");
const animalFlip = document.querySelector("[data-animal-flip]");
const animalFlipFront = document.querySelector("[data-animal-flip-front]");
const animalFlipBack = document.querySelector("[data-animal-flip-back]");
const cardFigure = document.querySelector("[data-card-figure]");
const cardSeoName = document.querySelector("[data-card-seo-name]");
const cardSeoDescription = document.querySelector("[data-card-seo-description]");
const cardSeoUrl = document.querySelector("[data-card-seo-url]");
const cardSeoCaption = document.querySelector("[data-card-seo-caption]");

const storageKey = "kela-animal-guide-v1";
const animalCardColors = [
  { name: "Teal", value: "#159d98" },
  { name: "Sunshine Yellow", value: "#f2c438" },
  { name: "Magenta", value: "#d8409a" },
  { name: "Royal Purple", value: "#6842c2" },
  { name: "Blue", value: "#3478d4" },
  { name: "Orange", value: "#f0822f" },
  { name: "Emerald", value: "#299663" },
  { name: "Coral", value: "#ec5e69" },
  { name: "Turquoise", value: "#2db7c0" },
  { name: "Indigo", value: "#4e59bd" },
];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let activeGuideIndex = -1;
let activeColorIndex = -1;
let animalTurnTimer = 0;

const localDateKey = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const readSavedGuide = () => {
  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey));
    if (
      saved?.date === localDateKey()
      && Number.isInteger(saved.index)
      && saved.index >= 0
      && saved.index < animalGuides.length
    ) {
      const colorIndex = Number.isInteger(saved.colorIndex)
        && saved.colorIndex >= 0
        && saved.colorIndex < animalCardColors.length
        ? saved.colorIndex
        : saved.index % animalCardColors.length;
      return { index: saved.index, colorIndex };
    }
  } catch {
    return null;
  }
  return null;
};

const saveGuide = (index, colorIndex) => {
  try {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ date: localDateKey(), index, colorIndex }),
    );
    const guide = animalGuides[index];
    if (guide) {
      window.KelaCompanions?.remember({
        deck: "animal",
        name: guide.name,
        image: `/${guide.art.replace(/^\/+/, "")}`,
        href: "/animal-oracle",
      });
    }
  } catch {
    // The oracle still works when browser storage is unavailable.
  }
};

const secureRandomIndex = (length) => {
  if (!window.crypto?.getRandomValues) return Math.floor(Math.random() * length);
  const range = 0x100000000;
  const ceiling = Math.floor(range / length) * length;
  const value = new Uint32Array(1);
  do window.crypto.getRandomValues(value);
  while (value[0] >= ceiling);
  return value[0] % length;
};

const randomGuideIndex = () => secureRandomIndex(animalGuides.length);
const randomColorIndex = () => secureRandomIndex(animalCardColors.length);
const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const guideAssetSlug = (guide) => guide.assetSlug || slugify(guide.name);
const animalProtectionInvocation = (guide) =>
  `“Dear ${guide.name}, please protect my mind. Only let kind thoughts enter my field.”`;

const preloadGuideCard = (index) => {
  const guide = animalGuides[index];
  if (!guide) return Promise.resolve();
  const cardAssetBase = `assets/oracle-cards/animal/${guideAssetSlug(guide)}`;
  const preloadFace = (image, side) => new Promise((resolve) => {
    if (!image) return resolve();
    const finish = () => {
      image.removeEventListener("load", finish);
      image.removeEventListener("error", finish);
      resolve();
    };
    image.addEventListener("load", finish);
    image.addEventListener("error", finish);
    image.src = `${cardAssetBase}-${side}.webp?v=${side === "front" ? "20260830-center" : "20260828-1"}`;
    if (image.complete && image.naturalWidth > 0) finish();
  });
  return Promise.all([
    preloadFace(animalCardFront, "front"),
    preloadFace(animalCardBack, "back"),
  ]);
};

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", content);
};

const updateGuideSeo = (guide, cardColor) => {
  const slug = guideAssetSlug(guide);
  const colorSlug = slugify(cardColor.name);
  const seoUrl = new URL("/animal-oracle", window.location.origin);
  const cardUrl = new URL(seoUrl);
  cardUrl.searchParams.set("color", colorSlug);
  const description = `${guide.name} Animal Oracle card: ${guide.keyword}. Read its original KELA message and protection prompt.`;
  const imageLabel = `${guide.name}: ${guide.keyword}, a KELA Animal Oracle card with a full-bleed wildlife photograph and a spiritual protection message.`;

  oracleCard.dataset.guideSlug = slug;
  oracleCard.dataset.cardColor = colorSlug;
  oracleCard.dataset.cardUrl = cardUrl.href;
  cardFigure?.setAttribute("aria-label", imageLabel);
  cardSeoName?.setAttribute("content", `${guide.name} Animal Oracle card`);
  cardSeoDescription?.setAttribute("content", description);
  cardSeoUrl?.setAttribute("href", seoUrl.href);
  if (cardSeoCaption) cardSeoCaption.textContent = imageLabel;
  if (guideGlyph) guideGlyph.title = `${guide.name} Animal Oracle card: ${guide.keyword}`;

  document.title = `${guide.name} Animal Oracle Card Meaning | KELA`;
  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:title"]', `${guide.name} Animal Oracle Card | KELA`);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[property="og:url"]', seoUrl.href);
  setMetaContent('meta[property="og:image:alt"]', imageLabel);
  setMetaContent('meta[name="twitter:title"]', `${guide.name} Animal Oracle Card | KELA`);
  setMetaContent('meta[name="twitter:description"]', description);
  setMetaContent('meta[name="twitter:image:alt"]', imageLabel);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", seoUrl.href);
};

const fillGuide = (index, colorIndex) => {
  const guide = animalGuides[index];
  const cardColor = animalCardColors[colorIndex] || animalCardColors[0];
  if (!guide || !oracleCard || !oracleResult) return;
  activeGuideIndex = index;
  activeColorIndex = animalCardColors.indexOf(cardColor);
  oracleCard.style.setProperty("--guide-accent", cardColor.value);
  updateGuideSeo(guide, cardColor);
  const cardAssetBase = `assets/oracle-cards/animal/${guideAssetSlug(guide)}`;
  const cardFrontSrc = `${cardAssetBase}-front.webp?v=20260830-center`;
  const cardBackSrc = `${cardAssetBase}-back.webp?v=20260828-1`;
  if (animalCardFront) {
    if (animalCardFront.getAttribute("src") !== cardFrontSrc) animalCardFront.src = cardFrontSrc;
    animalCardFront.alt = `${guide.name} KELA Animal Oracle card`;
  }
  if (animalCardBack) {
    if (animalCardBack.getAttribute("src") !== cardBackSrc) animalCardBack.src = cardBackSrc;
    animalCardBack.alt = `${guide.name} KELA Animal Oracle meaning card`;
  }
  if (guideName) guideName.textContent = guide.name;
  if (guideNameBack) guideNameBack.textContent = guide.name;
  if (guideGlyph) {
    guideGlyph.src = guide.isolatedArt || guide.art;
    guideGlyph.alt = `Pencil illustration of the ${guide.name} Animal Oracle card from the KELA oracle deck`;
  }
  if (guideGlyphEcho) guideGlyphEcho.src = guide.isolatedArt || guide.art;
  if (guideGlyphBack) guideGlyphBack.src = guide.art;
  if (guideTattoo) {
    guideTattoo.hidden = false;
    guideTattoo.onerror = () => { guideTattoo.hidden = true; };
    guideTattoo.src = `assets/oracle-cards/tattoos/animal/${guideAssetSlug(guide)}.webp?v=20260830-tattoo2`;
  }
  if (guideKeyword) guideKeyword.textContent = guide.keyword;
  if (guideKeywordBack) guideKeywordBack.textContent = guide.keyword;
  if (guideMessage) guideMessage.textContent = guide.message;
  if (guideWatch) {
    guideWatch.textContent = animalProtectionInvocation(guide);
  }
};

const commitAnimalFace = (showMeaning) => {
  if (!animalFlip) return;
  const guide = animalGuides[activeGuideIndex];
  animalFlip.classList.toggle("is-flipped", showMeaning);
  animalFlip.setAttribute("aria-pressed", String(showMeaning));
  animalFlip.setAttribute(
    "aria-label",
    guide
      ? `${guide.name} Animal Oracle card: ${showMeaning ? "show the animal" : "reveal its meaning"}`
      : showMeaning ? "Show the animal" : "Reveal this animal's meaning",
  );
  animalFlipFront?.setAttribute("aria-hidden", String(showMeaning));
  animalFlipBack?.setAttribute("aria-hidden", String(!showMeaning));
};

const setAnimalFace = (showMeaning, { animate = false } = {}) => {
  if (!animalFlip) return;
  if (animalFlip.classList.contains("is-turning")) {
    if (animate) return;
    window.clearTimeout(animalTurnTimer);
    animalFlip.classList.remove("is-turning");
    commitAnimalFace(showMeaning);
    return;
  }
  const isShowingMeaning = animalFlip.classList.contains("is-flipped");
  if (isShowingMeaning === showMeaning) return;
  window.clearTimeout(animalTurnTimer);
  if (!animate || prefersReducedMotion) {
    animalFlip.classList.remove("is-turning");
    commitAnimalFace(showMeaning);
    return;
  }
  animalFlip.classList.add("is-turning");
  animalTurnTimer = window.setTimeout(() => {
    commitAnimalFace(showMeaning);
    window.requestAnimationFrame(() => animalFlip.classList.remove("is-turning"));
  }, 170);
};

const toggleAnimalFace = () => {
  if (!animalFlip) return;
  setAnimalFace(!animalFlip.classList.contains("is-flipped"), { animate: true });
};

const showGuide = (
  index,
  { focus = true, save = true, colorIndex = randomColorIndex() } = {},
) => {
  if (!oracleCard || !oracleResult || !oracleRitual) return;
  fillGuide(index, colorIndex);
  setAnimalFace(false);
  if (save) saveGuide(index, activeColorIndex);
  oracleResult.hidden = false;
  oracleRitual.hidden = true;
  oracleCard.classList.remove("is-listening");
  oracleCard.classList.add("is-revealed");
  if (status) status.textContent = `${animalGuides[index].name} is walking with you today.`;
  if (focus) {
    window.setTimeout(() => {
      oracleCard.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "center",
      });
      oracleResult.focus({ preventScroll: true });
    }, prefersReducedMotion ? 0 : 550);
  }
};

const beginReveal = () => {
  if (!oracleCard || !revealButton) return;
  revealButton.disabled = true;
  oracleCard.classList.add("is-listening");
  if (status) status.textContent = "The grove is listening. Take one slow breath.";
  const guideIndex = randomGuideIndex();
  const colorIndex = randomColorIndex();
  const minimumPause = new Promise((resolve) => {
    window.setTimeout(resolve, prefersReducedMotion ? 50 : 2800);
  });
  const preloadLimit = new Promise((resolve) => window.setTimeout(resolve, 5000));
  Promise.all([minimumPause, Promise.race([preloadGuideCard(guideIndex), preloadLimit])])
    .then(() => showGuide(guideIndex, { colorIndex }));
};

const copyGuideText = async () => {
  const guide = animalGuides[activeGuideIndex];
  if (!guide || !shareButton) return;
  const cardColor = animalCardColors[activeColorIndex];
  const text = [
    `${guide.name}: ${guide.keyword}`,
    cardColor ? `Today's card color: ${cardColor.name}` : "",
    guide.message,
    `Protection & confirmation: ${animalProtectionInvocation(guide)}`,
    window.location.href,
  ].filter(Boolean).join("\n\n");

  try {
    if (navigator.share) {
      await navigator.share({ title: `My KELA Animal Oracle card: ${guide.name}`, text, url: window.location.href });
      return;
    }
    await navigator.clipboard.writeText(text);
    const label = shareButton.querySelector("span");
    if (label) label.textContent = "Card copied";
    window.setTimeout(() => {
      const currentLabel = shareButton.querySelector("span");
      if (currentLabel) currentLabel.textContent = "Share this card";
    }, 1800);
  } catch (error) {
    if (error?.name !== "AbortError") {
      const label = shareButton.querySelector("span");
      if (label) label.textContent = "Sharing unavailable";
      window.setTimeout(() => {
        const currentLabel = shareButton.querySelector("span");
        if (currentLabel) currentLabel.textContent = "Share this card";
      }, 1800);
    }
  }
};

revealButton?.addEventListener("click", beginReveal);
shareButton?.addEventListener("click", copyGuideText);
animalFlip?.addEventListener("click", toggleAnimalFace);
animalFlip?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  toggleAnimalFace();
});

const isLocalPreview = ["", "localhost", "127.0.0.1"].includes(window.location.hostname);
if (previewTools && isLocalPreview) previewTools.hidden = false;

previewNext?.addEventListener("click", () => {
  const nextIndex = activeGuideIndex < 0 ? 0 : (activeGuideIndex + 1) % animalGuides.length;
  showGuide(nextIndex, { focus: false });
});

const previewParams = new URLSearchParams(window.location.search);
const requestedPreview = Number.parseInt(previewParams.get("guide"), 10);
const requestedColor = Number.parseInt(previewParams.get("color"), 10);
const requestedColorSlug = slugify(previewParams.get("color") || "");
const requestedColorBySlug = animalCardColors.findIndex((color) => slugify(color.name) === requestedColorSlug);
const previewColorIndex = requestedColorBySlug >= 0
  ? requestedColorBySlug
  : Number.isInteger(requestedColor)
  && requestedColor >= 0
  && requestedColor < animalCardColors.length
  ? requestedColor
  : randomColorIndex();
const requestedCardSlug = slugify(previewParams.get("card") || "");
const requestedCardIndex = animalGuides.findIndex((guide) =>
  guideAssetSlug(guide) === requestedCardSlug || slugify(guide.name) === requestedCardSlug
);
const requestedFoundSlug = slugify(previewParams.get("found") || "");
const savedFoundGuide = window.KelaCompanions?.getFound?.("animal");
const requestedFoundIndex = savedFoundGuide?.slug === requestedFoundSlug
  ? animalGuides.findIndex((guide) =>
      guideAssetSlug(guide) === requestedFoundSlug || slugify(guide.name) === requestedFoundSlug
    )
  : -1;
if (oracle && requestedFoundIndex >= 0) {
  showGuide(requestedFoundIndex, {
    focus: false,
    save: false,
    colorIndex: requestedFoundIndex % animalCardColors.length,
  });
  if (status) status.textContent = `${animalGuides[requestedFoundIndex].name} found you in the memory game.`;
} else if (oracle && isLocalPreview && requestedCardIndex >= 0) {
  showGuide(requestedCardIndex, { focus: false, save: false, colorIndex: previewColorIndex });
  if (previewParams.get("side") === "meaning") setAnimalFace(true);
} else if (
  oracle
  && isLocalPreview
  && Number.isInteger(requestedPreview)
  && requestedPreview >= 0
  && requestedPreview < animalGuides.length
) {
  showGuide(requestedPreview, { focus: false, save: false, colorIndex: previewColorIndex });
  if (previewParams.get("side") === "meaning") setAnimalFace(true);
} else {
  const savedGuide = readSavedGuide();
  if (oracle && savedGuide) {
    showGuide(savedGuide.index, {
      focus: false,
      save: false,
      colorIndex: savedGuide.colorIndex,
    });
    const guide = animalGuides[savedGuide.index];
    if (guide) {
      window.KelaCompanions?.remember({
        deck: "animal",
        name: guide.name,
        image: `/${guide.art.replace(/^\/+/, "")}`,
        href: "/animal-oracle",
      });
    }
  }
}
