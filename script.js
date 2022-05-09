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

    const elements = document.querySelectorAll('.rocks')
    let pick = "";
    console.log(pick)
    
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            console.log(element.value);
            pick = element.value
            return pick
        })
    })

    const playerSelect = pick;
    const playerSelection = playerSelect.toLowerCase();
    const computerSelection = computerPlay();

    return playRound(playerSelection, computerSelection);
}

function gamePlay () {
    let win = 0;
    let draw = 0;
    let loose = 0;
    
    
    const match = game();

    if (match.length == 28) {
        win++;
    } else if (match.length == 27 ) {
        loose++;
    } else {
        draw++;
    }

    document.getElementById("answer").innerHTML = "You won " + win + " times, drew " + draw + " times, and lost " + loose + " times."
    
}

/*function myFunction () {
    const elements = document.querySelectorAll('.rocks')
    
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            console.log(element.value);
            const playerSelect = element.value;
            const playerSelection = playerSelect.toLowerCase();
            return playerSelection;  
        })
    })
    const computerSelection = computerPlay(); 
    return playRound(playerSelection, computerSelection);
}*/

const start = gamePlay();