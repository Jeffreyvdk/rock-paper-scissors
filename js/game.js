// computer play
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * Math.floor(3));
  if (randomNumber === 0) {
    return 'Rock';
  } else if (randomNumber === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// play one round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    return 'It\'s a draw';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return 'Computer wins';
  } else { 
    return 'Player wins';
  }
 }

const playerSelection = 'Rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))