let computerChoice;
function getCoputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    computerChoice = "rock";
  } else if (random == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

let playerChoice;
function getPlayerChoice() {
  const r = document.querySelector("#rock");
  const p = document.querySelector("#paper");
  const s = document.querySelector("#scissors");
  playerChoice = r.value.toLowerCase();
  return playerChoice;
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerChoice, computerChoice) {
  let tie = "Round Tied!";
  let player = "Player Wins!";
  let computer = "Computer Wins!";
  if (playerChoice === computerChoice) {
    computerScore += 0;
    playerScore += 0;
    return tie;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    playerScore += 0;
    return computer;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    computerScore += 0;
    playerScore += 1;
    return player;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    computerScore += 0;
    playerScore += 1;
    return player;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    playerScore += 0;
    return computer;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    playerScore += 0;
    return computer;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    computerScore += 0;
    playerScore += 1;
    return player;
  }
}

if (playerScore === computerScore) {
  console.log("Tied!");
} else if (playerScore > computerScore) {
  console.log("Player Wins!");
} else if (playerScore < computerScore) {
  console.log("Computer Wins!");
}
