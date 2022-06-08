let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;

const computerScoreElement = document.getElementById( "computer-score" );
const playerScoreElement = document.getElementById( "player-score" );
const messageElement = document.getElementById( "message" );
const roundCountElement = document.getElementById ( "round-count" );
const newGameButton = document.getElementById( "new-game" );
const weaponContainer = document.getElementById( "weapon-container" );
const rockButton = document.getElementById( "rock" );
const paperButton = document.getElementById( "paper" );
const scissorsButton = document.getElementById( "scissors" );

function showMessage( message ) {
    messageElement.innerText = message;
}

function hideElement( element ) {
    element.classList.add( "hide" );
}

function showElement( element ) {
    element.classList.remove( "hide" );
}

function disableWeapons( ) {
    rockButton.setAttribute("disabled", "");
    paperButton.setAttribute("disabled", "");
    scissorsButton.setAttribute("disabled", "");
}

function enableWeapons( ) {
    rockButton.removeAttribute("disabled", "");
    paperButton.removeAttribute("disabled", "");
    scissorsButton.removeAttribute("disabled", "");
}

function resetGame( ) {
    roundCounter = 0;
    playerScore = 0;
    computerScore = 0
    showMessage( "" );
    roundCountElement.innerText = "";
    updateUI();
}

function updateUI( ) {
    computerScoreElement.innerText = computerScore;
    playerScoreElement.innerText = playerScore;
}

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

function compareChoices( computerChoice, playerChoice ) {
    if ( computerChoice == playerChoice ) return "tie";
    if (
       computerChoice == "rock" &&  playerChoice == "scissors" ||
       computerChoice == "paper" && playerChoice == "rock" ||
       computerChoice == "scissors" && playerChoice == "paper" 
   ) {
       return "computer";
   }
   return "player";
}

function playRound( choice ) {
    computersChoice = computerPlay();
    switch( compareChoices( computersChoice, choice ) ) {
        case "tie":
            showMessage( `The computers weapon: ${computersChoice}. It's a tie!` );
            break;
        case "computer":
            showMessage( `The computers weapon: ${computersChoice}. The computer takes this round!` );
            computerScore++;
            break;
        case "player":
            showMessage( `The computers weapon: ${computersChoice}. This round is yours!` );
            playerScore++;
            break;
    }

    roundCounter++;
    roundCountElement.innerText = `ROUND ${roundCounter}`;
    updateUI();

    if( roundCounter == 5 ) {
        gameEnd( );
    }
}

function gameEnd( ) {
    if ( playerScore == computerScore ) {
        showMessage( "It's a tie between you and the computer! Try again to beat it!" );
    } else if ( playerScore > computerScore ) {
        showMessage( "You won this match! Congratulations!" );
    } else {
        showMessage( "Unlucky you, the computer won this match! Maybe next time..." );
    }
    showElement( newGameButton );
    disableWeapons();
}

newGameButton.addEventListener( "click", () => {
    hideElement( newGameButton );
    resetGame();
    enableWeapons();
} )

rockButton.addEventListener( "click", () => playRound( "rock" ) );
paperButton.addEventListener( "click", () => playRound( "paper" ) );
scissorsButton.addEventListener( "click", () => playRound( "scissors" ) );

showMessage( "Click to start a new game!" );
disableWeapons();