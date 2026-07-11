const gameData = {
  'visual-iq': {
    title: 'Visual IQ Challenge',
    icon: '🧠',
    description: 'Spot the Real. Beat the Clock! Test your observation skills by identifying the correct symbol before the other teams.',
    tags: ['Buzzer Mode', 'Fast Recall', 'Visual Detail'],
    mode: 'buzzer-mc',
    rules: [
      'A visual (logo, symbol, icon, or image comparison) will be displayed on the main screen.',
      'All teams must carefully observe the visual as soon as it appears.',
      'The Quiz Master will ask a question related to the displayed visual.',
      'Teams can press the buzzer as soon as they know the correct answer.',
      'The first team to press the buzzer gets the opportunity to answer.',
      'After buzzing, the team has 5 seconds to respond.',
      'Only one answer is allowed per buzzer attempt.',
      'No discussion with other teams or use of mobile phones is allowed during the round.',
      "The Quiz Master's decision regarding answers and scoring will be final.",
    ],
    scoring: [
      '✅ Correct answer on the first attempt — 10 Points',
      '🔄 Correct answer after a passed opportunity — 5 Points',
      '❌ Incorrect answer or no answer within the time limit — -1 Point',
    ],
    message: 'The visual is on the screen. Trust your eyes and act fast.',
  },
  'bug-triage': {
    title: 'Bug Triage Challenge',
    icon: '🐞',
    description: 'Every Decision Matters. Evaluate a real-world bug scenario and determine the correct Severity and Priority.',
    tags: ['Team Decision', '30s Clock', 'QA Judgement'],
    mode: 'team-timer',
    rules: [
      'Each team will be presented with one bug scenario.',
      'Once the scenario is displayed, the team has 30 seconds to discuss and respond.',
      'The team must provide a Severity (Critical, Major, Minor, or Trivial) and a Priority (High or Low).',
      'Only one final answer is allowed from each team.',
      'If the team fails to answer within 30 seconds, the question will be passed to the next team.',
      "If the team's answer is incorrect, the same scenario will also be passed to the next team.",
      'The next team gets one opportunity to answer the passed question.',
      'No hints or partial answers will be provided by the Quiz Master.',
      'Once the correct answer is revealed or all eligible teams have attempted the question, the game proceeds to the next scenario.',
      "The Quiz Master's decision regarding the correct classification and scoring will be final.",
    ],
    scoring: [
      '✅ Correct answer by the original team — 10 Points',
      '🔄 Correct answer after a passed question — 5 Points',
      '❌ Incorrect answer or no answer within the time limit — 0 Points',
    ],
    message: 'A bug just landed on your desk. Classify it fast and accurately.',
  },
  'observe-recall': {
    title: 'Observe & Recall',
    icon: '👀',
    description: 'Test your observation skills and memory by recalling details from an image within a limited time.',
    tags: ['Memory', 'Buzzer Mode', 'Detail Focus'],
    mode: 'buzzer-mc',
    rules: [
      'A single image will be displayed on the main screen for 20 seconds (or 40 seconds, depending on the selected timer).',
      'All teams must carefully observe and memorize the image.',
      'Once the image disappears, questions related to the image will be asked one at a time.',
      'Teams can press the buzzer as soon as the question is displayed.',
      'The first team to press the buzzer gets the opportunity to answer.',
      'After buzzing, the team has 5 seconds to give their answer.',
      'Only one answer is allowed per buzzer attempt.',
      'No notes, screenshots, photographs, or recordings are allowed while the image is displayed.',
      "The Quiz Master's decision regarding answers and scoring will be final.",
    ],
    scoring: [
      '✅ Correct answer on the first attempt — 10 Points',
      '🔄 Correct answer after a passed opportunity — 5 Points',
      '❌ Incorrect answer or no answer within the time limit — -1 Point',
    ],
    message: 'Lock the image into memory — the questions are coming.',
  },
  'bug-hunt': {
    title: 'Bug Hunt Challenge',
    icon: '🔍',
    description: 'Work together as a QA team to inspect a website, identify defects, and prepare a professional Bug Report.',
    tags: ['Teamwork', 'Live Site Review', 'Reporting'],
    mode: 'task-timer',
    rules: [
      'A website will be displayed on the main screen for 2 minutes.',
      'During the observation time, all team members must actively participate by analyzing different parts of the website and identifying potential defects.',
      'Teams are encouraged to divide responsibilities (e.g., one member checks spelling and grammar, another reviews usability, another focuses on UI/UX, etc.) to ensure maximum coverage.',
      'Once the observation time ends, the website will no longer be visible.',
      'Teams will be given time to discuss their findings and prepare a single Bug Report within 10 minutes.',
      'Every team member should contribute to identifying defects, discussing observations, and preparing the final report.',
      'The Bug Report must clearly describe each defect, including a brief description of the defect.',
      'The report must include at least one Usability Issue, one Spelling/Grammar Mistake, and one User Experience (UX) Issue.',
      "The Quiz Master will evaluate each team's Bug Report based on accuracy of the identified defects, clarity of the bug descriptions, completeness of the report, and team collaboration and participation.",
      "The Quiz Master's decision regarding the identified defects and scoring will be final.",
    ],
    scoring: [
      '✅ Accuracy of identified defects',
      '✅ Clarity of bug descriptions',
      '✅ Completeness of the report',
      '✅ Team collaboration and participation',
    ],
    message: 'A live site awaits inspection. Divide, observe, and report.',
  },
  'decode-clues': {
    title: 'Decode the Clues',
    icon: '🧩',
    description: 'Analyze the clues carefully and identify the correct answer before the other teams.',
    tags: ['Deduction', 'Buzzer Mode', 'Clue Chain'],
    mode: 'buzzer-clue',
    rules: [
      'The Quiz Master will reveal one clue at a time for each question.',
      'Teams can discuss the clues among themselves before answering.',
      'Teams may press the buzzer as soon as they are confident about the answer.',
      'The first team to press the buzzer gets the opportunity to answer.',
      'After buzzing, the team has 5 seconds to respond.',
      'Only one answer is allowed per buzzer attempt.',
      'If the answer is incorrect or the team fails to answer within 5 seconds, the question will be passed to the next fastest team that has already buzzed. If no other team has buzzed, the Quiz Master will continue revealing the next clue and reopen the buzzer.',
      'Clues will continue to be revealed until the correct answer is identified or all available clues have been used.',
      "The Quiz Master's decision regarding answers and scoring will be final.",
    ],
    scoring: [
      '✅ Correct after Clue 1 — 20 Points',
      '✅ Correct after Clue 2 — 15 Points',
      '✅ Correct after Clue 3 — 10 Points',
      '✅ Correct after Clue 4 — 5 Points',
      '❌ Incorrect answer — 0 Points',
    ],
    message: 'The first clue is live. Listen closely — fewer clues, more points.',
  },
  'mystery-box': {
    title: 'Mystery Box Challenge',
    icon: '📦',
    description: 'Open the Box. Connect the Words. Tell the Story. Test creativity, communication, and storytelling.',
    tags: ['Creativity', 'Storytelling', 'Team Prep'],
    mode: 'mystery-box',
    rules: [
      'Ten Mystery Boxes will be displayed on the screen.',
      'Each team will select one Mystery Box.',
      'Once selected, the box will reveal 6 random words.',
      'All team members must work together to create a meaningful and creative story using the revealed words.',
      'Teams will have 2 minutes to discuss and prepare their story.',
      'The story must include all six words. No word may be omitted.',
      'Teams may use the words in any order and are encouraged to make the story interesting, logical, and original.',
      'After the preparation time, one team member will present the story within 2 minutes.',
      'No changes to the revealed words are allowed once the Mystery Box has been opened.',
      "The Quiz Master's decision regarding scoring and judging will be final.",
    ],
    scoring: [
      '✅ Correct use of all six words',
      '✅ Creativity and originality',
      '✅ Logical flow and coherence',
      '✅ Confidence and presentation skills',
    ],
    message: 'Ten boxes. One story. Pick your box and see what you get.',
  },
};

