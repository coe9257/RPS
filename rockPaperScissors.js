
let playerScore = 0;
let computerScore = 0;


//Score board on page
document.getElementById('pScore').textContent = 0;
document.getElementById('cScore').textContent = 0;

//Checks to score and restarts the game is one of the players reach 5 wins
function checkScore(playerScore, computerScore) {
    let answer;
    if (playerScore === 5) {
        answer = prompt('Player Wins! Would you like to play again?')
    } else if (computerScore === 5) {
        answer = prompt('Computer Wins! Would you like to play again?')
    }
}

//updates the scoareboard when the computer wins a round
function computerUpdate() {
    computerScore++;
    document.getElementById('cScore').textContent = computerScore;
}

//updates the scoareboard when the player wins a round
function playerUpdate() {
    playerScore++;
    document.getElementById('pScore').textContent = playerScore;
}


//Main game function
function game() {


    //Uses math random for the computer to randomly pick rock, paper or scissors
    let computerChoice = function computerPlay() {
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

    //Plays a round after player and computer have chosen
    function playRound() {

        //checks the score to end or restart of necessary
        checkScore(playerScore, computerScore);

        //computers choice of picking rock paper or scissors
        computerChoice();

        let computerSelection = computerChoice();
        let playerSelection = prompt('Please Pick Rock Paper or Scissors!').toLowerCase();

        //three statements are the updates of who wins the round
        let playerWins = `Player chose ${playerSelection} and computer chose ${computerSelection} ${playerSelection} wins`;
        let computerWins = `Computer chose ${computerSelection} and player chose ${playerSelection} ${computerSelection} wins`
        let tie = `Player chose ${playerSelection} and computer chose ${computerSelection} it is a tie!`;

        //the game process
        if (playerSelection === "rock" && computerSelection === "rock") {
            document.getElementById('output').textContent = tie;
            playRound();
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerUpdate();
            document.getElementById('output').textContent = computerWins;
            playRound()
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerUpdate();
            document.getElementById('output').textContent = playerWins;
            playRound()
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            document.getElementById('output').textContent = tie;
            playRound()
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerUpdate();
            document.getElementById('output').textContent = computerWins;
            playRound()
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerUpdate();
            document.getElementById('output').textContent = playerWins;
            playRound()
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            document.getElementById('output').textContent = tie;
            playRound()
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerUpdate();
            document.getElementById('output').textContent = computerWins;
            playRound()
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerUpdate();
            document.getElementById('output').textContent = playerWins;
            playRound()
        }
    }
    playRound();
}







