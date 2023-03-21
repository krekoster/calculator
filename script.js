

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "*", "/", "inv"];
const functions = ["erase", "clear", "equals"];
let input = [];
let nesto = [];
let operator = "";
let operand1 = 0;
let operand2 = 0;
let inputBufferArray = [];
let upperDisplay = "";
let pressedBtn = "";
let currentDisplayed = "";
let dotCounter = 0;
let operatorCounter = 0;
let result = 0;
let oldResult = 0;
const inputBtn = document.querySelectorAll("button");
const displayCurrent = document.getElementById("displayCurrent");
const displayPrevious = document.getElementById("displayPrevious");


inputBtn.forEach(inputListen);

function inputListen(item) {
    item.addEventListener("click", assignValue);
}
function assignValue(item) {
    pressedBtn = item.target.value;
    processInputBufferArray(pressedBtn);
    showCurrent(pressedBtn);
}
//---------------display functions--------------------
function showCurrent() {
    console.log(result);
    if (numbers.includes(pressedBtn)  ) {

        currentDisplayed += pressedBtn;
        //upperDisplay += currentDisplayed;

        displayCurrent.innerText = currentDisplayed;
    }
    else if (operators.includes(pressedBtn)) {

        displayCurrent.innerText = currentDisplayed;
        currentDisplayed = "";

        //inputBufferArray.push(pressedBtn);
        //showPrevious(upperDisplay);
        // currentDisplayed = "";
    }
    else {
        console.log("dosli smo do reztultata");
        currentDisplayed = result;
        displayCurrent.innerText = result;
    }

}


//---------------------------------input processing functions------------
function processInputBufferArray(pressedBtn) {

    if (numbers.includes(pressedBtn)) {
        inputBufferArray.push(pressedBtn);
    }
    else if (operators.includes(pressedBtn) && (operatorCounter == 0)) {
        operator = pressedBtn;
        currentNumber = inputBufferArray.join("");
        operand1 = Number(currentNumber);
        currentNumber = "";
        inputBufferArray = [];
        operatorCounter++;
        //console.log("operand1:" + operand1 + " operand2: " + operand2);
    }

    else if (operators.includes(pressedBtn) && (operatorCounter !== 0)) {
        //console.log("drugi slucaj");
        currentNumber = inputBufferArray.join("");
        operand2 = Number(currentNumber);
        currentNumber = "";
        inputBufferArray = [];
        operate(operator, operand1, operand2);
        showCurrent(result);
        
        
        // console.log(result);
    }

    else if (pressedBtn === "delete") {
        // delete last sign
    }

    else if (pressedBtn === "clear") {
        location.reload();

    }
    else if (pressedBtn === "=") {
        operate(operator, operand1, operand2);
    }
}


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
        return;
    }
    else {
        return a / b;
    }
}
function inverse(a) {
    return 1 / a;
}

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
            result = multiply(a, b);
            return result;
            break;
        case "/":
            result = divide(a, b);
            return result;
            break;
        case "inv":
            result = inverse(a);
            return result;
            break;
            
    }
    
    //console.log(result);
   // showCurrent(result);
}








// const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const operators = ["+", "-", "*", "/", "inv"];
// const functions = ["erase", "clear", "equals"];
// let input = [];
// let nesto = [];
// let operator = "";
// let operand1 = 0;
// let operand2 = 0;
// let inputBufferArray = [];
// let upperDisplay = "";
// let pressedBtn = "";
// let currentDisplayed = "";
// let dotCounter = 0;
// let operatorCounter = 0;
// let result = 0;
// const inputBtn = document.querySelectorAll("button");
// const displayCurrent = document.getElementById("displayCurrent");
// const displayPrevious = document.getElementById("displayPrevious");


// inputBtn.forEach(inputListen);

// function inputListen(item) {
//     item.addEventListener("click", assignValue);
// }
// function assignValue(item) {
//     pressedBtn = item.target.value;
//     processInputBufferArray(pressedBtn);
//     showCurrent(pressedBtn);
// }
// //---------------display functions--------------------
// function showCurrent() {
//     if (numbers.includes(pressedBtn)) {
//         console.log(currentDisplayed);
//         currentDisplayed += pressedBtn;
//         //upperDisplay += currentDisplayed;

//         displayCurrent.innerText = currentDisplayed;
//     }
//     else if (operators.includes(pressedBtn)) {
//         displayCurrent.innerText = pressedBtn;
//         showPrevious(currentDisplayed);
//         //inputBufferArray.push(pressedBtn);
//         //showPrevious(upperDisplay);
//         currentDisplayed = "";
//     }

// }
// function showPrevious() {
//     upperDisplay += operand1;
//     //    y= inputBufferArray.join("");
//     //     displayPrevious.innerHTML = y;
//     displayPrevious.innerHTML = upperDisplay;
// }

// //---------------------------------input processing functions------------
// function processInputBufferArray(pressedBtn) {

//     // if (numbers.includes(pressedBtn) && (operatorCounter % 2 === 0 || operatorCounter === 0)) {
//     //     inputBufferArray.push(pressedBtn);
//     //     // console.log(pressedBtn);
//     //     //showCurrent(pressedBtn);
//     //     // console.log(inputBufferArray);
//     // }
//     if (numbers.includes(pressedBtn)) {
//         inputBufferArray.push(pressedBtn);
//     }
//     else if (operators.includes(pressedBtn)) {
//         lastNumber = inputBufferArray.join("");
//         operator = pressedBtn;
//         // console.log(pressedBtn);
//         // console.log(typeof pressedBtn);
//         if (operatorCounter % 2 === 0 || operatorCounter === 0) {
//             operand1 = Number(lastNumber);
//             operatorCounter++;
//             showPrevious(lastNumber);
//             showCurrent(pressedBtn);
//             lastNumber = "";
//             inputBufferArray = [];
//         }
//         else {
//             operand2 = Number(lastNumber);
//             operatorCounter = 0;
//             showPrevious(lastNumber);
//             showCurrent(pressedBtn);
//             lastNumber = "";
//             inputBufferArray = [];
//             operate(operator, operand1, operand2);
//         }
//     }
//     else if (pressedBtn === "delete") {
//         // delete last sign
//     }

//     else if (pressedBtn === "clear") {
//         location.reload();

//     }
//     else if (pressedBtn === "=") {
//         operate(operator, operand1, operand2);
//     }
// }


// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function divide(a, b) {
//     if (b == 0) {
//         alert("Dividing with zero is not possible!");
//         return;
//     }
//     else {
//         return a / b;
//     }
// }
// function inverse(a) {
//     return 1 / a;
// }

// function operate(operator, a, b) {
//     switch (operator) {
//         case "+":
//             result = add(a, b);
//             break;
//         case "-":
//             result = subtract(a, b);
//             break;
//         case "*":
//             result = multiply(a, b);
//             break;
//         case "/":
//             result = divide(a, b);
//             break;
//         case "inv":
//             result = inverse(a);
//             break;

//     }
// console.log(result);
//     showCurrent(result);
// }

// // -------------------------------------testing-----------------------
// // let testBtn = document.getElementById("btn7");
// // testBtn.addEventListener("click", testFunc);

// // function testFunc (item) {
// //     console.log(typeof item.target.value);
// // }







// // let numInput = document.querySelectorAll(".numberBtn");
// // let opertrInput = document.querySelectorAll(".operatorBtn");
// // let funcInput = document.querySelectorAll(".funcBtn");

// // numInput.forEach( inputProcess);
// // opertrInput.forEach (inputProcess);
// // funcInput.forEach (inputProcess);