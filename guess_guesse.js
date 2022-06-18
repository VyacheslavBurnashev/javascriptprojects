let humanScore= 0;

let computerScore = 0;

let currentRound = 1;

function generateTarget() {
    return Math.floor(Math.random() * 9);
}

function compareGuess(human, computer, target) {

    const HumanW = Math.abs(target - human);

    const ComputerW = Math.abs(target - computer);

    return humanW <= ComputerW;

}

function UpdateScore(winner) {
    if (winner == 'human') {
        humanScore += 1;
    }
    else {
        computerScore += 1;
    }

}

function advanceRound() {
    currentRound += 1;
}