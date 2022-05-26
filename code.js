

const rockValue = "rock";
const scissorValue = "scissor";
const paperValue = "paper"; 

function computerPlay() {

    const  tempValue = Math.floor(Math.random() * 3);
    let gameValue = ""; 

    if (tempValue === 0) {
        gameValue = rockValue;
    }

    else if (tempValue === 1) {
        gameValue = paperValue;
    }

    else if (tempValue === 2){
        gameValue = scissorValue; 
    }

 
    return gameValue; 

}

function gameRound(computerChoice, humanChoice) {
    let decideWinner = ""; 

    if (computerChoice === humanChoice) {
        decideWinner = "Its a tie!";
        return null;  
    }

    else if (computerChoice === rockValue && humanChoice === paperValue ) {
        return "human"; 
    }

    else if (computerChoice === paperValue && humanChoice === rockValue ) {
        return "computer"; 
    }

    else if (computerChoice === paperValue && humanChoice === scissorValue ) {
        return "human"; 
    }

    else if (computerChoice === scissorValue && humanChoice === paperValue ) {
        return "computer"; 
    }
    
    else if (computerChoice === rockValue && humanChoice === scissorValue ) {
        return "computer"; 
    }
 
    else if (computerChoice === scissorValue && humanChoice === rockValue ) {
        return "human"; 
    }
 
}


function game() {
    let scoreCardComputer = 0;
    let scoreCardHuman = 0

    for (let i = 0; i < 6; i++) { 

        const computerChoice = computerPlay()
        const humanChoice = window.prompt('Choose rock, paper or scissor');

        const winner = gameRound(computerChoice, humanChoice);

        if (winner === 'human') scoreCardHuman += 1;
        else if (winner === 'computer') scoreCardComputer += 1;

        if (winner === "human") {
            console.log("Round winner is human");
        }

        else if (winner === "computer") {
            console.log("Round winner is computer");
        }

        if (computerChoice === humanChoice) {
            console.log("Tie");
        }
    }
    console.log("total", "human", scoreCardHuman, "computer", scoreCardComputer)
    
}

game();     

/* for (let i = 0; i < ((scoreCardComputer = 5) || (scoreCardHuman = 5) ); i++) {  */

