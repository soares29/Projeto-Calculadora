    const previousOperationText = document.querySelectorAll("#buttons-container button");
    const currentOperationText = document.querySelector("#current-operation");
    const buttons = document.querySelectorAll("#buttons-container button");

    class Calculator {
        constructor(previousOperationText, currentOperationText) {
            this.previousOperationText = previousOperationText
            this.currentOperationText = currentOperationText
        }
    }

    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const value = e.target.innerText;

            if (+value >= 0 || value === ".") {
                console.log(value);
            } else {
                console.log("Operação");
            }
        });
    });