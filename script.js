// ===============================
// Random Number Guessing Game
// Created by Bhupesh Indurkar
// ===============================

// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Count number of attempts
let attempts = 0;

// Function to check user's guess
function checkGuess() {
    const inputBox = document.getElementById("guessInput");
    const messageBox = document.getElementById("message");

    const userGuess = Number(inputBox.value);

    // Validation: empty input
    if (inputBox.value === "") {
        messageBox.innerHTML = "❌ Please enter a number.";
        return;
    }

    // Validation: range check
    if (userGuess < 1 || userGuess > 100) {
        messageBox.innerHTML = "⚠️ Enter a number between 1 and 100.";
        return;
    }

    attempts++;

    // Compare guess with random number
    if (userGuess < randomNumber) {
        messageBox.innerHTML = "📉 Too Low! Try again.";
    }
    else if (userGuess > randomNumber) {
        messageBox.innerHTML = "📈 Too High! Try again.";
    }
    else {
        messageBox.innerHTML =
            `🎉 Correct! You guessed the number in ${attempts} attempts.`;
    }
}

// (Optional) Restart game function
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").innerHTML = "🔄 Game restarted. Guess again!";
}
