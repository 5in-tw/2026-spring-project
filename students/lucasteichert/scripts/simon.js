import { Simon } from 'https://5in-tw.github.io/2026-spring-project/scripts/simon.js';

const game = new Simon('simon');

const buttons = [
    'yellow', 'blue', 'red', 'green'
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
let score = 0;
let highscore = 0;


const currentScoreDisplay = document.getElementById('current-score');
const highScoreDisplay = document.getElementById('high-score');

function startGame() {
    sequence = [];
    current = 0;
    score = 0; 
    updateScoreDisplay();
    game.gameOver = false;
    nextRound();
}

function nextRound() {
    current = 0;
    sequence.push(getRandomButton());
    game.playSequence(sequence);
}


function updateScoreDisplay() {
    currentScoreDisplay.textContent = score;
    highScoreDisplay.textContent = highscore;
}

const startSimonButton = document.getElementById('start-simon');
startSimonButton.addEventListener('click', startGame);

function checkButtonPress(event) {

    if (game.gameOver || sequence.length === 0) return;

    const buttonId = event.target.id;
    console.log(buttonId);

    if (sequence[current] != buttonId) {
        console.error(current, buttonId);
        game.gameOver = true;
        alert(`Game Over! Final Score: ${score}`);
        return;
    }

    current = current + 1;


    if (current === sequence.length) {
        score = score + 1; 
        

        if (score > highscore) {
            highscore = score;
        }
        
        updateScoreDisplay();
 
        setTimeout(nextRound, 1000);
    }
}

const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');

yellowButton.addEventListener('click', checkButtonPress);
blueButton.addEventListener('click', checkButtonPress);
redButton.addEventListener('click', checkButtonPress);
greenButton.addEventListener('click', checkButtonPress);