/* ---------- Round 1 & 3 data: buzzer multiple-choice ---------- */

function photoChoice(src, correct) {
  return { correct, visual: `<img class="icon-photo" src="${src}" alt="" draggable="false" />` };
}

const visualRounds = [
  {
    question: 'Tap the real flag of Belgium.',
    choices: [
      photoChoice('images/op1(ans).jpg', true),
      photoChoice('images/op1.jpg', false),
    ],
  },
  {
    question: 'Tap the official Google Drive logo.',
    choices: [
      photoChoice('images/op2.jpg', false),
      photoChoice('images/op2(ans).jpg', true),
    ],
  },
  {
    question: 'Tap the official Starbucks logo.',
    choices: [
      photoChoice('images/op3(ans).jpg', true),
      photoChoice('images/op3.jpg', false),
    ],
  },
  {
    question: 'Tap the official Zoom logo.',
    choices: [
      photoChoice('images/op4.jpg', false),
      photoChoice('images/op4(ans).jpg', true),
    ],
  },
  {
    question: 'Tap the correct version of this medical symbol.',
    choices: [
      photoChoice('images/op5(ans).jpg', true),
      photoChoice('images/op5.jpg', false),
    ],
  },
];

const roundSets = {
  'visual-iq': { rounds: visualRounds, memorize: false, layout: 'icon-pair' },
};

/* ---------- Round 2 data: Bug Triage ---------- */

