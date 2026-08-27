(() => {
  const deck = document.body.classList.contains("animal-oracle-page")
    ? { name: "animal", storageKey: "kela-animal-guide-v1" }
    : document.body.classList.contains("plant-oracle-page")
      ? { name: "plant", storageKey: "kela-plant-oracle-v1" }
      : document.body.classList.contains("tree-oracle-page")
        ? { name: "tree", storageKey: "kela-tree-oracle-v1" }
        : null;
  if (!deck) return;

  fetch("/api/patti-session", {
    credentials: "same-origin",
    cache: "no-store",
  })
    .then((response) => response.ok ? response.json() : { authenticated: false })
    .then(({ authenticated }) => {
      if (!authenticated) return;
      document.body.classList.add("is-patti-authenticated");
      const actions = document.querySelector(".oracle-result-actions");
      if (!actions || actions.querySelector("[data-patti-redraw]")) return;

      const studioTools = document.createElement("div");
      studioTools.className = "patti-oracle-tools";
      studioTools.innerHTML = `
        <button class="patti-oracle-redraw" type="button" data-patti-redraw>
          Draw another ${deck.name}
        </button>
        <a href="/patti-studio">Patti Studio</a>
      `;
      const dailyNote = actions.querySelector("small");
      actions.insertBefore(studioTools, dailyNote);

      studioTools.querySelector("[data-patti-redraw]")?.addEventListener("click", () => {
        window.localStorage.removeItem(deck.storageKey);
        const nextUrl = new URL(window.location.href);
        nextUrl.search = "";
        nextUrl.hash = "";
        window.location.assign(nextUrl.toString());
      });
    })
    .catch(() => undefined);
})();
