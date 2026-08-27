/* Use explicit "Free Online Oracle" language anywhere a visitor chooses a deck. */
(() => {
  const oracleRoutes = [
    ["/tree-oracle", "Free Online Tree Oracle"],
    ["/plant-oracle", "Free Online Plant Oracle"],
    ["/animal-oracle", "Free Online Animal Oracle"],
  ];
  const menuOracleRoutes = [
    ["/animal-oracle", "Animal"],
    ["/tree-oracle", "Tree"],
    ["/plant-oracle", "Plant"],
  ];
  const oracleLabels = new Map(oracleRoutes);
  const shortOracleLabels = new Map(menuOracleRoutes);
  const routeFor = (anchor) => {
    try {
      return new URL(anchor.getAttribute("href"), window.location.origin).pathname
        .replace(/\.html$/, "")
        .replace(/\/$/, "") || "/";
    } catch {
      return "";
    }
  };

  document.querySelectorAll("a[href]").forEach((anchor) => {
    const label = oracleLabels.get(routeFor(anchor));
    if (!label) return;
    const cardLabel = anchor.matches(".home-gift-card, .portal-oracle-choice")
      ? anchor.querySelector(":scope > span")
      : null;
    if (cardLabel) {
      cardLabel.textContent = anchor.matches(".home-gift-card")
        ? shortOracleLabels.get(routeFor(anchor))
        : label;
    }
    else if (anchor.childElementCount === 0) anchor.textContent = label;
    anchor.dataset.freeOnlineOracle = "";
  });

  document.querySelectorAll(".site-nav").forEach((nav) => {
    const linksByRoute = new Map(
      [...nav.querySelectorAll(":scope > a[href]")]
        .map((anchor) => [routeFor(anchor), anchor])
        .filter(([route]) => oracleLabels.has(route)),
    );
    if (!linksByRoute.size) return;

    let heading = nav.querySelector(":scope > .site-nav-oracle-heading");
    if (!heading) {
      heading = document.createElement("span");
      heading.className = "site-nav-oracle-heading";
      heading.setAttribute("role", "heading");
      heading.setAttribute("aria-level", "2");
      heading.textContent = "Free Online Oracles";
      nav.insertBefore(heading, linksByRoute.values().next().value);
    }

    let position = heading;
    menuOracleRoutes.forEach(([route, menuLabel]) => {
      const link = linksByRoute.get(route);
      if (!link) return;
      link.textContent = menuLabel;
      link.dataset.oracleMenuChoice = "";
      link.setAttribute("aria-label", oracleLabels.get(route));
      position.after(link);
      position = link;
    });
  });

  document.querySelectorAll(".home-gifts-heading .home-eyebrow").forEach((heading) => {
    heading.textContent = "Free Online Oracle Cards";
  });
  document.querySelectorAll('[aria-label="Choose a free oracle deck"]').forEach((chooser) => {
    chooser.setAttribute("aria-label", "Choose a free online oracle: Tree, Plant, or Animal");
  });

  const labelStyles = document.createElement("style");
  labelStyles.dataset.freeOnlineOracleStyles = "";
  labelStyles.textContent = `
    .site-nav:has(.site-nav-oracle-heading) { gap: clamp(11px, 2.4vh, 20px); }
    .site-nav-oracle-heading {
      position: relative;
      z-index: 1;
      display: block;
      margin: 3px 0 -3px;
      color: #e5c36f;
      font: 900 0.72rem/1.2 var(--sans, sans-serif);
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    .site-nav > a[data-oracle-menu-choice] {
      margin-left: 12px;
      padding-left: 17px;
      font-size: clamp(1.25rem, 4.8vw, 1.55rem);
      border-left: 1px solid rgba(229, 195, 111, 0.48);
    }
    @media (max-height: 700px) {
      .site-nav:has(.site-nav-oracle-heading) { gap: 9px; padding-top: 78px; padding-bottom: 34px; }
      .site-nav > a[data-oracle-menu-choice] { font-size: 1.18rem; }
      .site-nav-oracle-heading { font-size: 0.64rem; }
    }
  `;
  document.head.append(labelStyles);
})();