const bugScenarios = [
  {
    text: 'The CEO name is misspelled on the homepage during a product launch.',
    severity: 'Trivial',
    priority: 'High',
  },
  {
    text: 'Cart amount becomes double before checkout.',
    severity: 'Critical',
    priority: 'High',
  },
  {
    text: 'ATM gives cash but account balance is not reduced.',
    severity: 'Critical',
    priority: 'High',
  },
  {
    text: 'Company logo is slightly misplaced on the website.',
    severity: 'Trivial',
    priority: 'Low',
  },
  {
    text: 'Notification icon has the wrong color.',
    severity: 'Trivial',
    priority: 'Low',
  },
  {
    text: 'Chat message is delivered to the wrong person.',
    severity: 'Critical',
    priority: 'High',
  },
  {
    text: 'Clicking "Cancel Order" places the order instead.',
    severity: 'Critical',
    priority: 'High',
  },
  {
    text: 'Admin report shows a spelling mistake in one column name.',
    severity: 'Minor',
    priority: 'Low',
  },
  {
    text: 'Help page has outdated text but the feature works correctly.',
    severity: 'Minor',
    priority: 'Low',
  },
  {
    text: 'User can submit a form without entering required fields.',
    severity: 'Major',
    priority: 'High',
  },
  {
    text: 'Delete account button does not work.',
    severity: 'Major',
    priority: 'High',
  },
  {
    text: 'Search results show unrelated products.',
    severity: 'Major',
    priority: 'High',
  },
  {
    text: 'An airline booking system books the same seat for two passengers.',
    severity: 'Critical',
    priority: 'High',
  },
  {
    text: 'Company logo is slightly misplaced on the website.',
    severity: 'Trivial',
    priority: 'Low',
  },
  {
    text: "User can see another customer's personal details after login.",
    severity: 'Critical',
    priority: 'High',
  },
];

/* ---------- Round 5 data: Decode the Clues ---------- */

const clueSets = [
  {
    clues: [
      'I am performed after changes.',
      'My goal is to ensure existing features still work.',
      'Automation often makes me faster.',
      'I help prevent side effects.',
    ],
    answer: 'Regression Testing',
  },
  {
    clues: [
      'I am performed on a new build.',
      'I check only important functions.',
      'I decide whether further testing can continue.',
      'I verify build stability.',
    ],
    answer: 'Smoke Testing',
  },
  {
    clues: [
      'I focus on limits.',
      'Errors often occur where I work.',
      'Minimum and Maximum values are important to me.',
      'I am a black-box testing technique.',
    ],
    answer: 'Boundary Value Analysis',
  },
  {
    clues: [
      'I temporarily store running programs.',
      'More of me usually improves multitasking.',
      'I lose data when power is off.',
      'My full form starts with Random Access.',
    ],
    answer: 'RAM',
  },
  {
    clues: [
      'Microsoft developed me.',
      'Most office computers use me.',
      'I am an operating system.',
      'My latest version is 11.',
    ],
    answer: 'Windows',
  },
  {
    clues: [
      "I don't require detailed test cases.",
      'I combine learning, designing, and execution.',
      'Experience plays an important role.',
      'Testers discover unexpected defects using me.',
    ],
    answer: 'Exploratory Testing',
  },
  {
    clues: [
      'I dropped out of college.',
      'I co-founded a company in a garage.',
      'I introduced the iPhone in 2007.',
      'I co-founded Apple.',
    ],
    answer: 'Steve Jobs',
  },
  {
    clues: [
      'I started my company as an online bookstore.',
      'My company later expanded into cloud computing.',
      'AWS belongs to my company.',
      'I founded Amazon.',
    ],
    answer: 'Jeff Bezos',
  },
  {
    clues: [
      'My programming language has a coffee-related name.',
      'Millions of enterprise applications use my creation.',
      '"Write Once, Run Anywhere" is associated with my work.',
      'I created Java.',
    ],
    answer: 'James Gosling',
  },
  {
    clues: [
      'I designed a machine before computers existed.',
      'My machine was mechanical.',
      'I designed the Analytical Engine.',
      'I am called the Father of the Computer.',
    ],
    answer: 'Charles Babbage',
  },
];

/* ---------- Shared constants & DOM ---------- */

const BUZZ_TIME = 5;
const MC_RING_CIRCUMFERENCE = 2 * Math.PI * 28;
const RING_CIRCUMFERENCE = 2 * Math.PI * 46;

let selectedGame = null;
const activeTimers = new Set();

const screens = document.querySelectorAll('.screen');
const detailIcon = document.getElementById('detail-icon');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');
const rulesTitle = document.getElementById('rules-title');
const rulesList = document.getElementById('rules-list');
const gameTitle = document.getElementById('game-title');
const gameMessage = document.getElementById('game-message');
const gameStageCard = document.getElementById('game-stage-card');
const confettiLayer = document.getElementById('confetti-layer');
const gameOverCard = document.getElementById('game-over-card');
const gameOverTitle = document.getElementById('game-over-title');
const finalScore = document.getElementById('final-score');
const finalScoreLabel = document.getElementById('final-score-label');
const playAgainButton = document.getElementById('play-again-btn');

const modeElements = {
  'buzzer-mc': document.getElementById('mode-buzzer-mc'),
  'buzzer-clue': document.getElementById('mode-buzzer-clue'),
  'team-timer': document.getElementById('mode-team-timer'),
  'task-timer': document.getElementById('mode-task-timer'),
};

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle('active', screen.id === id));
}

function stopAllTimers() {
  activeTimers.forEach((stop) => stop());
  activeTimers.clear();
}

