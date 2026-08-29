const studioForm = document.querySelector("[data-patti-login]");
const studioPasscode = document.querySelector("[data-patti-passcode]");
const studioStatus = document.querySelector("[data-patti-status]");
const studioSignedOut = document.querySelector("[data-patti-signed-out]");
const studioSignedIn = document.querySelector("[data-patti-signed-in]");
const studioLogout = document.querySelector("[data-patti-logout]");
const studioCardLibrary = document.querySelector("[data-patti-card-library]");

const studioDeckCatalog = [
  {
    deck: "animal",
    label: "Animal Oracle",
    storageKey: "kela-animal-guide-v1",
    href: "/animal-oracle",
    names: [
      "Owl", "Octopus", "Tiger", "Parrot", "Fox", "Bunny Rabbit", "Mole", "Turtle",
      "Hummingbird", "Bear", "Deer", "Crow", "Whale", "Frog", "Spider", "Horse", "Elephant",
      "Moth", "Bee", "Dolphin", "Snake", "Dragonfly",
    ],
  },
  {
    deck: "tree",
    label: "Tree Oracle",
    storageKey: "kela-tree-oracle-v1",
    href: "/tree-oracle",
    names: [
      "Madrona", "Neem", "Baobab", "Banyan", "Willow", "Cedar", "Oak", "Birch", "Redwood",
      "Olive", "Ginkgo", "Jacaranda", "Maple",
    ],
  },
  {
    deck: "plant",
    label: "Plant Oracle",
    storageKey: "kela-plant-oracle-v1",
    href: "/plant-oracle",
    names: [
      "Yarrow", "Lavender", "Hibiscus", "Comfrey", "Chamomile", "Calendula", "Plantain",
      "Sunflower", "Rosemary", "Garden Sage", "Mugwort", "Rose", "Dandelion", "Stinging Nettle",
      "Peppermint", "Basil", "Echinacea", "Jasmine", "Lemon Balm", "Red Clover",
    ],
  },
];

const studioDateKey = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
};

const rememberStudioCard = (deck, index) => {
  const saved = { date: studioDateKey(), index };
  if (deck.deck === "animal") saved.colorIndex = index % 10;
  window.localStorage.setItem(deck.storageKey, JSON.stringify(saved));
};

const buildStudioCardLibrary = () => {
  if (!studioCardLibrary) return;
  const fragment = document.createDocumentFragment();
  studioDeckCatalog.forEach((deck) => {
    const group = document.createElement("section");
    group.className = `patti-studio-library-group patti-studio-library-${deck.deck}`;

    const heading = document.createElement("h3");
    heading.textContent = deck.label;
    const count = document.createElement("small");
    count.textContent = `${deck.names.length} cards`;
    heading.append(count);
    group.append(heading);

    const list = document.createElement("ul");
    deck.names.forEach((name, index) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = deck.href;
      link.textContent = name;
      link.setAttribute("aria-label", `Open the ${name} ${deck.label} card`);
      link.addEventListener("click", () => {
        try {
          rememberStudioCard(deck, index);
        } catch {
          if (studioStatus) studioStatus.textContent = `${name} could not be selected on this browser.`;
        }
      });
      item.append(link);
      list.append(item);
    });
    group.append(list);
    fragment.append(group);
  });
  studioCardLibrary.replaceChildren(fragment);
};

const studioRequest = async (body) => {
  const response = await fetch("/api/patti-session", {
    method: body ? "POST" : "GET",
    credentials: "same-origin",
    cache: "no-store",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const payload = await response.json().catch(() => ({}));
  return { response, payload };
};

const showStudio = (authenticated) => {
  if (studioSignedOut) studioSignedOut.hidden = authenticated;
  if (studioSignedIn) studioSignedIn.hidden = !authenticated;
  document.body.classList.toggle("is-patti-authenticated", authenticated);
};

studioForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submit = studioForm.querySelector("button[type='submit']");
  if (submit) submit.disabled = true;
  if (studioStatus) studioStatus.textContent = "Opening Patti Studio…";
  try {
    const { response, payload } = await studioRequest({
      action: "login",
      passcode: studioPasscode?.value || "",
    });
    if (!response.ok || !payload.authenticated) {
      if (studioStatus) studioStatus.textContent = payload.error || "Patti Studio could not open.";
      studioPasscode?.focus();
      return;
    }
    if (studioPasscode) studioPasscode.value = "";
    if (studioStatus) studioStatus.textContent = "Patti Studio is open in this browser.";
    showStudio(true);
  } catch {
    if (studioStatus) studioStatus.textContent = "The studio could not connect. Please try again.";
  } finally {
    if (submit) submit.disabled = false;
  }
});

studioLogout?.addEventListener("click", async () => {
  if (studioLogout) studioLogout.disabled = true;
  try {
    await studioRequest({ action: "logout" });
    showStudio(false);
    if (studioStatus) studioStatus.textContent = "This browser is signed out.";
    studioPasscode?.focus();
  } finally {
    if (studioLogout) studioLogout.disabled = false;
  }
});

studioRequest()
  .then(({ payload }) => showStudio(Boolean(payload.authenticated)))
  .catch(() => showStudio(false));

buildStudioCardLibrary();
