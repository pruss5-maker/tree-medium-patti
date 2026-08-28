const treeGuides = [
  {
    name: "Madrona",
    botanical: "Arbutus menziesii",
    art: "assets/tree-photos/madrona.webp",
    keyword: "Inner Vision",
    accent: "#a2769f",
    message:
      "Madrona grows throughout Orcas Island. Patti feels its presence like the vortex energy of Sedona. Place both feet on the ground. Take three slow breaths. Feel into Madrona and ask it to protect your mind and your energy. Notice which thoughts become quieter.",
    attunement:
      "Place one hand on your heart and one on your forehead. Say aloud: Madrona, protect my mind and my energy. Take three slow breaths.",
    question: "What thought can I release from my field today?",
  },
  {
    name: "Neem",
    botanical: "Azadirachta indica",
    art: "assets/tree-photos/neem.webp",
    keyword: "Sacred Clearing",
    accent: "#71965f",
    message:
      "Neem allows you to clear what does not belong in your mind or energy. In India, it has long been honored as a sacred and purifying tree. Open a door or window. Say aloud: Neem Tree, remove what is unkind, false, or not mine. Leave only what helps life grow.",
    attunement:
      "Sweep your hands slowly from your head toward the ground. Say: Neem Tree, clear my mind and my energy. Leave only what is kind, true, and mine.",
    question: "What thought or energy am I ready to clear from my field?",
  },
  {
    name: "Baobab",
    botanical: "Adansonia digitata",
    art: "assets/tree-photos/baobab.webp",
    keyword: "Stored Wisdom",
    accent: "#b98b56",
    message:
      "Baobab allows you to feel the wisdom already stored within you. It holds life through dry seasons and has given food, fiber, shelter, and gathering places across generations. Place both hands over your belly. Name three strengths that have carried you here.",
    attunement:
      "Place both hands over your belly. Say: Baobab Tree, awaken the wisdom already stored within me. Take three slow breaths and receive the first strength that returns.",
    question: "What wisdom within me is ready to be remembered?",
  },
  {
    name: "Banyan",
    botanical: "Ficus benghalensis",
    art: "assets/tree-photos/banyan.webp",
    keyword: "Rooted Support",
    accent: "#74855d",
    message:
      "Banyan allows you to receive support without losing yourself. Its branches send roots toward the earth until one tree becomes a whole grove and a place of gathering. Write down the names of three people, places, or practices that give your life another place to stand.",
    attunement:
      "Touch the ground with one hand and your heart with the other. Say: Banyan Tree, show me the support already reaching toward me. Help me receive it.",
    question: "Where is life offering me another root of support?",
  },
  {
    name: "Willow",
    botanical: "Salix babylonica",
    art: "assets/tree-photos/willow.webp",
    keyword: "Merciful Release",
    accent: "#6f9890",
    message:
      "Willow allows your feelings to move without carrying you away. Its flexible branches bend, and in Chinese Buddhism it is held with Guanyin, the presence of compassion and mercy. Place one hand on your heart. Name the feeling and say: I can feel this, bless it, and let it move.",
    attunement:
      "Let your arms hang softly and sway for three breaths. Say: Willow Tree, hold me in compassion while this feeling moves through and away from me.",
    question: "What feeling is asking to be released with mercy?",
  },
  {
    name: "Cedar",
    botanical: "Thuja plicata",
    art: "assets/tree-photos/cedar.webp",
    keyword: "Sacred Shelter",
    accent: "#486f5f",
    message:
      "Cedar allows you to create protection that serves life. Western redcedar is deeply honored by Pacific Northwest Indigenous peoples as a Tree of Life, offering shelter, clothing, vessels, and passage. Stand at a doorway. Name what may enter your field and what must remain outside.",
    attunement:
      "Place one hand on your heart and one on the doorway. Say: Cedar Tree, guard this threshold. Let love enter and let harm remain outside.",
    question: "What does my sacred shelter welcome, and what does it refuse?",
  },
  {
    name: "Oak",
    botanical: "Quercus robur",
    art: "assets/tree-photos/oak.webp",
    keyword: "Strength That Shelters",
    accent: "#9a794c",
    message:
      "Oak allows you to feel strength as a sacred responsibility. Long honored as a tree of powerful gods, an old oak also shelters thousands of lives within its roots, bark, branches, and hollows. Stand tall. Choose one person or living thing your strength can protect today.",
    attunement:
      "Plant your feet wide. Say: Oak Tree, make my strength steady and let it become shelter. Take one protective action before the day ends.",
    question: "Who or what becomes safer because I am standing here?",
  },
  {
    name: "Birch",
    botanical: "Betula pendula",
    art: "assets/tree-photos/birch.webp",
    keyword: "Clean Beginning",
    accent: "#a3a878",
    message:
      "Birch allows you to enter a new beginning with a clear mind. Its bright bark and broom-making branches have long accompanied seasonal thresholds and the sweeping away of what is finished. Clear one doorway, one page, or one small space. Say: Birch Tree, help me begin cleanly.",
    attunement:
      "Sweep your hands outward from your heart. Say: Birch Tree, clear the old path from my mind and show me the first clean step into the new.",
    question: "What can I begin once I stop carrying the finished season?",
  },
  {
    name: "Redwood",
    botanical: "Sequoia sempervirens",
    art: "assets/tree-photos/redwood.webp",
    keyword: "Rise Together",
    accent: "#677f79",
    message:
      "Redwood allows you to rise without standing alone. The tallest trees on Earth hold themselves through wide, intertwined roots, receive summer water from fog, and can send up new life after injury. Reach both arms upward. Name the person or presence whose support you are ready to receive.",
    attunement:
      "Reach upward, then widen your stance. Say: Redwood Tree, connect me to the support beneath and around me. Help me rise with the grove.",
    question: "What support will I allow myself to receive as I rise?",
  },
  {
    name: "Olive",
    botanical: "Olea europaea",
    art: "assets/tree-photos/olive.webp",
    keyword: "Truthful Peace",
    accent: "#8f8c69",
    message:
      "Olive allows you to make peace without abandoning your truth. Its branch has carried the meaning of peace, restored life, and sacred honor across thousands of years. Place one hand on your throat and one on your heart. Speak the truth once, then choose the peaceful action that keeps it true.",
    attunement:
      "Place one hand on your throat and one on your heart. Say: Olive Tree, let my peace be honest and my truth be peaceful. Receive the next action.",
    question: "What peaceful choice allows my truth to remain whole?",
  },
  {
    name: "Ginkgo",
    botanical: "Ginkgo biloba",
    art: "assets/tree-photos/ginkgo.webp",
    keyword: "True Aim",
    accent: "#c7a33c",
    message:
      "Ginkgo allows you to see your target and gives you the strength to shoot your arrow toward the goal you set for yourself. Write down one goal. Circle it. Take one real action toward it today.",
    attunement:
      "Read your goal aloud. Close your eyes and see it as the target. Ask Ginkgo for clear aim and strength. Choose the first action and begin.",
    question: "What one action will move me toward my target today?",
  },
  {
    name: "Jacaranda",
    botanical: "Jacaranda mimosifolia",
    art: "assets/tree-photos/jacaranda.webp",
    keyword: "Visible Beauty",
    accent: "#8f77ae",
    message:
      "Jacaranda allows the beauty within you to become visible before you feel complete. Its violet flowers can fill bare-looking branches and transform the whole space around them. Choose one idea you have kept hidden. Give it a visible form today: one sentence, sketch, sound, or movement.",
    attunement:
      "Close your eyes and picture violet light moving from your heart into your hands. Say: Jacaranda Tree, help the beauty within me become visible.",
    question: "What beauty within me is ready to be seen?",
  },
  {
    name: "Maple",
    botanical: "Acer macrophyllum",
    art: "assets/tree-photos/maple.webp",
    keyword: "Pure Reflection",
    accent: "#b98246",
    message:
      "Maple trees allow you to see yourself as a pure reflection of Source. Look into a mirror. Meet your own eyes. Say aloud: I am a pure reflection of Source. Name one kind and encouraging truth about yourself.",
    attunement:
      "Look into your eyes and repeat: I am a pure reflection of Source. Say one loving truth about yourself three times.",
    question: "What loving truth will I reflect back to myself today?",
  },
];

