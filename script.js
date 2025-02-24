document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    let currentInput = "";
    let memory = 0;

    function updateDisplay() {
        display.textContent = currentInput || "0";
    }

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            
            if (!isNaN(value) || value === ".") {
                currentInput += value;
            } else if (value === "AC") {
                currentInput = "";
            } else if (value === "+/-") {
                currentInput = currentInput.startsWith("-") ? currentInput.slice(1) : "-" + currentInput;
            } else if (value === "%") {
                currentInput = (parseFloat(currentInput) / 100).toString();
            } else if (value === "÷") {
                currentInput += "/";
            } else if (value === "x") {
                currentInput += "*";
            } else if (value === "-") {
                currentInput += "-";
            } else if (value === "+") {
                currentInput += "+";
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (e) {
                    currentInput = "Error";
                }
            } else if (value === "π") {
                currentInput += Math.PI;
            } else if (value === "e") {
                currentInput += Math.E;
            } else if (value === "x²") {
                currentInput = Math.pow(parseFloat(currentInput), 2).toString();
            } else if (value === "x³") {
                currentInput = Math.pow(parseFloat(currentInput), 3).toString();
            } else if (value === "²√x") {
                currentInput = Math.sqrt(parseFloat(currentInput)).toString();
            } else if (value === "³√x") {
                currentInput = Math.cbrt(parseFloat(currentInput)).toString();
            } else if (value === "1/x") {
                currentInput = (1 / parseFloat(currentInput)).toString();
            } else if (value === "ln") {
                currentInput = Math.log(parseFloat(currentInput)).toString();
            } else if (value === "log₁₀") {
                currentInput = Math.log10(parseFloat(currentInput)).toString();
            } else if (value === "sin") {
                currentInput = Math.sin(parseFloat(currentInput) * Math.PI / 180).toString();
            } else if (value === "cos") {
                currentInput = Math.cos(parseFloat(currentInput) * Math.PI / 180).toString();
            } else if (value === "tan") {
                currentInput = Math.tan(parseFloat(currentInput) * Math.PI / 180).toString();
            } else if (value === "sinh") {
                currentInput = Math.sinh(parseFloat(currentInput)).toString();
            } else if (value === "cosh") {
                currentInput = Math.cosh(parseFloat(currentInput)).toString();
            } else if (value === "tanh") {
                currentInput = Math.tanh(parseFloat(currentInput)).toString();
            } else if (value === "xʸ") {
                currentInput += "**";
            } else if (value === "eˣ") {
                currentInput = Math.exp(parseFloat(currentInput)).toString();
            } else if (value === "10ˣ") {
                currentInput = Math.pow(10, parseFloat(currentInput)).toString();
            } else if (value === "Rand") {
                currentInput = Math.random().toString();
            } else if (value === "x!") {
                let num = parseInt(currentInput);
                let fact = 1;
                for (let i = 2; i <= num; i++) {
                    fact *= i;
                }
                currentInput = fact.toString();
            } else if (value === "mc") {
                memory = 0;
            } else if (value === "m+") {
                memory += parseFloat(currentInput);
            } else if (value === "m-") {
                memory -= parseFloat(currentInput);
            } else if (value === "mr") {
                currentInput = memory.toString();
            }

            updateDisplay();
        });
    });
});