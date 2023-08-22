// single parameter arrow function
const person = (person) => person.age;
const student = {
    name: "rasel",
    age: 26
}

const age = person(student);
console.log(age);

// 
const thirdNumber = (number) => number[2];

const numbers = [25,52,68,26,30,88];
console.log(thirdNumber(numbers));
