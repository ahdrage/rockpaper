
const rockValue = "rock";
const scissorValue = "scissor";
const paperValue = "paper"; 

let roundWinner = ""; 
let gameWinner = ""; 
let humanScore = 0; 
let computerScore = 0; 


let humanChoice = ""; 


const rockButton = document.getElementById("rock-button");
const scissorButton = document.getElementById("scissor-button");
const paperButton = document.getElementById("paper-button"); 
const resetButton = document.getElementById("play-again-button")


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


rockButton.addEventListener("click", function() {
    
    humanChoice = rockValue;
    game(); 

    document.getElementById("summary").innerHTML = (`Human chooses ${humanChoice}. Computer chooses ${computerChoice}. Round winner is: ${roundWinner}. Score:  Human:${humanScore} Computer:${computerScore} `); 
   
    if ((computerScore === 5)  || (humanScore === 5)) {
        document.getElementById("winner").innerHTML = (`The winner of the game is ${gameWinner}.`); 
    }
    
});

paperButton.addEventListener("click", function() {
    
    humanChoice = paperValue;
    game(); 
    
    document.getElementById("summary").innerHTML = (`Human chooses ${humanChoice}. Computer chooses ${computerChoice}. Round winner is: ${roundWinner}. Score:  Human:${humanScore} Computer:${computerScore} `); 
    
    if ((computerScore === 5)  || (humanScore === 5)) {
        document.getElementById("winner").innerHTML = (`The winner of the game is ${gameWinner}.`); 
    }
    
});

scissorButton.addEventListener("click", function() {
    
    humanChoice = scissorValue;
    game(); 

    document.getElementById("summary").innerHTML = (`Human chooses ${humanChoice}. Computer chooses ${computerChoice}. Round winner is: ${roundWinner}. Score:  Human:${humanScore} Computer:${computerScore} `); 
    
    if ((computerScore === 5)  || (humanScore === 5)) {
        document.getElementById("winner").innerHTML = (`The winner of the game is ${gameWinner}.`); 
    }
    
});


resetButton.addEventListener("click", function() {
    
    document.getElementById("summary").innerHTML = "Resetting game";  
    computerScore = 0; 
    humanScore = 0; 
});



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

    return gameValue

}

function game() {

    computerChoice = computerPlay(); 
    const winner = gameRound(computerChoice, humanChoice);

    if (winner === 'human') {
        humanScore += 1;
        roundWinner = "human"; 
        
    } 
    else if (winner === 'computer') {
        computerScore += 1;
        roundWinner = "computer";     
    } 

    else {
        roundWinner = "tie"; 
    }


    if (humanScore === 5) {
        gameWinner = "human"; 
    }

    else if (computerScore === 5) {
        gameWinner = "computer"; 
    }
}

