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

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("card");
    console.log("added event listener")
    for (let button of buttons) {
        button.addEventListener("click", function() {
            selectButton(this);
        });
    }
});


function selectButton(buttonName) {
    console.log("selected card:", buttonName);
}

function playCard(){
    console.log("play card");
}