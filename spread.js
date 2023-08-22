const maxNumber = Math.max(100,20,30,50,64,88,77)
// console.log(maxNumber);

const numbersArr = [100,200,5,6,4,55,88,];
// console.log(Math.max(...numbersArr));

// copy normal way 
const arr1 = [1,2,3];
const arr2 =arr1;
arr2.push(4)
// console.log(arr1);
// console.log(arr2);

// copy use spread operator

const arr3 = [1,2,3];
const arr4 = [...arr3];
arr4.push(4);
// console.log(arr3);
// console.log(arr4);

// 

const arr5 = [1,2,3];
const arr6 = [...arr5, 4];
console.log(arr6);

