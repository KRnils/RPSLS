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
            clickButton(this, buttons);
        });
    }
});


function clickButton(currentButton, allButtons) {
    console.log("selected card:", currentButton);
    for (let button of allButtons){
        if(button === currentButton){
            button.style.transform = "translateY(-30%)";
        } else {
            button.style.transform = "translateY(0px)";
        }
    }
}

function playCard(){
    console.log("play card");
}

function animateButton(currentButton) {
    let buttons = document.getElementsByClassName("card");
    for (let item in buttons){
        if(item === currentButton){
            currentButton.style.transition = "all 500ms ease-in-out";
            currentButton.style.transform = "translateY(-30%)";
        } else {
            console.log(item);
            item.style.transform = "translateY(0px)";
        }
    }
    
  }