const oracle = document.querySelector("[data-tree-oracle]");
const oracleCard = document.querySelector("[data-tree-oracle-card]");
const oracleResult = document.querySelector("[data-tree-oracle-result]");
const oracleRitual = document.querySelector("[data-tree-oracle-ritual]");
const revealButton = document.querySelector("[data-reveal-tree]");
const status = document.querySelector("[data-tree-oracle-status]");
const previewTools = document.querySelector("[data-tree-preview-tools]");
const previewNext = document.querySelector("[data-tree-preview-next]");
const shareButton = document.querySelector("[data-share-tree]");
const treeName = document.querySelector("[data-tree-name]");
const treeNameBack = document.querySelector("[data-tree-name-back]");
const treeBotanical = document.querySelector("[data-tree-botanical]");
const treeArt = document.querySelector("[data-tree-art]");
const treeWatermark = document.querySelector("[data-tree-watermark]");
const treeCardFront = document.querySelector("[data-tree-card-front]");
const treeCardBack = document.querySelector("[data-tree-card-back]");
const treeKeyword = document.querySelector("[data-tree-keyword]");
const treeKeywordBack = document.querySelector("[data-tree-keyword-back]");
const treeMessage = document.querySelector("[data-tree-message]");
const treeWatch = document.querySelector("[data-tree-watch]");
const treeFlip = document.querySelector("[data-tree-flip]");
const treeFlipFront = document.querySelector("[data-tree-flip-front]");
const treeFlipBack = document.querySelector("[data-tree-flip-back]");
const cardFigure = document.querySelector("[data-card-figure]");
const cardSeoName = document.querySelector("[data-card-seo-name]");
const cardSeoDescription = document.querySelector("[data-card-seo-description]");
const cardSeoUrl = document.querySelector("[data-card-seo-url]");
const cardSeoCaption = document.querySelector("[data-card-seo-caption]");

