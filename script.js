/*Goal is to make a Rock Paper Scissors Game
Establish a computer choice
Allow player to enter choice
Make choice be case-insensitive
compare player to computer choice
return result
*/


let arr = ["rock", "paper", "scissors"]; /*Array for computer selection*/

let score = 0; /*Score counter for game*/

function game() {
    for (let i = 0; i < 5; i++) { /* Runs the function 5 times*/
        playRound();
    }
    alert("Game over! Your final score is: " + score + "\nRefresh the page to start over."); /*Alerts of game over after function has ran 5 times*/
};


function playRound() { /*Function that plays game*/
    
    let playerSelection = prompt("Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase(); /*Converts selection to lowercase*/
    if (playerSelection == computerSelection){ /*Compares player and computer selection*/
        alert("You and the computer are thinking alike, play again!"  + "Your score is: " + score);
        console.log("You and the computer are thinking alike, play again! "  + "Your score is: "  + score);
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){

        if (score <= 0) { /*Checks the score value, if it's 0 or less than, it just returns its value*/
            return score;
        }
        else {
            score--; /*Reduces the score by 1*/
        }
        alert("The computer chose paper, you lose! " + "Your score is: " + score);
        
        console.log("The computer chose paper, you lose!" + "Your score is: "  + score);

    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){

        score++; /*Increases the score by 1*/
        alert("The computer chose scissors, you win! " + "Your score is: "  + score);
        
        console.log("The computer chose scissors, you win! " + "Your score is: "  + score);

    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){

        if (score <= 0) {
            return score;
        }
        else {
            score--;
        }
        alert("The computer chose rock, you lose! " + "Your score is: "  + score);
       
        console.log("The computer chose rock, you lose! " + "Your score is: "  + score);

    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){

        score++;
        alert("The computer chose paper, you win!" + "Your score is: "  + score);
        
        console.log("The computer chose paper, you win! " + "Your score is: "  + score);

    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        if (score <= 0) {
            return score;
        }
        else {
            score--;
        }
        
        alert("The computer chose scissors, you lose! " + "Your score is: "  + score);
        
        console.log("The computer chose scissors, you lose! " + "Your score is: "  + score);

    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        score++;
        alert("The computer chose rock, you win! " + "Your score is: "  + score);
        console.log("The computer chose rock, you win! " + "Your score is: "  + score);

    }
    
};

game(); /*Runs the game function*/



function getComputerChoice() { /*Allows the computer to randomly select rock, paper, scissors */
    return arr[(Math.floor(Math.random() * arr.length))];
}