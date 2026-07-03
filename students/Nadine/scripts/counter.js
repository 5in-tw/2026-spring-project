//variables
const counter = document.getElementById("counter");
const plusOne = document.getElementById("plus-one-button");
const minusOne = document.getElementById("minus-one-button");
const clear = document.getElementById("clear-button");
const one = document.getElementById("one-button");
const two = document.getElementById("two-button");
const three = document.getElementById("three-button");
const four = document.getElementById("four-button");
const five = document.getElementById("five-button");
const six = document.getElementById("six-button");
const seven = document.getElementById("seven-button");
const eight = document.getElementById("eight-button");
const nine = document.getElementById("nine-button");
const zero = document.getElementById("zero-button");
const plus = document.getElementById("plus-button");
const minus = document.getElementById("minus-button");
const multiply = document.getElementById("multiply-button");
const devide = document.getElementById("devide-button");
const equal = document.getElementById("equal-button");
let count = 0;
let oldCount = 0;
let operator = '';


//functions
function show(num) {
 counter.textContent = "🩷" + num;
}

function plus1() {
    count++; 
    show(count);
}

function minus1() {
    count--; 
    show(count);
}

function Clear() {
    count = 0; 
    show(count);
}

function add1() {
    count = count*10 + 1; 
    show(count);
}

function add2() {
    count = count*10 + 2; 
    show(count);
}

function add3() {
    count = count*10 + 3; 
    show(count);
}

function add4() {
    count = count*10 + 4; 
    show(count);
}

function add5() {
    count = count*10 + 5; 
    show(count);
}

function add6() {
    count = count*10 + 6; 
    show(count);
}

function add7() {
    count = count*10 + 7; 
    show(count);
}

function add8() {
    count = count*10 + 8; 
    show(count);
}

function add9() {
    count = count*10 + 9; 
    show(count);
}

function add0() {
    count = count*10 + 0; 
    show(count);
}

function Plus() {
    oldCount = count;
    count = 0;
    operator = 'plus';
}

function Minus() {
   oldCount = count;
   count = 0;
   operator = 'minus';
}

function Multiply() {
   oldCount = count;
   count = 0;
   operator = 'multiply';
}

function Devide() {
   oldCount = count;
   count = 0;
   operator = 'devide';
}

function Equal() {
    if (operator === 'plus'){
        count = oldCount + count;
    } else if (operator === 'minus'){
        count = oldCount - count;
    } else if (operator === 'multiply'){
        count = oldCount * count;
    } else if (operator === 'devide'){
        count = oldCount / count;
    }
    show(count);
}

//listeners
plusOne.addEventListener("click", plus1);
minusOne.addEventListener("click", minus1);
clear.addEventListener("click", Clear)
one.addEventListener("click", add1);
two.addEventListener("click", add2);
three.addEventListener("click", add3);
four.addEventListener("click", add4);
five.addEventListener("click", add5);
six.addEventListener("click", add6);
seven.addEventListener("click", add7);
eight.addEventListener("click", add8);
nine.addEventListener("click", add9);
zero.addEventListener("click", add0);
plus.addEventListener("click", Plus);
minus.addEventListener("click", Minus);
multiply.addEventListener("click", Multiply);
devide.addEventListener("click", Devide);
equal.addEventListener("click", Equal);