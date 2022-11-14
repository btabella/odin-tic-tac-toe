function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() *3 );
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    };
}

let playerScore = 0;
let computerScore = 0;


for (let i = 0; i < 5; i++) {
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return `It's a tie! You both picked ${playerSelection}`;
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return "You win! Rocks beats Scissors";
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You win! Paper beats Rock";
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return "You win! Scissors beat Paper";
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    
    const playerSelection = prompt("Welcome! Start the game by either picking rock, paper, or scissors").toLowerCase();
    
    const computerSelection = getComputerChoice();
    
    alert(playRound(playerSelection, computerSelection));

    if (playRound(playerSelection, computerSelection) == "You win! Rocks beats Scissors" || playRound(playerSelection, computerSelection) == "You win! Paper beats Rock" || playRound(playerSelection, computerSelection) == "You win! Scissors beat Paper") {
        playerScore++;
    } else {
        computerScore++;
    }
}

function endResult() {
    if (playerScore > computerScore) {
        return `The game is over and you win! You scored ${playerScore} points while your opponent scored ${computerScore} points`;
    } else if (playerScore < computerScore) {
        return `The game is over and you lose! You scored ${playerScore} points while your opponent scored ${computerScore} points`;
    } else {
        return `The game is over and nobody wins! You scored ${playerScore} points while your opponent scored ${computerScore} points`;
    }
}

alert (endResult());