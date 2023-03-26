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
  let scPlayer = 0;
  let scComp = 0;

  if (computer == player) {
    result = `It's a tie because ${computer} and ${player} are same!`;
    return result;
  } else if (computer == "Rock" && player == "Paper") {
    scPlayer += 1;
    result = `Player wins because ${player} beats ${computer}!,Player = ${scPlayer}`;
    return result;
  } else if (computer == "Rock" && player == "Scissors") {
    scComp += 1;
    result = `Computer wins because ${computer} beats ${player}!,Computer = ${scComp}`;
    return result;
  } else if (computer == "Paper" && player == "Rock") {
    scComp += 1;
    result = `Computer wins because ${computer} beats ${player}!,Computer = ${scComp}`;

    return result;
  } else if (computer == "Paper" && player == "Scissors") {
    scPlayer += 1;
    result = `Player wins because ${player} beats ${computer}!,Player = ${scPlayer}`;
    return result;
  } else if (computer == "Scissors" && player == "Rock") {
    scPlayer += 1;
    result = `Player wins because ${player} beats ${computer}!,Player = ${scPlayer}`;
    return result;
  } else if (computer == "Scissors" && player == "Paper") {
    scComp += 1;
    result = `Computer wins beacuse ${computer} beats ${player}!,Computer = ${scComp}`;
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
