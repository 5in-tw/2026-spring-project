//var counter
let counter = document.getElementById("counter");
//var remembering numbers
let number = 0;
let memory = 0;
//var plus one and minus one
let counterbutton = document.getElementById("plus-one-button");


let minusonebutton = document.getElementById("minus-one-button");
let minus = document.getElementById("minus");
let clearbutton = document.getElementById("clear-button");
//var calculator
let zerobutton = document.getElementById("zero-button");
let onebutton = document.getElementById("one-button");
let twobutton = document.getElementById("two-button");
let threebutton = document.getElementById("three-button");
let fourbutton = document.getElementById("four-button");
let fivebutton = document.getElementById("five-button");
let sixbutton = document.getElementById("six-button");
let sevenbutton = document.getElementById("seven-button");
let eightbutton = document.getElementById("eight-button");
let ninebutton = document.getElementById("nine-button");
//var symbols
let plusbutton = document.getElementById("plus-button");
let minusbutton = document.getElementById("minus-button");
let multiplybutton = document.getElementById("multiply-button");
let dividebutton = document.getElementById("divide-button");
let equalsbutton = document.getElementById("equals-button");
let oldnumber = 0;
let newnumber = 0;
let symbol = 1;

//function minus,add
function Show(thing) {
    counter.textContent = thing;
    return thing;
};

function add1() {
    number = number + 1;
    Show(number);
};

function minus1() {
    number = number - 1;
    Show(number);
};

function clear() {
    number = 0;
    Show(number);
};

//function calculator
function zeroButton() {
    number = number * 10 + 0;
    Show(number);
};

function oneButton() {
    number = number * 10 + 1;
    Show(number);
};

function twoButton() {
    number = number * 10 + 2;
    Show(number);
};

function threeButton() {
    number = number * 10 + 3;
    Show(number);
};

function fourButton() {
    number = number * 10 + 4;
    Show(number);
};

function fiveButton() {
    number = number * 10 + 5;
    Show(number);
};

function sixButton() {
    number = number * 10 + 6;
    Show(number);
};

function sevenButton() {
    number = number * 10 + 7;
    Show(number);
};

function eightButton() {
    number = number * 10 + 8;
    Show(number);
};

function nineButton() {
    number = number * 10 + 9;
    Show(number);
};

//symbols function
function plusButton() {
    memory = number;
    number = 0;
    symbol = "plus";
};

function minusButton() {
    memory = number;
    number = 0;
    symbol = "minus";
};

function multiplyButton() {
    memory = number;
    number = 0;
    symbol = "multiply";
};

function divideButton() {
    memory = number;
    number = 0;
    symbol = "divide";
};

function equalsButton() {
    if (symbol === "plus") {
        number = number + memory;
        Show(number);
    };

    if (symbol === "minus") {
        newnumber = number;
        number = number - memory;
        Show(number);
    };

    if (symbol === "multiply") {
        newnumber = number;
        number = number * memory;
        Show(number);
    };

    if (symbol === "divide") {
        newnumber = number;
        number = number / memory;
        Show(number);
    };
};

//EventListener minus,add
clearbutton.addEventListener("click", clear);
counterbutton.addEventListener("click", add1);
minusonebutton.addEventListener("click", minus1);
//EventListener calculator
zerobutton.addEventListener("click", zeroButton);
onebutton.addEventListener("click", oneButton);
twobutton.addEventListener("click", twoButton);
threebutton.addEventListener("click", threeButton);
fourbutton.addEventListener("click", fourButton);
fivebutton.addEventListener("click", fiveButton);
sixbutton.addEventListener("click", sixButton);
sevenbutton.addEventListener("click", sevenButton);
eightbutton.addEventListener("click", eightButton);
ninebutton.addEventListener("click", nineButton);
//EventListener symbols
plusbutton.addEventListener("click", plusButton);
minusbutton.addEventListener("click", minusButton);
multiplybutton.addEventListener("click", multiplyButton);
dividebutton.addEventListener("click", divideButton);
equalsbutton.addEventListener("click", equalsButton);