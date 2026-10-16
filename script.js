
const TOTAL_QUESTIONS = 12;
const POINTS_PER_QUESTION = 10;

const questions = [
  {
    type: "COMPOSIÇÃO DE NÚMEROS",
    stage: "Trilha das centenas",
    description: "Use as três pistas para descobrir o número.",
    icon: "🌳",
    prompt: "Qual número é formado por estas quantidades?",
    visual: "parts",
    parts: [
      ["💯", "4 centenas"],
      ["🔟", "2 dezenas"],
      ["🟡", "6 unidades"]
    ],
    choices: ["426", "462", "246", "624"],
    answer: "426",
    explanation: "4 centenas valem 400, 2 dezenas valem 20 e 6 unidades valem 6. Portanto, 400 + 20 + 6 = 426."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "Ponte das dezenas",
    description: "Cada algarismo tem um valor conforme a posição.",
    icon: "🌉",
    prompt: "No número 583, quanto vale o algarismo 8?",
    visual: "chart",
    number: 583,
    choices: ["8", "80", "800", "83"],
    answer: "80",
    explanation: "O 8 está na casa das dezenas. Por isso, seu valor posicional é 8 dezenas, ou seja, 80."
  },
  {
    type: "DECOMPOSIÇÃO",
    stage: "Caverna dos números",
    description: "Descubra como o número foi separado.",
    icon: "🪨",
    prompt: "Qual é a decomposição correta do número 731?",
    visual: "expanded",
    number: 731,
    choices: [
      "700 + 30 + 1",
      "70 + 300 + 1",
      "700 + 3 + 10",
      "7 + 30 + 100"
    ],
    answer: "700 + 30 + 1",
    explanation: "731 tem 7 centenas (700), 3 dezenas (30) e 1 unidade (1)."
  },
  {
    type: "COMPOSIÇÃO DE NÚMEROS",
    stage: "Floresta dos algarismos",
    description: "Reúna as pistas para seguir em frente.",
    icon: "🌲",
    prompt: "Qual número tem 6 centenas, 0 dezenas e 9 unidades?",
    visual: "parts",
    parts: [
      ["💯", "6 centenas"],
      ["🔟", "0 dezenas"],
      ["🟡", "9 unidades"]
    ],
    choices: ["690", "609", "906", "69"],
    answer: "609",
    explanation: "São 600 + 0 + 9. O zero ocupa a casa das dezenas, formando o número 609."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "Montanha dos números",
    description: "Observe com atenção a posição do algarismo.",
    icon: "⛰️",
    prompt: "No número 472, quanto vale o algarismo 4?",
    visual: "chart",
    number: 472,
    choices: ["4", "40", "400", "42"],
    answer: "400",
    explanation: "O 4 está na casa das centenas. Seu valor posicional é 4 centenas, ou seja, 400."
  },
  {
    type: "DECOMPOSIÇÃO",
    stage: "Rio das unidades",
    description: "Separe o número em centenas, dezenas e unidades.",
    icon: "🌊",
    prompt: "Como podemos decompor o número 265?",
    visual: "expanded",
    number: 265,
    choices: [
      "200 + 60 + 5",
      "20 + 60 + 5",
      "200 + 6 + 5",
      "2 + 60 + 500"
    ],
    answer: "200 + 60 + 5",
    explanation: "O número 265 é formado por 200 + 60 + 5: duas centenas, seis dezenas e cinco unidades."
  },
  {
    type: "COMPOSIÇÃO DE NÚMEROS",
    stage: "Portal misterioso",
    description: "Resolva o enigma para abrir o portal.",
    icon: "🚪",
    prompt: "Qual número é formado por 8 centenas, 5 dezenas e 3 unidades?",
    visual: "parts",
    parts: [
      ["💯", "8 centenas"],
      ["🔟", "5 dezenas"],
      ["🟡", "3 unidades"]
    ],
    choices: ["853", "835", "583", "358"],
    answer: "853",
    explanation: "8 centenas valem 800, 5 dezenas valem 50 e 3 unidades valem 3. O resultado é 853."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "Jardim do tesouro",
    description: "Encontre o valor escondido no número.",
    icon: "💎",
    prompt: "No número 694, quanto vale o algarismo 9?",
    visual: "chart",
    number: 694,
    choices: ["9", "90", "900", "94"],
    answer: "90",
    explanation: "O algarismo 9 está na casa das dezenas. Portanto, representa 9 dezenas, ou 90."
  },
  {
    type: "DECOMPOSIÇÃO",
    stage: "Trilha secreta",
    description: "Escolha a forma correta de separar o número.",
    icon: "🗺️",
    prompt: "Qual alternativa representa a decomposição de 408?",
    visual: "expanded",
    number: 408,
    choices: [
      "400 + 80",
      "400 + 8",
      "40 + 8",
      "4 + 80"
    ],
    answer: "400 + 8",
    explanation: "408 tem 4 centenas, 0 dezenas e 8 unidades. Assim, 400 + 0 + 8 = 408."
  },
  {
    type: "COMPOSIÇÃO DE NÚMEROS",
    stage: "Último caminho",
    description: "Mais uma pista antes de chegar ao tesouro!",
    icon: "🧭",
    prompt: "Qual número corresponde a 300 + 70 + 5?",
    visual: "expanded",
    number: 375,
    choices: ["357", "735", "375", "305"],
    answer: "375",
    explanation: "300 representa 3 centenas, 70 representa 7 dezenas e 5 representa 5 unidades. O número é 375."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "Portão final",
    description: "Descubra o último segredo matemático.",
    icon: "🏰",
    prompt: "No número 826, quanto vale o algarismo 2?",
    visual: "chart",
    number: 826,
    choices: ["2", "20", "200", "26"],
    answer: "20",
    explanation: "O algarismo 2 está na casa das dezenas. Portanto, vale 20."
  },
  {
    type: "DECOMPOSIÇÃO",
    stage: "O tesouro perdido",
    description: "Resolva o último desafio para conquistar o tesouro!",
    icon: "🏆",
    prompt: "Qual é a decomposição correta do número 947?",
    visual: "expanded",
    number: 947,
    choices: [
      "900 + 40 + 7",
      "90 + 400 + 7",
      "900 + 4 + 7",
      "9 + 40 + 700"
    ],
    answer: "900 + 40 + 7",
    explanation: "947 tem 9 centenas (900), 4 dezenas (40) e 7 unidades (7)."
  }
];

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const scoreElement = document.getElementById("score");
const questionCounter = document.getElementById("question-counter");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");
const progressTrack = document.getElementById("progress-track");

