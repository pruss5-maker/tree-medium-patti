const treeGuides = [
  {
    name: "Madrona",
    botanical: "Arbutus menziesii",
    art: "assets/tree-photos/madrona.webp",
    keyword: "Inner Vision",
    accent: "#a2769f",
    message:
      "Madrona sheds what has grown too tight, revealing luminous color beneath. Its clear presence invites your inner sight to soften open and notice the images, patterns, and quiet knowing already moving through you.",
    attunement:
      "Rest your gaze on the places where Madrona's bark opens. Breathe slowly and imagine one old layer loosening from your inner sight.",
    question: "What am I ready to see now that I could not see before?",
  },
  {
    name: "Neem",
    botanical: "Azadirachta indica",
    art: "assets/tree-photos/neem.webp",
    keyword: "Sacred Clearing",
    accent: "#71965f",
    message:
      "Neem arrives like clean air in an overfilled room. Clear the stale habits, borrowed worries, and noise that cloud your energy so your own signal becomes easier to hear.",
    attunement:
      "With each exhale, name one thing you can set down for today. Leave a little unfilled space and notice what returns to it.",
    question: "What can I release so my own energy has room to move?",
  },
  {
    name: "Baobab",
    botanical: "Adansonia digitata",
    art: "assets/tree-photos/baobab.webp",
    keyword: "Ancestral Memory",
    accent: "#b98b56",
    message:
      "Baobab holds the shape of deep time. Its vast trunk calls you to remember the strength, stories, and unfinished wisdom that traveled here before you—while choosing consciously what you will carry forward.",
    attunement:
      "Place both feet on the ground. Remember one person, place, or teaching that helped make your life possible, and offer a quiet thank-you.",
    question: "Which inheritance strengthens me, and which one is mine to transform?",
  },
  {
    name: "Banyan",
    botanical: "Ficus benghalensis",
    art: "assets/tree-photos/banyan.webp",
    keyword: "Living Connection",
    accent: "#74855d",
    message:
      "Banyan becomes a grove without ceasing to be one being. It reminds you that life is a network: every act of attention travels through roots, relationships, and places you may never see.",
    attunement:
      "Picture one thread running from you to someone who sustains you, then outward to the wider living world. Let yourself receive as well as send.",
    question: "Where is the network of life already holding me?",
  },
  {
    name: "Willow",
    botanical: "Salix babylonica",
    art: "assets/tree-photos/willow.webp",
    keyword: "Let It Move",
    accent: "#6f9890",
    message:
      "Willow bends toward the water without losing its roots. It calls emotion back into motion, asking you to feel what is present without building a permanent home inside the feeling.",
    attunement:
      "Let your shoulders drop. Imagine the feeling moving like water beneath Willow—seen, honored, and allowed to continue on its way.",
    question: "What feeling needs movement rather than an answer?",
  },
  {
    name: "Cedar",
    botanical: "Thuja plicata",
    art: "assets/tree-photos/cedar.webp",
    keyword: "Protected Presence",
    accent: "#486f5f",
    message:
      "Cedar gathers the forest into shelter. Its presence asks for a boundary that is alive rather than rigid: strong enough to protect your attention, spacious enough to let love and truth pass through.",
    attunement:
      "Imagine Cedar's canopy around you. Name what is welcome in this space, then name what must remain outside it today.",
    question: "What boundary would let my spirit feel safe enough to open?",
  },
  {
    name: "Oak",
    botanical: "Quercus robur",
    art: "assets/tree-photos/oak.webp",
    keyword: "Steady Power",
    accent: "#9a794c",
    message:
      "Oak does not rush to prove its strength. It grows power ring by ring, calling you back to the promise you can keep through changing weather—not only in a burst of inspiration.",
    attunement:
      "Press your feet gently into the earth. Choose one small action you can repeat, and let consistency be the source of its power.",
    question: "What deserves my steady devotion now?",
  },
  {
    name: "Birch",
    botanical: "Betula pendula",
    art: "assets/tree-photos/birch.webp",
    keyword: "Begin Again",
    accent: "#a3a878",
    message:
      "Birch brings light into places that have been cleared. Its pale bark and open crown call you toward the tender beginning—the first honest mark on a new page, made before certainty arrives.",
    attunement:
      "Take one fresh breath and imagine a blank page before you. Name the smallest beginning that would make the page real.",
    question: "If I did not have to begin perfectly, where would I begin?",
  },
  {
    name: "Redwood",
    botanical: "Sequoia sempervirens",
    art: "assets/tree-photos/redwood.webp",
    keyword: "The Long View",
    accent: "#677f79",
    message:
      "Redwood lifts your attention beyond the urgency of a single day. What feels enormous from the forest floor may become one moment in a much longer becoming. Stand tall enough inside yourself to see farther.",
    attunement:
      "Imagine your awareness traveling from Redwood's roots to its highest branches. Look back at this moment from one year in the future.",
    question: "What changes when I choose from the long view?",
  },
  {
    name: "Olive",
    botanical: "Olea europaea",
    art: "assets/tree-photos/olive.webp",
    keyword: "Make Peace",
    accent: "#8f8c69",
    message:
      "Olive carries peace as a living practice, not passive agreement. Its ancient, twisting form asks where reconciliation is possible—and where peace begins by ending the argument inside your own heart.",
    attunement:
      "Bring one conflict to mind without rehearsing either side. Ask what a peaceful next gesture could be while keeping your truth intact.",
    question: "What would peace ask of me without asking me to abandon myself?",
  },
  {
    name: "Ginkgo",
    botanical: "Ginkgo biloba",
    art: "assets/tree-photos/ginkgo.webp",
    keyword: "Enduring Light",
    accent: "#c7a33c",
    message:
      "Ginkgo has met many changing worlds and still opens its fan-shaped leaves to the light. It calls forward the part of you that can adapt without forgetting its original pattern.",
    attunement:
      "Recall one change you once thought you could not survive. Notice the strength that experience has already placed in your hands.",
    question: "What essential part of me remains, even as everything changes?",
  },
  {
    name: "Jacaranda",
    botanical: "Jacaranda mimosifolia",
    art: "assets/tree-photos/jacaranda.webp",
    keyword: "Creative Opening",
    accent: "#8f77ae",
    message:
      "Jacaranda blooms in a color that seems borrowed from a dream. It calls the unexpressed image, phrase, movement, or possibility out of hiding and asks you to give beauty a form it can enter.",
    attunement:
      "Notice the first color, image, or phrase that comes to you. Do not explain it. Give it five minutes of shape, sound, or movement.",
    question: "What wants to be created through me before I understand it?",
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
    image.src = `${cardAssetBase}-${side}.webp?v=20260825-7`;
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
  const description = `${tree.name} Tree Oracle card — ${tree.keyword}. Read its original KELA message and protection prompt.`;
  const imageLabel = `${tree.name} — ${tree.keyword}, a KELA Tree Oracle card with a tree photograph and a spiritual protection message.`;

  oracleCard.dataset.treeSlug = slug;
  oracleCard.dataset.cardUrl = cardUrl.href;
  cardFigure?.setAttribute("aria-label", imageLabel);
  cardSeoName?.setAttribute("content", `${tree.name} Tree Oracle card`);
  cardSeoDescription?.setAttribute("content", description);
  cardSeoUrl?.setAttribute("href", cardUrl.href);
  if (cardSeoCaption) cardSeoCaption.textContent = imageLabel;
  if (treeArt) treeArt.title = `${tree.name} Tree Oracle card — ${tree.keyword}`;

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
  const cardFrontSrc = `${cardAssetBase}-front.webp?v=20260825-7`;
  const cardBackSrc = `${cardAssetBase}-back.webp?v=20260825-7`;
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
    treeWatch.textContent =
      `Tune into ${tree.name}. Ask ${tree.name} to protect your mind and energy today.`;
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
      ? `${tree.name} Tree Oracle card — ${showMeaning ? "show its photograph" : "reveal its meaning"}`
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
    `${tree.name} — ${tree.keyword}`,
    tree.message,
    `Protection & confirmation: Ask ${tree.name} to protect your mind and energy. Watch for ${tree.name} to begin showing up as confirmation.`,
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
if (oracle && isLocalPreview && requestedCardIndex >= 0) {
  showTree(requestedCardIndex, { focus: false, save: false });
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
