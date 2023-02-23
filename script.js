function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
  
    // Assign 'rock', 'paper', or 'scissors' based on the random number
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    return (playerSelection === 'rock' && computerSelection === 'paper') ? 'You Lose! Paper beats Rock'
      : (playerSelection === 'rock' && computerSelection === 'scissors') ? 'You Win! Rock beats Scissors'
      : (playerSelection === 'paper' && computerSelection === 'scissors') ? 'You Lose! Scissors beats Paper'
      : (playerSelection === 'paper' && computerSelection === 'rock') ? 'You Win! Paper beats Rock'
      : (playerSelection === 'scissors' && computerSelection === 'rock') ? 'You Lose! Rock beats Scissors'
      : (playerSelection === 'scissors' && computerSelection === 'paper') ? 'You Win! Scissors beats Paper'
      : 'It\'s a tie!';
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    // Play 5 rounds of rock paper scissors
    for (let i = 1; i <= 5; i++) {
      const playerSelection = prompt(`Round ${i}: Choose rock, paper, or scissors`);
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
      
      if (roundResult.includes('Win')) {
        playerScore++;
      } else if (roundResult.includes('Lose')) {
        computerScore++;
      }
    }
    
    // Report the winner or loser at the end of the game
    if (playerScore > computerScore) {
      console.log(`Congratulations! You won the game, ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
      console.log(`Sorry, you lost the game, ${computerScore} to ${playerScore}`);
    } else {
      console.log(`It's a tie game, ${playerScore} to ${computerScore}`);
    }
  }

  // Add an event listener to the form to prevent it from submitting
document.getElementById("gameForm").addEventListener("submit", function(event) {
	event.preventDefault();

	// Get the player's choice from the input field
	const playerSelection = document.getElementById("choice").value;

	// Get the computer's choice
	const computerSelection = getComputerChoice();

	// Play a round of rock paper scissors
	const roundResult = playRound(playerSelection, computerSelection);

	// Display the result to the user
	alert(roundResult);
});