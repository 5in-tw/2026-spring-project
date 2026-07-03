import { Simon } from
    "https://5in-tw.github.io/2026-spring-project/scripts/simon.js";

const game = new Simon("simon");
const startButton = document.getElementById("start-simon");
const Score = document.getElementById("score");
const higtScore = document.getElementById("higt-score");
let score = 0
let higtscore = 0
const buttons = [
    "yellow",
    "blue",
    "red",
    "green"
];
game.addButtons(buttons);

function getRamdomButton() {
    const randomNumber = Math.random() * buttons.length;
    const randomInteger = Math.floor(randomNumber);


    console.log(randomNumber, randomInteger)
    return buttons[randomInteger]
}

let sequence = [];
let current = 0;

function startGame() {
    sequence = [];
    current = 0;
    game.gameOver = false;
    nextRound();
    score = 0;
    Score.textContent = score;
}

function nextRound() {
    current = 0;
    sequence.push(
        getRamdomButton()
    );
    game.playSequence(sequence);
}
//   startGame();
//   gameOver();
//   gameOver();
startButton.addEventListener("click", startGame);

function checkButtonPress(event) {
    const buttonId = event.target.id;
    console.log(buttonId);

    if (sequence[current] !== buttonId) {
        console.error(current, buttonId);
        game.gameOver = true;
        return;
    }

    current = current + 1;
    if (current === sequence.length) {
        score = score + 1
        Score.textContent = score;
        if (score > higtscore) {
            higtscore = higtscore + 1;
            higtScore.textContent = higtscore;
        }
        nextRound();
    }
}

const yellowButton = document.getElementById("yellow")
const blueButton = document.getElementById("blue")
const redButton = document.getElementById("red")
const greenButton = document.getElementById("green")

yellowButton.addEventListener("click", checkButtonPress);
blueButton.addEventListener("click", checkButtonPress);
redButton.addEventListener("click", checkButtonPress);
greenButton.addEventListener("click", checkButtonPress);