let display = document.getElementById("display");
let input = "";

// Factorial function
function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {

        let value = button.innerText;

        // Scientific functions
        if (value === "sin") input += "Math.sin(";
        else if (value === "cos") input += "Math.cos(";
        else if (value === "tan") input += "Math.tan(";
        else if (value === "log") input += "Math.log10(";
        else if (value === "ln") input += "Math.log(";
        else if (value === "√") input += "Math.sqrt(";
        else if (value === "π") input += "Math.PI";
        else if (value === "e") input += "Math.E";
        else if (value === "x^y") input += "**";
        else if (value === "n!") input += "!";
        else if (value === "=") {

            // Replace factorial symbol "!" manually
            if (input.includes("!")) {
                input = input.replace(/(\d+)!/g, (match, num) => factorial(parseInt(num)));
            }

            try {
                display.value = eval(input);
                input = display.value;
            } catch (e) {
                display.value = "Error";
                input = "";
            }
        }
        else if (value === "C") {
            input = "";
            display.value = "";
        }
        else {
            input += value;
        }

        display.value = input;
    });
});
