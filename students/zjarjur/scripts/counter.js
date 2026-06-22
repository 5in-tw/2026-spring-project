//Make Variables

let counter = document.getElementById("counter");
let number = 0;
let memory = 0;
let displacement = 0;
let numType = "integer";
let operatorType = "plus";


//Make Button Variables
let buttonPlusOne = document.getElementById("counter-button");
let buttonMinusOne = document.getElementById("minus-one-button");
let clearButton = document.getElementById("clear-button");
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
let zeroButton = document.getElementById("zero-button");
let equalButton = document.getElementById("equal-button");
let decimalButton = document.getElementById("decimal-button");

//Define Functions
function makeDecimal(aNumber, decPlaces) {
    return (aNumber * (0.1 ** decPlaces));
}

function decimalPoint() {
    numType = "decimal";
}

function decCount() {
    if (numType === "decimal") {
        displacement = displacement + 1;
    }
}

function show(something) {
    counter.textContent = something.toFixed(displacement);
}

function addOne() {
    number = number + 1;
    show(makeDecimal(number,displacement));
}

function minusOne() {
    number = number - 1;
    show(makeDecimal(number,displacement));
}

function clear() {
    number = 0;
    numType = "integer";
    displacement = 0;
    show(makeDecimal(number,displacement));
}

function one1() {
    number = number * 10 + 1;
    decCount();
    show(makeDecimal(number,displacement));
}

function two2() {
    number = number * 10 + 2;
    decCount();
    show(makeDecimal(number,displacement));
}

function three3() {
    number = number * 10 + 3;
    decCount();
    show(makeDecimal(number,displacement));
}

function four4() {
    number = number * 10 + 4;
    decCount();
    show(makeDecimal(number,displacement));
}

function five5() {
    number = number * 10 + 5;
    decCount();
    show(makeDecimal(number,displacement));
}

function six6() {
    number = number * 10 + 6;
    decCount();
    show(makeDecimal(number,displacement));
}

function seven7() {
    number = number * 10 + 7;
    decCount();
    show(makeDecimal(number,displacement));
}

function eight8() {
    number = number * 10 + 8;
    decCount();
    show(makeDecimal(number,displacement));
}

function nine9() {
    number = number * 10 + 9;
    decCount();
    show(makeDecimal(number,displacement));
}

function zero0() {
    number = number * 10 + 0;
    decCount();
    show(makeDecimal(number,displacement));
}

function plus() {
    memory = makeDecimal(number,displacement);
    number = 0;
    numType = "integer";
    operatorType = "plus";
    displacement = 0;
}

function equalsTo(){
    let decNumber = 0.0;
    if (operatorType === "plus"){
        decNumber = makeDecimal(number,displacement);
        number = decNumber + memory;
        show(number);
    }
}

//Define Button Event Listeners

buttonPlusOne.addEventListener("click", addOne);
buttonMinusOne.addEventListener("click", minusOne);
clearButton.addEventListener("click", clear);
oneButton.addEventListener("click", one1);
twoButton.addEventListener("click", two2);
threeButton.addEventListener("click", three3);
fourButton.addEventListener("click", four4);
fiveButton.addEventListener("click", five5);
sixButton.addEventListener("click", six6);
sevenButton.addEventListener("click", seven7);
eightButton.addEventListener("click", eight8);
nineButton.addEventListener("click", nine9);
zeroButton.addEventListener("click", zero0);
plusButton.addEventListener("click", plus);
equalButton.addEventListener("click", equalsTo);
decimalButton.addEventListener("click", decimalPoint);