function startCountdown({ seconds, ringFill, valueEl, circumference, clockFormat, onTick, onDone }) {
  let timeLeft = seconds;
  if (ringFill) {
    ringFill.style.strokeDasharray = `${circumference}`;
    ringFill.style.strokeDashoffset = '0';
  }
  const render = () => {
    if (valueEl) valueEl.textContent = clockFormat ? formatClock(timeLeft) : timeLeft;
    if (ringFill) {
      const progress = timeLeft / seconds;
      ringFill.style.strokeDashoffset = `${circumference * (1 - progress)}`;
    }
  };
  render();
  const intervalId = setInterval(() => {
    timeLeft -= 1;
    render();
    if (onTick) onTick(timeLeft);
    if (timeLeft <= 0) {
      stop();
      if (onDone) onDone();
    }
  }, 1000);
  function stop() {
    clearInterval(intervalId);
    activeTimers.delete(stop);
  }
  activeTimers.add(stop);
  return stop;
}

function formatClock(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function spawnConfetti() {
  const colors = ['#ffe066', '#22d3ee', '#ff5d9e', '#6d7cff', '#22c55e'];
  for (let i = 0; i < 24; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.2}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 1400);
  }
}

function flashCard(el, className) {
  el.classList.add(className);
  setTimeout(() => el.classList.remove(className), 500);
}

function showGameOver(title, scoreText, label) {
  Object.values(modeElements).forEach((el) => {
    el.style.display = 'none';
  });
  gameOverTitle.textContent = title;
  finalScore.textContent = scoreText;
  finalScoreLabel.textContent = label || 'Final score';
  gameOverCard.classList.add('active');
}

function hideGameOver() {
  gameOverCard.classList.remove('active');
}

/* ================= Mode 1: Buzzer multiple-choice (Rounds 1, 3) ================= */

const mcEl = modeElements['buzzer-mc'];
const memorizeBlock = document.getElementById('memorize-block');
const memorizeVisual = document.getElementById('memorize-visual');
const memorizeRingFill = document.getElementById('memorize-ring-fill');
const memorizeTime = document.getElementById('memorize-time');
const mcQuestionBlock = document.getElementById('mc-question-block');
const visualSpotlight = document.getElementById('visual-spotlight');
const challengeQuestion = document.getElementById('challenge-question');
const statusText = document.getElementById('status-text');
const scoreValue = document.getElementById('score-value');
const choiceGrid = document.getElementById('choice-grid');
const buzzButton = document.getElementById('buzz-btn');
const buzzLabel = document.getElementById('buzz-label');
const buzzRingFill = document.getElementById('buzz-ring-fill');
const passButton = document.getElementById('pass-btn');
const mcBuzzerRow = document.getElementById('mc-buzzer-row');
const mcPickRow = document.getElementById('mc-pick-row');
const mcRevealBtn = document.getElementById('mc-reveal-btn');
const mcNextBtn = document.getElementById('mc-next-btn');
const mcRoundCurrent = document.getElementById('mc-round-current');
const mcRoundTotal = document.getElementById('mc-round-total');

let mcScore = 0;
let mcCurrentRound = 0;
let mcBuzzLocked = false;
let mcActiveSet = null;
let mcSelectedChoice = null;

function getChoiceButtons() {
  return choiceGrid.querySelectorAll('.choice-btn');
}

function openBuzzerMc(gameKey) {
  mcActiveSet = roundSets[gameKey];
  mcScore = 0;
  mcCurrentRound = 0;
  scoreValue.textContent = mcScore;
  mcRoundTotal.textContent = mcActiveSet.rounds.length;
  hideGameOver();
  mcEl.style.display = 'block';
  loadMcRound(0);
}

function loadMcRound(index) {
  mcCurrentRound = index;
  mcRoundCurrent.textContent = index + 1;
  const round = mcActiveSet.rounds[index];

  if (mcActiveSet.memorize) {
    mcQuestionBlock.style.display = 'none';
    memorizeBlock.style.display = 'block';
    memorizeVisual.textContent = round.spotlight;
    startCountdown({
      seconds: mcActiveSet.memorizeSeconds,
      ringFill: memorizeRingFill,
      valueEl: memorizeTime,
      circumference: RING_CIRCUMFERENCE,
      onDone: () => {
        memorizeBlock.style.display = 'none';
        mcQuestionBlock.style.display = 'block';
        loadMcQuestion(round);
      },
    });
  } else {
    memorizeBlock.style.display = 'none';
    mcQuestionBlock.style.display = 'block';
    loadMcQuestion(round);
  }
}

