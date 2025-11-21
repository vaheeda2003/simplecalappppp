// Get references to the display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

// Variable to hold the current input value
let currentInput = "";

// Add event listeners for each button
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (value === "=") {
            // If '=' button is clicked, evaluate the expression
            try {
                display.value = eval(currentInput);
                currentInput = display.value;
            } catch (error) {
                display.value = "Error";
            }
        } else if (value === "C") {
            // If 'C' button is clicked, clear the display
            currentInput = "";
            display.value = "";
        } else {
            // Add the clicked value to the input
            currentInput += value;
            display.value = currentInput;
        }
    });
});
