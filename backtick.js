
const a = 10;
const b = 15;

// normal way 

const result = "Sum of " + a + " and " + b + " is " + (a + b);
console.log(result);

// use template literals

const result1 = `Sum of ${a} and ${b} is ${a+b}`
console.log(result1);
