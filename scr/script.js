function computerPlay () {
    const hand = ["Rock", "Paper", "Scissors"];

    var random = Math.floor(Math.random() * hand.length);
    play = hand[random].toLowerCase();
    //console.log(play);
    return play;
}

function playRound(playerSelection, computerSelection) {
    let a, b;
    a = playerSelection;
    b = computerSelection;

    let x, y, z;
    x = "rock";
    y = "paper";
    z = "scissors"

    if ((a === x && b === x) || (a === y && b === y) || (a === z && b === z)) {
        return "It's a draw!, Please start again"
    } else if (a === x && b === y)  {
        return "You loose! " + y + " beats " + x;
    } else if (a === x && b === z)  {
        return "You win! " + x + " beats " + z;
    } else if (a === y && b === x)  {
        return "You win! " + y + " beats " + x;
    } else if (a === y && b === z)  {
        return "You loose! " + z + " beats " + y;
    } else if (a === z && b === x)  {
        return "You loose! " + x + " beats " + z;
    } else if (a === z && b === y)  {
        return "You win! " + z + " beats " + y;
    } else {
        return "Please enter either Rock, Paper or Scissors"
    }
}

function game () {
    const playerSelect = prompt("Please enter either Rock, Paper or Scissors");
    const playerSelection = playerSelect.toLowerCase();
    const computerSelection = computerPlay();

    return playRound(playerSelection, computerSelection);
}

const playerSelect = prompt("Please enter either Rock, Paper or Scissors");
const playerSelection = playerSelect.toLowerCase();
const computerSelection = computerPlay();

function gamePlay () {
    let win = 0;
    let draw = 0;
    let loose = 0;
    
    for ( var i = 0; i < 5; i++ ) {
        const v = game();
    
        if (v.length == 28) {
            win++;
        } else if (v.length == 27 ) {
            loose++;
        } else {
            draw++;
        }

        console.log("You won " + win + " times, drew " + draw + " times, and lost " + loose + " times");
    }
}

const start = gamePlay();