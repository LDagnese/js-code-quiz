let seconds = 5;
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");

// declare the questions array

// main function startGame when button is clicked
// First thing it does is start the timer
// pulls a question from the array and sends it to the questions handler
// needs to evaluate the timer and if timer = 0 then game over
//

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

// event listeners
// StartButton
// View HighScore Button

startBtn.addEventListener("click", () => {
  timerHandler();
});
