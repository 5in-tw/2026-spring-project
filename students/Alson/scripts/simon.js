import { Simon } from
    'https://5in-tw.github.io/2026-spring-project/scripts/simon.js';

const game = new Simon("simon")

const buttons = [
    "yellow", "blue", "red", "green"
];
game.addButtons(buttons);

function getRandomButton() {
    const randomNumber = Math.random() * buttons.length;
    const randomInteger = Math.floor(randomNumber);

    console.log(randomNumber, randomInteger);
    return buttons[randomInteger];
}




let sequence = [];
let current = 0;

function startGame() {
    sequence = [];
    current = 0;
    game.gameOver = false;
    nextRound();
}

function nextRound() {
    current = 0;
    sequence.push(
        getRandomButton()
    );
    game.playSequence(sequence);
}

const startsimonbutton = document.getElementById("start-simon");
startsimonbutton.addEventListener("click", startGame);

function checkButtonPress(event) {
    const buttonId = event.target.id;
    console.log(buttonId);

    //if we press wrong button
    if (sequence[current] !== buttonId) {
        console.log(current, buttonId);
        game.gameOver = true;
        return;
    }


    current = current +1;
    if (current === sequence. length) {
        nextRound();
    }
}

const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const green = document.getElementById("green");


yellow.addEventListener("click", checkButtonPress);
blue.addEventListener("click", checkButtonPress);
red.addEventListener("click", checkButtonPress);
green.addEventListener("click", checkButtonPress);
