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

}

// tackle the "keeps score and reports a winner or loser at the end"

