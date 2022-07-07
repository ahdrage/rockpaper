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

// Logic for who wins
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

// Logic for random computer choice
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

// Plays a game of rock, paper, scissor. 
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

// What happens when rock-button is clicked
rockButton.addEventListener("click", function() {
    
    humanChoice = rockValue;
    game(); 

    document.getElementById("summary").innerHTML = (`Human chooses <b>${humanChoice}</b>. Computer chooses <b>${computerChoice}</b>. Round winner is: <b>${roundWinner}</b>. `); 
    document.getElementById("score").innerHTML = (`Human:${humanScore} Computer:${computerScore} `); 
    
    whoIsWinner(); 
    resetButtonFunction(); 
    
});

// What happens when paper-button is clicked
paperButton.addEventListener("click", function() {
    
    humanChoice = paperValue;
    game(); 
    
    document.getElementById("summary").innerHTML = (`Human chooses <b>${humanChoice}</b>. Computer chooses <b>${computerChoice}</b>. Round winner is: <b>${roundWinner}</b>. `); 
    document.getElementById("score").innerHTML = (`Human:${humanScore} Computer:${computerScore} `); 
   
    whoIsWinner(); 
    resetButtonFunction();
});

// What happens when scissor-button is clicked
scissorButton.addEventListener("click", function() {
    
    humanChoice = scissorValue;
    game(); 

    document.getElementById("summary").innerHTML = (`Human chooses <b>${humanChoice}</b>. Computer chooses <b>${computerChoice}</b>. Round winner is: <b>${roundWinner}</b>. `); 
    document.getElementById("score").innerHTML = (`Human:${humanScore} Computer:${computerScore} `); 
    
    whoIsWinner(); 
    resetButtonFunction();
   
    
});

function whoIsWinner() {
    if ((computerScore === 5)  || (humanScore === 5)) {
        document.getElementById("winner").innerHTML = (`The winner of the game is ${gameWinner}.`); 
    }
    
}

 // Showing reset button when a user has started the game.  
 function resetButtonFunction() {
    resetButton.style.display = "inline" 
}

// Creating a reset button and div for button 
let resetButton = document.createElement("button-reset");
let resetDiv = document.createElement("button-reset");
resetDiv.setAttribute("class", "reset-div")
resetButton.setAttribute("class", "button-4")
resetButton.setAttribute("id", "reset-button");
resetButton.innerHTML="Restart"; 
document.body.appendChild(resetDiv); 
resetDiv.append(resetButton); 

// Hiding the restart button 
resetButton.style.display="none"; 

// What happens when restart button is clicked
resetButton.addEventListener("click", function() {

    document.getElementById("summary").innerHTML = ""; 
    document.getElementById("score").innerHTML = (`Human: 0 Computer:0`); 
    document.getElementById("winner").innerHTML = ""; 
    computerScore = 0; 
    humanScore = 0; 
});