function loadMcQuestion(round) {
  const isIconPair = mcActiveSet.layout === 'icon-pair';
  visualSpotlight.style.display = isIconPair ? 'none' : 'grid';
  choiceGrid.classList.toggle('icon-mode', isIconPair);
  mcBuzzerRow.style.display = isIconPair ? 'none' : 'flex';
  mcPickRow.style.display = isIconPair ? 'flex' : 'none';

  if (!isIconPair) {
    visualSpotlight.textContent = mcActiveSet.memorize ? '❓' : round.spotlight;
    visualSpotlight.classList.remove('spotlight-pop');
    void visualSpotlight.offsetWidth;
    visualSpotlight.classList.add('spotlight-pop');
  }

  challengeQuestion.textContent = round.question;

  if (isIconPair) {
    choiceGrid.innerHTML = round.choices
      .map((choice, i) => `<button class="choice-btn icon-choice-btn" data-correct="${choice.correct}"><span class="icon-choice-tag">${String.fromCharCode(65 + i)}</span>${choice.visual}</button>`)
      .join('');
    getChoiceButtons().forEach((button) => button.addEventListener('click', handleIconChoicePick));
    mcSelectedChoice = null;
    mcRevealBtn.disabled = true;
    mcRevealBtn.textContent = 'Reveal Answer';
    mcRevealBtn.style.display = '';
    mcNextBtn.style.display = 'none';
    statusText.textContent = 'Tap the icon you believe is correct, then reveal the answer.';
  } else {
    choiceGrid.innerHTML = round.choices
      .map((choice) => `<button class="choice-btn" data-correct="${choice.correct}" disabled>${choice.label}</button>`)
      .join('');
    getChoiceButtons().forEach((button) => button.addEventListener('click', handleMcChoiceClick));
    mcBuzzLocked = false;
    buzzLabel.textContent = 'Press Buzzer';
    buzzButton.disabled = false;
    buzzButton.classList.remove('is-locked');
    statusText.textContent = 'Buzz when you are sure and answer within 5 seconds.';
  }
}

function handleIconChoicePick(event) {
  const button = event.currentTarget;
  if (button.disabled) return;
  mcSelectedChoice = button;
  getChoiceButtons().forEach((item) => item.classList.toggle('active', item === button));
  mcRevealBtn.disabled = false;
}

function advanceMcRound() {
  const nextIndex = mcCurrentRound + 1;
  if (nextIndex >= mcActiveSet.rounds.length) {
    showGameOver('Round Cleared!', mcScore);
  } else {
    loadMcRound(nextIndex);
  }
}

mcRevealBtn.addEventListener('click', () => {
  const buttons = getChoiceButtons();
  buttons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === 'true') button.classList.add('correct');
  });

  const isCorrect = mcSelectedChoice && mcSelectedChoice.dataset.correct === 'true';
  if (isCorrect) {
    mcScore += 10;
    spawnConfetti();
    statusText.textContent = 'Correct answer! +10 points.';
  } else {
    if (mcSelectedChoice) mcSelectedChoice.classList.add('wrong');
    mcScore -= 1;
    flashCard(mcEl, 'shake');
    statusText.textContent = mcSelectedChoice ? 'Incorrect answer. -1 point.' : 'No selection made. -1 point.';
  }
  scoreValue.textContent = mcScore;

  mcRevealBtn.style.display = 'none';
  mcNextBtn.style.display = '';
  const nextIndex = mcCurrentRound + 1;
  mcNextBtn.textContent = nextIndex >= mcActiveSet.rounds.length ? 'Finish Round' : 'Next Question';
});

mcNextBtn.addEventListener('click', advanceMcRound);

function finishMcRound(message) {
  mcBuzzLocked = false;
  buzzButton.disabled = true;
  buzzButton.classList.remove('is-locked');
  getChoiceButtons().forEach((button) => {
    button.disabled = true;
  });
  statusText.textContent = message;

  setTimeout(() => {
    const nextIndex = mcCurrentRound + 1;
    if (nextIndex >= mcActiveSet.rounds.length) {
      showGameOver('Round Cleared!', mcScore);
    } else {
      loadMcRound(nextIndex);
    }
  }, 1200);
}

function handleMcTimeout() {
  mcBuzzLocked = false;
  mcScore -= 1;
  scoreValue.textContent = mcScore;
  flashCard(mcEl, 'shake');
  finishMcRound('Time is up! -1 point. Moving to the next round.');
}

function handleMcChoiceClick(event) {
  if (!mcBuzzLocked) return;
  const button = event.currentTarget;
  const isCorrect = button.dataset.correct === 'true';
  stopAllTimers();
  getChoiceButtons().forEach((item) => {
    item.disabled = true;
    item.classList.remove('active');
  });

  if (isCorrect) {
    button.classList.add('correct');
    mcScore += 10;
    spawnConfetti();
    finishMcRound('Correct answer! +10 points.');
  } else {
    button.classList.add('wrong');
    mcScore -= 1;
    flashCard(mcEl, 'shake');
    finishMcRound('Incorrect answer. -1 point. The opportunity passes.');
  }

  scoreValue.textContent = mcScore;
}

buzzButton.addEventListener('click', () => {
  if (mcBuzzLocked) return;
  mcBuzzLocked = true;
  buzzButton.classList.add('is-locked');
  buzzLabel.textContent = 'Locked';
  statusText.textContent = 'Buzz confirmed! Answer now within 5 seconds.';
  getChoiceButtons().forEach((button) => {
    button.disabled = false;
    button.classList.remove('active');
  });
  startCountdown({
    seconds: BUZZ_TIME,
    ringFill: buzzRingFill,
    circumference: MC_RING_CIRCUMFERENCE,
    onDone: handleMcTimeout,
  });
});

