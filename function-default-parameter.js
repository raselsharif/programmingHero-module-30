function add(num1, num2) {
    const result = num1 + num2;
    // console.log(num1, num2, result);
    return result;

}

const outputAdd = add(2);

function add1(num1, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;

}

const outputAdd1 = add1();

function add2(num1 = 0, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;

}

const outputAdd2 = add2();