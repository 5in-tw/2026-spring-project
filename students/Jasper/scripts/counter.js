//Make Variables

let Add1button = document.getElementById("add1");
let Minus1button = document.getElementById("minus1");
let one = document.getElementById("One");
let two = document.getElementById("Two");
let three = document.getElementById("Three");
let four = document.getElementById("Four");
let five = document.getElementById("Five");
let six = document.getElementById("Six");
let seven = document.getElementById("Seven");
let eight = document.getElementById("Eight");
let nine = document.getElementById("Nine");
let zero = document.getElementById("Zero");
let Clear = document.getElementById("clear");
let Addbutton = document.getElementById("plus");
let Minusbutton = document.getElementById("minus");
let Equalbutton = document.getElementById("equal");
let Multiplybutton = document.getElementById("multiply");
let Dividebutton = document.getElementById("divide")
let counter = document.getElementById("counter");
let dotbutton = document.getElementById("dot");
let number = 0;
let Oldnumber = 0;
let symbol = 0;
let dottrue = "no"
let newone = 1

//Define Functions
function Show(num) {
    counter.textContent = num;
}

  function plus(event){
    Oldnumber = number;
    number = 0;
    Show(Oldnumber);
    console.log(Oldnumber, number);
    symbol = "Plus";
}

function minus(event){
    Oldnumber = number;
    number = 0;
    Show(Oldnumber);
    console.log(Oldnumber, number);
    symbol = "Minus";
}

function multiply(event){
    Oldnumber = number;
    number = 0;
    Show(Oldnumber);
    console.log(Oldnumber, number);
    symbol = "multiply";
}

function divide(event){
    Oldnumber = number;
    number = 0;
    Show(Oldnumber);
    console.log(Oldnumber, number);
    symbol = "divide";
}

function equal(event){
   if(symbol==="Plus"){
    answer = Oldnumber + number;
    number = answer;
    Oldnumber = 0;
    Show(answer);
};
   if(symbol==="Minus"){
    answer = Oldnumber - number;
    number = answer;
    Oldnumber = 0;
    Show(answer);
};
   if(symbol==="multiply"){
    answer = Oldnumber * number;
    number = answer;
    Oldnumber = 0;
    Show(answer);
};
   if(symbol==="divide"){
    answer = Oldnumber / number;
    number = answer;
    Oldnumber = 0;
    Show(answer);
};
}
function dotchange() {
    dottrue = "yes";
}

function Add1() {
    number = number + 1;
    Show(number);
}

function Minus1() {
    number = number - 1;
    Show(number);
}

function One() {
    number = number * 10 + 1;
    Show(number);
}

function Two() {
    number = number * 10 + 2;
    Show(number);
}

function Three() {
    number = number * 10 + 3;
    Show(number);
}

function Four() {
    number = number * 10 + 4;
    Show(number);
}

function Five() {
    number = number * 10 + 5;
    Show(number);
}

function Six() {
    number = number * 10 + 6;
    Show(number);
}

function Seven() {
    number = number * 10 + 7;
    Show(number);
}

function Eight() {
    number = number * 10 + 8;
    Show(number)
}

function Nine() {
    number = number * 10 + 9;
    Show(number);
}

function Zero() {
    number = number * 10 + 0;
    Show(number);
}
function clear() {
    number = 0;
    Show(number);
}

//Define Button Event Listeners

Add1button.addEventListener("click", Add1);
Minus1button.addEventListener("click", Minus1);
one.addEventListener("click", One);
two.addEventListener("click", Two);
three.addEventListener("click", Three);
four.addEventListener("click", Four);
five.addEventListener("click", Five);
six.addEventListener("click", Six);
seven.addEventListener("click", Seven);
eight.addEventListener("click", Eight);
nine.addEventListener("click", Nine);
zero.addEventListener("click", Zero);
Clear.addEventListener("click", clear);
Addbutton.addEventListener("click", plus);
Minusbutton.addEventListener("click", minus);
Multiplybutton.addEventListener("click", multiply);
Dividebutton.addEventListener("click", divide);;
Equalbutton.addEventListener("click", equal);
dotbutton.addEventListener("click", dotchange);