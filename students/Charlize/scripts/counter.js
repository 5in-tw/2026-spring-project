//var
let number = 0;
let addonebutton = document.getElementById("counter-button");
let counter = document.getElementById("counter");
let delbutton = document.getElementById("clear-button");
let minus1button = document.getElementById("minus1-button");
let Zerobutton = document.getElementById("zero-button");
let Onebutton = document.getElementById("one-button");
let Twobutton = document.getElementById("two-button");
let Threebutton = document.getElementById("three-button");
let Fourbutton = document.getElementById("four-button");
let Fivebutton = document.getElementById("five-button");
let Sixbutton = document.getElementById("six-button");
let Sevenbutton = document.getElementById("seven-button");
let Eightbutton = document.getElementById("eight-button");
let Ninebutton = document.getElementById("nine-button");
let plusButton = document.getElementById("plus-button");
let Equalbutton = document.getElementById("equ-button");
let MinusButton = document.getElementById("Minuss-button");
let Answer = 0;
let memory = 0;
let mibut = false;
let plbut = false;
let multbut = false;
let divbut = false;
let MultButton = document.getElementById("multiply-button");
let DivButton = document.getElementById("divide-button");


//function

function show(val) {
    counter.textContent = val;
}
function minus() {
    memory = number;
    number = 0;
    mibut = true;
    plbut = multbut = divbut = false;
}
function plus() {
    memory = number;
    number = 0;
    plbut = true;
    mibut = multbut = divbut = false;
}
function multiply() {
    memory = number;
    number = 0;
    multbut = true;
    plbut = mibut = divbut = false;

}
function divide() {
    memory = number;
    number = 0;
    divbut = true;
    plbut = mibut = multbut = false;
}

function equal() {
    if (plbut) {
        Answer = memory + number;
    } else if (mibut) {
        Answer = memory - number;
    } else if (multbut) {
        Answer = memory * number;
    } else if (divbut) {
        Answer = memory / number;
    }
    show(Answer);
}

function add1() {
    number = number + 1;
    show(number);
}
function clear() {
    number = 0;
    SecondNumber = 0;
    Answer = 0;
    CilckButton = false;
    show(0)
}
function minus1() {
    number = number - 1;
    show(number);
}
function zero() {
    number = number * 10 + 0;
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

//evenlistener
addonebutton.addEventListener("click", add1);
delbutton.addEventListener("click", clear);
minus1button.addEventListener("click", minus1);
Zerobutton.addEventListener("click", zero);
Onebutton.addEventListener("click", one)
Twobutton.addEventListener("click", two);
Threebutton.addEventListener("click", three);
Fourbutton.addEventListener("click", four);
Fivebutton.addEventListener("click", five);
Sixbutton.addEventListener("click", six);
Sevenbutton.addEventListener("click", seven);
Eightbutton.addEventListener("click", eight);
Ninebutton.addEventListener("click", nine);
plusButton.addEventListener("click", plus);
Equalbutton.addEventListener("click", equal);
MinusButton.addEventListener("click", minus);
MultButton.addEventListener("click", multiply);
DivButton.addEventListener("click", divide);