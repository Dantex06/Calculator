const calculatorObj = {
    sum: "+",
    sub: "-",
    mul: "*",
    div: "/"
}

function calculator(first, second, operation){
    switch (operation) {
        case calculatorObj.sum:
            return sum(first, second);
        case calculatorObj.sub:
            return subtraction(first, second);
        case calculatorObj.mul:
            return multiply(first, second);
        case calculatorObj.div:
            return division(first, second);
    }
}