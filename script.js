
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "*", "/"];
const functions = ["erase", "clear", "equals"];
let operator = "";
let operand1 = 0;
let operand2 = 0;
let inputBuffer = [];
let pressedBtn = "";
let currentNumber = "";
let operatorCounter = 0;
let result = 0;
const inputBtn = document.querySelectorAll("button");
const display = document.getElementById("display");

function inputListen(item) {
    item.addEventListener("click", assignValue);
}
function assignValue(item) {
    pressedBtn = item.target.value;
    inputProcessing(pressedBtn);
}

//-----------------------------------input procesing
function inputProcessing() {
    if (numbers.includes(pressedBtn)) {
        inputBuffer.push(pressedBtn);
        currentNumber = inputBuffer.join("");
        showCurrent(currentNumber);
    }
    else if (pressedBtn == "." && !(inputBuffer.includes("."))) {
        inputBuffer.push(pressedBtn);
        currentNumber = inputBuffer.join("");
        showCurrent(currentNumber);
    }
    else if (pressedBtn === "inv" )  {
        if (operatorCounter === 0) {
            operator = pressedBtn;
            operand1 = Number(currentNumber);
            operate(operator, operand1);
            showCurrent(result);
            operand1 = Number(result);
            currentNumber = result;
            inputBuffer = [];
        }
        else  {
            operator = pressedBtn;
            operand1 = Number(currentNumber);
            operate(operator, operand1);
            showCurrent(result);
            operand1 = result;
            currentNumber = result;
            inputBuffer = [];
            operatorCounter = 0;
        }
        
    }
    else if (operators.includes(pressedBtn) && (operatorCounter === 0)) {
        operatorCounter++;
        operator = pressedBtn;
        operand1 = Number(currentNumber);
        currentNumber = "";
        inputBuffer = [];
    }
    else if (operators.includes(pressedBtn) && (operatorCounter !== 0)) {
        if (operator == "inv") { operator = pressedBtn}
        operand2 = Number(currentNumber);
        operate(operator, operand1, operand2);
        showCurrent(result);
        operator = pressedBtn;
        operand1 = result * 1;
        currentNumber = "";
        inputBuffer = [];
    }
    else if (pressedBtn === "delete") {
        inputBuffer.pop();
        currentNumber = inputBuffer.join("");
        showCurrent(currentNumber);
    }
    else if (pressedBtn === "clear") {
        location.reload();
    }
    else if (pressedBtn === "=") {
        if (operatorCounter === 0) {
            showCurrent(currentNumber);
        }
        else  {
            operand2 = Number(currentNumber);
            operate(operator, operand1, operand2);
            showCurrent(result);
            operand1 = result;
            operand2 = 0;
            operator = "";
            inputBuffer = [];
        }
    }
}
//--------------------display processing
function showCurrent(item) {
    display.innerText = item;
}
//-----------------basic math functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) {
        alert("Dividing with zero is not possible!");
        location.reload();
        return;
    }
    else {
        return a / b;
    }
}
function inverse( a) {
    return 1 / a;
}
//-----------------------operating functions
function operate(operator, a, b) {
    switch (operator) {
        case "+":
            result = add(a, b);
            return result;
            break;
        case "-":
            result = subtract(a, b);
            return result;
            break;
        case "*":
            result = multiply(a, b).toFixed(4);
            return result;
            break;
        case "/":
            result = divide(a, b).toFixed(4);
            return result;
            break;
        case "inv":
            result = inverse( a).toFixed(4);
            return result;
            break;
    }
    
}

inputBtn.forEach(inputListen);