const stageTitle = document.getElementById("stage-title");
const stageDescription = document.getElementById("stage-description");
const stageIcon = document.getElementById("stage-icon");

const questionType = document.getElementById("question-type");
const questionText = document.getElementById("question-text");
const questionVisual = document.getElementById("question-visual");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");

const endTitle = document.getElementById("end-title");
const endMessage = document.getElementById("end-message");
const finalScore = document.getElementById("final-score");
const finalCorrect = document.getElementById("final-correct");
const finalBadge = document.getElementById("final-badge");

let currentQuestion = 0;
let score = 0;
let firstTryCorrect = 0;
let attempts = 0;
let questionLocked = false;

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function startGame() {
  currentQuestion = 0;
  score = 0;
  firstTryCorrect = 0;
  attempts = 0;
  questionLocked = false;

  scoreElement.textContent = score;

  startScreen.hidden = true;
  endScreen.hidden = true;
  gameScreen.hidden = false;

  showQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showQuestion() {
  const question = questions[currentQuestion];

  questionLocked = false;
  attempts = 0;

  questionCounter.textContent =
    `Desafio ${currentQuestion + 1} de ${TOTAL_QUESTIONS}`;

  const progress = (currentQuestion / TOTAL_QUESTIONS) * 100;

  progressFill.style.width = `${progress}%`;
  progressPercent.textContent = `${Math.round(progress)}%`;
  progressTrack.setAttribute("aria-valuenow", currentQuestion);

  stageTitle.textContent = question.stage;
  stageDescription.textContent = question.description;
  stageIcon.textContent = question.icon;

  questionType.textContent = question.type;
  questionText.textContent = question.prompt;

  feedback.hidden = true;
  feedback.className = "feedback";

  nextButton.hidden = true;

  renderVisual(question);
  renderOptions(question);
}

function renderVisual(question) {
  questionVisual.replaceChildren();

  if (question.visual === "parts") {
    const wrapper = document.createElement("div");
    wrapper.className = "number-parts";

    question.parts.forEach(([icon, label]) => {
      const part = document.createElement("div");
      part.className = "number-part";

      const iconElement = document.createElement("span");
      iconElement.className = "part-icon";
      iconElement.textContent = icon;

      const strong = document.createElement("strong");
      strong.textContent = label;

      part.append(iconElement, strong);
      wrapper.appendChild(part);
    });

    questionVisual.appendChild(wrapper);
  }

  if (question.visual === "chart") {
    const wrapper = document.createElement("div");
    wrapper.className = "place-chart";

    const digits = String(question.number).padStart(3, "0");
    const labels = ["Centenas", "Dezenas", "Unidades"];
    const placeValues = [100, 10, 1];

    digits.split("").forEach((digit, index) => {
      const cell = document.createElement("div");
      cell.className = "place-cell";

      const label = document.createElement("span");
      label.textContent = labels[index];

      const number = document.createElement("strong");
      number.textContent = digit;

      const value = document.createElement("span");
      value.className = "digit-value";
      value.textContent = `Vale ${Number(digit) * placeValues[index]}`;

      cell.append(label, number, value);
      wrapper.appendChild(cell);
    });

    questionVisual.appendChild(wrapper);
  }

  if (question.visual === "expanded") {
    const wrapper = document.createElement("div");
    wrapper.className = "expanded-number";
    wrapper.textContent = `🔎 Número: ${question.number}`;

    questionVisual.appendChild(wrapper);
  }
}

function renderOptions(question) {
  optionsContainer.replaceChildren();

  const letters = ["A", "B", "C", "D"];
  const shuffledChoices = shuffle(question.choices);

  shuffledChoices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = letters[index];

    const text = document.createElement("span");
    text.textContent = choice;

    button.append(letter, text);

    button.addEventListener("click", () => {
      checkAnswer(choice, button);
    });

    optionsContainer.appendChild(button);
  });
}

