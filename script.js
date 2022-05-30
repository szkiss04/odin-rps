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

function playRound( playerSelection, computerSelection ) {
    
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    
    if ( lowerCasePlayerSelection == computerSelection ) {
        return "It's a tie!";
    } else if ( lowerCasePlayerSelection == "rock" ) {
        switch ( computerSelection ) {
            case "paper":
                return "Computer wins!";
                break;
            case "scissors":
                return "Player wins!";
                break;
        }
    } else if ( lowerCasePlayerSelection == "paper" ) {
        switch ( computerSelection ) {
            case "rock":
                return "Player wins!";
                break;
            case "scissors":
                return "Computer wins!";
                break;
        }
    } else if ( lowerCasePlayerSelection == "scissors" ) {
        switch ( computerSelection ) {
            case "rock":
                return "Computer wins!";
                break;
            case "paper":
                return "Player wins!";
                break;
        }
    }
}

function game( ) {
    let playersChoice, computersChoice, playerPoints = 0, computerPoints = 0, round;
    for( let i = 0; i < 5; i++ ) {
        playersChoice = prompt( "What do you choose? Type \"rock\", \"paper\" or \"scissors\" !" );
        computersChoice = computerPlay( );
        round = playRound( playersChoice, computersChoice );
        if ( round == "Player wins!" ) {
            console.log( "Player's choice " + playersChoice + ", computer's choice: " + computersChoice + ". " + round );
            playerPoints++;
        } else if( round == "Computer wins!" ) {
            console.log( "Player's choice " + playersChoice + ", computer's choice: " + computersChoice + ". " + round );
            computerPoints++;
        } else {
            console.log( round );
        }
    }
    console.log( "Player's points: " + playerPoints + ", computer's points: " + computerPoints );
    if( playerPoints > computerPoints ) {
        console.log( "Player won this match! Congrats! :-)" );
    } else if ( playerPoints < computerPoints ) {
        console.log( "Computer won this match! It's unfortunate. :-(" );
    } else {
        console.log( "The match ended with a tie between you and the computer. Not bad. :-)" );
    }
}