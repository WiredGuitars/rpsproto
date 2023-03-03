const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let Tie = 0;
let result = null;
let scissorsButton = document.querySelector("button.scissors");
let paperButton = document.querySelector("button.paper");
let rockButton = document.querySelector("button.rock");
rockButton.addEventListener("click", function () {
  playRound("rock");
});
paperButton.addEventListener("click", function () {
  playRound("paper");
});
scissorsButton.addEventListener("click", function () {
  playRound("scissors");
});
let scoreTracker = document.querySelector(".scoreTracker .result");
function getComputerMove() {
  return options[Math.floor(Math.random() * 3)];
}
let computerMove = getComputerMove();
function playRound(playerMove) {
  let computerMove = getComputerMove();
  if (playerMove == computerMove) {
    result = "Tie! ";
    Tie++;
  } else if (
    (playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "paper" && computerMove == "rock") ||
    (playerMove == "scissors" && computerMove == "paper")
  ) {
    playerScore++;
    result = "You Win! ";
  } else {
    result = "You Lose! ";
    computerScore++;
  }
  scoreTracker.textContent = result + " Player score: " + playerScore + " Computer score: " + computerScore + " Number of Ties: " + Tie
}
