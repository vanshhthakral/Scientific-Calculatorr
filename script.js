document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    let currentInput = "";
    let memory = 0;

    function updateDisplay() {
        display.textContent = currentInput || "0";
    }

    function limitDecimals(value) {
        return parseFloat(value).toFixed(6).replace(/\.?0+$/, ""); // Removes trailing zeros
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
                currentInput = limitDecimals(parseFloat(currentInput) / 100);
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
                    currentInput = limitDecimals(eval(currentInput));
                } catch (e) {
                    currentInput = "Error";
                }
            } else if (value === "π") {
                currentInput = limitDecimals(Math.PI);
            } else if (value === "e") {
                currentInput = limitDecimals(Math.E);
            } else if (value === "x²") {
                currentInput = limitDecimals(Math.pow(parseFloat(currentInput || "0"), 2));
            } else if (value === "x³") {
                currentInput = limitDecimals(Math.pow(parseFloat(currentInput || "0"), 3));
            } else if (value === "²√x") {
                currentInput = limitDecimals(Math.sqrt(parseFloat(currentInput || "0")));
            } else if (value === "³√x") {
                currentInput = limitDecimals(Math.cbrt(parseFloat(currentInput || "0")));
            } else if (value === "1/x") {
                currentInput = limitDecimals(1 / parseFloat(currentInput || "1"));
            } else if (value === "ln") {
                currentInput = limitDecimals(Math.log(parseFloat(currentInput || "1")));
            } else if (value === "log₁₀") {
                currentInput = limitDecimals(Math.log10(parseFloat(currentInput || "1")));
            } 
            
            // ✅ Fix for sin, cos, tan functions
            else if (value === "sin") {
                currentInput = limitDecimals(Math.sin(parseFloat(currentInput || "0") * Math.PI / 180));
            } else if (value === "cos") {
                currentInput = limitDecimals(Math.cos(parseFloat(currentInput || "0") * Math.PI / 180));
            } else if (value === "tan") {
                currentInput = limitDecimals(Math.tan(parseFloat(currentInput || "0") * Math.PI / 180));
            } 
            
            else if (value === "sinh") {
                currentInput = limitDecimals(Math.sinh(parseFloat(currentInput || "0")));
            } else if (value === "cosh") {
                currentInput = limitDecimals(Math.cosh(parseFloat(currentInput || "0")));
            } else if (value === "tanh") {
                currentInput = limitDecimals(Math.tanh(parseFloat(currentInput || "0")));
            } else if (value === "xʸ") {
                currentInput += "**";
            } else if (value === "eˣ") {
                currentInput = limitDecimals(Math.exp(parseFloat(currentInput || "0")));
            } else if (value === "10ˣ") {
                currentInput = limitDecimals(Math.pow(10, parseFloat(currentInput || "0")));
            } else if (value === "Rand") {
                currentInput = limitDecimals(Math.random());
            } else if (value === "x!") {
                let num = parseInt(currentInput || "1");
                let fact = 1;
                for (let i = 2; i <= num; i++) {
                    fact *= i;
                }
                currentInput = limitDecimals(fact);
            } else if (value === "mc") {
                memory = 0;
            } else if (value === "m+") {
                memory += parseFloat(currentInput || "0");
            } else if (value === "m-") {
                memory -= parseFloat(currentInput || "0");
            } else if (value === "mr") {
                currentInput = limitDecimals(memory);
            }

            updateDisplay();
        });
    });
});
