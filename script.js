let roundCounter = 0;
let playerPoints = 0;
let computerPoints = 0;

const buttonRock = document.getElementById("button-rock");
const buttonPaper = document.getElementById("button-paper");
const buttonScissors = document.getElementById("button-scissors");
const computerPointsElement = document.getElementById("computer-points");
const playerPointsElement = document.getElementById("player-points");
const displayElement = document.getElementById("display");

function computerPlay() {
    switch (Math.floor( Math.random() * 3 )) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound( computerChoice, playerChoice ) {
   if( computerChoice == playerChoice ) {
       return "tie";
   }
   
   if( computerChoice == "rock" ) {
       switch( playerChoice ) {
            case "paper":
                return "player";
                break;
            case "scissors":
                return "computer";
                break;
       }
    }

    if( computerChoice == "paper" ) {
        switch( playerChoice ) {
            case "scissors":
                return "player";
                break;
            case "rock":
                return "computer";
                break;
        }
    }

    if( computerChoice == "scissors" ) {
        switch( playerChoice ) {
            case "rock":
                return "player";
                break;
            case "paper":
                return "computer";
                break;
        }
    }
}

function game( playerChoice ) {
    switch( playRound( computerPlay(), playerChoice ) ) {
        case "tie":
            displayElement.innerText = "It's a tie!";
            roundCounter++;
            break;
        case "computer":
            displayElement.innerText = "Computer won this round!";
            computerPoints++;
            computerPointsElement.innerText = computerPoints;
            roundCounter++;
            break;
        case "player":
            displayElement.innerText = "You won this round!";
            playerPoints++;
            playerPointsElement.innerText = playerPoints;
            roundCounter++;
            break;
    }
}

function initGame( ) {
    roundCounter = 0;
    playerPoints = 0;
    computerPoints = 0;
    computerPointsElement.innerText = computerPoints + " points";
    playerPointsElement.innerText = playerPoints + " points";
}

buttonRock.addEventListener( "click", () => {
    game( "rock" );
});

buttonPaper.addEventListener( "click", () => {
    game( "paper" );
});

buttonScissors.addEventListener( "click", () => {
    game( "scissors" );
});

initGame();
