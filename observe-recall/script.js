/* ============================================================
   MEMORY TEST — PRESENTATION MODE
   Vanilla JS, no dependencies, fully offline.
   ============================================================ */

/* ------------------------------------------------------------
   1. TEACHER DATA
   Edit this array to change the positions and answers.
   "position"  -> label shown on the board (A, B, C ... or 1, 2, 3)
   "icon"      -> emoji shown behind the flipped card
   "answer"    -> the correct object name revealed on demand
   ------------------------------------------------------------ */
const questions = [
  { position: "A", icon: "📚", answer: "Books" },
  { position: "B", icon: "📷", answer: "Camera" },
  { position: "C", icon: "⭐", answer: "Star" },
  { position: "D", icon: "🕒", answer: "Clock" },
  { position: "E", icon: "🌍", answer: "Globe" },
  { position: "F", icon: "🎧", answer: "Headphones" },
  { position: "G", icon: "🧭", answer: "Compass" },
  { position: "H", icon: "🔑", answer: "Key" },
  { position: "I", icon: "🖊️", answer: "Pen" },
  { position: "J", icon: "🎁", answer: "Gift Box" },
  { position: "K", icon: "🌙", answer: "Moon" },
  { position: "L", icon: "⚽", answer: "Football" }
];

/* ------------------------------------------------------------
   2. STATE
   ------------------------------------------------------------ */
const state = {
  timerDuration: 20,   // seconds, chosen on Home screen
  secondsLeft: 20,
  timerId: null,
  revealedCount: 0
};

const RING_CIRCUMFERENCE = 326.7; // 2 * PI * 52 (matches SVG r=52 in CSS)

/* ------------------------------------------------------------
   3. ELEMENT REFERENCES
   ------------------------------------------------------------ */
const el = {
  screens: {
    home: document.getElementById("screen-home"),
    memory: document.getElementById("screen-memory"),
    question: document.getElementById("screen-question")
  },
  timerChips: document.querySelectorAll(".timer-chip"),
  btnStart: document.getElementById("btn-start"),
  btnFullscreenHome: document.getElementById("btn-fullscreen-home"),
  btnFullscreenQ: document.getElementById("btn-fullscreen-q"),
  btnRestart: document.getElementById("btn-restart"),

  memorySeconds: document.getElementById("memory-seconds"),
  ringProgress: document.getElementById("ring-progress"),
  memoryImage: document.getElementById("memory-image"),

  progressText: document.getElementById("progress-text"),
  progressFill: document.getElementById("progress-fill"),

  qGrid: document.getElementById("q-grid")
};

/* ------------------------------------------------------------
   4. SCREEN NAVIGATION
   Simple fade-based single-page switcher.
   ------------------------------------------------------------ */
function showScreen(name){
  Object.entries(el.screens).forEach(([key, node]) => {
    if (key === name){
      node.classList.remove("screen--leaving");
      node.classList.add("screen--active");
    } else if (node.classList.contains("screen--active")) {
      // play a short leave animation, then hide
      node.classList.add("screen--leaving");
      node.classList.remove("screen--active");
      setTimeout(() => node.classList.remove("screen--leaving"), 350);
    }
  });
}

/* ------------------------------------------------------------
   5. HOME SCREEN — timer selection
   ------------------------------------------------------------ */
el.timerChips.forEach(chip => {
  chip.addEventListener("click", () => {
    el.timerChips.forEach(c => c.classList.remove("timer-chip--active"));
    chip.classList.add("timer-chip--active");
    state.timerDuration = parseInt(chip.dataset.time, 10);
  });
});

el.btnStart.addEventListener("click", startMemoryPhase);
el.btnFullscreenHome.addEventListener("click", toggleFullscreen);
el.btnFullscreenQ.addEventListener("click", toggleFullscreen);
el.btnRestart.addEventListener("click", restartTest);

/* ------------------------------------------------------------
   6. MEMORY SCREEN — countdown
   ------------------------------------------------------------ */
function startMemoryPhase(){
  // reset image in case of a restart
  el.memoryImage.classList.remove("is-hidden");

  state.secondsLeft = state.timerDuration;
  updateRing();
  el.memorySeconds.textContent = state.secondsLeft;

  showScreen("memory");

  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    state.secondsLeft -= 1;
    el.memorySeconds.textContent = Math.max(state.secondsLeft, 0);
    updateRing();

    if (state.secondsLeft <= 0){
      clearInterval(state.timerId);
      hideMemoryImageThenAdvance();
    }
  }, 1000);
}

function updateRing(){
  const fraction = state.secondsLeft / state.timerDuration;
  const offset = RING_CIRCUMFERENCE * (1 - fraction);
  el.ringProgress.style.strokeDashoffset = offset;
  el.ringProgress.classList.toggle("is-urgent", state.secondsLeft <= 5);
}

function hideMemoryImageThenAdvance(){
  el.memoryImage.classList.add("is-hidden"); // triggers CSS fade-out
  setTimeout(() => {
    renderQuestionGrid();
    showScreen("question");
  }, 1100); // matches the fade-out transition duration in CSS
}

/* ------------------------------------------------------------
   7. QUESTION SCREEN — grid of independently flippable cards
   Each position card can be tapped once: it flips to reveal
   its icon + answer, then locks so it can't be re-selected.
   ------------------------------------------------------------ */
function renderQuestionGrid(){
  state.revealedCount = 0;
  updateProgress();

  el.qGrid.innerHTML = questions.map((q, index) => `
    <div class="grid-card" data-index="${index}" role="button" tabindex="0"
         aria-label="Position ${q.position}, tap to reveal the answer">
      <div class="grid-card__inner">
        <div class="grid-card__face grid-card__face--front">
          <span class="grid-card__letter">${q.position}</span>
          <span class="grid-card__hint">👆 Tap to reveal</span>
        </div>
        <div class="grid-card__face grid-card__face--back">
          <span class="grid-card__icon">${q.icon}</span>
          <span class="grid-card__answer">${q.answer}</span>
        </div>
      </div>
    </div>
  `).join("");

  el.qGrid.querySelectorAll(".grid-card").forEach(card => {
    card.addEventListener("click", () => revealCard(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " "){
        e.preventDefault();
        revealCard(card);
      }
    });
  });
}

function revealCard(card){
  if (card.classList.contains("is-locked")) return; // already flipped — cannot re-select
  card.classList.add("is-flipped", "is-locked");
  state.revealedCount += 1;
  updateProgress();
}

function updateProgress(){
  el.progressText.textContent = `${state.revealedCount} of ${questions.length} revealed`;
  el.progressFill.style.width = `${(state.revealedCount / questions.length) * 100}%`;
}

/* ------------------------------------------------------------
   8. RESTART
   ------------------------------------------------------------ */
function restartTest(){
  clearInterval(state.timerId);
  showScreen("home");
}

/* ------------------------------------------------------------
   9. FULL SCREEN
   ------------------------------------------------------------ */
function toggleFullscreen(){
  if (!document.fullscreenElement){
    document.documentElement.requestFullscreen().catch(() => {
      /* Fullscreen may be blocked by the browser; fail silently */
    });
  } else {
    document.exitFullscreen();
  }
}

/* ------------------------------------------------------------
   10. KEYBOARD SHORTCUTS
   F -> Full screen
   ------------------------------------------------------------ */
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "f"){
    e.preventDefault();
    toggleFullscreen();
  }
});
