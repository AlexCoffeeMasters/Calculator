const userInput = document.getElementById("userInput");
let expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function calc() {
    userInput.value = eval(expression);
    expression = '';
}

function clearNum() {
    expression = '';
    userInput.value = expression;
}