const storageKey = "kela-tree-oracle-v1";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let activeTreeIndex = -1;
let treeTurnTimer = 0;

const localDateKey = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const readSavedTree = () => {
  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey));
    if (
      saved?.date === localDateKey()
      && Number.isInteger(saved.index)
      && saved.index >= 0
      && saved.index < treeGuides.length
    ) return saved.index;
  } catch {
    return -1;
  }
  return -1;
};

const saveTree = (index) => {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify({ date: localDateKey(), index }));
    const tree = treeGuides[index];
    if (tree) {
      window.KelaCompanions?.remember({
        deck: "tree",
        name: tree.name,
        image: `/${tree.art.replace(/^\/+/, "")}`,
        href: "/tree-oracle",
      });
    }
  } catch {
    // The oracle still works when browser storage is unavailable.
  }
};

const randomTreeIndex = () => {
  if (!window.crypto?.getRandomValues) return Math.floor(Math.random() * treeGuides.length);
  const range = 0x100000000;
  const ceiling = Math.floor(range / treeGuides.length) * treeGuides.length;
  const value = new Uint32Array(1);
  do window.crypto.getRandomValues(value);
  while (value[0] >= ceiling);
  return value[0] % treeGuides.length;
};

const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const treeProtectionInvocation = (tree) =>
  `Cover your eyes and close your mind. Tune into ${tree.name} Tree and its energy. When you feel its presence, ask out loud and in your mind: “Dear ${tree.name} Tree, I can feel your presence within me. Please be the guardian of my mind. Please protect my thoughts and energy. Only allow kind and encouraging thoughts to enter my field. Amen.”`;

const preloadTreeCard = (index) => {
  const tree = treeGuides[index];
  if (!tree) return Promise.resolve();
  const cardAssetBase = `assets/oracle-cards/tree/${slugify(tree.name)}`;
  const preloadFace = (image, side) => new Promise((resolve) => {
    if (!image) return resolve();
    const finish = () => {
      image.removeEventListener("load", finish);
      image.removeEventListener("error", finish);
      resolve();
    };
    image.addEventListener("load", finish);
    image.addEventListener("error", finish);
    image.src = `${cardAssetBase}-${side}.webp?v=20260827-4`;
    if (image.complete && image.naturalWidth > 0) finish();
  });
  return Promise.all([
    preloadFace(treeCardFront, "front"),
    preloadFace(treeCardBack, "back"),
  ]);
};

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", content);
};

