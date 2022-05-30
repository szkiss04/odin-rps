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
                return "Paper beats rock, computer wins!";
                break;
            case "scissors":
                return "Rock beats scissors, player wins!";
                break;
        }
    } else if ( lowerCasePlayerSelection == "paper" ) {
        switch ( computerSelection ) {
            case "rock":
                return "Paper beats rock, player wins!";
                break;
            case "scissors":
                return "Scissors beats paper, computer wins!";
                break;
        }
    } else if ( lowerCasePlayerSelection == "scissors" ) {
        switch ( computerSelection ) {
            case "rock":
                return "Rock beats scissors, computer wins!";
                break;
            case "paper":
                return "Scissors beats paper, player wins!";
                break;
        }
    }
}

console.log( playRound( "rock", computerPlay() ) );
console.log( playRound( "rock", computerPlay() ) );
console.log( playRound( "rock", computerPlay() ) );
console.log( playRound( "rock", computerPlay() ) );
console.log( playRound( "rock", computerPlay() ) );
