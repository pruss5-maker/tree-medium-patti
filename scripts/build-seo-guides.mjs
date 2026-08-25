import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const readGuides = (file, variable) => {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const marker = `const ${variable} = [`;
  const markerIndex = source.indexOf(marker);
  const arrayStart = source.indexOf("[", markerIndex);
  const arrayEnd = source.indexOf("\n];", arrayStart);
  if (markerIndex < 0 || arrayStart < 0 || arrayEnd < 0) throw new Error(`Could not parse ${variable} from ${file}`);
  return vm.runInNewContext(source.slice(arrayStart, arrayEnd + 2));
};

const decks = [
  {
    key: "animal",
    singular: "animal",
    label: "Animal Oracle",
    count: 22,
    source: "animal-guide.js",
    variable: "animalGuides",
    page: "animal-oracle-card-meanings.html",
    url: "https://treemedium.vercel.app/animal-oracle-card-meanings",
    oracleUrl: "/animal-oracle",
    image: "https://treemedium.vercel.app/assets/social/kela-spirit-animal-oracle-social.jpg",
    description: "Explore 22 original Animal Oracle card meanings from KELA, including Blue Owl, Crow, Fox, Bear, Dragonfly, and more, then draw a free daily card.",
    intro: "Meet all 22 animal guides in KELA’s original deck. Each meaning is a reflective invitation—not a prediction—and each animal offers a quality to notice in your own life.",
  },
  {
    key: "tree",
    singular: "tree",
    label: "Tree Oracle",
    count: 12,
    source: "tree-oracle.js",
    variable: "treeGuides",
    page: "tree-oracle-card-meanings.html",
    url: "https://treemedium.vercel.app/tree-oracle-card-meanings",
    oracleUrl: "/tree-oracle",
    image: "https://treemedium.vercel.app/assets/social/kela-tree-oracle-social.jpg",
    description: "Explore 12 original Tree Oracle card meanings from KELA, including Oak, Willow, Cedar, Birch, Redwood, Ginkgo, and more, then draw a free daily card.",
    intro: "Meet all 12 trees in KELA’s original deck. Each tree combines a botanical identity, a symbolic quality, and a reflective practice for the day.",
  },
  {
    key: "plant",
    singular: "plant",
    label: "Plant Oracle",
    count: 20,
    source: "plant-oracle.js",
    variable: "plantGuides",
    page: "plant-oracle-card-meanings.html",
    url: "https://treemedium.vercel.app/plant-oracle-card-meanings",
    oracleUrl: "/plant-oracle",
    image: "https://treemedium.vercel.app/assets/plants/lavender.webp",
    description: "Explore 20 original Plant Oracle card meanings from KELA, including Lavender, Yarrow, Rose, Chamomile, Rosemary, and more, then draw a free daily card.",
    intro: "Meet all 20 plants in KELA’s original deck. Each card joins a botanical name with a symbolic quality and a quiet meditation prompt.",
  },
];

const detailMarkup = (deck, guide) => {
  if (deck.key === "animal") {
    return `<p class="guide-detail"><strong>Confirmation reflection:</strong> ${escapeHtml(guide.echo)}</p>`;
  }
  if (deck.key === "tree") {
    return `<p class="guide-detail"><strong>Attunement:</strong> ${escapeHtml(guide.attunement)}</p><p class="guide-question">${escapeHtml(guide.question)}</p>`;
  }
  return `<p class="guide-detail"><strong>Meditation:</strong> ${escapeHtml(guide.practice)}</p>`;
};

