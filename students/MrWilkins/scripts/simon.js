import { Simon } from 'https://5in-tw.github.io/2026-spring-project/scripts/simon.js';

const game = new Simon('simon');

const buttons = ['yellow', 'blue', 'red', 'green'];
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
let highScore = 0;

const scoreSpan = document.getElementById('score');
const highScoreSpan = document.getElementById('high-score');
function updateScore() {
  scoreSpan.textContent = score;
  highScoreSpan.textContent = highScore;
}

function startGame() {
  sequence = [];
  current = 0;
  score = 0;
  game.gameOver = false;
  nextRound();
}

function nextRound() {
  score = current;
  if (highScore < score) {
    highScore = score;
  }
  updateScore();

  current = 0;
  sequence.push(getRandomButton());
  game.playSequence(sequence);
}

const startSimonButton = document.getElementById('start-simon');
startSimonButton.addEventListener('click', startGame);

function checkButtonPress(event) {
  const buttonId = event.target.id;
  console.log(buttonId);

  // If we press the wrong button.
  if (sequence[current] !== buttonId) {
    console.error(current, buttonId);
    game.gameOver = true;
    return;
  }

  current = current + 1;
  if (current === sequence.length) {
    nextRound();
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
