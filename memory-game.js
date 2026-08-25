const gameRoot = document.querySelector("[data-memory-game]");

if (gameRoot) {
  const deckKey = gameRoot.dataset.deck;
  const deck = window.KelaMemoryDecks?.[deckKey];
  const board = gameRoot.querySelector("[data-memory-board]");
  const movesOutput = gameRoot.querySelector("[data-memory-moves]");
  const matchesOutput = gameRoot.querySelector("[data-memory-matches]");
  const timerOutput = gameRoot.querySelector("[data-memory-time]");
  const statusOutput = gameRoot.querySelector("[data-memory-status]");
  const pairSelect = gameRoot.querySelector("[data-memory-pairs]");
  const resetButton = gameRoot.querySelector("[data-memory-reset]");
  const printButton = document.querySelector("[data-memory-print]");
  const printGrid = document.querySelector("[data-print-grid]");
  const printDeckName = document.querySelector("[data-print-deck-name]");

  let activeCards = [];
  let firstCard = null;
  let secondCard = null;
  let moves = 0;
  let matches = 0;
  let locked = false;
  let startedAt = 0;
  let timerId = 0;

  const shuffle = (items) => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const random = new Uint32Array(1);
      const offset = window.crypto?.getRandomValues
        ? (window.crypto.getRandomValues(random), random[0] % (index + 1))
        : Math.floor(Math.random() * (index + 1));
      [copy[index], copy[offset]] = [copy[offset], copy[index]];
    }
    return copy;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
  };

  const updateTimer = () => {
    if (!startedAt) return;
    timerOutput.textContent = formatTime(Math.floor((Date.now() - startedAt) / 1000));
  };

  const startTimer = () => {
    if (startedAt) return;
    startedAt = Date.now();
    timerId = window.setInterval(updateTimer, 1000);
  };

  const cardMarkup = (item) => `
    <button class="memory-card" type="button" data-memory-card data-slug="${item.slug}" aria-label="Hidden memory card">
      <span class="memory-card-inner">
        <span class="memory-card-face memory-card-back" aria-hidden="true">
          <span class="memory-card-kela">K</span>
          <small>Find a pair</small>
        </span>
        <span class="memory-card-face memory-card-front">
          <img src="${item.image}" width="640" height="640" alt="${item.name} coloring outline" />
          <strong>${item.name}</strong>
        </span>
      </span>
    </button>`;

  const finishGame = () => {
    window.clearInterval(timerId);
    updateTimer();
    statusOutput.textContent = `You found all ${matches} pairs in ${moves} moves. Beautiful remembering!`;
    gameRoot.classList.add("is-complete");
  };

  const hideUnmatched = () => {
    firstCard?.classList.remove("is-flipped");
    secondCard?.classList.remove("is-flipped");
    firstCard?.setAttribute("aria-label", "Hidden memory card");
    secondCard?.setAttribute("aria-label", "Hidden memory card");
    firstCard = null;
    secondCard = null;
    locked = false;
  };

  const chooseCard = (card) => {
    if (locked || card.classList.contains("is-flipped") || card.classList.contains("is-matched")) return;
    startTimer();
    card.classList.add("is-flipped");
    const item = activeCards.find((entry) => entry.slug === card.dataset.slug);
    card.setAttribute("aria-label", item ? `${item.name} card` : "Revealed memory card");

    if (!firstCard) {
      firstCard = card;
      statusOutput.textContent = "Choose one more card.";
      return;
    }

    secondCard = card;
    moves += 1;
    movesOutput.textContent = String(moves);
    locked = true;

    if (firstCard.dataset.slug === secondCard.dataset.slug) {
      matches += 1;
      matchesOutput.textContent = String(matches);
      [firstCard, secondCard].forEach((matchedCard) => {
        matchedCard.classList.add("is-matched");
        matchedCard.setAttribute("aria-label", `Matched ${item?.name || "card"}`);
      });
      statusOutput.textContent = `${item?.name || "Pair"} matched!`;
      firstCard = null;
      secondCard = null;
      locked = false;
      if (matches === activeCards.length) finishGame();
      return;
    }

    statusOutput.textContent = "Not this time. Remember where they are.";
    window.setTimeout(hideUnmatched, 820);
  };

  const renderPrintDeck = () => {
    if (!deck || !printGrid) return;
    printDeckName.textContent = `${deck.label} Memory Cards`;
    printGrid.innerHTML = deck.items.flatMap((item) => [0, 1].map(() => `
      <article class="print-memory-card">
        <span class="print-card-brand">KELA</span>
        <img src="${item.image}" width="640" height="640" alt="" />
        <strong>${item.name}</strong>
      </article>`)).join("");
  };

  const newGame = () => {
    if (!deck || !board) return;
    window.clearInterval(timerId);
    const requestedPairs = pairSelect.value === "all" ? deck.items.length : Number.parseInt(pairSelect.value, 10);
    activeCards = shuffle(deck.items).slice(0, Math.min(requestedPairs, deck.items.length));
    const dealtCards = shuffle(activeCards.flatMap((item) => [{ item }, { item }]));
    board.innerHTML = dealtCards.map(({ item }) => cardMarkup(item)).join("");
    board.style.setProperty("--pair-count", String(activeCards.length));
    firstCard = null;
    secondCard = null;
    moves = 0;
    matches = 0;
    locked = false;
    startedAt = 0;
    timerId = 0;
    movesOutput.textContent = "0";
    matchesOutput.textContent = "0";
    timerOutput.textContent = "0:00";
    statusOutput.textContent = deck.prompt;
    gameRoot.classList.remove("is-complete");
    board.querySelectorAll("[data-memory-card]").forEach((card) => {
      card.addEventListener("click", () => chooseCard(card));
    });
  };

  pairSelect.querySelector('[value="all"]').textContent = `Full deck · ${deck.items.length} pairs`;
  pairSelect.addEventListener("change", newGame);
  resetButton.addEventListener("click", newGame);
  printButton?.addEventListener("click", () => window.print());
  renderPrintDeck();
  newGame();
}
