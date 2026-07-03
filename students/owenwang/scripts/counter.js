// variables
let counter = document.getElementById("counter");
let number = 0;
let memory = 0;
let plusMemory = false;
let minusMemory = false;
let multiplyMemory = false;
let divideMemory = false;
let plusOneButton = document.getElementById("plus-one-button");
let minusOneButton = document.getElementById("minus-one-button");
let clearButton = document.getElementById("clear-button");
let zeroButton = document.getElementById("zero-button");
let oneButton = document.getElementById("one-button");
let twoButton = document.getElementById("two-button");
let threeButton = document.getElementById("three-button");
let fourButton = document.getElementById("four-button");
let fiveButton = document.getElementById("five-button");
let sixButton = document.getElementById("six-button");
let sevenButton = document.getElementById("seven-button");
let eightButton = document.getElementById("eight-button");
let nineButton = document.getElementById("nine-button");
let plusButton = document.getElementById("plus-button");
let minusButton = document.getElementById("minus-button");
let multiplyButton = document.getElementById("multiply-button");
let divideButton = document.getElementById("divide-button");
let equalButton = document.getElementById("equal-button");
let doubleZeroButton = document.getElementById("double-zero-button");

// functions
function show(number) {
    counter.textContent = number;
    return number;
}

function plus1() {
    number = number + 1;
    show(number);
}

function minus1() {
    number = number - 1;
    show(number);
}

function clear() {
    number = 0;
    show(number);
}

function zero() {
    number = number * 10;
    show(number);
}

function one() {
    number = number * 10 + 1;
    show(number);
}

function two() {
    number = number * 10 + 2;
    show(number);
}

function three() {
    number = number * 10 + 3;
    show(number);
}

function four() {
    number = number * 10 + 4;
    show(number);
}

function five() {
    number = number * 10 + 5;
    show(number);
}

function six() {
    number = number * 10 + 6;
    show(number);
}

function seven() {
    number = number * 10 + 7;
    show(number);
}

function eight() {
    number = number * 10 + 8;
    show(number);
}

function nine() {
    number = number * 10 + 9;
    show(number);
}

function plus() {
    memory = number;
    number = 0;
    plusMemory = true;
}

function minus() {
    memory = number;
    number = 0;
    minusMemory = true;
}

function multiply() {
    memory = number;
    number = 0;
    multiplyMemory = true;
}

function divide() {
    memory = number;
    number = 0;
    divideMemory = true;
}

function equal() {
    if (plusMemory === true) {
        number = number + memory;
        plusMemory = false;
        show(number);
    }

    if (minusMemory === true) {
        number = memory - number;
        minusMemory = false;
        show(number);
    }

    if (multiplyMemory === true) {
        number = number * memory;
        multiplyMemory = false;
        show(number);
    }

    if (divideMemory === true) {
        number = memory / number;
        divideMemory = false;
        show(number);
    }
}

function doubleZero() {
    number = number * 100;
    show(number);
}

// event listeners
plusOneButton.addEventListener("click", plus1);
minusOneButton.addEventListener("click", minus1);
clearButton.addEventListener("click", clear);
zeroButton.addEventListener("click", zero);
oneButton.addEventListener("click", one);
twoButton.addEventListener("click", two);
threeButton.addEventListener("click", three);
fourButton.addEventListener("click", four);
fiveButton.addEventListener("click", five);
sixButton.addEventListener("click", six);
sevenButton.addEventListener("click", seven);
eightButton.addEventListener("click", eight);
nineButton.addEventListener("click", nine);
plusButton.addEventListener("click", plus);
minusButton.addEventListener("click", minus);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
equalButton.addEventListener("click", equal);
doubleZeroButton.addEventListener("click", doubleZero);