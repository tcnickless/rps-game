game();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        gameString = "rock";
    } else if (choice === 1) {
        gameString = "paper";
    } else if (choice === 2) {
        gameString = "scissor";
    }

    return gameString;
}

function playRound () {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Please choose Rock, Paper, or Scissors: ");
    playerSelection = playerSelection.toLowerCase();


    let result = "";
    if (playerSelection === computerSelection) {
        result = 0;
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "rock")) {
        result = 1;
    } else if ((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")) {
        result = 2;
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let roundResult = playRound();

        if (roundResult === 0) {
            console.log("This round was a draw!");
        } else if (roundResult === 1) {
            console.log("You lost this round!");
            computerScore += 1;
        } else if (roundResult === 2) {
            console.log("You won this round!");
            playerScore += 1;
        }
        console.log("The current score is:");
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    }

    console.log("After 5 rounds:")
    if (playerScore > computerScore) {
        console.log("THE PLAYER HAS WON");
    } else if (playerScore < computerScore) {
        console.log("THE COMPUTER HAS WON");
    } else {
        console.log("IT WAS A DRAW!!!");
    }
}