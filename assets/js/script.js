/*
Reminder: 
Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
(and as it always has) Rock crushes Scissors
 */

/** Add event listener for things to do when document is loaded */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("card");
    let playButton = document.getElementById("play-card-button");
    let startButton = document.getElementById("start-button");

    // Make all card buttons have the checked attribute set to false
    for (let button of buttons) {
        button.checked = false;
    }

    /* Add event listeners so all player cards call the same function */
    for (let button of buttons) {
        button.addEventListener("click", function () {
            clickCard(this, buttons);
        });
    }
    /* Add event listener to play card button */
    playButton.addEventListener("click", function () {
        playCard(buttons);
    });

    startButton.addEventListener("click", function () {
        startGame();
    });
    resetGame();
});

/** Function to select and animate player cards.
 *  The clicked card becomes "checked" and is raised and highlighted.
 *  Any other cards are set to not "checked" and are lowered and highlighting is removed.
*/
function clickCard(currentButton, allButtons) {
    //raise action cards and mark them as selected when clicked. Reverse if they are already selected.
    for (let button of allButtons) {
        if (button === currentButton && currentButton.checked === false) {
            button.style.transform = "translateY(-30%)";
            button.checked = true;
            document.getElementById("play-card-button").disabled = false;    //Enable the play button.
        } else if (button === currentButton && currentButton.checked === true){
            button.style.transform = "translateY(0px)";
            button.checked = false;
            document.getElementById("play-card-button").disabled = true;    //Disable the play button if the selected card is deselected.
        } else {
            button.style.transform = "translateY(0px)";
            button.checked = false;
        }
    }
}

/** Activates the game */
function startGame(){
    resetGame();
    enableGameButtons();
    document.getElementById("game-status").innerHTML = "Pick a card and play it";
    document.getElementById("game-status").style.display = "block";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("play-card-button").disabled = true;    //Disable the play button before an action is picked.
}