passButton.addEventListener('click', () => {
  if (!mcBuzzLocked) return;
  stopAllTimers();
  mcBuzzLocked = false;
  buzzButton.classList.remove('is-locked');
  buzzLabel.textContent = 'Press Buzzer';
  statusText.textContent = 'The turn was passed. Reset and buzz again.';
  getChoiceButtons().forEach((button) => {
    button.disabled = true;
    button.classList.remove('active');
  });
});

/* ================= Mode 2: Team timer (Round 2, Bug Triage) ================= */

const triageEl = modeElements['team-timer'];
const scenarioCard = document.getElementById('scenario-card');
const triageRingFill = document.getElementById('triage-ring-fill');
const triageTime = document.getElementById('triage-time');
const severityRow = document.getElementById('severity-row');
const priorityRow = document.getElementById('priority-row');
const triageSubmitBtn = document.getElementById('triage-submit-btn');
const triageStatusText = document.getElementById('triage-status-text');
const triageScoreValue = document.getElementById('triage-score-value');
const triageRoundCurrent = document.getElementById('triage-round-current');
const triageRoundTotal = document.getElementById('triage-round-total');
const triageRevealBtn = document.getElementById('triage-reveal-btn');
const triageNextBtn = document.getElementById('triage-next-btn');

let triageScore = 0;
let triageIndex = 0;
let triageSelectedSeverity = null;
let triageSelectedPriority = null;

function openTeamTimer() {
  triageScore = 0;
  triageIndex = 0;
  triageScoreValue.textContent = triageScore;
  triageRoundTotal.textContent = bugScenarios.length;
  hideGameOver();
  triageEl.style.display = 'block';
  loadTriageScenario(0);
}

function loadTriageScenario(index) {
  triageIndex = index;
  triageRoundCurrent.textContent = index + 1;
  const scenario = bugScenarios[index];
  scenarioCard.textContent = scenario.text;
  triageSelectedSeverity = null;
  triageSelectedPriority = null;
  triageStatusText.textContent = 'Choose Severity and Priority, then lock in before time runs out.';
  [...severityRow.children, ...priorityRow.children].forEach((btn) => {
    btn.classList.remove('active', 'correct', 'wrong');
    btn.disabled = false;
  });
  triageSubmitBtn.disabled = false;
  triageSubmitBtn.style.display = '';
  triageRevealBtn.style.display = 'none';
  triageNextBtn.style.display = 'none';

  startCountdown({
    seconds: 30,
    ringFill: triageRingFill,
    valueEl: triageTime,
    circumference: RING_CIRCUMFERENCE,
    onDone: () => resolveTriage(false),
  });
}

severityRow.addEventListener('click', (event) => {
  const btn = event.target.closest('.pill-btn');
  if (!btn || btn.disabled) return;
  triageSelectedSeverity = btn.dataset.value;
  [...severityRow.children].forEach((item) => item.classList.toggle('active', item === btn));
});

priorityRow.addEventListener('click', (event) => {
  const btn = event.target.closest('.pill-btn');
  if (!btn || btn.disabled) return;
  triageSelectedPriority = btn.dataset.value;
  [...priorityRow.children].forEach((item) => item.classList.toggle('active', item === btn));
});

triageSubmitBtn.addEventListener('click', () => {
  if (!triageSelectedSeverity || !triageSelectedPriority) {
    triageStatusText.textContent = 'Pick both a Severity and a Priority before locking in.';
    return;
  }
  stopAllTimers();
  resolveTriage(true);
});

function resolveTriage(answered) {
  stopAllTimers();
  [...severityRow.children, ...priorityRow.children].forEach((btn) => {
    btn.disabled = true;
  });
  triageSubmitBtn.disabled = true;

  if (!answered) {
    triageStatusText.textContent = "Time's up! Tap Reveal Answer when ready.";
    triageSubmitBtn.style.display = 'none';
    triageRevealBtn.style.display = '';
    flashCard(triageEl, 'shake');
    return;
  }

  revealTriageAnswer(true);
}