const updateTreeSeo = (tree) => {
  const slug = slugify(tree.name);
  const cardUrl = new URL("/tree-oracle", window.location.origin);
  const description = `${tree.name} Tree Oracle card: ${tree.keyword}. Read its original KELA message and protection prompt.`;
  const imageLabel = `${tree.name}: ${tree.keyword}, a KELA Tree Oracle card with a tree photograph and a spiritual protection message.`;

  oracleCard.dataset.treeSlug = slug;
  oracleCard.dataset.cardUrl = cardUrl.href;
  cardFigure?.setAttribute("aria-label", imageLabel);
  cardSeoName?.setAttribute("content", `${tree.name} Tree Oracle card`);
  cardSeoDescription?.setAttribute("content", description);
  cardSeoUrl?.setAttribute("href", cardUrl.href);
  if (cardSeoCaption) cardSeoCaption.textContent = imageLabel;
  if (treeArt) treeArt.title = `${tree.name} Tree Oracle card: ${tree.keyword}`;

  document.title = `${tree.name} Tree Oracle Card Meaning | KELA`;
  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:title"]', `${tree.name} Tree Oracle Card | KELA`);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[property="og:url"]', cardUrl.href);
  setMetaContent('meta[property="og:image:alt"]', imageLabel);
  setMetaContent('meta[name="twitter:title"]', `${tree.name} Tree Oracle Card | KELA`);
  setMetaContent('meta[name="twitter:description"]', description);
  setMetaContent('meta[name="twitter:image:alt"]', imageLabel);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", cardUrl.href);
};

const fillTree = (index) => {
  const tree = treeGuides[index];
  if (!tree || !oracleCard || !oracleResult) return;
  activeTreeIndex = index;
  oracleCard.style.setProperty("--guide-accent", tree.accent);
  updateTreeSeo(tree);
  const cardAssetBase = `assets/oracle-cards/tree/${slugify(tree.name)}`;
  const cardFrontSrc = `${cardAssetBase}-front.webp?v=20260827-4`;
  const cardBackSrc = `${cardAssetBase}-back.webp?v=20260827-4`;
  if (treeCardFront) {
    if (treeCardFront.getAttribute("src") !== cardFrontSrc) treeCardFront.src = cardFrontSrc;
    treeCardFront.alt = `${tree.name} KELA Tree Oracle card`;
  }
  if (treeCardBack) {
    if (treeCardBack.getAttribute("src") !== cardBackSrc) treeCardBack.src = cardBackSrc;
    treeCardBack.alt = `${tree.name} KELA Tree Oracle meaning card`;
  }
  if (treeName) treeName.textContent = tree.name;
  if (treeNameBack) treeNameBack.textContent = tree.name;
  if (treeBotanical) treeBotanical.textContent = tree.botanical;
  if (treeArt) {
    treeArt.src = tree.art;
    treeArt.alt = `Photograph of a ${tree.name} tree`;
  }
  if (treeWatermark) treeWatermark.src = tree.art;
  if (treeKeyword) treeKeyword.textContent = tree.keyword;
  if (treeKeywordBack) treeKeywordBack.textContent = tree.keyword;
  if (treeMessage) treeMessage.textContent = tree.message;
  if (treeWatch) {
    treeWatch.textContent = treeProtectionInvocation(tree);
  }
};

const commitTreeFace = (showMeaning) => {
  if (!treeFlip) return;
  const tree = treeGuides[activeTreeIndex];
  treeFlip.classList.toggle("is-flipped", showMeaning);
  treeFlip.setAttribute("aria-pressed", String(showMeaning));
  treeFlip.setAttribute(
    "aria-label",
    tree
      ? `${tree.name} Tree Oracle card: ${showMeaning ? "show its photograph" : "reveal its meaning"}`
      : showMeaning ? "Show the tree photograph" : "Reveal this tree's meaning",
  );
  treeFlipFront?.setAttribute("aria-hidden", String(showMeaning));
  treeFlipBack?.setAttribute("aria-hidden", String(!showMeaning));
};

const setTreeFace = (showMeaning, { animate = false } = {}) => {
  if (!treeFlip) return;
  if (treeFlip.classList.contains("is-turning")) {
    if (animate) return;
    window.clearTimeout(treeTurnTimer);
    treeFlip.classList.remove("is-turning");
    commitTreeFace(showMeaning);
    return;
  }
  const isShowingMeaning = treeFlip.classList.contains("is-flipped");
  if (isShowingMeaning === showMeaning) return;
  window.clearTimeout(treeTurnTimer);
  if (!animate || prefersReducedMotion) {
    treeFlip.classList.remove("is-turning");
    commitTreeFace(showMeaning);
    return;
  }
  treeFlip.classList.add("is-turning");
  treeTurnTimer = window.setTimeout(() => {
    commitTreeFace(showMeaning);
    window.requestAnimationFrame(() => treeFlip.classList.remove("is-turning"));
  }, 170);
};

