let playerChoose;
let computerChoose;
let playerScore = 0;
let computerScore = 0;
let flag = true;
const resTxt = document.querySelector("#res");
function computerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    computerChoose = "rock";
  } else if (random == 1) {
    computerChoose = "paper";
  } else {
    computerChoose = "scissors";
  }
  return computerChoose;
}

const playerChoiceRock = document.querySelector("#rock");
playerChoiceRock.addEventListener("click", () => {
  playerChoose = "rock";
  computerChoose = computerChoice();
  playRound(playerChoose, computerChoose);
  const r = document.createElement("p");
  scoreCalculate(playerScore, computerScore);
  r.style.color = "rgb(1,1,254)";
  r.style.fontSize = "1.75rem";
  r.style.textAlign = "center";
  r.textContent = `Player: Rock, Computer: ${computerChoose}`;
  r.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  resTxt.appendChild(r);
});
const playerChoicePaper = document.querySelector("#paper");
playerChoicePaper.addEventListener("click", () => {
  playerChoose = "paper";
  computerChoose = computerChoice();
  playRound(playerChoose, computerChoose);
  const r = document.createElement("p");
  scoreCalculate(playerScore, computerScore);
  r.style.color = "rgb(1,1,254)";
  r.style.fontSize = "1.75rem";
  r.style.textAlign = "center";
  // r.textContent = "Paper";
  r.textContent = `Player: Rock, Computer: ${computerChoose}`;
  r.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  resTxt.appendChild(r);
});
const playerChoiceScissors = document.querySelector("#scissors");
playerChoiceScissors.addEventListener("click", () => {
  playerChoose = "scissors";
  computerChoose = computerChoice();
  playRound(playerChoose, computerChoose);
  const r = document.createElement("p");
  scoreCalculate(playerScore, computerScore);
  r.style.color = "rgb(1,1,254)";
  r.style.fontSize = "1.75rem";
  r.style.textAlign = "center";
  // r.textContent = "Scissors";
  r.textContent = `Player: Rock, Computer: ${computerChoose}`;
  r.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  resTxt.appendChild(r);
});

function playRound(playerChoose, computerChoose) {
  let tie = "Round Tied!";
  let player = "Player Wins!";
  let computer = "Computer Wins!";
  if (playerChoose === computerChoose) {
    computerScore += 0;
    playerScore += 0;
    console.log(tie);
  } else if (playerChoose === "rock" && computerChoose === "paper") {
    computerScore += 1;
    playerScore += 0;
    console.log(computer);
  } else if (playerChoose === "rock" && computerChoose === "scissors") {
    computerScore += 0;
    playerScore += 1;
    console.log(player);
  } else if (playerChoose === "paper" && computerChoose === "rock") {
    computerScore += 0;
    playerScore += 1;
    console.log(player);
  } else if (playerChoose === "paper" && computerChoose === "scissors") {
    computerScore += 1;
    playerScore += 0;
    console.log(computer);
  } else if (playerChoose === "scissors" && computerChoose === "rock") {
    computerScore += 1;
    playerScore += 0;
    console.log(computer);
  } else if (playerChoose === "scissors" && computerChoose === "paper") {
    computerScore += 0;
    playerScore += 1;
    console.log(player);
  }
}

function scoreCalculate(playerScore, computerScore) {
  while (playerScore !== 5 || computerScore !== 5) {
    if (playerScore === 5) {
      alert("Player Wins!, Refresh to start again!");
      break;
    } else if (computerScore === 5) {
      alert("Computer Wins!, Refresh to start again!");
      break;
    } else {
      break;
    }
  }
}
