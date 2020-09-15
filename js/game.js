// function to return a random computerchoice.
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * Math.floor(3));
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


// function to play 5 rounds.
function game() {
  for (let i = 0; i < 5; i++) {
    // function to play one round.
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("It's a draw");
        return (roundScore = 0);
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock");
        return (roundScore = 1);
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return (roundScore = 2);
      } else {
        return 'error';
      }
    }
    
    const computerSelection = computerPlay();
    const playerSelection = prompt('Please make your choice');
    if ( playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'paper' || playerSelection.toLowerCase() === 'scissors' ) {
      console.log(playRound(playerSelection, computerSelection));
    } else { 
      alert('Please enter a valid input (rock, paper or scissors)');
    }
    
    // keep score
    if (roundScore === 1) {
      computerScore++;
    } else if (roundScore === 2) {
      playerScore++;
    }
  }
}

// create variables to keep the score
let roundScore;
let computerScore = 0;
let playerScore = 0;

// call function to play the game
game();
console.log(`computerscore: ${computerScore} / playerscore ${playerScore}`);
