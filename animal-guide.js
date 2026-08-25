const animalGuides = [
  {
    name: "Blue Owl",
    art: "assets/animals/blue-owl.webp",
    isolatedArt: "assets/animals/blue-owl-cutout-v1.webp",
    keyword: "Quiet confirmation",
    accent: "#86b8d8",
    message:
      "The Blue Owl arrives when part of you already knows. You do not need to force an answer tonight. Make enough quiet to hear the wisdom that has been waiting beneath the noise.",
    echo:
      "If an owl begins appearing—in a toy, picture, conversation, book, dream, song, or beside a tree—pause. Its return may be confirmation that your quiet knowing deserves your trust.",
  },
  {
    name: "Octopus",
    art: "assets/animals/octopus.webp",
    keyword: "Many paths",
    accent: "#ad83bc",
    message:
      "Octopus reminds you that flexibility is a form of intelligence. One route closing does not mean the journey has ended. You may be ready to loosen your grip and work with more than one possibility.",
    echo:
      "If an octopus finds you through a picture, toy, menu, conversation, pattern, or unexpected reference, let it confirm that another route is available. You are allowed to adapt without abandoning yourself.",
  },
  {
    name: "Tiger",
    art: "assets/animals/tiger.webp",
    keyword: "Focused courage",
    accent: "#d79a55",
    message:
      "Tiger does not scatter its power. It gathers, watches, and moves when the moment is right. Your confirmation may be asking for one brave, deliberate step instead of ten anxious ones.",
    echo:
      "When tiger stripes, images, names, toys, or stories begin crossing your path, pause. Tiger may be confirming that you have enough strength for the next clear action.",
  },
  {
    name: "Parrot",
    art: "assets/animals/parrot.webp",
    keyword: "The repeated word",
    accent: "#79ad83",
    message:
      "Parrot symbolizes communication, repetition, and authentic expression. Notice the words or ideas that keep returning; they may be guiding you toward what needs to be heard or spoken.",
    echo:
      "If parrots appear—or the same unusual words keep arriving through different people and places—receive the repetition as confirmation. Notice what is being echoed and what you are ready to say.",
  },
  {
    name: "Fox",
    art: "assets/animals/fox.webp",
    keyword: "Wise discernment",
    accent: "#c8794f",
    message:
      "Fox knows that the straight path is not always the wisest path. Look again. A subtle opening, clever adjustment, or quiet boundary may carry you farther than pushing harder.",
    echo:
      "When a fox appears in art, language, a logo, a story, a toy, or the landscape, pause. Its appearance may confirm that you are seeing the hidden path more clearly than you realize.",
  },
  {
    name: "Bunny Rabbit",
    art: "assets/animals/bunny-rabbit.webp",
    keyword: "Tender readiness",
    accent: "#d7b6aa",
    message:
      "Bunny Rabbit brings alertness without hardness. A gentle opening is still an opening. You can move toward what is new while staying close to the ground and kind to your nervous system.",
    echo:
      "If rabbits hop into your day through nature, a child’s toy, a book, a picture, or a passing phrase, let their arrival confirm that a new beginning can be approached softly.",
  },
  {
    name: "Mole",
    art: "assets/animals/mole.webp",
    keyword: "The unseen work",
    accent: "#9b876e",
    message:
      "Mole works below the surface, where progress cannot always be witnessed. Something important may be taking root before it becomes visible. Darkness is not proof that nothing is happening.",
    echo:
      "If a mole, burrow, tunnel, mound, or underground image catches your attention, pause. It may confirm that the work you cannot yet show is still real and still moving.",
  },
  {
    name: "Turtle",
    art: "assets/animals/turtle.webp",
    keyword: "Right timing",
    accent: "#719b7b",
    message:
      "Turtle carries home and direction together. Slow does not mean stuck. Protect what is tender, keep your pace honest, and let steadiness become its own kind of progress.",
    echo:
      "When a turtle appears in conversation, jewelry, a picture, a toy, a dream, or near water, receive it as confirmation that your pace does not need to match anyone else’s.",
  },
  {
    name: "Hummingbird",
    art: "assets/animals/hummingbird.webp",
    keyword: "Small joy",
    accent: "#6ab3a9",
    message:
      "Hummingbird finds nourishment in precise, shining moments. You do not need a perfect life to receive real sweetness. Follow the small thing that brings your spirit back into the room.",
    echo:
      "If a hummingbird flashes through your day—in nature, an ornament, a picture, a gift, or someone’s words—pause. Its arrival may confirm that joy is not a distraction from your path; it is fuel for it.",
  },
  {
    name: "Bear",
    art: "assets/animals/bear.webp",
    keyword: "Sacred boundaries",
    accent: "#9c765b",
    message:
      "Bear knows when to stand tall and when to retreat into rest. Protecting your inner sanctuary is not selfish. A strong boundary may be the kindness your whole life needs.",
    echo:
      "When a bear appears through a story, logo, stuffed animal, conversation, dream, or woodland sign, let it confirm your permission to rest, protect, or say a grounded no.",
  },
  {
    name: "Deer",
    art: "assets/animals/deer.webp",
    keyword: "Soft strength",
    accent: "#b79a71",
    message:
      "Deer notices what others rush past. Sensitivity is not weakness; it is information. Move gently enough to hear what your body and surroundings have already been telling you.",
    echo:
      "If deer begin appearing in the landscape, a picture, clothing, conversation, or dream, pause. Their presence may confirm that your softness is helping you navigate wisely.",
  },
  {
    name: "Crow",
    art: "assets/animals/crow.webp",
    keyword: "Confirmation is coming",
    accent: "#7f819a",
    message:
      "Crow is your confirmation animal for today. It may show up when you need reassurance that you are moving in the right direction. You do not need to search for Crow. Let Crow find you.",
    echo:
      "Crow may appear as a living bird, its call, a black feather, a picture, logo, toy, book, dream, or someone unexpectedly mentioning a crow. When Crow shows up, pause and remember the path you asked about today. Receive the timing as the confirmation you were asking for.",
  },
  {
    name: "Whale",
    art: "assets/animals/whale.webp",
    keyword: "The deeper voice",
    accent: "#6e9bb2",
    message:
      "Whale carries a voice across enormous distances. Beneath surface noise, a deeper truth is sounding through you. Give it enough space to become a clear note.",
    echo:
      "If whales surface through a documentary, song, conversation, artwork, toy, or dream, receive their arrival as confirmation to listen beneath the obvious and honor your deeper voice.",
  },
  {
    name: "Frog",
    art: "assets/animals/frog.webp",
    keyword: "Crossing seasons",
    accent: "#75a765",
    message:
      "Frog belongs to water and land. You are allowed to be between worlds while a transition completes. What feels unfamiliar may simply be the next environment teaching you how to breathe.",
    echo:
      "When frogs, lily pads, rainy-night calls, green figures, or frog references appear, pause. Frog may be confirming that you are crossing a real threshold, even if you have not fully arrived.",
  },
  {
    name: "Spider",
    art: "assets/animals/spider.webp",
    keyword: "Intentional weaving",
    accent: "#a38b71",
    message:
      "Spider creates through patient connection. Each choice is a strand, and the pattern becomes visible over time. You do not need to weave everything today—only the next honest thread.",
    echo:
      "If spiders, webs, woven patterns, or web-like language begin appearing, pause. Their presence may confirm that your small choices are forming something larger and more coherent.",
  },
  {
    name: "Horse",
    art: "assets/animals/horse.webp",
    keyword: "Directed momentum",
    accent: "#b08766",
    message:
      "Horse carries freedom through movement, relationship, and direction. Your energy may be ready to travel, but it needs a path worthy of its strength.",
    echo:
      "When horses appear in a field, film, conversation, logo, toy, or dream, let their arrival confirm that momentum is returning. Choose where you want that energy to carry you.",
  },
  {
    name: "Elephant",
    art: "assets/animals/elephant.webp",
    keyword: "Remembered strength",
    accent: "#8d9694",
    message:
      "Elephant remembers the path and the ones who walked it together. You may already possess the experience, support, or wisdom needed for this moment. Remember what has carried you before.",
    echo:
      "If elephants arrive through a figurine, pattern, gift, book, conversation, or dream, pause. Their presence may confirm that an old strength or trusted connection is still available to you.",
  },
  {
    name: "Moth",
    art: "assets/animals/moth.webp",
    keyword: "Discerned intuition",
    accent: "#bcae83",
    message:
      "Moth is drawn by light, yet not every brightness is meant to guide you. Let intuition and discernment travel together. The right light will not require you to abandon yourself.",
    echo:
      "When moths, winged night shapes, lamps, fabric patterns, or moonlit images begin appearing, pause. Moth may be confirming the direction of your attention while asking you to choose your light carefully.",
  },
  {
    name: "Bee",
    art: "assets/animals/bee.webp",
    keyword: "Meaningful belonging",
    accent: "#d1ad55",
    message:
      "Bee brings individual purpose into a living community. Your contribution matters, but you were never meant to carry the whole hive alone. Let giving and receiving become reciprocal.",
    echo:
      "If bees, honeycomb, buzzing, bee jewelry, logos, or conversation begin following you, pause. Their presence may confirm that the right work and the right community are trying to meet.",
  },
  {
    name: "Dolphin",
    art: "assets/animals/dolphin.webp",
    keyword: "Playful connection",
    accent: "#61a9bc",
    message:
      "Dolphin moves through intelligence, relationship, and play. Lightness is not always avoidance. Sometimes it is the doorway that lets communication and possibility move again.",
    echo:
      "When dolphins surface in media, a conversation, a toy, a logo, a dream, or near water, receive their appearance as confirmation that joy and honest connection can help open the way.",
  },
  {
    name: "Snake",
    art: "assets/animals/snake.webp",
    keyword: "Necessary renewal",
    accent: "#78965f",
    message:
      "Snake cannot keep a skin it has outgrown. Release can feel vulnerable before it feels freeing. What no longer fits may be ready to leave without becoming an enemy.",
    echo:
      "If snakes, shed skins, winding patterns, jewelry, stories, or unexpected references appear, pause. Snake may be confirming that a cycle of renewal has already begun.",
  },
  {
    name: "Dragonfly",
    art: "assets/animals/dragonfly.webp",
    keyword: "A clearer angle",
    accent: "#78b7ae",
    message:
      "Dragonfly changes direction in an instant and catches light from more than one angle. The truth may not be hidden; you may simply need to view it from another position.",
    echo:
      "When dragonflies, iridescent wings, delicate jewelry, pictures, or conversation begin appearing, pause. Their arrival may confirm that a shift in perspective is already bringing clarity.",
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

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", content);
};

const updateGuideSeo = (guide, cardColor) => {
  const slug = slugify(guide.name);
  const colorSlug = slugify(cardColor.name);
  const seoUrl = new URL(`/animal-oracle/${slug}`, window.location.origin);
  const cardUrl = new URL(seoUrl);
  cardUrl.searchParams.set("color", colorSlug);
  const description = `${guide.name} Animal Oracle card — ${guide.keyword}. Read its original KELA message and protection prompt.`;
  const imageLabel = `${guide.name} — ${guide.keyword}, a KELA Animal Oracle card with a pencil illustration and a spiritual protection message.`;

  oracleCard.dataset.guideSlug = slug;
  oracleCard.dataset.cardColor = colorSlug;
  oracleCard.dataset.cardUrl = cardUrl.href;
  cardFigure?.setAttribute("aria-label", imageLabel);
  cardSeoName?.setAttribute("content", `${guide.name} Animal Oracle card`);
  cardSeoDescription?.setAttribute("content", description);
  cardSeoUrl?.setAttribute("href", seoUrl.href);
  if (cardSeoCaption) cardSeoCaption.textContent = imageLabel;
  if (guideGlyph) guideGlyph.title = `${guide.name} Animal Oracle card — ${guide.keyword}`;

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
  window.history.replaceState(null, "", `${cardUrl.pathname}${cardUrl.search}`);
};

const fillGuide = (index, colorIndex) => {
  const guide = animalGuides[index];
  const cardColor = animalCardColors[colorIndex] || animalCardColors[0];
  if (!guide || !oracleCard || !oracleResult) return;
  activeGuideIndex = index;
  activeColorIndex = animalCardColors.indexOf(cardColor);
  oracleCard.style.setProperty("--guide-accent", cardColor.value);
  updateGuideSeo(guide, cardColor);
  const cardAssetBase = `assets/oracle-cards/animal/${slugify(guide.name)}`;
  if (animalCardFront) {
    animalCardFront.src = `${cardAssetBase}-front.webp?v=20260824-15`;
    animalCardFront.alt = `${guide.name} KELA Animal Oracle card`;
  }
  if (animalCardBack) {
    animalCardBack.src = `${cardAssetBase}-back.webp?v=20260824-9`;
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
  if (guideKeyword) guideKeyword.textContent = guide.keyword;
  if (guideKeywordBack) guideKeywordBack.textContent = guide.keyword;
  if (guideMessage) guideMessage.textContent = guide.message;
  if (guideWatch) {
    guideWatch.textContent =
      `Tune into ${guide.name}. Ask ${guide.name} to protect your mind and energy today.`;
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
      ? `${guide.name} Animal Oracle card — ${showMeaning ? "show its illustration" : "reveal its meaning"}`
      : showMeaning ? "Show the animal illustration" : "Reveal this animal's meaning",
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
  window.setTimeout(
    () => showGuide(randomGuideIndex()),
    prefersReducedMotion ? 50 : 2800,
  );
};

const copyGuideText = async () => {
  const guide = animalGuides[activeGuideIndex];
  if (!guide || !shareButton) return;
  const cardColor = animalCardColors[activeColorIndex];
  const text = [
    `${guide.name} — ${guide.keyword}`,
    cardColor ? `Today's card color: ${cardColor.name}` : "",
    guide.message,
    `Protection & confirmation: Ask ${guide.name} to protect your mind and energy. Watch for ${guide.name} to begin showing up as confirmation.`,
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
const pathParts = window.location.pathname.split("/").filter(Boolean);
const pathCardSlug = pathParts[0] === "animal-oracle" && pathParts.length > 1 ? pathParts[1] : "";
const requestedCardSlug = slugify(previewParams.get("card") || pathCardSlug);
const requestedCardIndex = animalGuides.findIndex((guide) => slugify(guide.name) === requestedCardSlug);
if (oracle && requestedCardIndex >= 0) {
  showGuide(requestedCardIndex, { focus: false, save: false, colorIndex: previewColorIndex });
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
  }
}
