function getComputerChoice() {
    // Generate a random integer between 0 and 2
    const randomInt = Math.floor(Math.random() * 3);
    
    // Map the integer to a string value
    if (randomInt === 0) {
      return "Rock";
    } else if (randomInt === 1) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }

  function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
  
    // Determine the winner based on the selections
    if (player === computer) {
      return "It's a tie!";
    } else if (player === 'rock') {
      if (computer === 'paper') {
        return "You Lose! Paper beats Rock";
      } else {
        return "You Win! Rock beats Scissors";
      }
    } else if (player === 'paper') {
      if (computer === 'scissors') {
        return "You Lose! Scissors beats Paper";
      } else {
        return "You Win! Paper beats Rock";
      }
    } else if (player === 'scissors') {
      if (computer === 'rock') {
        return "You Lose! Rock beats Scissors";
      } else {
        return "You Win! Scissors beats Paper";
      }
    }
  }

  function game() {
      // Prompt the user for their name
    const playerName = prompt("What is your name?");

  // Greet the user and explain the rules of the game
    console.log("Welcome to Rock Paper Scissors, " + playerName + "!");
    console.log("In this game, you will play 5 rounds against the computer.");
    console.log("Enter 'rock', 'paper', or 'scissors' for each round.");
    console.log("The winner of each round will be determined by the game rules:");
    console.log("- Rock beats scissors");
    console.log("- Scissors beats paper");
    console.log("- Paper beats rock");
    console.log("Good luck!\n");  
    
    let playerScore = 0;
    let computerScore = 0;
  
    // Play 5 rounds of Rock Paper Scissors
    for (let i = 1; i <= 5; i++) {
      const playerSelection = prompt("Round " + i + ": Enter Rock, Paper, or Scissors");
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
  
      // Update scores based on the round result
      if (roundResult.startsWith("You Win!")) {
        playerScore++;
      } else if (roundResult.startsWith("You Lose!")) {
        computerScore++;
      }
    }
  
    // Report the winner of the game
    if (playerScore > computerScore) {
      console.log("Congratulations, " + playerName + "! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry, " + playerName + ". You lose the game.");
    } else {
      console.log("It's a tie game!");
    }
  }