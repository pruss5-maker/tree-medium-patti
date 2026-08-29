const animalGuides = [
  {
    name: "Blue Owl",
    art: "assets/animals/blue-owl.webp",
    isolatedArt: "assets/animals/blue-owl-cutout-v1.webp",
    keyword: "Listen Before Looking",
    accent: "#86b8d8",
    message:
      "Owl's facial disk directs sound toward ears placed at different heights, while soft feather edges quiet its flight. Blue Owl asks you to receive before you pursue. Close your eyes for three breaths. Name the truth you can hear when you stop searching for proof.",
    echo:
      "If Blue Owl finds you in a picture, dream, story, sound, or beside a tree, pause. Repeat the truth you named. Let the encounter confirm listening, not fear.",
  },
  {
    name: "Octopus",
    art: "assets/animals/octopus.webp",
    keyword: "More Than One Way",
    accent: "#ad83bc",
    message:
      "Octopus survives without a shell by changing color, shape, and direction. Its wisdom is flexibility: one blocked path does not mean you are stuck. Write down three ways you could move forward. Choose the smallest, safest one and test it today.",
    echo:
      "If Octopus finds you through an image, object, conversation, or unexpected reference, stop searching for one perfect plan. Ask: What other way is available?",
  },
  {
    name: "Tiger",
    art: "assets/animals/tiger.webp",
    keyword: "Gathered Power",
    accent: "#d79a55",
    message:
      "Tiger is an ambush hunter: it relies on camouflage, patience, and one concentrated movement rather than constant pursuit. Gather your energy around one target. Write the next deliberate step in five words or fewer, then do only that before expanding the plan.",
    echo:
      "When Tiger's stripes, name, image, or story crosses your path, return to the one target you chose. Let it confirm concentration rather than force.",
  },
  {
    name: "Parrot",
    art: "assets/animals/parrot.webp",
    keyword: "Kindness Comes Back",
    accent: "#79ad83",
    message:
      "Parrots are social, sensitive beings who respond to patience, trust, and gentle attention. Offer that kindness to yourself. Name one thing you have judged yourself for. Speak to yourself as you would to someone you love, forgive yourself for being human, and take one gentle step forward.",
    echo:
      "If Parrot appears through a living bird, voice, image, story, or dream, let it remind you to soften your inner voice. Ask: What would forgiveness let me do next?",
  },
  {
    name: "Fox",
    art: "assets/animals/fox.webp",
    keyword: "Choose the Wiser Path",
    accent: "#c8794f",
    message:
      "Fox listens beneath grass and snow, changes course quickly, and saves food for later. Fox reminds you that wisdom may be quiet. Stop forcing the obvious route. Name one gentler path and one resource—time, money, or energy—you need to protect. Choose accordingly.",
    echo:
      "When Fox appears in art, language, story, or landscape, pause before moving. Ask which choice protects your energy and still leads you forward.",
  },
  {
    name: "Bunny Rabbit",
    art: "assets/animals/bunny-rabbit.webp",
    keyword: "Gentle Readiness",
    accent: "#d7b6aa",
    message:
      "Rabbit's wide field of vision, sensitive ears, stillness, and sudden zigzag movement all serve awareness. Readiness does not require living in panic. Look around the room, exhale longer than you inhale, then take one gentle step toward what is new.",
    echo:
      "If Bunny Rabbit finds you in nature, a toy, book, picture, or phrase, pause and soften your breath. Let it confirm that alertness can remain gentle.",
  },
  {
    name: "Mole",
    art: "assets/animals/mole.webp",
    keyword: "Trust What You Can Touch",
    accent: "#9b876e",
    message:
      "Moles navigate dark tunnels through exquisitely sensitive touch organs on the nose. They do not wait for visibility to make contact with what is real. Put your hands on the ground, a table, or your work. Complete one physical task that needs no audience.",
    echo:
      "If Mole, a tunnel, mound, or underground image catches your attention, touch what is actually in front of you. Let it confirm the unseen work your hands already know.",
  },
  {
    name: "Turtle",
    art: "assets/animals/turtle.webp",
    keyword: "Carry Your Center",
    accent: "#719b7b",
    message:
      "A turtle's shell is a living skeleton, with ribs and vertebrae joined into protection it cannot simply leave behind. Turtle teaches embodied safety, not hiding. Slow one task to a pace your body can stay present for. Protect the pace and finish one honest portion.",
    echo:
      "When Turtle appears in conversation, jewelry, image, dream, or near water, return to your own pace. Let it confirm that protection can travel with progress.",
  },
  {
    name: "Hummingbird",
    art: "assets/animals/hummingbird.webp",
    keyword: "Joy and Restoration",
    accent: "#6ab3a9",
    message:
      "Hummingbird can hover, reverse, and move in nearly every direction, yet its intense metabolism also requires torpor to conserve energy. Joy is fuel, and rest protects the ability to receive it. Choose one small sweetness today and schedule one real recovery period beside it.",
    echo:
      "If Hummingbird flashes through your day, receive the joy and check the recovery. Let it confirm that sweetness and rest belong to the same rhythm.",
  },
  {
    name: "Bear",
    art: "assets/animals/bear.webp",
    keyword: "Seasonal Power",
    accent: "#9c765b",
    message:
      "Bear responds to winter scarcity by slowing breath and activity in the den, then returns when the season changes. Power includes knowing which season you are in. Write either ACT or REST at the top of a page. Choose one behavior that honors the honest answer.",
    echo:
      "When Bear appears through a story, dream, sign, or woodland encounter, ask again: Is this my season to act or restore? Let the answer set the boundary.",
  },
  {
    name: "Deer",
    art: "assets/animals/deer.webp",
    keyword: "Sensitive Renewal",
    accent: "#b79a71",
    message:
      "Deer uses wide ears and keen senses to read its surroundings, while antlers are released and grown anew each year. Sensitivity and renewal belong together. Listen for one signal your body has repeated. Release one old crown, role, or expectation that keeps you from responding.",
    echo:
      "If Deer appears in the landscape, image, clothing, conversation, or dream, notice the repeated body signal. Let Deer confirm that release can be a form of strength.",
  },
  {
    name: "Crow",
    art: "assets/animals/crow.webp",
    keyword: "Notice What Returns",
    accent: "#7f819a",
    message:
      "Crows remember faces and share what they learn. Crow asks you to notice what keeps returning. Write one question you need clarity on, then stop chasing the answer. If Crow appears again, pause. Notice the thought or feeling present in that exact moment. That is what needs your attention.",
    echo:
      "Crow may return as a living bird, call, feather, picture, logo, toy, book, dream, or unexpected mention. Do not force the appearance into yes or no. Notice what repeated, what you were thinking, and what feels ready to be understood.",
  },
  {
    name: "Whale",
    art: "assets/animals/whale.webp",
    keyword: "Deep Breath, Far Voice",
    accent: "#6e9bb2",
    message:
      "Whales return consciously to the surface for air, dive into depths, and carry sound across miles of water. Depth and expression both depend on breath. Take three slow breaths. Write the truth beneath the surface noise, then speak one clear sentence to someone who can receive it.",
    echo:
      "If Whale surfaces through a documentary, song, art, toy, conversation, or dream, take a full breath before interpreting it. Let it confirm the deeper voice you chose to express.",
  },
  {
    name: "Frog",
    art: "assets/animals/frog.webp",
    keyword: "Make Room for Change",
    accent: "#75a765",
    message:
      "Frog transforms from tadpole to adult and is deeply affected by the conditions around it. Your change needs support, not pressure. Name the next version of yourself you are growing into. Change one part of your environment today so that version has room to live.",
    echo:
      "When Frog, lily pads, rain calls, or green figures appear, ask whether your surroundings support the change you want. Adjust one condition with care.",
  },
  {
    name: "Spider",
    art: "assets/animals/spider.webp",
    keyword: "Follow the Strongest Thread",
    accent: "#a38b71",
    message:
      "Spider builds a web from many strands and feels which one is moving. Not every concern deserves equal attention. Write down the three things pulling at you. Circle the one that matters most today, and take one action on that thread before touching the others.",
    echo:
      "If Spider, webs, woven patterns, or web language appears, ask: Which one concern truly needs me now? Give that thread your attention.",
  },
  {
    name: "Horse",
    art: "assets/animals/horse.webp",
    keyword: "Directed Momentum",
    accent: "#b08766",
    message:
      "Horses move through the day while grazing, form stable social bonds, and read subtle shifts in posture and expression. Movement is healthiest when direction and relationship remain connected. Name where you are going, who can travel beside you, and the first ten-minute move.",
    echo:
      "When Horse appears in a field, film, logo, toy, conversation, or dream, name the destination before increasing speed. Let it confirm directed momentum.",
  },
  {
    name: "Elephant",
    art: "assets/animals/elephant.webp",
    keyword: "Collective Memory",
    accent: "#8d9694",
    message:
      "Elephant family groups are guided by experienced matriarchs who make decisions and steady the herd. Wisdom is carried through relationship, not stored for one body alone. Contact one elder, trusted friend, or keeper of shared memory. Ask the question you do not need to carry alone.",
    echo:
      "If Elephant arrives through a figure, pattern, book, gift, conversation, or dream, remember your living council. Let it confirm that help and history remain available.",
  },
  {
    name: "Moth",
    art: "assets/animals/moth.webp",
    keyword: "Choose True Light",
    accent: "#bcae83",
    message:
      "Artificial light can pull moths away from feeding, breeding, and the darkness their lives require. Brightness is not the same as guidance. Turn off one false light, such as a notification, comparison, demand, or performance. Notice what quieter direction becomes visible.",
    echo:
      "When Moth, winged night shapes, lamps, or moonlit images appear, ask what has captured your attention. Let Moth confirm the need to choose your light deliberately.",
  },
  {
    name: "Bee",
    art: "assets/animals/bee.webp",
    keyword: "Meaningful Belonging",
    accent: "#d1ad55",
    message:
      "Bee carries one small offering back to the hive, where many small offerings become nourishment. Your part does not have to be enormous to matter. Offer the gift that is yours, and let yourself receive support from the community you help create.",
    echo:
      "When Bee, honeycomb, buzzing, jewelry, or a bee image follows you, ask where your gifts and presence are meant to contribute. Let Bee remind you that belonging is built through shared care.",
  },
  {
    name: "Dolphin",
    art: "assets/animals/dolphin.webp",
    keyword: "Ask Clearly",
    accent: "#61a9bc",
    message:
      "Dolphins use signature whistles to recognize one another and stay connected. You do not have to hide what you need. Tell one trusted person: “I need…” Then make one clear invitation: Can we talk, rest, work, or play together?",
    echo:
      "When Dolphin surfaces in media, conversation, a toy, logo, dream, or near water, ask yourself what connection you need and make one clear invitation.",
  },
  {
    name: "Snake",
    art: "assets/animals/snake.webp",
    keyword: "Shed What No Longer Fits",
    accent: "#78965f",
    message:
      "Snake forms new skin beneath the old, then uses moisture and rough surfaces to help shed it. You are allowed to outgrow what once protected you. Name one role, habit, or belief that no longer fits. Choose one boundary or act of support that helps you release it.",
    echo:
      "If Snake, shed skin, winding patterns, jewelry, or a sudden reference appears, ask what you are ready to stop carrying and what support will help you let go.",
  },
  {
    name: "Dragonfly",
    art: "assets/animals/dragonfly.webp",
    keyword: "Change Your View",
    accent: "#78b7ae",
    message:
      "Dragonfly begins in water and later rises into air. Some changes need a new viewpoint, not more effort in the old place. Take your question somewhere different—a walk, another room, or paper instead of a screen. From that new place, choose one next step.",
    echo:
      "When Dragonfly, iridescent wings, jewelry, pictures, or conversation appears, change your physical viewpoint and ask what becomes possible from here.",
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
const animalProtectionInvocation = (guide) =>
  `Cover your eyes and close your mind. Tune into ${guide.name} and its energy. When you feel its presence, ask out loud and in your mind: “Dear ${guide.name}, I can feel your presence within me. Please be the guardian of my mind. Please protect my thoughts and energy. Only allow kind and encouraging thoughts to enter my field. Amen.”`;

const preloadGuideCard = (index) => {
  const guide = animalGuides[index];
  if (!guide) return Promise.resolve();
  const cardAssetBase = `assets/oracle-cards/animal/${slugify(guide.name)}`;
  const preloadFace = (image, side) => new Promise((resolve) => {
    if (!image) return resolve();
    const finish = () => {
      image.removeEventListener("load", finish);
      image.removeEventListener("error", finish);
      resolve();
    };
    image.addEventListener("load", finish);
    image.addEventListener("error", finish);
    image.src = `${cardAssetBase}-${side}.webp?v=20260828-1`;
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
  const slug = slugify(guide.name);
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
  const cardAssetBase = `assets/oracle-cards/animal/${slugify(guide.name)}`;
  const cardFrontSrc = `${cardAssetBase}-front.webp?v=20260828-1`;
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
const requestedCardIndex = animalGuides.findIndex((guide) => slugify(guide.name) === requestedCardSlug);
const requestedFoundSlug = slugify(previewParams.get("found") || "");
const savedFoundGuide = window.KelaCompanions?.getFound?.("animal");
const requestedFoundIndex = savedFoundGuide?.slug === requestedFoundSlug
  ? animalGuides.findIndex((guide) => slugify(guide.name) === requestedFoundSlug)
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
