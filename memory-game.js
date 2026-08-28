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
  const printGrid = document.querySelector("[data-print-grid]");
  const printDeckName = document.querySelector("[data-print-deck-name]");

  if (printGrid && !document.querySelector("[data-memory-print-duplex-styles]")) {
    const printStyles = document.createElement("link");
    printStyles.rel = "stylesheet";
    printStyles.href = "memory-print-duplex.css?v=20260826-1";
    printStyles.dataset.memoryPrintDuplexStyles = "";
    document.head.append(printStyles);
  }

  let activeCards = [];
  let firstCard = null;
  let secondCard = null;
  let moves = 0;
  let matches = 0;
  let locked = false;
  let startedAt = 0;
  let timerId = 0;
  let winTimerId = 0;

  gameRoot.insertAdjacentHTML("beforeend", `
    <div class="memory-win-modal" data-memory-win-modal hidden>
      <div class="memory-win-backdrop" data-memory-win-close></div>
      <section class="memory-win-card" role="dialog" aria-modal="true" aria-labelledby="memory-win-title" aria-describedby="memory-win-invocation">
        <button class="memory-win-close" type="button" data-memory-win-close aria-label="Close winning guide">×</button>
        <p class="memory-win-eyebrow" data-memory-win-eyebrow>Your winning ${deck?.label || "nature"} guide</p>
        <div class="memory-win-art"><img data-memory-win-image width="640" height="640" alt="" /></div>
        <h2 id="memory-win-title" data-memory-win-title></h2>
        <p class="memory-win-label">KELA protection invocation</p>
        <blockquote id="memory-win-invocation" data-memory-win-invocation></blockquote>
        <p class="memory-win-woven">Woven together across the Earth and beyond.</p>
        <div class="memory-win-actions">
          <button class="memory-button" type="button" data-memory-win-again>Play Again</button>
          <a class="memory-button secondary" data-memory-win-oracle>Visit the ${deck?.label || "Nature"} Oracle</a>
        </div>
      </section>
    </div>`);

  const winModal = gameRoot.querySelector("[data-memory-win-modal]");
  const winTitle = gameRoot.querySelector("[data-memory-win-title]");
  const winImage = gameRoot.querySelector("[data-memory-win-image]");
  const winInvocation = gameRoot.querySelector("[data-memory-win-invocation]");
  const winOracle = gameRoot.querySelector("[data-memory-win-oracle]");
  const winAgain = gameRoot.querySelector("[data-memory-win-again]");

  const closeWinningGuide = () => {
    if (!winModal || winModal.hidden) return;
    winModal.hidden = true;
    document.body.classList.remove("memory-modal-open");
    if (window.location.hash === "#found-you") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  };

  const showWinningGuide = (item) => {
    if (!winModal || !item) return;
    winTitle.textContent = `${item.name} found you!`;
    winImage.src = item.image;
    winImage.alt = `${item.name} coloring outline`;
    winInvocation.textContent = `“Dear ${item.name}, please protect my mind and energy from any unkind thoughts or energies. Allow only kind thoughts and words to enter my field.”`;
    winOracle.href = `/${deckKey}-oracle?found=${encodeURIComponent(item.slug)}`;
    winOracle.textContent = `See the ${item.name} Oracle card`;
    winModal.hidden = false;
    document.body.classList.add("memory-modal-open");
    gameRoot.querySelector("[data-memory-win-close]")?.focus();
  };

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
          <small>Find a pair</small>
        </span>
        <span class="memory-card-face memory-card-front">
          <img src="${item.image}" width="640" height="640" alt="${item.name} coloring outline" />
          <strong>${item.name}</strong>
        </span>
      </span>
    </button>`;

  const finishGame = (winningItem) => {
    window.clearInterval(timerId);
    updateTimer();
    statusOutput.textContent = `You found all ${matches} pairs in ${moves} moves. ${winningItem.name} is your winning ${deck.label.toLowerCase()}!`;
    gameRoot.classList.add("is-complete");
    window.KelaCompanions?.rememberFound?.({
      deck: deckKey,
      slug: winningItem.slug,
      name: winningItem.name,
      image: winningItem.image,
    });
    window.clearTimeout(winTimerId);
    winTimerId = window.setTimeout(() => showWinningGuide(winningItem), 560);
  };

  const reopenFoundGuide = () => {
    if (window.location.hash !== "#found-you") return;
    const savedGuide = window.KelaCompanions?.getFound?.(deckKey);
    const foundItem = deck?.items.find((item) => item.slug === savedGuide?.slug);
    if (!foundItem) return;
    window.requestAnimationFrame(() => showWinningGuide(foundItem));
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
      if (matches === activeCards.length) finishGame(item);
      return;
    }

    statusOutput.textContent = "Not this time. Remember where they are.";
    window.setTimeout(hideUnmatched, 820);
  };

  const renderPrintDeck = () => {
    if (!deck || !printGrid) return;
    printDeckName.textContent = `${deck.label} Memory Cards`;
    const cards = deck.items.flatMap((item) => [0, 1].map(() => `
        <article class="print-memory-card">
          <span class="print-card-brand">KELA</span>
          <img src="${item.image}" width="640" height="640" alt="" />
          <strong>${item.name}</strong>
        </article>`));
    const pages = [];
    const cardsPerSheet = 24;
    for (let index = 0; index < cards.length; index += cardsPerSheet) {
      const backCards = Array.from({ length: cardsPerSheet }, () => `
        <article class="print-card-back-sheet" aria-label="Triskelion card back">
          <img class="print-card-triskele" src="assets/memory-games/printable/triskele-outline.svg" alt="" />
        </article>`).join("");
      pages.push(`
        <section class="print-page print-duplex-front">
          <header class="print-page-header">
            <h2>${deck.label} Memory Cards</h2>
            <p>KELA · Double-sided · Flip on long edge · Color · Cut · Match</p>
          </header>
          <div class="print-page-grid">${cards.slice(index, index + cardsPerSheet).join("")}</div>
        </section>
        <section class="print-page print-duplex-back">
          <header class="print-page-header" aria-hidden="true"><h2>Card Backs</h2></header>
          <div class="print-page-grid">${backCards}</div>
        </section>`);
    }
    printGrid.innerHTML = pages.join("");
  };

  const newGame = () => {
    if (!deck || !board) return;
    window.clearInterval(timerId);
    window.clearTimeout(winTimerId);
    closeWinningGuide();
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

  pairSelect.addEventListener("change", newGame);
  resetButton.addEventListener("click", newGame);
  winAgain?.addEventListener("click", newGame);
  gameRoot.querySelectorAll("[data-memory-win-close]").forEach((button) => {
    button.addEventListener("click", closeWinningGuide);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !winModal?.hidden) closeWinningGuide();
  });
  window.addEventListener("hashchange", reopenFoundGuide);
  renderPrintDeck();
  newGame();
  reopenFoundGuide();
}
