// inits
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const restartButton = document.getElementById("restart");
const buttons = [rockButton, paperButton, scissorsButton];
const playerScoreDOM = document.getElementById("player_score");
const computerScoreDOM = document.getElementById("computer_score");
const playerChoiceDOM = document.getElementById("player_choice");
const computerChoiceDOM = document.getElementById("computer_choice");
const logDOM = document.getElementById("log_message");
const choices = ["rock", "paper", "scissors"];
const choiceToEmoji = {
  rock: "✊",
  paper: "✋",
  scissors: "✌",
};

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
  playerChoiceDOM.textContent = choiceToEmoji[playerChoice];
  computerChoiceDOM.textContent = choiceToEmoji[computerChoice];

  if (roundWinner === "Player") {
    playerScoreDOM.textContent++;
    logDOM.textContent = `You win!\n ${playerChoice} beats ${computerChoice}.`;
  } else if (roundWinner === "Computer") {
    computerScoreDOM.textContent++;
    logDOM.textContent = `You lose!\n ${computerChoice} beats ${playerChoice}.`;
  } else {
    logDOM.textContent = `It's a tie!\n You both selected ${playerChoice}.`;
  }

  if (playerScore === 3) {
    return (logDOM.textContent = `You won the match!\n You beat the computer ${playerScore} to ${computerScore}!`);
  }
  if (computerScore === 3) {
    return (logDOM.textContent = `You lost the match!\n The computer beat you ${computerScore} to ${playerScore}...`);
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
restartButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerChoiceDOM.textContent = "";
  computerChoiceDOM.textContent = "";
  roundWinner = "";
  playerScoreDOM.textContent = 0;
  computerScoreDOM.textContent = 0;
  logDOM.textContent = "Select a choice to begin";
});

// on click
const onClick = (playerChoice) => {
  if (isGameOver()) {
    return;
  }

  playRPS(playerChoice);
};
