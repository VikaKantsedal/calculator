var operators = ["*", "/", "+", "-"];
var field = document.getElementById("field");
var rowValue = field.innerText;
var inputsArray = document.getElementsByTagName("input");
var parsedInputs = parseInputs(inputsArray);

for (var i = 0; i < parsedInputs.buttons.length; i++) {
    (function(button) {
        button.addEventListener("click", function () {

            if (isErrorMessage(rowValue)) {
                rowValue = "";
            }

            var inputValue = button.getAttribute("value");

            if (operators.indexOf(inputValue) !== -1) {

                if (hasOperator(rowValue)) {

                    if (operators.indexOf(rowValue[rowValue.length - 1]) !== -1) {
                        rowValue = rowValue.slice(0, length -1) + inputValue;
                    } else {
                        rowValue = simpleCalc(rowValue) + inputValue;
                    }
                } else if (rowValue.length != 0 || inputValue === "-") {
                    rowValue += inputValue;
                } else {
                    rowValue = "";
                }
            } else if(inputValue === "=") {

                rowValue = simpleCalc(rowValue);
            } else if(inputValue === "sqrt") {

                var calcValue = simpleCalc(rowValue);
                rowValue = Math.sqrt(calcValue).toString();

                if (calcValue[0] === "-") {
                    rowValue = "Square of a negative number";
                } else {
                    rowValue = Math.sqrt(calcValue).toString();
                }
            } else if(inputValue === "back") {
                rowValue = rowValue.slice(0, length -1);
            } else {
                rowValue += inputValue;
            }

            field.innerText = rowValue;
        });
    })(parsedInputs.buttons[i])
}

parsedInputs.reset.addEventListener("click", function () {
    if(this.getAttribute("value") === "clear") {
        field.innerText = "";
    }
});