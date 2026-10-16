
const TOTAL_QUESTIONS = 20;
const POINTS_PER_QUESTION = 10;
console.log("Total de perguntas:", questions.length);

const questions = [
  {
    type: "COMPOSIÇÃO",
    stage: "Trilha das centenas",
    description: "Use as três pistas para descobrir o número.",
    icon: "🌳",
    prompt: "Qual número é formado por 4 centenas, 2 dezenas e 6 unidades?",
    visual: "parts",
    parts: [["💯", "4 centenas"], ["🔟", "2 dezenas"], ["🟡", "6 unidades"]],
    choices: ["426", "462", "246", "624"],
    answer: "426",
    explanation: "400 + 20 + 6 = 426."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "Ponte das dezenas",
    description: "Observe a posição do algarismo.",
    icon: "🌉",
    prompt: "No número 583, quanto vale o algarismo 8?",
    visual: "chart",
    number: 583,
    choices: ["8", "80", "800", "83"],
    answer: "80",
    explanation: "O 8 está na casa das dezenas. Portanto, vale 80."
  },
  {
    type: "DECOMPOSIÇÃO",
    stage: "Caverna dos números",
    description: "Separe o número em suas ordens.",
    icon: "🪨",
    prompt: "Qual é a decomposição correta do número 731?",
    visual: "expanded",
    number: 731,
    choices: ["700 + 30 + 1", "70 + 300 + 1", "700 + 3 + 10", "7 + 30 + 100"],
    answer: "700 + 30 + 1",
    explanation: "731 tem 7 centenas, 3 dezenas e 1 unidade."
  },
  {
    type: "COMPOSIÇÃO",
    stage: "Floresta dos algarismos",
    description: "Atenção à posição do zero!",
    icon: "🌲",
    prompt: "Qual número tem 6 centenas, 0 dezenas e 9 unidades?",
    visual: "parts",
    parts: [["💯", "6 centenas"], ["🔟", "0 dezenas"], ["🟡", "9 unidades"]],
    choices: ["690", "609", "906", "69"],
    answer: "609",
    explanation: "600 + 0 + 9 = 609. O zero ocupa a casa das dezenas."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "Montanha dos números",
    description: "Encontre o valor das centenas.",
    icon: "⛰️",
    prompt: "No número 472, quanto vale o algarismo 4?",
    visual: "chart",
    number: 472,
    choices: ["4", "40", "400", "42"],
    answer: "400",
    explanation: "O 4 está na casa das centenas e vale 400."
  },
  {
    type: "DECOMPOSIÇÃO",
    stage: "Rio das unidades",
    description: "Descubra como o número foi separado.",
    icon: "🌊",
    prompt: "Como podemos decompor o número 265?",
    visual: "expanded",
    number: 265,
    choices: ["200 + 60 + 5", "20 + 60 + 5", "200 + 6 + 5", "2 + 60 + 500"],
    answer: "200 + 60 + 5",
    explanation: "265 = 200 + 60 + 5."
  },
  {
    type: "COMPOSIÇÃO",
    stage: "Portal misterioso",
    description: "Resolva o enigma para abrir o portal.",
    icon: "🚪",
    prompt: "Qual número é formado por 8 centenas, 5 dezenas e 3 unidades?",
    visual: "parts",
    parts: [["💯", "8 centenas"], ["🔟", "5 dezenas"], ["🟡", "3 unidades"]],
    choices: ["853", "835", "583", "358"],
    answer: "853",
    explanation: "800 + 50 + 3 = 853."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "Jardim do tesouro",
    description: "Encontre o valor escondido.",
    icon: "💎",
    prompt: "No número 694, quanto vale o algarismo 9?",
    visual: "chart",
    number: 694,
    choices: ["9", "90", "900", "94"],
    answer: "90",
    explanation: "O 9 está na casa das dezenas e vale 90."
  },
  {
    type: "DECOMPOSIÇÃO",
    stage: "Trilha secreta",
    description: "O zero também tem uma função!",
    icon: "🗺️",
    prompt: "Qual alternativa representa a decomposição de 408?",
    visual: "expanded",
    number: 408,
    choices: ["400 + 80", "400 + 8", "40 + 8", "4 + 80"],
    answer: "400 + 8",
    explanation: "408 = 400 + 0 + 8, ou simplesmente 400 + 8."
  },
  {
    type: "COMPOSIÇÃO",
    stage: "Último caminho",
    description: "Reúna as pistas matemáticas.",
    icon: "🧭",
    prompt: "Qual número corresponde a 300 + 70 + 5?",
    visual: "parts",
    parts: [["💯", "300"], ["🔟", "70"], ["🟡", "5"]],
    choices: ["357", "735", "375", "305"],
    answer: "375",
    explanation: "300 + 70 + 5 forma o número 375."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "Portão final",
    description: "Descubra o segredo das dezenas.",
    icon: "🏰",
    prompt: "No número 826, quanto vale o algarismo 2?",
    visual: "chart",
    number: 826,
    choices: ["2", "20", "200", "26"],
    answer: "20",
    explanation: "O 2 está na casa das dezenas e vale 20."
  },
  {
    type: "DECOMPOSIÇÃO",
    stage: "Tesouro escondido",
    description: "Separe centenas, dezenas e unidades.",
    icon: "🪙",
    prompt: "Qual é a decomposição correta do número 947?",
    visual: "expanded",
    number: 947,
    choices: ["900 + 40 + 7", "90 + 400 + 7", "900 + 4 + 7", "9 + 40 + 700"],
    answer: "900 + 40 + 7",
    explanation: "947 = 900 + 40 + 7."
  },
  {
    type: "COMPOSIÇÃO",
    stage: "Bosque encantado",
    description: "Mais uma combinação de ordens!",
    icon: "🌿",
    prompt: "Qual número tem 2 centenas, 8 dezenas e 4 unidades?",
    visual: "parts",
    parts: [["💯", "2 centenas"], ["🔟", "8 dezenas"], ["🟡", "4 unidades"]],
    choices: ["248", "284", "824", "428"],
    answer: "284",
    explanation: "200 + 80 + 4 = 284."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "Cachoeira dos números",
    description: "Observe o algarismo destacado.",
    icon: "💧",
    prompt: "No número 356, quanto vale o algarismo 3?",
    visual: "chart",
    number: 356,
    choices: ["3", "30", "300", "35"],
    answer: "300",
    explanation: "O 3 está na casa das centenas e vale 300."
  },
  {
    type: "DECOMPOSIÇÃO",
    stage: "Ponte de pedra",
    description: "Escolha a soma que forma o número.",
    icon: "🪨",
    prompt: "Como podemos decompor o número 519?",
    visual: "expanded",
    number: 519,
    choices: ["500 + 10 + 9", "50 + 10 + 9", "500 + 1 + 9", "5 + 10 + 900"],
    answer: "500 + 10 + 9",
    explanation: "519 = 500 + 10 + 9."
  },
  {
    type: "COMPOSIÇÃO",
    stage: "Caminho das estrelas",
    description: "Encontre o número das pistas.",
    icon: "⭐",
    prompt: "Qual número é formado por 7 centenas, 0 dezenas e 2 unidades?",
    visual: "parts",
    parts: [["💯", "7 centenas"], ["🔟", "0 dezenas"], ["🟡", "2 unidades"]],
    choices: ["720", "702", "270", "72"],
    answer: "702",
    explanation: "700 + 0 + 2 = 702."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "Caverna brilhante",
    description: "Descubra o valor das unidades.",
    icon: "💎",
    prompt: "No número 641, quanto vale o algarismo 1?",
    visual: "chart",
    number: 641,
    choices: ["1", "10", "100", "41"],
    answer: "1",
    explanation: "O 1 está na casa das unidades, então vale 1."
  },
  {
    type: "DECOMPOSIÇÃO",
    stage: "Campo das flores",
    description: "Mais um desafio de decomposição.",
    icon: "🌷",
    prompt: "Qual é a decomposição correta do número 880?",
    visual: "expanded",
    number: 880,
    choices: ["800 + 80", "800 + 8", "80 + 8", "800 + 800"],
    answer: "800 + 80",
    explanation: "880 tem 8 centenas e 8 dezenas: 800 + 80."
  },
  {
    type: "COMPOSIÇÃO",
    stage: "Entrada do tesouro",
    description: "Estamos quase chegando!",
    icon: "🔐",
    prompt: "Qual número corresponde a 400 + 90 + 6?",
    visual: "parts",
    parts: [["💯", "400"], ["🔟", "90"], ["🟡", "6"]],
    choices: ["469", "496", "946", "406"],
    answer: "496",
    explanation: "400 + 90 + 6 = 496."
  },
  {
    type: "VALOR POSICIONAL",
    stage: "O tesouro perdido",
    description: "Resolva o último desafio!",
    icon: "🏆",
    prompt: "No número 973, quanto vale o algarismo 7?",
    visual: "chart",
    number: 973,
    choices: ["7", "70", "700", "73"],
    answer: "70",
    explanation: "O 7 está na casa das dezenas e vale 70. Você encontrou o tesouro!"
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

    digits.split("").forEach((digit, index) => {
      const cell = document.createElement("div");
      cell.className = "place-cell";

      const label = document.createElement("span");
      label.textContent = labels[index];

      const number = document.createElement("strong");
      number.textContent = digit;

      const value = document.createElement("span");
      value.className = "digit-value";
      value.textContent = "Descubra!";

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
    button.addEventListener("click", () => checkAnswer(choice, button));

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

    const points = document.createElement("p");
    points.textContent = attempts === 1
      ? `Você ganhou ${POINTS_PER_QUESTION} pontos!`
      : "Você acertou após tentar novamente. Não ganhou pontos nesta questão.";

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
  selectedButton.lastElementChild.textContent = `${choice} ✕`;

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
  } else if (score >= 140) {
    endTitle.textContent = "Parabéns, grande explorador!";
    endMessage.textContent =
      "Você avançou pela aventura e conquistou muitos pontos. Continue praticando!";
    finalBadge.textContent = "🥇 Explorador especialista";
  } else if (score >= 80) {
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
