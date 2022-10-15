let seconds = 5;
let questionCounter;
let score;
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
];

function displayQuestion(question) {
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
    console.log("You selected the CORRECT answer!");
    score = score + 10;
  } else {
    console.log("You selected the WRONG answer!");
    seconds = seconds - 10;
  }
}

// handler for showing the questions on the page
// Needs to get the question from the main function
// builds the html and put an event listener on the buttons

// handler for displaying the score on the page
// updates when a question is answered

// starts the timer on the page
function timerHandler() {
  const timer = setTimeout(function () {
    if (seconds > 1) {
      timerEl.textContent = `${seconds} seconds remaining`;
      seconds--;
      timerHandler();
    } else if (seconds === 1) {
      timerEl.textContent = `${seconds} second remaining`;
      seconds--;
      timerHandler();
    } else {
      timerEl.textContent = "Game Over";
      startBtn.textContent = "Go Again!";
      clearInterval(timerHandler);
      seconds = 5;
    }
  }, 1000);
}

//  handler to display the getHighScore when button clicked
// if highScore doesn't exist instantiate new array of objects
// sort the highScore Array from localStorage

//  handler for storing the highScore to localStorage
// if highScore doesn't exist in localStorage instantiate a new array
// (possible function to handle this outside the function)?

// View HighScore Button

displayQuestion(questionsArr[Math.floor(Math.random() * questionsArr.length)]);

startBtn.addEventListener("click", timerHandler);
questionFormEl.addEventListener("submit", handleSubmit);
