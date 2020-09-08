// computer play
function computerPlay(max) {
  let randomNumber = Math.floor(Math.random() * Math.floor(max));
  if (randomNumber === 0) {
    computerChoice = "Rock";
  } else if (randomNumber === 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return;
}



// call functions
computerPlay(3);
console.log(`computer choice: ${computerChoice}`);
