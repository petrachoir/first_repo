// inits
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const buttons = [rockButton, paperButton, scissorsButton];
const playerScoreDOM = document.getElementById("player_score");
const computerScoreDOM = document.getElementById("computer_score");
const logDOM = document.getElementById("log_message");
const choices = ["rock", "paper", "scissors"];

// computer choice selection logic
const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
};

// game
const playRPS = (playerChoice) => {
  const computerChoice = getComputerChoice();
  // winning cases
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    roundWinner = "Player";
    playerScore++;
    console.log(`${playerScore} - ${computerScore}`);
  }

  // losing cases
  if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    roundWinner = "Computer";
    computerScore++;
    console.log(`${playerScore} - ${computerScore}`);
  }

  // tie case
  if (playerChoice === computerChoice) {
    roundWinner = "Tie";
  }
  updateScore(roundWinner, playerChoice, computerChoice);
};

const updateScore = (roundWinner, playerChoice, computerChoice) => {
  if (roundWinner === "Player") {
    playerScoreDOM.textContent++;
    logDOM.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else if (roundWinner === "Computer") {
    computerScoreDOM.textContent++;
    logDOM.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  } else {
    logDOM.textContent = `It's a tie! You both selected ${playerChoice}.`;
  }

  if (playerScore === 3) {
    return (logDOM.textContent = `You won the match! You beat the computer ${playerScore} to ${computerScore}!`);
  }
  if (computerScore === 3) {
    return (logDOM.textContent = `You lost the match! The computer beat you ${computerScore} to ${playerScore}...`);
  }
};

// game state
const isGameOver = () => {
  return playerScore === 3 || computerScore === 3;
};

// choice selection
rockButton.addEventListener("click", () => onClick("rock"));
paperButton.addEventListener("click", () => onClick("paper"));
scissorsButton.addEventListener("click", () => onClick("scissors"));

// on click
const onClick = (playerChoice) => {
  if (isGameOver()) {
    return;
  }

  playRPS(playerChoice);
};
