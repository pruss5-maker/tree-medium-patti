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
    keyword: "Distributed Intelligence",
    accent: "#ad83bc",
    message:
      "An octopus carries much of its nervous system through its arms and survives without a shell through intelligence, camouflage, and flexible movement. Your answer may not come from one central plan. Sketch three possible routes with your hands. Test the smallest one today.",
    echo:
      "If Octopus finds you through an image, object, conversation, or unexpected reference, ask which unused route has just opened. Adaptation is not self-abandonment.",
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
    keyword: "Speak to Belong",
    accent: "#79ad83",
    message:
      "Wild parrots learn signature contact calls and use them to recognize and address one another. Voice is part of how they stay connected. Say one sentence you have edited down to keep the peace. Speak it kindly to the person who actually needs to hear it.",
    echo:
      "If Parrot appears, or the same unusual words repeat through different places, ask what honest sentence wants relationship rather than performance.",
  },
  {
    name: "Fox",
    art: "assets/animals/fox.webp",
    keyword: "Adaptive Discernment",
    accent: "#c8794f",
    message:
      "Fox can hear prey beneath grass or snow, alter its route, and cache extra food for later. Discernment listens for what is hidden and protects what will be needed. Stop pushing the obvious path. Name one quieter route and one resource you need to preserve.",
    echo:
      "When Fox appears in art, language, story, or landscape, listen again before moving. Let the encounter confirm a wise adjustment already forming.",
  },
  {
    name: "Bunny Rabbit",
    art: "assets/animals/bunny-rabbit.webp",
    keyword: "Regulated Readiness",
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
      "A turtle's shell is living skeleton—ribs and vertebrae joined into protection it cannot simply leave behind. Turtle teaches embodied safety, not hiding. Slow one task to a pace your body can stay present for. Protect the pace and finish one honest portion.",
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
    keyword: "Remember the Signal",
    accent: "#7f819a",
    message:
      "Crow recognizes faces, links them with experience, and shares important information socially. Crow is still your confirmation animal for today—but give the signal something clear to remember. Write one honest question. Do not search for Crow. Let Crow find you, then return to the question.",
    echo:
      "Crow may arrive as a living bird, call, feather, picture, logo, toy, book, dream, or unexpected mention. When Crow finds you, pause and reread your question. Receive the timing without forcing a yes or no.",
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
    keyword: "Change Your Breathing",
    accent: "#75a765",
    message:
      "Frog changes body and habitat through metamorphosis, and its permeable skin makes the surrounding environment part of every breath. Transition is not only internal; conditions matter. Name the next form you are entering and change one condition around you to help it live.",
    echo:
      "When Frog, lily pads, rain calls, or green figures appear, check the conditions around your change. Let Frog confirm the threshold and your responsibility to support it.",
  },
  {
    name: "Spider",
    art: "assets/animals/spider.webp",
    keyword: "Read the Vibration",
    accent: "#a38b71",
    message:
      "Spider makes different silks for different purposes and reads information through vibration in the web. Not every tremor requires the same response. Draw the pattern around your question. Mark the strand carrying the strongest signal and take the next action only on that thread.",
    echo:
      "If Spider, webs, woven patterns, or web language appears, ask which strand is actually moving. Let it confirm the connection that deserves attention now.",
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
      "Artificial light can pull moths away from feeding, breeding, and the darkness their lives require. Brightness is not the same as guidance. Turn off one false light—a notification, comparison, demand, or performance. Notice what quieter direction becomes visible.",
    echo:
      "When Moth, winged night shapes, lamps, or moonlit images appear, ask what has captured your attention. Let Moth confirm the need to choose your light deliberately.",
  },
  {
    name: "Bee",
    art: "assets/animals/bee.webp",
    keyword: "Share the Direction",
    accent: "#d1ad55",
    message:
      "A honeybee returns from a rich flower patch and dances the direction and distance for the colony. Nourishment becomes more powerful when its location is shared. Tell one person where you found help, beauty, work, or relief. Then ask what direction they can share with you.",
    echo:
      "If Bee, honeycomb, buzzing, jewelry, or a bee image follows you, ask what useful direction wants to be shared. Let Bee confirm reciprocal belonging.",
  },
  {
    name: "Dolphin",
    art: "assets/animals/dolphin.webp",
    keyword: "Named Connection",
    accent: "#61a9bc",
    message:
      "Dolphins learn individual signature whistles that help them recognize one another and keep the group connected. Connection becomes safer when identity and need are clear. Say your name, your real need, and one invitation: “Can we talk, help, rest, or play together?”",
    echo:
      "When Dolphin surfaces in media, conversation, a toy, logo, dream, or near water, name the connection you need. Let it confirm that clear contact can include play.",
  },
  {
    name: "Snake",
    art: "assets/animals/snake.webp",
    keyword: "Friction for Renewal",
    accent: "#78965f",
    message:
      "Snake grows a new layer beneath the old, then uses moisture and rough surfaces to loosen and turn the outgrown skin away. Renewal needs support and useful friction. Name what no longer fits. Choose the person, place, deadline, or boundary that will help you release it.",
    echo:
      "If Snake, shed skin, winding patterns, jewelry, or a sudden reference appears, identify the support helping you release. Let it confirm renewal already underway.",
  },
  {
    name: "Dragonfly",
    art: "assets/animals/dragonfly.webp",
    keyword: "Enter a New Element",
    accent: "#78b7ae",
    message:
      "Dragonfly begins as an aquatic nymph, then emerges winged for life in the air. Its change is not a better version of the same environment; it is entry into another element. Move your question to a new place, medium, or viewpoint. Make one action the old setting could not hold.",
    echo:
      "When Dragonfly, iridescent wings, jewelry, pictures, or conversation appears, change your angle physically. Let it confirm that a new element is available.",
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
    image.src = `${cardAssetBase}-${side}.webp?v=20260827-3`;
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
  const description = `${guide.name} Animal Oracle card — ${guide.keyword}. Read its original KELA message and protection prompt.`;
  const imageLabel = `${guide.name} — ${guide.keyword}, a KELA Animal Oracle card with a full-bleed wildlife photograph and a spiritual protection message.`;

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
  const cardFrontSrc = `${cardAssetBase}-front.webp?v=20260827-3`;
  const cardBackSrc = `${cardAssetBase}-back.webp?v=20260827-3`;
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
      ? `${guide.name} Animal Oracle card — ${showMeaning ? "show the animal" : "reveal its meaning"}`
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
    `${guide.name} — ${guide.keyword}`,
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
if (oracle && isLocalPreview && requestedCardIndex >= 0) {
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