/** Called when player has decided what card to play, main game logic is executed here, async to allow for sleep function. */
async function playCard(playerHand) {
    //Since this function is asynchronous the play button should be disabled to stop the user from clicking it before the result is displayed.
    disableGameButtons();

    let status = document.getElementById("game-status");    //game-status is the HTML element where the result of the game is displayed.
    let score = document.getElementById("score");           //score is the HTML element displaying the current score.
    let computer_score = document.getElementById("computer-score");           //score is the HTML element displaying the current score.
    let round = document.getElementById("round");           //round is the HTML element displaying the current game round.

    let action = "";
    let computerAction = computerHand();

    for (let card of playerHand) {
        if (card.checked == true) {
            action = card.id[0].toUpperCase() + card.id.slice(1);   //get action name from the element id and uppercase the first letter.
        }
    }

    status.innerHTML = `You picked ${action}`;
    await new Promise(r => setTimeout(r, 1000));    //sleep function to delay computer action.
    status.innerHTML += `<br>Computer picked ${computerAction}`;

    await new Promise(r => setTimeout(r, 1000));    //sleep function to delay result (for dramatic effect).

    //This is a bit long but it IS straightforward.
    if (action == computerAction) {
        status.innerHTML += `<br>It's a tie!`;
    } else if (action == "Rock" && computerAction == "Scissors") {
        playerWin(`<br>Rock crushes Scissors. You win!`);
    } else if (action == "Rock" && computerAction == "Paper") {
        computerWin(`<br>Paper covers Rock. Computer wins!`);
    } else if (action == "Rock" && computerAction == "Lizard") {
        playerWin(`<br>Rock crushes Lizard. You win!`);
    } else if (action == "Rock" && computerAction == "Spock") {
        computerWin(`<br>Spock vaporizes Rock. Computer wins!`);
    } else if (action == "Paper" && computerAction == "Rock") {
        playerWin(`<br>Paper covers Rock. You win!`);
    } else if (action == "Paper" && computerAction == "Scissors") {
        computerWin(`<br>Scissors cuts Paper. Computer wins!`);
    } else if (action == "Paper" && computerAction == "Lizard") {
        computerWin("`<br>Lizard eats Paper. Computer wins!`");
    } else if (action == "Paper" && computerAction == "Spock") {
        playerWin(`<br>Paper disproves Spock. You win!`);
    } else if (action == "Scissors" && computerAction == "Rock") {
        computerWin(`<br>Rock crushes Scissors. Computer wins!`);
    } else if (action == "Scissors" && computerAction == "Paper") {
        playerWin(`<br>Scissors cuts Paper. You win!`);
    } else if (action == "Scissors" && computerAction == "Lizard") {
        playerWin(`<br>Scissors decapitates Lizard. You win!`);
    } else if (action == "Scissors" && computerAction == "Spock") {
        computerWin(`<br>Spock smashes Scissors. Computer wins!`);
    } else if (action == "Lizard" && computerAction == "Rock") {
        computerWin(`<br>Rock crushes Lizard. Computer wins!`);
    } else if (action == "Lizard" && computerAction == "Paper") {
        playerWin(`<br>Lizard eats Paper. You win!`);
    } else if (action == "Lizard" && computerAction == "Scissors") {
        computerWin(`<br>Scissors decapitates Lizard. Computer wins!`);
    } else if (action == "Lizard" && computerAction == "Spock") {
        playerWin(`<br>Lizard poisons Spock. You win!`);
    } else if (action == "Spock" && computerAction == "Rock") {
        playerWin(`<br>Spock vaporizes Rock. You win!`);
    } else if (action == "Spock" && computerAction == "Paper") {
        computerWin(`<br>Paper disproves Spock. Computer wins!`);
    } else if (action == "Spock" && computerAction == "Scissors") {
        playerWin(`<br>Spock smashes Scissors. You win!`);
    } else if (action == "Spock" && computerAction == "Lizard") {
        computerWin(`<br>Lizard poisons Spock. Computer wins!`);
    } else {
        console.log("Something went wrong while calculating game logic");
    }

    await new Promise(r => setTimeout(r, 1000));    //sleep function to delay result (for dramatic effect).

    if (parseInt(round.innerHTML) < 5) {
        round.innerHTML = parseInt(round.innerHTML) + 1;
        status.innerHTML += `<br>Pick an action for round ${round.innerHTML}`;
        enableGameButtons();
    } else {
        if (parseInt(score.innerHTML) == parseInt(computer_score.innerHTML)) {
            status.innerHTML += `<br>Game end! The game is tied.`;
        } else if (parseInt(computer_score.innerHTML) < parseInt(score.innerHTML)) {
            status.innerHTML += `<br>Game end! You win :)`;
        } else if (parseInt(computer_score.innerHTML) > parseInt(score.innerHTML)) {
            status.innerHTML += `<br>Game end! You lose :(`;
        } else {
            console.log("Something is wrong with score calculation");
        }
        document.getElementById("start-button").style.display = "block";
        clickCard(0, document.getElementsByClassName("card"));              //unselect all cards
    }
}

/** Randomly returns an action value */
function computerHand() {
    let actions = ["Rock", "Paper", "Scissors", "Lizard", "Spock",];
    return actions[Math.floor(Math.random() * 5)];
}

/** This is repeated a lot so to make things a little bit simpler it was turned into a function */
function computerWin(text){
    document.getElementById("game-status").innerHTML += text;
    document.getElementById("computer-score").innerHTML = parseInt(document.getElementById("computer-score").innerHTML) + 1;
}

/** This is repeated a lot so to make things a little bit simpler it was turned into a function */
function playerWin(text){
    document.getElementById("game-status").innerHTML += text;
    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 1;
}

/** Disables all game buttons so they cannot be activated when they shouldn't be. */
function disableGameButtons(){
    document.getElementById("play-card-button").disabled = true;
    let buttons = document.getElementsByClassName("card");
    for (let button of buttons){
        button.disabled = true;
    }
}

/** Enables all game buttons so the game can be played */
function enableGameButtons(){
    document.getElementById("play-card-button").disabled = false;
    let buttons = document.getElementsByClassName("card");
    for (let button of buttons){
        button.disabled = false;
    }
}

/**
 * Sets game status to the starting value, hides game status and sets score and round back to 0. Also makes the start game button visible again.
 * Finally disables the game buttons until start is pressed again.
 */
function resetGame(){
    document.getElementById("score").innerHTML = "0";
    document.getElementById("computer-score").innerHTML = "0";
    document.getElementById("round").innerHTML = "1";
    clickCard(0, document.getElementsByClassName("card"));              //click no card to unselect all cards.
    disableGameButtons();
}