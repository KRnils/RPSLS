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

    // Make all card buttons have the checked attribute set to false
    for (let button of buttons) {
        button.checked = false;
    }
    
    /* Add event listeners so all player cards call the same function */
    for (let button of buttons) {
        button.addEventListener("click", function () {
            clickButton(this, buttons);
        });
    }
    /* Add event listener to play card button */
    playButton.addEventListener("click", function() {
        playCard(buttons);
    });

});

/** Function to select and animate player cards */
function clickButton(currentButton, allButtons) {
    for (let button of allButtons) {
        if (button === currentButton && currentButton.checked === false) {
            button.style.transform = "translateY(-30%)";
            button.checked=true;
        } else {
            button.style.transform = "translateY(0px)";
            button.checked=false;
        }
    }
}

/** Called when player has decided what card to play, main game logic is executed here */
function playCard(playerHand) {
    let status = document.getElementById("game-status");
    for (let card of playerHand) {
        if(card.checked==true){
            let regex = new RegExp(/(?<=br>).*/);
            let action = card.innerHTML.match(regex)[0];
            console.log(action);
            switch(action) {
                case 'Rock':
                    status.innerHTML = "Rock";
                    break;
                case 'Paper':
                    status.innerHTML = "Paper";
                    break;
                case 'Scissors':
                    status.innerHTML = "Scissors";
                    break;
                case 'Lizard':
                    status.innerHTML = "Lizard";
                    break;
                case 'Spock':
                    status.innerHTML = "Spock";
                    break;
            }
        }
    }
}