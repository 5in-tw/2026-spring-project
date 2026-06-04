//Make Variables

let counter = document.getElementById("counter");

let counterbutton = document.getElementById("add-1-counter-button");
let minusbutton = document.getElementById("minus-1-counter-button");
let clearbutton = document.getElementById("clear-button");
let zerobutton = document.getElementById("zero-button");
let onebutton = document.getElementById("one-button");
let twobutton = document.getElementById("two-button");
let threebutton = document.getElementById("three-button");
let fourbutton = document.getElementById("four-button");
let fivebutton = document.getElementById("five-button")
let sixbutton = document.getElementById("six-button");
let sevenbutton = document.getElementById("seven-button");
let eightbutton = document.getElementById("eight-button");
let ninebutton = document.getElementById("nine-button");
let plusbutton = document.getElementById("plus-button");
let equalbutton = document.getElementById("equal-button");
let subtractbutton = document.getElementById("minus-button");
let memory = 0;
let number = 0;
let symbolmemory ="";
let answer =0;

// Define functions
function add1() {
    number = number + 1;
    Show(number);
}

function minus1() {
    number = number - 1;
    Show(number);
}
function clear1() {
    number = 0;
    Show(number);
}

function zero() {
    number = number * 10 + 0;
    Show(number);
}

function one() {
    number = number * 10 + 1;
    Show(number);
}

function two() {
    number = number * 10 + 2;
    Show(number);
}

function three() {
    number = number * 10 + 3;
    Show(number);
}

function four() {
    number = number * 10 + 4;
    Show(number);
}

function five() {
    number = number * 10 + 5;
    Show(number);
}

function six() {
    number = number * 10 + 6;
    Show(number);
}


function seven() {
    number = number * 10 + 7
    Show(number);
}

function eight() {
    number = number * 10 + 8
    Show(number);
}

function nine() {
    number = number * 10 + 9
    Show(number);

}

function Show(number) {
    counter.textContent = number;

}

function plus(event) {
    memory = number;
    number = 0;
    Show(memory);
    symbolmemory="plus";
}
function minus(event){
memory = number;
    number = 0;
    Show(memory);
symbolmemory="minus"
}

function equal() {
    if (symbolmemory === "plus") {
        answer = memory + number;
    }
if(symbolmemory ==="minus"){
    answer = memory - number;
}
Show (answer);





console.log(answer,memory)
}
//Define Button Event Listeners
counterbutton.addEventListener("click", add1);
minusbutton.addEventListener("click", minus1);
clearbutton.addEventListener("click", clear1);
zerobutton.addEventListener("click", zero);
onebutton.addEventListener("click", one);
twobutton.addEventListener("click", two);
threebutton.addEventListener("click", three);
fourbutton.addEventListener("click", four);
fivebutton.addEventListener("click", five);
sixbutton.addEventListener("click", six);
sevenbutton.addEventListener("click", seven);
eightbutton.addEventListener("click", eight);
ninebutton.addEventListener("click", nine);
plusbutton.addEventListener("click", plus);
equalbutton.addEventListener("click", equal);
subtractbutton.addEventListener("click", minus);