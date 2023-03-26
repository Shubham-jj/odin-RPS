// Getting Computer Choice.
// let ComChoice;
function getComputerChoice() {
  let rando = Math.floor(Math.random() * 3);
  if (rando == 0) {
    ComChoice = "Rock";
  } else if (rando == 1) {
    ComChoice = "Paper";
  } else {
    ComChoice = "Scissors";
  }
  return ComChoice;
}
// console.log(getComputerChoice());
// console.log(ComChoice);

function playRound(computer, player) {
  let result;

  if (computer == player) {
    result = `It's a tie because ${computer} and ${player} are same!`;
    return result;
  } else if (computer == "Rock" && player == "Paper") {
    result = `Player wins because ${player} beats ${computer}!`;
    return result;
  } else if (computer == "Rock" && player == "Scissors") {
    result = `Computer wins because ${computer} beats ${player}!`;
    return result;
  } else if (computer == "Paper" && player == "Rock") {
    result = `Computer wins because ${computer} beats ${player}!`;

    return result;
  } else if (computer == "Paper" && player == "Scissors") {
    result = `Player wins because ${player} beats ${computer}!`;
    return result;
  } else if (computer == "Scissors" && player == "Rock") {
    result = `Player wins because ${player} beats ${computer}!`;
    return result;
  } else if (computer == "Scissors" && player == "Paper") {
    result = `Computer wins beacuse ${computer} beats ${player}!`;
    return result;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(
      playRound(getComputerChoice(), prompt("Choose Rock,Paper or Scissors: "))
    );
  }
}
game();