function checkAnswer(choice, selectedButton) {
  if (questionLocked || selectedButton.disabled) {
    return;
  }

  attempts++;

  const question = questions[currentQuestion];
  const buttons = optionsContainer.querySelectorAll(".option-button");

  if (choice === question.answer) {
    questionLocked = true;

    if (attempts === 1) {
      score += POINTS_PER_QUESTION;
      firstTryCorrect++;
    }

    scoreElement.textContent = score;

    buttons.forEach((button) => {
      button.disabled = true;

      const answerText = button.lastElementChild.textContent;

      if (answerText === question.answer) {
        button.classList.add("correct");
        button.lastElementChild.textContent = `${answerText} ✓`;
      }
    });

    feedback.className = "feedback success";
    feedback.replaceChildren();

    const title = document.createElement("strong");
    title.textContent = attempts === 1
      ? "🎉 Muito bem! Você acertou!"
      : "🎉 Isso mesmo! Resposta correta!";

    const explanation = document.createElement("span");
    explanation.textContent = question.explanation;

    const points = document.createElement("span");
    points.textContent = attempts === 1
      ? ` Você ganhou ${POINTS_PER_QUESTION} pontos!`
      : " Você acertou após tentar novamente.";

    feedback.append(title, explanation, points);
    feedback.hidden = false;

    nextButton.textContent =
      currentQuestion === TOTAL_QUESTIONS - 1
        ? "Ver meu resultado 🏆"
        : "Próximo desafio ➜";

    nextButton.hidden = false;
    nextButton.focus();
    return;
  }

  selectedButton.disabled = true;
  selectedButton.classList.add("wrong");

  selectedButton.lastElementChild.textContent =
    `${choice} ✕`;

  feedback.className = "feedback error";
  feedback.replaceChildren();

  const title = document.createElement("strong");
  title.textContent = "Quase! Vamos pensar mais um pouco. 💡";

  const message = document.createElement("span");
  message.textContent =
    "Observe a posição dos algarismos e tente outra alternativa.";

  feedback.append(title, message);
  feedback.hidden = false;
}

function nextQuestion() {
  if (!questionLocked) {
    return;
  }

  currentQuestion++;

  if (currentQuestion >= TOTAL_QUESTIONS) {
    finishGame();
  } else {
    showQuestion();
  }
}

function finishGame() {
  gameScreen.hidden = true;
  endScreen.hidden = false;

  progressFill.style.width = "100%";
  progressPercent.textContent = "100%";
  progressTrack.setAttribute("aria-valuenow", TOTAL_QUESTIONS);

  finalScore.textContent = score;
  finalCorrect.textContent =
    `${firstTryCorrect} de ${TOTAL_QUESTIONS} desafios acertados na primeira tentativa`;

  if (score === TOTAL_QUESTIONS * POINTS_PER_QUESTION) {
    endTitle.textContent = "Incrível! Você encontrou o tesouro!";
    endMessage.textContent =
      "Você acertou todos os desafios na primeira tentativa. Que explorador incrível!";
    finalBadge.textContent = "🏆 Mestre do valor posicional";
  } else if (score >= 70) {
    endTitle.textContent = "Parabéns, grande explorador!";
    endMessage.textContent =
      "Você avançou pela aventura e conquistou muitos pontos. Continue praticando!";
    finalBadge.textContent = "🥇 Explorador especialista";
  } else if (score >= 40) {
    endTitle.textContent = "Você está no caminho certo!";
    endMessage.textContent =
      "Você completou a aventura! Pratique mais um pouco para dominar centenas, dezenas e unidades.";
    finalBadge.textContent = "🥈 Explorador aprendiz";
  } else {
    endTitle.textContent = "A aventura foi concluída!";
    endMessage.textContent =
      "Cada desafio é uma oportunidade de aprender. Tente novamente e descubra novas estratégias!";
    finalBadge.textContent = "🌟 Explorador persistente";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", startGame);