const guidePage = (deck) => {
  const guides = readGuides(deck.source, deck.variable);
  if (guides.length !== deck.count) throw new Error(`${deck.label}: expected ${deck.count} guides, found ${guides.length}`);
  const cards = guides.map((guide) => {
    const slug = slugify(guide.name);
    const botanical = guide.botanical ? `<p class="guide-botanical"><em>${escapeHtml(guide.botanical)}</em></p>` : "";
    const imageAlt = deck.key === "animal"
      ? `Pencil illustration of ${escapeHtml(guide.name)} from the KELA Animal Oracle deck`
      : `${escapeHtml(guide.name)} ${deck.singular} from the KELA ${deck.label} deck`;
    return `
          <article class="meaning-card" id="${slug}-meaning">
            <img src="/${escapeHtml(guide.isolatedArt || guide.art)}" width="640" height="640" loading="lazy" decoding="async" alt="${imageAlt}" />
            <div>
              <p class="guide-keyword">${escapeHtml(guide.keyword)}</p>
              <h2>${escapeHtml(guide.name)} ${deck.singular} oracle meaning</h2>
              ${botanical}
              <p>${escapeHtml(guide.message)}</p>
              ${detailMarkup(deck, guide)}
              <a class="meaning-anchor" href="#${slug}-meaning" aria-label="Link to ${escapeHtml(guide.name)} meaning">Direct link to this meaning</a>
            </div>
          </article>`;
  }).join("\n");

  const itemList = guides.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: `${guide.name} ${deck.label} card meaning`,
      url: `${deck.url}#${slugify(guide.name)}-meaning`,
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${deck.url}#webpage`,
        url: deck.url,
        name: `${deck.label} Card Meanings: Complete ${deck.count}-Card Guide`,
        description: deck.description,
        isPartOf: { "@id": "https://treemedium.vercel.app/#website" },
        about: { "@id": `${deck.url}#meanings` },
        primaryImageOfPage: { "@type": "ImageObject", url: deck.image },
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": `${deck.url}#meanings`,
        name: `${deck.label} card meanings`,
        numberOfItems: guides.length,
        itemListElement: itemList,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://treemedium.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Oracle Card Meanings", item: "https://treemedium.vercel.app/oracle-card-meanings" },
          { "@type": "ListItem", position: 3, name: `${deck.label} Meanings`, item: deck.url },
        ],
      },
    ],
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(deck.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="theme-color" content="#173d2b" />
    <link rel="canonical" href="${deck.url}" />
    <meta property="og:site_name" content="KELA — Messages from the Trees" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${deck.label} Card Meanings: Complete ${deck.count}-Card Guide" />
    <meta property="og:description" content="${escapeHtml(deck.description)}" />
    <meta property="og:url" content="${deck.url}" />
    <meta property="og:image" content="${deck.image}" />
    <meta property="og:image:alt" content="KELA ${deck.label} card meanings guide" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${deck.label} Card Meanings | KELA" />
    <meta name="twitter:description" content="${escapeHtml(deck.description)}" />
    <meta name="twitter:image" content="${deck.image}" />
    <title>${deck.label} Card Meanings: Complete ${deck.count}-Card Guide | KELA</title>
    <link rel="icon" href="/assets/kela-mark.svg" type="image/svg+xml" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="stylesheet" href="/styles.css?v=20260825-13" />
    <link rel="stylesheet" href="/oracle-guides.css?v=20260825-1" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <script src="/script.js?v=20260825-11" defer></script>
  </head>
  <body class="meaning-guide-page ${deck.key}-meaning-guide-page">
    <a class="skip-link" href="#main">Skip to the card meanings</a>
    <header class="site-header is-scrolled" data-header>
      <a class="wordmark" href="/" aria-label="KELA home"><span>KELA</span><small>Messages from the Trees</small></a>
      <div class="header-actions">
        <nav class="site-nav" id="site-nav" aria-label="Main navigation" data-nav>
          <a href="/">Home</a><a href="/animal-oracle">Animal Oracle</a><a href="/tree-oracle">Tree Oracle</a><a href="/plant-oracle">Plant Oracle</a><a href="/oracle-card-meanings" aria-current="page">Card Meanings</a><a class="site-nav-booking" href="/#booking-terms">Book with Patti</a>
        </nav>
        <a class="header-triskele" href="/#booking-terms" aria-label="Book with Patti"></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle><span class="sr-only">Open navigation</span></button>
      </div>
    </header>
    <main id="main">
      <section class="meaning-hero">
        <div class="shell">
          <p class="eyebrow gold">KELA’s original ${deck.count}-card guide</p>
          <h1>${deck.label} card meanings</h1>
          <p>${escapeHtml(deck.intro)}</p>
          <div class="meaning-hero-actions"><a class="button button-gold" href="${deck.oracleUrl}">Draw a free ${deck.singular} card</a><a class="text-link text-link-light" href="/oracle-card-meanings">Explore every oracle guide</a></div>
        </div>
      </section>
      <section class="meaning-disclosure shell" aria-label="About these meanings">
        <p>These are original KELA interpretations for spiritual reflection and personal growth. They do not claim universal, Indigenous, religious, supernatural, or medical authority. Keep what opens useful reflection; your choices remain your own.</p>
      </section>
      <section class="meaning-list shell" aria-label="${deck.label} meanings">${cards}
      </section>
      <section class="meaning-next">
        <div class="shell"><h2>Let one guide meet you today.</h2><p>Return to the interactive deck for a private daily draw—free, with no account or question collected.</p><a class="button button-gold" href="${deck.oracleUrl}">Draw from the ${deck.label}</a></div>
      </section>
    </main>
    <footer class="site-footer"><div class="shell footer-grid"><div class="footer-brand"><p class="wordmark footer-wordmark"><span>KELA</span><small>Messages from the Trees</small></p><p>with Tree Medium Patti</p></div><p class="footer-note">Original oracle meanings for reflection and personal growth.</p><div class="footer-links"><a href="/oracle-card-meanings">All Card Meanings</a><a href="${deck.oracleUrl}">${deck.label}</a><a href="/">Home</a><a href="/privacy">Privacy</a></div></div><div class="shell footer-bottom"><p>© <span data-year></span> Lumen Pleroma LLC</p><p>Listen for the roots beneath the noise.</p></div></footer>
  </body>
</html>`;
};

const hubPage = () => {
  const description = "Explore KELA’s complete collection of 54 original animal, tree, and plant oracle card meanings, or draw a free daily card from each deck.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": "https://treemedium.vercel.app/oracle-card-meanings#webpage", url: "https://treemedium.vercel.app/oracle-card-meanings", name: "Oracle Card Meanings: Animals, Trees, and Plants", description, isPartOf: { "@id": "https://treemedium.vercel.app/#website" }, inLanguage: "en-US" },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://treemedium.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Oracle Card Meanings", item: "https://treemedium.vercel.app/oracle-card-meanings" }] },
    ],
  };
  const cards = decks.map((deck) => `<article><img src="${deck.image.replace("https://treemedium.vercel.app", "")}" alt="KELA ${deck.label} card meanings" loading="lazy" /><p class="eyebrow gold">${deck.count} original cards</p><h2>${deck.label} meanings</h2><p>${escapeHtml(deck.intro)}</p><div><a class="button button-gold" href="/${deck.page.replace(".html", "")}">Read all ${deck.count} meanings</a><a class="text-link text-link-light" href="${deck.oracleUrl}">Draw a card</a></div></article>`).join("\n");
  return `<!doctype html>
<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="description" content="${description}" /><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" /><meta name="theme-color" content="#173d2b" /><link rel="canonical" href="https://treemedium.vercel.app/oracle-card-meanings" /><meta property="og:site_name" content="KELA — Messages from the Trees" /><meta property="og:locale" content="en_US" /><meta property="og:type" content="website" /><meta property="og:title" content="Oracle Card Meanings: Animals, Trees &amp; Plants | KELA" /><meta property="og:description" content="${description}" /><meta property="og:url" content="https://treemedium.vercel.app/oracle-card-meanings" /><meta property="og:image" content="https://treemedium.vercel.app/assets/social/kela-tree-oracle-social.jpg" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="54 Oracle Card Meanings | KELA" /><meta name="twitter:description" content="${description}" /><meta name="twitter:image" content="https://treemedium.vercel.app/assets/social/kela-tree-oracle-social.jpg" /><title>Oracle Card Meanings: 54 Animal, Tree &amp; Plant Cards | KELA</title><link rel="icon" href="/assets/kela-mark.svg" type="image/svg+xml" /><link rel="manifest" href="/site.webmanifest" /><link rel="stylesheet" href="/styles.css?v=20260825-13" /><link rel="stylesheet" href="/oracle-guides.css?v=20260825-1" /><script type="application/ld+json">${JSON.stringify(jsonLd)}</script><script src="/script.js?v=20260825-11" defer></script></head>
<body class="meaning-guide-page meanings-hub-page"><a class="skip-link" href="#main">Skip to the oracle guides</a><header class="site-header is-scrolled" data-header><a class="wordmark" href="/" aria-label="KELA home"><span>KELA</span><small>Messages from the Trees</small></a><div class="header-actions"><nav class="site-nav" id="site-nav" aria-label="Main navigation" data-nav><a href="/">Home</a><a href="/animal-oracle">Animal Oracle</a><a href="/tree-oracle">Tree Oracle</a><a href="/plant-oracle">Plant Oracle</a><a href="/oracle-card-meanings" aria-current="page">Card Meanings</a><a class="site-nav-booking" href="/#booking-terms">Book with Patti</a></nav><a class="header-triskele" href="/#booking-terms" aria-label="Book with Patti"></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle><span class="sr-only">Open navigation</span></button></div></header><main id="main"><section class="meaning-hero"><div class="shell"><p class="eyebrow gold">Animals · Trees · Plants</p><h1>Oracle card meanings</h1><p>Explore 54 original KELA meanings, then let one guide meet you through a free daily draw.</p></div></section><section class="meaning-hub-grid shell">${cards}</section><section class="meaning-disclosure shell"><p>KELA’s oracle cards are reflective spiritual prompts, not predictions, diagnoses, treatments, or commands.</p></section></main><footer class="site-footer"><div class="shell footer-grid"><div class="footer-brand"><p class="wordmark footer-wordmark"><span>KELA</span><small>Messages from the Trees</small></p><p>with Tree Medium Patti</p></div><p class="footer-note">54 original oracle meanings for reflection and personal growth.</p><div class="footer-links"><a href="/animal-oracle-card-meanings">Animal Meanings</a><a href="/tree-oracle-card-meanings">Tree Meanings</a><a href="/plant-oracle-card-meanings">Plant Meanings</a><a href="/">Home</a></div></div></footer></body></html>`;
};

const cleanGeneratedMarkup = (markup) => markup.replace(/[ \t]+$/gm, "");

for (const deck of decks) fs.writeFileSync(path.join(root, deck.page), cleanGeneratedMarkup(guidePage(deck)));
fs.writeFileSync(path.join(root, "oracle-card-meanings.html"), cleanGeneratedMarkup(hubPage()));
console.log(`Generated ${decks.length + 1} SEO guide pages.`);
