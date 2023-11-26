let computerSelection = getComputerChoice();
let playerSelection = prompt("Please choose Rock, Paper, or Scissors: ");
playerSelection = playerSelection.toLowerCase();
let roundResult = playerCompare(playerSelection, computerSelection);


console.log("Your Opponent Chose: " + computerSelection);
console.log("You chose: " + playerSelection);
console.log("Result: " + roundResult);

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

function playRound (player, computer) {
    let result = "";
    if (player === computer) {
        result = "Draw";
    } else if ((player === "rock" && computer === "paper") || (player === "paper" && computer === "scissor") || (player === "scissor" && computer === "rock")) {
        result = "Computer Wins!";
    } else if ((player === "rock" && computer === "scissor") || (player === "paper" && computer === "rock") || (player === "scissor" && computer === "paper")) {
        result = "You Win!";
    }

    return result;
}