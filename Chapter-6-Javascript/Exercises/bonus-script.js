// Variables for the game
let correctColor;
let lives = 3;
let colors = [];

// Function to generate a random RGB color
function generateColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to start a new round
function startGame() {
    // Generate a random RGB value to guess
    correctColor = generateColor();

    // Display the correct RGB value for the user
    document.getElementById('rgb-value').textContent = `Guess this color: ${correctColor}`;

    // Generate random colors
    colors = [correctColor, generateColor(), generateColor()];
    colors.sort(() => Math.random() - 0.5); // Shuffle the array

    // Assign colors to buttons
    let buttons = document.querySelectorAll('.color');
    buttons.forEach((button, index) => {
        button.style.backgroundColor = colors[index];
    });

    // Reset message and lives
    document.getElementById('message').textContent = '';
    document.getElementById('lives').textContent = lives;
}

// Function to check if the selected color is correct
function checkAnswer(button) {
    if (button.style.backgroundColor === correctColor) {
        document.getElementById('message').textContent = 'Correct! You guessed the color.';
    } else {
        lives--;
        document.getElementById('lives').textContent = lives;
        document.getElementById('message').textContent = 'Incorrect, try again!';
    }

    // End game if lives are 0
    if (lives === 0) {
        document.getElementById('message').textContent = `Game over! The correct color was: ${correctColor}`;
        document.querySelectorAll('.color').forEach(button => button.disabled = true);
    }
}

// Function to reset the game
function resetGame() {
    if (lives === 0) {
        lives = 3; // Reset lives
    }
    startGame();
}

// Start the game initially
startGame();
