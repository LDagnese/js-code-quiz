let gameLength = 10;
let timer = gameLength;
let questionCounter;
let score = 0;
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const questionsEl = document.getElementById("questions");
const questionFormEl = document.getElementById("question-form");

const questionsArr = [
  {
    id: 1,
    text: "Usually JavaScript line(s) end with a what?",
    choices: ["Comma", "Colon", "Semicolon", "None of the above"],
    answer: 2,
  },
  {
    id: 2,
    text: "What is the proper way to declare a variable?",
    choices: ["var", "const", "def", "None of the above"],
    answer: 1,
  },
];

let tempQuestionsArr = [];

function displayQuestion() {
  if (tempQuestionsArr.length && timer) {
    // get a random index from tempQuestionArr
    let index = Math.floor(Math.random() * tempQuestionsArr.length);

    // remove the question from the temp array
    let removedQuestionArr = tempQuestionsArr.splice(index, 1);
    question = removedQuestionArr[0];

    const questionText = document.createElement("p");
    const questionSubmitBtn = document.createElement("input");

    // Set the answer as a data attriburte
    questionText.setAttribute("data-answer", question.answer);
    questionText.setAttribute("id", "question");

    // Set the question
    questionText.textContent = question.text;
    questionFormEl.append(questionText);

    // Add the answers
    question.choices.forEach((choice, index) => {
      const choiceWrapper = document.createElement("div");
      const choiceInput = document.createElement("input");
      const choiceLabel = document.createElement("label");

      choiceWrapper.classList.add("form-check");

      choiceInput.classList.add("form-check-input");
      choiceInput.setAttribute("name", "question");
      choiceInput.setAttribute("type", "radio");
      choiceInput.setAttribute("id", index);

      choiceLabel.classList.add("form-check-label");
      choiceLabel.setAttribute("for", index);
      choiceLabel.textContent = choice;

      choiceWrapper.append(choiceInput, choiceLabel);

      questionFormEl.append(choiceWrapper);
    });

    // Build the button
    questionSubmitBtn.setAttribute("type", "submit");
    questionSubmitBtn.setAttribute("value", "Submit");
    questionSubmitBtn.classList.add("btn");
    questionSubmitBtn.classList.add("btn-dark");

    questionFormEl.append(questionSubmitBtn);
    questionsEl.append(questionFormEl);
  } else {
    score = score + timer;
    timer = 0;
  }
}

// Function for handling submitted answer
function handleSubmit(event) {
  event.preventDefault();

  const correctAnswer = document.getElementById("question").dataset.answer;
  let response;

  // Get selected answer

  if (document.getElementById("0").checked) {
    response = 0;
  } else if (document.getElementById("1").checked) {
    response = 1;
  } else if (document.getElementById("2").checked) {
    response = 2;
  } else if (document.getElementById("3").checked) {
    response = 3;
  } else {
    alert("You must select an answer!");
    return;
  }

  questionFormEl.innerHTML = "";

  if (correctAnswer == response) {
    score = score + 10;
    displayQuestion();
  } else {
    timer = timer - 10;
    displayQuestion();
  }
}

// starts the timer on the page
function timerHandler() {
  const time = setTimeout(function () {
    if (timer > 1) {
      timerEl.textContent = `${timer} seconds remaining`;
      timer--;
      timerHandler();
    } else if (timer === 1) {
      timerEl.textContent = `${timer} second remaining`;
      timer--;
      timerHandler();
    } else {
      timerEl.textContent = "Game Over";
      startBtn.textContent = "Go Again!";
      questionFormEl.innerHTML = "";
      endQuiz();
    }
  }, 1000);
}

function startQuiz() {
  score = 0;
  tempQuestionsArr = questionsArr.slice(0);
  displayQuestion();
  timerHandler();
}

function endQuiz() {
  timer = gameLength;
  alert(`You scored ${score} points!`)

  questionsEl.appendChild(scoreEl);
}
//  handler to display the getHighScore when button clicked
// if highScore doesn't exist instantiate new array of objects
// sort the highScore Array from localStorage

//  handler for storing the highScore to localStorage
// if highScore doesn't exist in localStorage instantiate a new array
// (possible function to handle this outside the function)?

// View HighScore Button

startBtn.addEventListener("click", startQuiz);
questionFormEl.addEventListener("submit", handleSubmit);
