let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate target number

function randomNumberMax(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function generateTarget(){
    return randomNumberMax(9);
}

function compareGuesses(human, computer, target){
    let x = Math.abs(human - target);
    let y = Math.abs(computer - target);

    if (y < x){
        return false;
    } else if (y > x) {
        return true;
    } else {
        return true;
    }
}

function updateScore(winner){

    if (winner === 'computer') {
        computerScore++;
    } else {
        humanScore++;
    }

}
function advanceRound(){
    currentRoundNumber++;
}




