game();

function getComputerChoice() {
    // generate random number 1-3 and sanitise it
    let choice = Math.floor(Math.random() * 3);
    // convert random number to human readable game state
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
    // fetch game inputs ready for evaluation
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Please choose Rock, Paper, or Scissors: ");
    // sanitise human inputs to lower case for string comparisons
    playerSelection = playerSelection.toLowerCase();

    // 0 = draw
    // 1 = lose
    // 2 = win
    // compare game states and output result value
    // state permutations blocked by result
    let result = "";
    if (playerSelection === computerSelection) {
        result = 0;
    } else if ((playerSelection === "rock" && computerSelection === "paper") || 
                (playerSelection === "paper" && computerSelection === "scissor") || 
                (playerSelection === "scissor" && computerSelection === "rock")) {

                    result = 1;

    } else if ((playerSelection === "rock" && computerSelection === "scissor") || 
                (playerSelection === "paper" && computerSelection === "rock") || 
                (playerSelection === "scissor" && computerSelection === "paper")) {

                    result = 2;
    }

    return result;
}

function game() {
    // initialise/reset scores for game
    let playerScore = 0;
    let computerScore = 0;

    // loop through 5 rounds
    for (let i = 0; i < 5; i++) {
        // store evaluated game state
        let roundResult = playRound();

        // convert evaluated game state to human readable form and output to console
        // start with individual round update, and increment overall score appropriately
        if (roundResult === 0) {
            console.log("This round was a draw!");
        } else if (roundResult === 1) {
            console.log("You lost this round!");
            computerScore += 1;
        } else if (roundResult === 2) {
            console.log("You won this round!");
            playerScore += 1;
        }
        // summarise overall current/temporary score to user via console message
        console.log("The current score is:");
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
    }
    // once game is complete, summarise final score
    // basic win detection using score comparisons
    console.log("After 5 rounds:")
    if (playerScore > computerScore) {
        console.log("THE PLAYER HAS WON");
    } else if (playerScore < computerScore) {
        console.log("THE COMPUTER HAS WON");
    } else {
        console.log("IT WAS A DRAW!!!");
    }
}