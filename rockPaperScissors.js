
let playerScore = 0;
let computerScore = 0;

function game() {

  for (i = 0; i < 30; i++) {
    console.log(i);

    function playRound() {

      let random10 = function computerPlay() {
        let a = Math.floor(Math.random() * 3 + 1);
        if (a === 1) {
          a = "rock";
        } else if (a === 2) {
          a = "paper";
        } else if (a === 3) {
          a = "scissors";
        }
        return a;
      }

      computerSelection = random10();
      playerSelection = 'rock';

      if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("It is a tie");
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        console.log("Computer Wins!");
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        console.log("Player Wins!");
      } else if (playerSelection === "paper" && computerSelection === "paper") {
        playerScore++;
        console.log("It is a tie");
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        console.log("Computer Wins!");
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        console.log("Player Wins!");
      } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        playerScore++;
        console.log("It is a tie");
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        console.log("Computer Wins!");
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        console.log("Player Wins!");
      }
    }

    playRound();
  }

}

console.log(game())

console.log(playerScore);
console.log(computerScore);





