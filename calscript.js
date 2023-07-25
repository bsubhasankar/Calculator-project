let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === "=") {
            try {
                expression = eval(expression);
                input.value = expression;
            } catch (error) {
                input.value = "Error";
            }
        } else if (value === "AC") {
            expression = "";
            input.value = "0";
        } else if (value === "DE") {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += value;
            input.value = expression;
        }
    });
});
