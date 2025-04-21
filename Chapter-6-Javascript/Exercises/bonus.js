//  Getting references to the main HTML elements we'll interact with

const rgbValue = document.getElementById("rgb-value"); // Where the target RGB value will show up
const colorBoxes = [  // The three color boxes the user can click
  document.getElementById("color1"),
  document.getElementById("color2"),
  document.getElementById("color3"),
];

const feedback = document.getElementById("feedback"); // Feedback text like “Correct” or “Wrong”
const livesDisplay = document.getElementById("lives"); // Shows remaining lives
const scoreDisplay = document.getElementById("score"); // Shows current score
const replayBtn = document.getElementById("replay-btn"); // Button to restart the game

//  Game variables to keep track of the correct answer, lives, and score
let correctIndex;
let lives = 3;
let score = 0;

//  Function to generate a totally random RGB color string like "rgb(122, 45, 210)"
function randomRGB() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}


//  This function resets the game for each round (or full restart)
function setGame() {
  // First, create three random colors
  const colors = [randomRGB(), randomRGB(), randomRGB()];
  // Randomly choose one of them to be the "correct" one
  correctIndex = Math.floor(Math.random() * 3);
  // Show the correct RGB value (but don’t tell which box it is )
  rgbValue.textContent = colors[correctIndex];


  // Set each box's background to its color and make it clickable again
  colorBoxes.forEach((box, index) => {
    box.style.backgroundColor = colors[index];
    box.classList.remove("correct", "wrong"); // Clear previous visual feedback
    box.style.pointerEvents = "auto"; // Make boxes clickable again
  });


  // Reset feedback and update lives and score display
  feedback.textContent = "";
  livesDisplay.textContent = `Lives: ${lives}`;
  scoreDisplay.textContent = `Score: ${score}`;
  replayBtn.style.display = "none"; // Hide replay button until needed
}


//  Add a click event to each color box
colorBoxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (index === correctIndex) {

      //  If user clicked the right color
      box.classList.add("correct");
      feedback.innerHTML = " Correct! Great job!";
      score++; // Increase score
      setTimeout(setGame, 1000); // Wait a sec then start new round
    } else {

      //  Wrong color
      box.classList.add("wrong");
      feedback.innerHTML = " Nope! Try again!";
      lives--; // Lose a life
      if (lives <= 0) {
        //  If no lives left, end game
        feedback.innerHTML = " Game Over! Final Score: " + score;
        // Disable all color boxes
        colorBoxes.forEach((b) => (b.style.pointerEvents = "none"));
        replayBtn.style.display = "inline-block"; // Show the replay button
      }
    }
    // Update the UI for lives and score
    livesDisplay.textContent = `Lives: ${lives}`;
    scoreDisplay.textContent = `Score: ${score}`;
  });
});


//  When replay button is clicked, restart everything from scratch
replayBtn.addEventListener("click", () => {
  lives = 3;
  score = 0;
  setGame();
});


//  Start the game as soon as the page loads
setGame();
