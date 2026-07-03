//Event Listeners minus,add
let add1CounterButton = document.getElementById("add-1-counter-button");
let minus1CounterButton = document.getElementById("minus-1-counter-button");
let clearButton = document.getElementById("clear-button");
let counter = document.getElementById("counter");
let number = 0;
//Event Listeners calculator
let zerobutton = document.getElementById("zero-button");
let doublezerobutton = document.getElementById("double-zero-button");
let onebutton = document.getElementById("one-button");
let twobutton = document.getElementById("two-button");
let threebutton = document.getElementById("three-button");
let fourbutton = document.getElementById("four-button");
let fivebutton = document.getElementById("five-button");
let sixbutton = document.getElementById("six-button");
let sevenbutton = document.getElementById("seven-button");
let eightbutton = document.getElementById("eight-button");
let ninebutton = document.getElementById("nine-button");
//Event Listeners symbol
let minusbutton = document.getElementById("minus-button");
let plusbutton = document.getElementById("plus-button");
let multiplybutton = document.getElementById("multiply-button");
let dividebutton = document.getElementById("divide-button");
let equalsbutton = document.getElementById("equals-button");
let oldnumber = 0;
let newnumber = 0;
let symbol = 1;

//function minus,add

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
function zero() {
    number = number * 10 + 0;
    Show(number);
};

function dounblezero() {
    number = number *100;
    Show(number);
}

function one() {
    number = number * 10 + 1;
    Show(number);
};

function two() {
    number = number * 10 + 2;
    Show(number);
};

function three() {
    number = number * 10 + 3;
    Show(number);
};

function four() {
    number = number * 10 + 4;
    Show(number);
};

function five() {
    number = number * 10 + 5;
    Show(number);
};

function six() {
    number = number * 10 + 6;
    Show(number);
};

function seven() {
    number = number * 10 + 7;
    Show(number);
};

function eight() {
    number = number * 10 + 8;
    Show(number);
};

function nine() {
    number = number * 10 + 9;
    Show(number);
};

function Show(number) {
    counter.textContent = number;
    return number;
};

//symbols function
function plusButton() {
    oldnumber = number;
    number = 0;
    symbol = "plus";
};

function minusButton() {
    oldnumber = number;
    number = 0;
    symbol = "minus";
};

function multiplyButton() {
    oldnumber = number;
    number = 0;
    symbol = "multiply";
};

function divideButton() {
    oldnumber = number;
    number = 0;
    symbol = "divide";
};

function equalsButton() {
    if (symbol === "plus") {
        newnumber = number;
        number = oldnumber + newnumber;
        Show(number);
    }
};

function equalsButton() {
    if (symbol === "minus") {
        newnumber = number;
        number = oldnumber - newnumber;
        Show(number);
    }
};

function equalsButton() {
    if (symbol === "multiply") {
        newnumber = number;
        number = oldnumber * newnumber;
        Show(number);
    }
};

function equalsButton() {
    if (symbol === "plus") {
        newnumber = number;
        number = oldnumber + newnumber;
        Show(number);
    };

    if (symbol === "minus") {
        newnumber = number;
        number = oldnumber - newnumber;
        Show(number);
    };

    if (symbol === "multiply") {
        newnumber = number;
        number = oldnumber * newnumber;
        Show(number);
    };

    if (symbol === "divide") {
        newnumber = number;
        number = oldnumber / newnumber;
        Show(number);
    };
};

console.log(symbol);

//Event Listeners minus,add
add1CounterButton.addEventListener("click", add1);
minus1CounterButton.addEventListener("click", minus1);
clearButton.addEventListener("click", clear);
//Event Listeners calculator
zerobutton.addEventListener("click", zero);
doublezerobutton.addEventListener("click", dounblezero)
onebutton.addEventListener("click", one);
twobutton.addEventListener("click", two);
threebutton.addEventListener("click", three);
fourbutton.addEventListener("click", four);
fivebutton.addEventListener("click", five);
sixbutton.addEventListener("click", six);
sevenbutton.addEventListener("click", seven);
eightbutton.addEventListener("click", eight);
ninebutton.addEventListener("click", nine);
//EventListener symbols
plusbutton.addEventListener("click", plusButton);
minusbutton.addEventListener("click", minusButton);
multiplybutton.addEventListener("click", multiplyButton);
dividebutton.addEventListener("click", divideButton);
equalsbutton.addEventListener("click", equalsButton);