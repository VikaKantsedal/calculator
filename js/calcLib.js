var calc = (function() {

    return {
        add: function (a, b) {
            a = +a;
            b = +b;
            return(a + b);
        },

        sub: function (a, b) {
            return(a - b);
        },

        multy: function (a, b) {
            return(a * b);
        },

        div: function (a, b) {
            if (b != 0) {
                return(a / b);
            } else {
                return "Cannot divide by zero";
            }
        }
    }
})();


function simpleCalc (str) {
    while (str.indexOf("+") != -1 || str.indexOf("-", 1) != -1 || str.indexOf("*") != -1 ||str.indexOf("/") != -1) {

        for(var i = 1; i < str.length; i++) {

            if(str[i] === "+" || str[i] === "-" || str[i] === "*" ||str[i] === "/") {
                var oper = str[i];
                var operInd = i;
                break;
            }
        }

        var num1 = "";
        for (i = 0; i < operInd; i++) {
            num1 = num1 + str[i];
        }

        var num2 = "";
        for (i = operInd + 1; i < str.length; i++) {
            if(str[i] != "+" && str[i] != "-" && str[i] != "*" && str[i] != "/") {
                num2 = num2 + str[i];
            } else break;
        }

        str = str.slice(i , str.length);

        if(oper == "+") {
            str = calc.add(num1,num2) + str;
        } else if (oper == "-") {
            str = calc.sub(num1,num2) + str;
        } else if(oper == "*") {
            str = calc.multy(num1,num2) + str;
        } else if(oper == "/") {
            str = calc.div(num1,num2) + str;
        }
    }
    return str;
}

function isErrorMessage(str) {
    return str.search(/\+|\-|\*|\/|\d/g) === -1
}

function hasOperator(str) {
    return str.search(/\+|\-|\*|\//g) != -1
}

function parseInputs (inputsArray) {
    var buttons = [];
    var reset = null;

    for(var i = 0; i < inputsArray.length; i++) {
        (function(input) {
            if(input.getAttribute("type") == "button") {
                buttons.push(input)
            } else {
                reset = input;
            }
        })(inputsArray[i]);
    }

    return {
        buttons: buttons,
        reset: reset
    }
}