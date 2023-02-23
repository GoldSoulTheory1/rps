let playerScore = 0;
let computerScore = 0;
const scoreDiv = document.querySelector('#score');
const resultDiv = document.querySelector('#result');

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function displayScore() {
    scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function displayResult(result) {
    resultDiv.textContent = result;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    displayScore();
    displayResult('');
}

function endGame() {
    if (playerScore >= 5) {
        alert('Congratulations, you win the game!');
        resetGame();
    } else if (computerScore >= 5) {
        alert('Sorry, you lost the game.');
        resetGame();
    }
}

function handleButtonClick(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    displayResult(result);
    displayScore();
    endGame();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', handleButtonClick));