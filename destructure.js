// destructure from object

const myInfo = {
    name: "Rasel Sharif",
    age: 26,
    Address: "badda, dhaka"
}

// normal way
const name = myInfo.name;
const myAge = myInfo.age;

// console.log(name);
// console.log(age);

// destructuring 

// const { name: amarNam, age } = myInfo;
// console.log(amarNam,age);

// destructuring with array

const arr = [1, 2, 3, 4];

const [first, second] = arr;
// console.log(first, second);

const [x, y] = [10, 22];
// console.log(x, y);

// 

const double = (x, y) => [x * 2, y * 2];
const [result1, result2] = double(2, 4);
console.log(result1, result2);



