/*Goal is to make a Rock Paper Scissors Game
Establish a computer choice
Allow player to enter choice
Make choice be case-insensitive
compare player to computer choice
return result
*/


let arr = ["rock", "paper", "scissors"]; /*Array for computer selection*/

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
};


function playRound() { /*Function that plays game*/
    
    let playerSelection = prompt("Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase(); /*Converts selection to lowercase*/
    if (playerSelection == computerSelection){ /*Compares player and computer selection*/
        alert("You and the computer are thinking alike, play again!");
        console.log("You and the computer are thinking alike, play again!");
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        alert("The computer chose paper, you lose!");
        console.log("The computer chose paper, you lose!");

    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        alert("The computer chose scissors, you win!");
        console.log("The computer chose scissors, you win!");

    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        alert("The computer chose rock, you lose!");
        console.log("The computer chose rock, you lose!");

    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        alert("The computer chose paper, you win!");
        console.log("The computer chose paper, you win!");

    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        alert("The computer chose scissors, you lose!");
        console.log("The computer chose scissors, you lose!");

    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        alert("The computer chose rock, you win!");
        console.log("The computer chose rock, you win!");

    }
    
};

/* From here make variable that checks score and returns it, then prints final score at the end of the game */
game();



function getComputerChoice() {
    return arr[(Math.floor(Math.random() * arr.length))];
}