const toggleTreeFace = () => {
  if (!treeFlip) return;
  setTreeFace(!treeFlip.classList.contains("is-flipped"), { animate: true });
};

const showTree = (index, { focus = true, save = true } = {}) => {
  if (!oracleCard || !oracleResult || !oracleRitual) return;
  fillTree(index);
  setTreeFace(false);
  if (save) saveTree(index);
  oracleResult.hidden = false;
  oracleRitual.hidden = true;
  oracleCard.classList.remove("is-listening");
  oracleCard.classList.add("is-revealed");
  if (status) status.textContent = `${treeGuides[index].name} is here with you today.`;
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
  if (status) status.textContent = "The roots are listening. Take one slow breath.";
  const treeIndex = randomTreeIndex();
  const minimumPause = new Promise((resolve) => {
    window.setTimeout(resolve, prefersReducedMotion ? 50 : 2600);
  });
  const preloadLimit = new Promise((resolve) => window.setTimeout(resolve, 5000));
  Promise.all([minimumPause, Promise.race([preloadTreeCard(treeIndex), preloadLimit])])
    .then(() => showTree(treeIndex));
};

const shareTree = async () => {
  const tree = treeGuides[activeTreeIndex];
  if (!tree || !shareButton) return;
  const text = [
    `${tree.name}: ${tree.keyword}`,
    tree.message,
    `Protection & confirmation: ${treeProtectionInvocation(tree)}`,
    window.location.href,
  ].filter(Boolean).join("\n\n");

  try {
    if (navigator.share) {
      await navigator.share({ title: `My KELA tree: ${tree.name}`, text, url: window.location.href });
      return;
    }
    await navigator.clipboard.writeText(text);
    shareButton.textContent = "Calling Copied";
    window.setTimeout(() => { shareButton.textContent = "Share My Tree"; }, 1800);
  } catch (error) {
    if (error?.name !== "AbortError") shareButton.textContent = "Sharing unavailable";
  }
};

revealButton?.addEventListener("click", beginReveal);
shareButton?.addEventListener("click", shareTree);
treeFlip?.addEventListener("click", toggleTreeFace);
treeFlip?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  toggleTreeFace();
});

const isLocalPreview = ["", "localhost", "127.0.0.1"].includes(window.location.hostname);
if (previewTools && isLocalPreview) previewTools.hidden = false;

previewNext?.addEventListener("click", () => {
  const nextIndex = activeTreeIndex < 0 ? 0 : (activeTreeIndex + 1) % treeGuides.length;
  showTree(nextIndex, { focus: false, save: false });
});

const previewParams = new URLSearchParams(window.location.search);
const requestedPreview = Number.parseInt(previewParams.get("tree"), 10);
const requestedCardSlug = slugify(previewParams.get("card") || "");
const requestedCardIndex = treeGuides.findIndex((tree) => slugify(tree.name) === requestedCardSlug);
const requestedFoundSlug = slugify(previewParams.get("found") || "");
const savedFoundTree = window.KelaCompanions?.getFound?.("tree");
const requestedFoundIndex = savedFoundTree?.slug === requestedFoundSlug
  ? treeGuides.findIndex((tree) => slugify(tree.name) === requestedFoundSlug)
  : -1;
if (oracle && requestedFoundIndex >= 0) {
  showTree(requestedFoundIndex, { focus: false, save: false });
  if (status) status.textContent = `${treeGuides[requestedFoundIndex].name} found you in the memory game.`;
} else if (oracle && isLocalPreview && requestedCardIndex >= 0) {
  showTree(requestedCardIndex, { focus: false, save: false });
  if (previewParams.get("side") === "meaning") setTreeFace(true);
} else if (
  oracle
  && isLocalPreview
  && Number.isInteger(requestedPreview)
  && requestedPreview >= 0
  && requestedPreview < treeGuides.length
) {
  showTree(requestedPreview, { focus: false, save: false });
  if (previewParams.get("side") === "meaning") setTreeFace(true);
} else {
  const savedTreeIndex = readSavedTree();
  if (oracle && savedTreeIndex >= 0) {
    showTree(savedTreeIndex, { focus: false, save: false });
    const tree = treeGuides[savedTreeIndex];
    if (tree) {
      window.KelaCompanions?.remember({
        deck: "tree",
        name: tree.name,
        image: `/${tree.art.replace(/^\/+/, "")}`,
        href: "/tree-oracle",
      });
    }
  }
}
