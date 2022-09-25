let seconds = 5;
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const questionsEl = document.getElementById("questions");

const questionsArr = [
  {
    id: 1,
    text: "Usually JavaScript line(s) end with a what?",
    choices: ["Comma", "Colon", "Semicolon", "None of the above"],
    answer: 2,
    points: 10,
  },
];

function displayQuestion(question) {
  const questionFormEl = document.createElement("form");
  const questionText = document.createElement("p");
  const questionSubmitBtn = document.createElement("button");
  questionFormEl.classList.add("form-check");

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
    choiceInput.setAttribute('name','question');
    choiceInput.setAttribute("type", "radio");
    choiceInput.setAttribute("id", index);

    choiceLabel.classList.add("form-check-label");
    choiceLabel.setAttribute("for", index);
    choiceLabel.textContent = choice;

    choiceWrapper.append(choiceInput, choiceLabel);

    questionFormEl.append(choiceWrapper);
  });

  // Build the button
  questionSubmitBtn.textContent = "Submit";
  questionSubmitBtn.classList.add("btn");
  questionSubmitBtn.classList.add("btn-dark");

  questionFormEl.append(questionSubmitBtn);

  questionsEl.append(questionFormEl);
}

// handler for showing the questions on the page
// Needs to get the question from the main function
// builds the html and put an event listener on the buttons

// handler for displaying the score on the page
// updates when a question is answered

// starts the timer on the page
function timerHandler() {
  const timer = setInterval(function () {
    if (seconds > 1) {
      timerEl.textContent = `${seconds} seconds remaining`;
      seconds--;
    } else if (seconds === 1) {
      timerEl.textContent = `${seconds} second remaining`;
      seconds--;
    } else {
      timerEl.textContent = "Game Over";
      startBtn.textContent = "Go Again!";
      clearInterval(timerHandler);
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

displayQuestion(questionsArr[0]);

startBtn.addEventListener("click", () => {
  timerHandler();
});
