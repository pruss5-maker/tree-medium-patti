const socialDecks = [
  {
    id: "animal-cards",
    deck: "animal",
    title: "Animal Oracle",
    cards: [
      ["Owl", "blue-owl"], ["Octopus", "octopus"], ["Tiger", "tiger"],
      ["Parrot", "parrot"], ["Fox", "fox"], ["Bunny Rabbit", "bunny-rabbit"],
      ["Mole", "mole"], ["Turtle", "turtle"], ["Hummingbird", "hummingbird"],
      ["Bear", "bear"], ["Deer", "deer"], ["Crow", "crow"], ["Whale", "whale"],
      ["Frog", "frog"], ["Spider", "spider"], ["Horse", "horse"],
      ["Elephant", "elephant"], ["Moth", "moth"], ["Bee", "bee"],
      ["Dolphin", "dolphin"], ["Snake", "snake"], ["Dragonfly", "dragonfly"],
    ],
  },
  {
    id: "tree-cards",
    deck: "tree",
    title: "Tree Oracle",
    cards: [
      ["Madrona", "madrona"], ["Neem", "neem"], ["Baobab", "baobab"],
      ["Banyan", "banyan"], ["Willow", "willow"], ["Cedar", "cedar"],
      ["Oak", "oak"], ["Birch", "birch"], ["Redwood", "redwood"],
      ["Olive", "olive"], ["Ginkgo", "ginkgo"], ["Jacaranda", "jacaranda"],
    ],
  },
  {
    id: "plant-cards",
    deck: "plant",
    title: "Plant Oracle",
    cards: [
      ["Yarrow", "yarrow"], ["Lavender", "lavender"], ["Hibiscus", "hibiscus"],
      ["Comfrey", "comfrey"], ["Chamomile", "chamomile"], ["Calendula", "calendula"],
      ["Plantain", "plantain"], ["Sunflower", "sunflower"], ["Rosemary", "rosemary"],
      ["Garden Sage", "garden-sage"], ["Mugwort", "mugwort"], ["Rose", "rose"],
      ["Dandelion", "dandelion"], ["Stinging Nettle", "stinging-nettle"],
      ["Peppermint", "peppermint"], ["Basil", "basil"], ["Echinacea", "echinacea"],
      ["Jasmine", "jasmine"], ["Lemon Balm", "lemon-balm"], ["Red Clover", "red-clover"],
    ],
  },
];

const library = document.querySelector("[data-social-library]");

socialDecks.forEach(({ id, deck, title, cards }) => {
  const section = document.createElement("section");
  section.className = "deck-section";
  section.id = id;
  section.innerHTML = `
    <div class="deck-heading">
      <h2>${title}</h2>
      <p>${cards.length} cards · 1080 × 1920 JPG</p>
    </div>
    <div class="gallery"></div>`;
  const gallery = section.querySelector(".gallery");

  cards.forEach(([name, slug]) => {
    const imagePath = `reels/${deck}/${slug}.jpg`;
    const imageUrl = `${imagePath}?v=20260824-4`;
    const figure = document.createElement("figure");
    figure.innerHTML = `
      <a class="image-link" href="${imageUrl}" target="_blank" rel="noopener">
        <img src="${imageUrl}" width="1080" height="1920" loading="lazy" decoding="async" alt="${name} ${title} social Reel card">
      </a>
      <figcaption>
        <span class="card-name">${name}</span>
        <a class="download" href="${imageUrl}" download="kela-${deck}-oracle-${slug}-reel.jpg">Download</a>
      </figcaption>`;
    gallery.append(figure);
  });

  library.append(section);
});
