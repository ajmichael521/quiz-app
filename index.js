const quizData = [
  {
    question: "What year was the Corona-Virus outbreak?",
    a: "2010",
    b: "2017",
    c: "2020",
    d: "2019",
    correct: "c"
  },
  {
    question: "what shape is the Earth?",
    a: "hexagonal",
    B: "square",
    c: "rhombus",
    d: "sphere",
    correct: "d"
  },
  {
    question: "What sound does a Dog make?",
    a: "bleats",
    b: "purr",
    c: "barks",
    d: "croaks",
    correct: "c"
  },
  {
    question: "How many hours makes a day?",
    a: "24",
    b: "203",
    c: "18",
    d: "21",
    correct: "a"
  },
  {
    question: "What is the full meaning of PC",
    a: "parkison kate",
    b: "personal computer",
    c: "person cousin",
    d: "peter cort",
    correct: "b"
  }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // todo: show results
      quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions </h2> <button onclick="location.reload()">Refresh</button>`;
    }
  }
});
