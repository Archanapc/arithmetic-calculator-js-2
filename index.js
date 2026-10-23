const inputtext = document.getElementById("inputtext")
const resulttext = document.getElementById("result")
const buttons = document.querySelectorAll("button")
console.log(buttons)

function basicClicks(buttonvalue) {
    if (buttonvalue == "<=") {
        inputtext.value = inputtext.value.slice(0, -1);
    } else if (buttonvalue == "C") {
        inputtext.value = '';
    } else if (buttonvalue == "x²") {
        inputtext.value = (inputtext.value) ** 2;
    } else if (buttonvalue == "x³") {
        inputtext.value = (inputtext.value) ** 3;
    } else if (buttonvalue == "=") {
        inputtext.value = calculate(inputtext.value);
    } else {
        inputtext.value += buttonvalue;

    }

}
function calculate(values) {
    let operator;
    if (!values) return "";
    if (values.includes("+")) {
        operator = "+";

    } else if (values.includes("-")) {
        operator = "-";
    } else if (values.includes("*")) {
        operator = "*";
    } else if (values.includes("/")) {
        operator = "/";
    }
    else {
        console.log("error")
    }

    let positionOfOperator = values.indexOf(operator)

    let num1 = Number(values.slice(0, positionOfOperator))
    let num2 = Number(values.slice(positionOfOperator + 1))
    let result;
    if (operator === "+") {
        result = num1 + num2;

    } else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {
        result = num1 / num2;
    }

    console.log(result)
    return result;

}

buttons.forEach(button => {
    let buttonvalue = button.innerText;
    button.addEventListener('click', () => {
        basicClicks(buttonvalue);
    })

})