function revealTriageAnswer(answered) {
  const scenario = bugScenarios[triageIndex];
  triageRevealBtn.style.display = 'none';

  const severityBtn = [...severityRow.children].find((b) => b.dataset.value === scenario.severity);
  const priorityBtn = [...priorityRow.children].find((b) => b.dataset.value === scenario.priority);
  severityBtn.classList.add('correct');
  priorityBtn.classList.add('correct');

  const isCorrect = answered
    && triageSelectedSeverity === scenario.severity
    && triageSelectedPriority === scenario.priority;

  if (!answered) {
    triageStatusText.textContent = `Correct answer: ${scenario.severity} / ${scenario.priority}.`;
  } else if (isCorrect) {
    triageScore += 10;
    triageStatusText.textContent = 'Correct classification! +10 points.';
    spawnConfetti();
  } else {
    if (triageSelectedSeverity && triageSelectedSeverity !== scenario.severity) {
      const wrongBtn = [...severityRow.children].find((b) => b.dataset.value === triageSelectedSeverity);
      if (wrongBtn) wrongBtn.classList.add('wrong');
    }
    if (triageSelectedPriority && triageSelectedPriority !== scenario.priority) {
      const wrongBtn = [...priorityRow.children].find((b) => b.dataset.value === triageSelectedPriority);
      if (wrongBtn) wrongBtn.classList.add('wrong');
    }
    triageStatusText.textContent = `Not quite. Correct answer: ${scenario.severity} / ${scenario.priority}.`;
    flashCard(triageEl, 'shake');
  }

  triageScoreValue.textContent = triageScore;

  const nextIndex = triageIndex + 1;
  triageNextBtn.textContent = nextIndex >= bugScenarios.length ? 'Finish Round' : 'Next Question';
  triageNextBtn.style.display = '';
}

triageNextBtn.addEventListener('click', () => {
  const nextIndex = triageIndex + 1;
  if (nextIndex >= bugScenarios.length) {
    showGameOver('Triage Complete!', triageScore);
  } else {
    loadTriageScenario(nextIndex);
  }
});

triageRevealBtn.addEventListener('click', () => {
  revealTriageAnswer(false);
});

/* ================= Mode 3: Clue reveal (Round 5, Decode the Clues) ================= */

const clueEl = modeElements['buzzer-clue'];
const clueStack = document.getElementById('clue-stack');
const clueRevealBtn = document.getElementById('clue-reveal-btn');
const clueAnswerBtn = document.getElementById('clue-answer-btn');
const clueNextBtn = document.getElementById('clue-next-btn');
const clueStatusText = document.getElementById('clue-status-text');
const clueRoundCurrent = document.getElementById('clue-round-current');
const clueRoundTotal = document.getElementById('clue-round-total');
const clueAnswerOverlay = document.getElementById('clue-answer-overlay');
const clueAnswerText = document.getElementById('clue-answer-text');
const clueAnswerCloseBtn = document.getElementById('clue-answer-close-btn');
const clueAnswerNextBtn = document.getElementById('clue-answer-next-btn');

let clueQuestionIndex = 0;
let clueRevealCount = 1;

function openBuzzerClue() {
  clueQuestionIndex = 0;
  clueRoundTotal.textContent = clueSets.length;
  hideGameOver();
  clueEl.style.display = 'block';
  loadClueQuestion(0);
}

function loadClueQuestion(index) {
  clueQuestionIndex = index;
  clueRevealCount = 1;
  clueRoundCurrent.textContent = index + 1;
  renderClueStack();
  clueRevealBtn.disabled = clueSets[index].clues.length <= 1;
  clueRevealBtn.style.display = '';
  clueAnswerBtn.style.display = 'none';
  clueNextBtn.style.display = 'none';
  clueAnswerOverlay.classList.remove('show');
  clueStatusText.textContent = 'Reveal clues one at a time. The answer unlocks after the final clue.';
}

function renderClueStack() {
  const set = clueSets[clueQuestionIndex];
  clueStack.innerHTML = set.clues
    .slice(0, clueRevealCount)
    .map((clue, i) => `<p class="clue-line"><span>Clue ${i + 1}</span>${clue}</p>`)
    .join('');
}

clueRevealBtn.addEventListener('click', () => {
  const set = clueSets[clueQuestionIndex];
  if (clueRevealCount >= set.clues.length) return;
  clueRevealCount += 1;
  renderClueStack();
  if (clueRevealCount >= set.clues.length) {
    clueRevealBtn.style.display = 'none';
    clueAnswerBtn.style.display = '';
    clueStatusText.textContent = 'All clues revealed. Tap Reveal Answer when ready.';
  }
});

clueAnswerBtn.addEventListener('click', () => {
  const set = clueSets[clueQuestionIndex];
  clueAnswerBtn.style.display = 'none';
  clueStatusText.textContent = 'Answer revealed.';

  const nextIndex = clueQuestionIndex + 1;
  const isLast = nextIndex >= clueSets.length;
  clueAnswerText.textContent = set.answer;
  clueAnswerNextBtn.textContent = isLast ? 'Finish Round' : 'Next Question';
  clueAnswerOverlay.classList.add('show');
  spawnConfetti();

  clueNextBtn.textContent = isLast ? 'Finish Round' : 'Next Question';
});

function goToNextClueQuestion() {
  const nextIndex = clueQuestionIndex + 1;
  if (nextIndex >= clueSets.length) {
    showGameOver('Clues Decoded!', `${clueSets.length}/${clueSets.length}`, 'Questions completed');
  } else {
    loadClueQuestion(nextIndex);
  }
}

clueAnswerCloseBtn.addEventListener('click', () => {
  clueAnswerOverlay.classList.remove('show');
  clueNextBtn.style.display = '';
});

clueAnswerNextBtn.addEventListener('click', () => {
  clueAnswerOverlay.classList.remove('show');
  goToNextClueQuestion();
});

