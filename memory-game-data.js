window.KelaMemoryDecks = {
  animal: {
    label: "Animal",
    plural: "Animals",
    accent: "#0b4960",
    prompt: "Find the matching animal.",
    items: [
      ["Blue Owl", "blue-owl"], ["Octopus", "octopus"], ["Tiger", "tiger"],
      ["Parrot", "parrot"], ["Fox", "fox"], ["Bunny Rabbit", "bunny-rabbit"],
      ["Mole", "mole"], ["Turtle", "turtle"], ["Hummingbird", "hummingbird"],
      ["Bear", "bear"], ["Deer", "deer"], ["Crow", "crow"], ["Whale", "whale"],
      ["Frog", "frog"], ["Spider", "spider"], ["Horse", "horse"],
      ["Elephant", "elephant"], ["Moth", "moth"], ["Bee", "bee"],
      ["Dolphin", "dolphin"], ["Snake", "snake"], ["Dragonfly", "dragonfly"],
    ],
  },
  tree: {
    label: "Tree",
    plural: "Trees",
    accent: "#285340",
    prompt: "Find the matching tree.",
    items: [
      ["Madrona", "madrona"], ["Neem", "neem"], ["Baobab", "baobab"],
      ["Banyan", "banyan"], ["Willow", "willow"], ["Cedar", "cedar"],
      ["Oak", "oak"], ["Birch", "birch"], ["Redwood", "redwood"],
      ["Olive", "olive"], ["Ginkgo", "ginkgo"], ["Jacaranda", "jacaranda"],
    ],
  },
  plant: {
    label: "Plant",
    plural: "Plants",
    accent: "#49613f",
    prompt: "Find the matching plant.",
    items: [
      ["Yarrow", "yarrow"], ["Lavender", "lavender"], ["Hibiscus", "hibiscus"],
      ["Comfrey", "comfrey"], ["Chamomile", "chamomile"], ["Calendula", "calendula"],
      ["Plantain", "plantain"], ["Sunflower", "sunflower"], ["Rosemary", "rosemary"],
      ["Garden Sage", "garden-sage"], ["Mugwort", "mugwort"], ["Rose", "rose"],
      ["Dandelion", "dandelion"], ["Stinging Nettle", "stinging-nettle"],
      ["Peppermint", "peppermint"], ["Basil", "basil"], ["Echinacea", "echinacea"],
      ["Jasmine", "jasmine"], ["Lemon Balm", "lemon-balm"], ["Red Clover", "red-clover"],
    ],
  },
};

Object.entries(window.KelaMemoryDecks).forEach(([deck, config]) => {
  config.items = config.items.map(([name, slug]) => ({
    name,
    slug,
    image: `/assets/memory-games/line-art/${deck}/${slug}.webp?v=20260826-1`,
  }));
});
