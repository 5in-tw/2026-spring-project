//Make Variables

let counterbuttonAdd1 = document.getElementById("counter-button");
let counterbuttonMinus1 = document.getElementById("minus_1-button");
let onebutton = document.getElementById("one-button");
let twobutton = document.getElementById("two-button");
let threebutton = document.getElementById("three-button");
let fourbutton = document.getElementById("four-button");
let fivebutton = document.getElementById("five-button");
let sixbutton = document.getElementById("six-button");
let sevenbutton = document.getElementById("seven-button");
let eightbutton = document.getElementById("eight-button");
let ninebutton = document.getElementById("nine-button");
let zerobutton = document.getElementById("zero-button");
let counterbuttonClear = document.getElementById("clear-button");
let counter = document.getElementById("counter");
let plusbutton = document.getElementById("plus-button");
let equalbutton = document.getElementById("equal-button");
let minusbutton = document.getElementById("minus-button");
let multiplybutton = document.getElementById("multiply-button");
let symbol = 0;
let memory = 0;
let number = 0;

//Define Functions

function Add1() {
    number = number + 1;
    Show(number);
}

function Minus1() {
    number = number - 1;
    Show(number);
}

function One() {
    number = number*10+1;
    Show(number);
}

function Two() {
    number = number*10+2;
    Show(number);
}

function Three() {
    number = number*10+3;
    Show(number);
}

function Four() {
    number = number*10+4;
    Show(number);
}

function Five() {
    number = number*10+5;
    Show(number);
}

function Six() {
    number = number*10+6;
    Show(number);
}

function Seven() {
    number = number*10+7;
    Show(number);
}

function Eight() {
    number = number*10+8;
    Show(number);
}

function Nine() {
    number = number*10+9;
   Show(number);
}

function Zero() {
    number = number*10+0;
    Show(number);
}

  function plus(event){
    memory = number;
    number = 0;
    Show(memory);
    console.log(memory, number);
    symbol=1;
}

function equal(event){
   if(symbol===1){answer = memory + number;
    Show(answer);
    console.log(answer, memory, symbol);
};
   if(symbol===2){answer = memory - number;
    Show(answer);
    console.log(answer, memory, symbol);
};
}

function minus(event){
    memory = number;
    number = 0;
    Show(memory);
    console.log(memory, number);
    symbol=2;

}

function clear() {
    number = 0;
    Show(number);
}

function Show(number){
    counter.textContent = number;
}

console.log(number)

//Define Button Event Listeners

counterbuttonAdd1.addEventListener("click", Add1);
counterbuttonMinus1.addEventListener("click", Minus1);
onebutton.addEventListener("click", One);
twobutton.addEventListener("click", Two);
threebutton.addEventListener("click", Three);
fourbutton.addEventListener("click", Four);
fivebutton.addEventListener("click", Five);
sixbutton.addEventListener("click", Six);
sevenbutton.addEventListener("click", Seven);
eightbutton.addEventListener("click", Eight);
ninebutton.addEventListener("click", Nine);
zerobutton.addEventListener("click", Zero);
counterbuttonClear.addEventListener("click", clear);
plusbutton.addEventListener("click", plus);
equalbutton.addEventListener("click", equal);
minusbutton.addEventListener("click", minus);
multiplybutton.addEventListener("click", multiply);