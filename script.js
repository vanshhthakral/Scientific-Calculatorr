document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll(".buttons2 button");
    let currentInput = "";
    let operator = "";
    let firstOperand = null;

    function limitDecimals(value) {
        return parseFloat(value).toFixed(6).replace(/\.?0+$/, ""); // Removes trailing zeros
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = button.innerText;

            if (!isNaN(value) || value === ".") {
                // Append number or decimal point
                currentInput += value;
                display.innerText = currentInput;
            } else if (value === "AC") {
                // Clear all
                currentInput = "";
                firstOperand = null;
                operator = "";
                display.innerText = "0";
            } else if (value === "+/-") {
                // Toggle sign
                if (currentInput) {
                    currentInput = (parseFloat(currentInput) * -1).toString();
                    display.innerText = currentInput;
                }
            } else if (value === "%") {
                // Percentage
                if (currentInput) {
                    currentInput = limitDecimals(parseFloat(currentInput) / 100);
                    display.innerText = currentInput;
                }
            } else if (["+", "-", "x", "÷"].includes(value)) {
                // Store first operand and operator
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = "";
                }
            } else if (value === "=") {
                // Perform calculation
                if (firstOperand !== null && currentInput) {
                    let secondOperand = parseFloat(currentInput);
                    let result;

                    switch (operator) {
                        case "+":
                            result = firstOperand + secondOperand;
                            break;
                        case "-":
                            result = firstOperand - secondOperand;
                            break;
                        case "x":
                            result = firstOperand * secondOperand;
                            break;
                        case "÷":
                            result = secondOperand !== 0 ? firstOperand / secondOperand : "Error";
                            break;
                    }

                    display.innerText = limitDecimals(result);
                    currentInput = result.toString();
                    firstOperand = null;
                    operator = "";
                }
            }
        });
    });
});
