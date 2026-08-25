(() => {
  const canvas = document.querySelector("[data-game-canvas]");
  if (!canvas) return;

  const context = canvas.getContext("2d", { alpha: false });
  const stage = document.querySelector("[data-game-stage]");
  const welcome = document.querySelector("[data-game-welcome]");
  const welcomeEyebrow = welcome.querySelector(".eyebrow");
  const welcomeTitle = welcome.querySelector("h2");
  const welcomeCopy = welcome.querySelector("p:not(.eyebrow)");
  const startButton = document.querySelector("[data-game-start]");
  const actionButton = document.querySelector("[data-game-action]");
  const actionLabel = document.querySelector("[data-game-action-label]");
  const pauseButton = document.querySelector("[data-game-pause]");
  const guidePicker = document.querySelector("[data-game-guide-picker]");
  const guideOutput = document.querySelector("[data-game-guide]");
  const scoreOutput = document.querySelector("[data-game-score]");
  const bestOutput = document.querySelector("[data-game-best]");
  const livesOutput = document.querySelector("[data-game-lives]");
  const liveOutput = document.querySelector("[data-game-live]");

  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  const GROUND_Y = 432;
  const GUIDE_CHANGE_SCORE = 5;
  const BEST_KEY = "kela-animal-bug-quest-best";

  const guides = [
    ["Blue Owl", "blue-owl"],
    ["Octopus", "octopus"],
    ["Tiger", "tiger"],
    ["Parrot", "parrot"],
    ["Fox", "fox"],
    ["Bunny Rabbit", "bunny-rabbit"],
    ["Mole", "mole"],
    ["Turtle", "turtle"],
    ["Hummingbird", "hummingbird"],
    ["Bear", "bear"],
    ["Deer", "deer"],
    ["Crow", "crow"],
    ["Whale", "whale"],
    ["Frog", "frog"],
    ["Spider", "spider"],
    ["Horse", "horse"],
    ["Elephant", "elephant"],
    ["Moth", "moth"],
    ["Bee", "bee"],
    ["Dolphin", "dolphin"],
    ["Snake", "snake"],
    ["Dragonfly", "dragonfly"],
  ].map(([name, slug]) => ({ name, slug }));

  const state = {
    mode: "idle",
    score: 0,
    best: readBest(),
    lives: 3,
    guideIndex: 0,
    bugs: [],
    particles: [],
    spawnClock: 0,
    distance: 0,
    lastTime: performance.now(),
  };

  const player = {
    x: 126,
    y: GROUND_Y - 112,
    width: 112,
    height: 112,
    velocityY: 0,
    image: new Image(),
    imageReady: false,
    pulse: 0,
  };

  function readBest() {
    try {
      return Number.parseInt(localStorage.getItem(BEST_KEY), 10) || 0;
    } catch {
      return 0;
    }
  }

  function writeBest() {
    try {
      localStorage.setItem(BEST_KEY, String(state.best));
    } catch {
      // The game remains playable when storage is unavailable.
    }
  }

  function currentGuide() {
    return guides[state.guideIndex];
  }

  function isOctopus() {
    return currentGuide().slug === "octopus";
  }

  function populateGuidePicker() {
    guides.forEach((guide, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = guide.name;
      guidePicker.append(option);
    });
  }

  function setGuide(index, shouldAnnounce = true) {
    const wasOctopus = isOctopus();
    state.guideIndex = (index + guides.length) % guides.length;
    const guide = currentGuide();
    const nowOctopus = isOctopus();

    player.imageReady = false;
    player.image = new Image();
    player.image.onload = () => {
      player.imageReady = true;
    };
    player.image.src = `assets/animals/cutouts-transparent/${guide.slug}.png`;
    guidePicker.value = String(state.guideIndex);
    guideOutput.textContent = guide.name;
    actionLabel.textContent = nowOctopus ? "Swim" : "Jump";
    actionButton.querySelector("span").textContent = nowOctopus ? "≈" : "↑";

    if (nowOctopus && !wasOctopus) {
      player.y = 330;
      player.velocityY = -1.5;
    } else if (!nowOctopus && wasOctopus) {
      player.y = GROUND_Y - player.height;
      player.velocityY = 0;
    }

    if (shouldAnnounce) {
      liveOutput.textContent = `${guide.name} has joined the journey.`;
    }
  }

  function updateOutputs() {
    scoreOutput.textContent = String(state.score);
    bestOutput.textContent = String(state.best);
    const glow = Array.from({ length: 3 }, (_, index) => (index < state.lives ? "●" : "○")).join(" ");
    livesOutput.textContent = glow;
    livesOutput.setAttribute("aria-label", `${state.lives} glow ${state.lives === 1 ? "leaf" : "leaves"} remaining`);
  }

  function resetGame() {
    state.score = 0;
    state.lives = 3;
    state.bugs = [];
    state.particles = [];
    state.spawnClock = 520;
    state.distance = 0;
    player.velocityY = 0;
    player.pulse = 0;
    player.y = isOctopus() ? 330 : GROUND_Y - player.height;
    updateOutputs();
  }

  function startGame() {
    if (state.mode === "idle" || state.mode === "over") resetGame();
    state.mode = "running";
    welcome.hidden = true;
    pauseButton.disabled = false;
    pauseButton.textContent = "Pause";
    state.lastTime = performance.now();
    canvas.focus({ preventScroll: true });
    liveOutput.textContent = `${currentGuide().name}'s journey has begun.`;
  }

  function showWelcome(eyebrow, title, copy, buttonText) {
    welcomeEyebrow.textContent = eyebrow;
    welcomeTitle.textContent = title;
    welcomeCopy.textContent = copy;
    startButton.textContent = buttonText;
    welcome.hidden = false;
  }

  function togglePause() {
    if (state.mode === "running") {
      state.mode = "paused";
      pauseButton.textContent = "Resume";
      showWelcome("A quiet pause", "The path is waiting", "Return whenever you are ready.", "Keep Going");
      liveOutput.textContent = "Game paused.";
    } else if (state.mode === "paused") {
      startGame();
    }
  }

  function endGame() {
    state.mode = "over";
    pauseButton.disabled = true;
    pauseButton.textContent = "Pause";
    showWelcome(
      "The guides are resting",
      `${state.score} ${state.score === 1 ? "bug" : "bugs"} gathered`,
      `Your best journey is ${state.best}. Every small catch added light to the path.`,
      "Journey Again",
    );
    liveOutput.textContent = `Journey complete. You gathered ${state.score} bugs.`;
  }

  function takeAction() {
    if (state.mode === "paused") {
      startGame();
      return;
    }
    if (state.mode !== "running") startGame();

    if (isOctopus()) {
      player.velocityY = Math.max(player.velocityY - 5.8, -9.2);
      player.pulse = 1;
      return;
    }

    const onGround = player.y >= GROUND_Y - player.height - 2;
    if (onGround) {
      player.velocityY = -14.5;
      player.pulse = 1;
    }
  }

  function spawnBug() {
    const watery = isOctopus();
    const landHeights = [GROUND_Y - 22, GROUND_Y - 104, GROUND_Y - 174];
    const y = watery
      ? 108 + Math.random() * 300
      : landHeights[Math.floor(Math.random() * landHeights.length)];
    const varieties = [
      { color: "#f4cf69", wing: "rgba(255, 244, 188, 0.72)", size: 16 },
      { color: "#d47b54", wing: "rgba(245, 213, 169, 0.7)", size: 18 },
      { color: "#8fc495", wing: "rgba(225, 247, 220, 0.68)", size: 15 },
    ];
    const variety = varieties[Math.floor(Math.random() * varieties.length)];
    state.bugs.push({
      x: WIDTH + 36,
      y,
      radius: variety.size,
      color: variety.color,
      wing: variety.wing,
      speed: Math.min(10.5, 5.4 + state.score * 0.055 + Math.random() * 0.8),
      phase: Math.random() * Math.PI * 2,
    });
  }

  function addCatchParticles(x, y, color) {
    for (let index = 0; index < 15; index += 1) {
      const angle = (Math.PI * 2 * index) / 15 + Math.random() * 0.3;
      const speed = 1.5 + Math.random() * 3.5;
      state.particles.push({
        x,
        y,
        velocityX: Math.cos(angle) * speed,
        velocityY: Math.sin(angle) * speed,
        life: 1,
        size: 2 + Math.random() * 4,
        color,
      });
    }
  }

  function intersectsPlayer(bug) {
    const paddingX = 18;
    const paddingY = 14;
    const left = player.x + paddingX;
    const right = player.x + player.width - paddingX;
    const top = player.y + paddingY;
    const bottom = player.y + player.height - paddingY;
    const nearestX = Math.max(left, Math.min(bug.x, right));
    const nearestY = Math.max(top, Math.min(bug.y, bottom));
    const deltaX = bug.x - nearestX;
    const deltaY = bug.y - nearestY;
    return deltaX * deltaX + deltaY * deltaY < bug.radius * bug.radius;
  }

  function catchBug(bug) {
    state.score += 1;
    if (state.score > state.best) {
      state.best = state.score;
      writeBest();
    }
    addCatchParticles(bug.x, bug.y, bug.color);
    updateOutputs();

    if (state.score % GUIDE_CHANGE_SCORE === 0) {
      setGuide(state.guideIndex + 1);
    } else {
      liveOutput.textContent = `${currentGuide().name} gathered bug ${state.score}.`;
    }
  }

  function missBug() {
    state.lives -= 1;
    updateOutputs();
    liveOutput.textContent = `A bug drifted past. ${state.lives} glow ${state.lives === 1 ? "leaf" : "leaves"} remain.`;
    if (state.lives <= 0) endGame();
  }

  function updatePlayer(step) {
    player.pulse = Math.max(0, player.pulse - 0.055 * step);

    if (isOctopus()) {
      player.velocityY += 0.28 * step;
      player.y += player.velocityY * step;
      if (player.y < 68) {
        player.y = 68;
        player.velocityY = 0.8;
      }
      const seaFloor = HEIGHT - player.height - 48;
      if (player.y > seaFloor) {
        player.y = seaFloor;
        player.velocityY = -2.2;
      }
      return;
    }

    player.velocityY += 0.72 * step;
    player.y += player.velocityY * step;
    const floor = GROUND_Y - player.height;
    if (player.y > floor) {
      player.y = floor;
      player.velocityY = 0;
    }
  }

  function updateBugs(step, elapsed) {
    state.spawnClock -= elapsed;
    if (state.spawnClock <= 0) {
      spawnBug();
      const pace = Math.max(670, 1250 - state.score * 11);
      state.spawnClock = pace + Math.random() * 380;
    }

    for (let index = state.bugs.length - 1; index >= 0; index -= 1) {
      const bug = state.bugs[index];
      bug.x -= bug.speed * step;
      bug.phase += 0.1 * step;
      if (intersectsPlayer(bug)) {
        state.bugs.splice(index, 1);
        catchBug(bug);
      } else if (bug.x < -40) {
        state.bugs.splice(index, 1);
        missBug();
      }
    }
  }

  function updateParticles(step) {
    for (let index = state.particles.length - 1; index >= 0; index -= 1) {
      const particle = state.particles[index];
      particle.x += particle.velocityX * step;
      particle.y += particle.velocityY * step;
      particle.velocityY += 0.08 * step;
      particle.life -= 0.026 * step;
      if (particle.life <= 0) state.particles.splice(index, 1);
    }
  }

  function update(elapsed) {
    const step = elapsed / (1000 / 60);
    state.distance += 2.2 * step;
    updatePlayer(step);
    updateBugs(step, elapsed);
    updateParticles(step);
  }

  function drawForestBackground() {
    const sky = context.createLinearGradient(0, 0, 0, HEIGHT);
    sky.addColorStop(0, "#6f9e82");
    sky.addColorStop(0.5, "#315e4b");
    sky.addColorStop(1, "#173b30");
    context.fillStyle = sky;
    context.fillRect(0, 0, WIDTH, HEIGHT);

    context.fillStyle = "rgba(255, 239, 184, 0.13)";
    context.beginPath();
    context.arc(770, 112, 92, 0, Math.PI * 2);
    context.fill();

    const farOffset = -(state.distance * 0.16) % 170;
    context.fillStyle = "rgba(12, 48, 36, 0.42)";
    for (let x = farOffset - 170; x < WIDTH + 170; x += 170) {
      context.fillRect(x + 70, 120, 26, 330);
      context.beginPath();
      context.arc(x + 82, 122, 75, 0, Math.PI * 2);
      context.arc(x + 35, 170, 58, 0, Math.PI * 2);
      context.arc(x + 125, 176, 64, 0, Math.PI * 2);
      context.fill();
    }

    const nearOffset = -(state.distance * 0.34) % 260;
    context.fillStyle = "rgba(7, 31, 24, 0.55)";
    for (let x = nearOffset - 260; x < WIDTH + 260; x += 260) {
      context.fillRect(x + 96, 230, 34, 230);
      context.beginPath();
      context.arc(x + 110, 228, 84, 0, Math.PI * 2);
      context.fill();
    }

    context.fillStyle = "#18392d";
    context.fillRect(0, GROUND_Y, WIDTH, HEIGHT - GROUND_Y);
    context.fillStyle = "#456b50";
    context.fillRect(0, GROUND_Y, WIDTH, 7);

    const grassOffset = -(state.distance * 0.85) % 54;
    context.strokeStyle = "rgba(188, 204, 151, 0.48)";
    context.lineWidth = 2;
    for (let x = grassOffset - 54; x < WIDTH + 54; x += 54) {
      context.beginPath();
      context.moveTo(x, GROUND_Y + 4);
      context.lineTo(x + 8, GROUND_Y - 18);
      context.moveTo(x + 12, GROUND_Y + 4);
      context.lineTo(x + 20, GROUND_Y - 12);
      context.stroke();
    }
  }

  function drawWaterBackground() {
    const water = context.createLinearGradient(0, 0, 0, HEIGHT);
    water.addColorStop(0, "#5aa2a8");
    water.addColorStop(0.46, "#23667a");
    water.addColorStop(1, "#123b52");
    context.fillStyle = water;
    context.fillRect(0, 0, WIDTH, HEIGHT);

    context.strokeStyle = "rgba(217, 247, 233, 0.16)";
    context.lineWidth = 4;
    for (let row = 0; row < 5; row += 1) {
      context.beginPath();
      for (let x = -30; x <= WIDTH + 30; x += 30) {
        const y = 60 + row * 70 + Math.sin((x + state.distance * (0.3 + row * 0.04)) / 58) * 10;
        if (x === -30) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.stroke();
    }

    context.fillStyle = "rgba(239, 221, 155, 0.17)";
    for (let index = 0; index < 16; index += 1) {
      const x = (index * 87 - state.distance * 0.42) % (WIDTH + 100);
      const y = 90 + ((index * 61) % 330);
      context.beginPath();
      context.arc(x, y, 3 + (index % 3), 0, Math.PI * 2);
      context.fill();
    }

    context.fillStyle = "#173d43";
    context.beginPath();
    context.moveTo(0, 476);
    for (let x = 0; x <= WIDTH; x += 60) {
      context.lineTo(x, 472 + Math.sin((x + state.distance * 0.2) / 70) * 10);
    }
    context.lineTo(WIDTH, HEIGHT);
    context.lineTo(0, HEIGHT);
    context.closePath();
    context.fill();
  }

  function drawBug(bug) {
    const flutter = Math.sin(bug.phase) * 6;
    context.save();
    context.translate(bug.x, bug.y);

    context.shadowColor = bug.color;
    context.shadowBlur = 16;
    context.fillStyle = bug.wing;
    context.beginPath();
    context.ellipse(-9, flutter * 0.22, 10, 6, -0.5, 0, Math.PI * 2);
    context.ellipse(9, -flutter * 0.22, 10, 6, 0.5, 0, Math.PI * 2);
    context.fill();

    context.shadowBlur = 12;
    context.fillStyle = bug.color;
    context.beginPath();
    context.ellipse(0, 0, 7, 12, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.arc(0, -11, 5, 0, Math.PI * 2);
    context.fill();

    context.shadowBlur = 0;
    context.strokeStyle = bug.color;
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(-2, -14);
    context.lineTo(-8, -21);
    context.moveTo(2, -14);
    context.lineTo(8, -21);
    context.stroke();
    context.restore();
  }

  function drawPlayer() {
    const bob = isOctopus() ? Math.sin(state.distance * 0.035) * 4 : 0;
    const squash = 1 - player.pulse * 0.09;
    const stretch = 1 + player.pulse * 0.12;

    if (!isOctopus()) {
      const heightAboveGround = Math.max(0, GROUND_Y - (player.y + player.height));
      const shadowScale = Math.max(0.45, 1 - heightAboveGround / 240);
      context.save();
      context.globalAlpha = 0.25 * shadowScale;
      context.fillStyle = "#071b14";
      context.beginPath();
      context.ellipse(player.x + player.width / 2, GROUND_Y + 4, 44 * shadowScale, 10 * shadowScale, 0, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }

    context.save();
    context.translate(player.x + player.width / 2, player.y + player.height / 2 + bob);
    context.scale(stretch, squash);
    context.shadowColor = isOctopus() ? "rgba(181, 215, 255, 0.5)" : "rgba(246, 217, 135, 0.36)";
    context.shadowBlur = 18;
    if (player.imageReady) {
      context.drawImage(player.image, -player.width / 2, -player.height / 2, player.width, player.height);
    } else {
      context.fillStyle = "#ddc294";
      context.beginPath();
      context.arc(0, 0, 42, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#173028";
      context.font = "700 24px system-ui";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(currentGuide().name.slice(0, 1), 0, 0);
    }
    context.restore();

    context.save();
    context.font = "700 13px system-ui";
    context.textAlign = "center";
    const label = currentGuide().name.toUpperCase();
    const labelWidth = context.measureText(label).width + 24;
    context.fillStyle = "rgba(9, 31, 24, 0.72)";
    context.beginPath();
    context.roundRect(player.x + player.width / 2 - labelWidth / 2, player.y - 26, labelWidth, 23, 12);
    context.fill();
    context.fillStyle = "#f1d79e";
    context.fillText(label, player.x + player.width / 2, player.y - 10);
    context.restore();
  }

  function drawParticles() {
    state.particles.forEach((particle) => {
      context.save();
      context.globalAlpha = Math.max(0, particle.life);
      context.fillStyle = particle.color;
      context.shadowColor = particle.color;
      context.shadowBlur = 8;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  }

  function drawProgress() {
    const progress = (state.score % GUIDE_CHANGE_SCORE) / GUIDE_CHANGE_SCORE;
    const width = 250;
    const x = WIDTH - width - 26;
    const y = 24;
    context.fillStyle = "rgba(6, 27, 21, 0.5)";
    context.beginPath();
    context.roundRect(x, y, width, 12, 6);
    context.fill();
    context.fillStyle = "#ddc294";
    context.beginPath();
    context.roundRect(x, y, Math.max(8, width * progress), 12, 6);
    context.fill();
    context.fillStyle = "rgba(255, 253, 248, 0.86)";
    context.font = "700 12px system-ui";
    context.textAlign = "right";
    context.fillText(`${GUIDE_CHANGE_SCORE - (state.score % GUIDE_CHANGE_SCORE)} TO NEXT GUIDE`, WIDTH - 26, 56);
  }

  function draw() {
    if (isOctopus()) drawWaterBackground();
    else drawForestBackground();

    state.bugs.forEach(drawBug);
    drawPlayer();
    drawParticles();
    drawProgress();

    if (state.mode === "paused") {
      context.fillStyle = "rgba(8, 29, 23, 0.25)";
      context.fillRect(0, 0, WIDTH, HEIGHT);
    }
  }

  function loop(now) {
    const elapsed = Math.min(34, now - state.lastTime || 16.67);
    state.lastTime = now;
    if (state.mode === "running") update(elapsed);
    else if (state.mode === "idle") state.distance += elapsed * 0.025;
    draw();
    requestAnimationFrame(loop);
  }

  populateGuidePicker();
  setGuide(0, false);
  updateOutputs();
  showWelcome("The path is ready", "Catch the glowing bugs", "Every five catches, another animal guide joins the journey.", "Begin the Quest");

  startButton.addEventListener("click", startGame);
  actionButton.addEventListener("click", takeAction);
  pauseButton.addEventListener("click", togglePause);
  canvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    takeAction();
  });
  guidePicker.addEventListener("change", () => {
    setGuide(Number.parseInt(guidePicker.value, 10) || 0);
  });

  window.addEventListener("keydown", (event) => {
    if (!["Space", "ArrowUp", "KeyW"].includes(event.code)) return;
    if (["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(document.activeElement?.tagName)) return;
    event.preventDefault();
    takeAction();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && state.mode === "running") togglePause();
  });

  stage.addEventListener("contextmenu", (event) => event.preventDefault());
  requestAnimationFrame(loop);
})();
