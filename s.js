const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        message.style.color = 'orange';
        return;
    }

    if (userGuess === secretNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
        message.style.color = 'green';
        disableGame();
    } else if (userGuess < secretNumber) {
        message.textContent = 'Too low. Try a higher number.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high. Try a lower number.';
        message.style.color = 'red';
    }
    guessInput.value = '';
    guessInput.focus();
}

function disableGame() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