clueNextBtn.addEventListener('click', goToNextClueQuestion);

/* ================= Mode 4: Task timer (Round 4, Bug Hunt) ================= */

const bugHuntEl = modeElements['task-timer'];
const bughuntPhaseLabel = document.getElementById('bughunt-phase-label');
const miniSite = document.getElementById('mini-site');
const bughuntRingFill = document.getElementById('bughunt-ring-fill');
const bughuntTime = document.getElementById('bughunt-time');
const bughuntStatusText = document.getElementById('bughunt-status-text');
const reportSubmitBtn = document.getElementById('report-submit-btn');
const reportDone = document.getElementById('report-done');
const bughuntRestartBtn = document.getElementById('bughunt-restart-btn');
const bughuntNextBtn = document.getElementById('bughunt-next-btn');

function openTaskTimer() {
  hideGameOver();
  bugHuntEl.style.display = 'block';
  startObservationPhase();
}

function startObservationPhase() {
  bughuntPhaseLabel.style.display = '';
  bughuntPhaseLabel.textContent = 'Observation Phase';
  miniSite.style.display = 'block';
  reportDone.style.display = 'none';
  bughuntStatusText.style.display = '';
  bughuntStatusText.textContent = 'Observe the site closely — you have 2 minutes.';
  bughuntNextBtn.style.display = '';
  reportSubmitBtn.style.display = 'none';

  startCountdown({
    seconds: 120,
    ringFill: bughuntRingFill,
    valueEl: bughuntTime,
    circumference: RING_CIRCUMFERENCE,
    clockFormat: true,
    onDone: startDiscussionPhase,
  });
}

function startDiscussionPhase() {
  stopAllTimers();
  bughuntPhaseLabel.style.display = 'none';
  miniSite.style.display = 'none';
  bughuntStatusText.style.display = 'none';
  bughuntNextBtn.style.display = 'none';
  reportSubmitBtn.style.display = '';

  startCountdown({
    seconds: 600,
    ringFill: bughuntRingFill,
    valueEl: bughuntTime,
    circumference: RING_CIRCUMFERENCE,
    clockFormat: true,
    onDone: finishBugHunt,
  });
}

function finishBugHunt() {
  stopAllTimers();
  reportSubmitBtn.style.display = 'none';
  reportDone.style.display = 'flex';
}

reportSubmitBtn.addEventListener('click', finishBugHunt);

bughuntRestartBtn.addEventListener('click', () => {
  startObservationPhase();
});

bughuntNextBtn.addEventListener('click', () => {
  startDiscussionPhase();
});

/* ================= Navigation & mode dispatch ================= */

function resetAllModes() {
  stopAllTimers();
  Object.values(modeElements).forEach((el) => {
    el.style.display = 'none';
  });
  hideGameOver();
}

function openGame(gameKey) {
  selectedGame = gameKey;
  const data = gameData[gameKey];
  detailIcon.textContent = data.icon;
  detailTitle.textContent = data.title;
  detailDescription.textContent = data.description;
  detailTitle.classList.remove('cinematic-title');
  void detailTitle.offsetWidth;
  detailTitle.classList.add('cinematic-title');
  rulesTitle.textContent = `${data.title} Rules`;
  rulesList.innerHTML = data.rules.map((rule) => `<li>${rule}</li>`).join('');
  gameTitle.textContent = data.title;
  gameMessage.textContent = data.message;

  showScreen('detail-screen');
}

const hiddenMessageGames = ['team-timer', 'bug-triage', 'visual-iq', 'decode-clues', 'bug-hunt'];

function launchGame(gameKey) {
  resetAllModes();
  const mode = gameData[gameKey].mode;
  gameStageCard.style.display = hiddenMessageGames.includes(mode) || hiddenMessageGames.includes(gameKey) ? 'none' : 'grid';
  if (mode === 'buzzer-mc') openBuzzerMc(gameKey);
  else if (mode === 'team-timer') openTeamTimer();
  else if (mode === 'buzzer-clue') openBuzzerClue();
  else if (mode === 'task-timer') openTaskTimer();
}

playAgainButton.addEventListener('click', () => {
  launchGame(selectedGame);
});

const externalGames = {
  'mystery-box': 'mystery-box.html',
  'observe-recall': 'observe-recall/index.html',
};

document.querySelectorAll('.game-card').forEach((card) => {
  card.addEventListener('click', () => openGame(card.dataset.game));
});

document.getElementById('fullscreen-btn').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
});

document.getElementById('back-home').addEventListener('click', () => showScreen('home-screen'));
document.getElementById('back-detail').addEventListener('click', () => showScreen('detail-screen'));
document.getElementById('back-rules').addEventListener('click', () => {
  stopAllTimers();
  showScreen('home-screen');
});

document.getElementById('next-step').addEventListener('click', () => showScreen('rules-screen'));
document.getElementById('start-game').addEventListener('click', () => {
  if (externalGames[selectedGame]) {
    window.location.href = externalGames[selectedGame];
    return;
  }
  showScreen('game-screen');
  launchGame(selectedGame);
});
