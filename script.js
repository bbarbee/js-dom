//CREATE AN APP THAT TAKES TWO NUMBERS AND PREFORMS AN OPERATION FROM USER INPUT AND RETURNS THE VALUE

//1)Create a variable for the two numbers input by the user
let a = document.getElementById('firstNumber');
let b = document.getElementById('secondNumber');

//2)Assign methods to the math symbol buttons
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
const multiply = (a, b) => a * b
const divid = (a, b) => a / b

//3)Cretate a alert for the user to recieve the answer
