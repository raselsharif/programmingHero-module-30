

const arrys = (arr1, arr2) =>{
    const arrs = [...arr1, ...arr2];
    const maxNum = Math.max(...arrs)
    return maxNum;
}

const myArr1 = [1,2,3,77,55,44,62,4,125,785];
const myArr2 = [4,5,6,900,500,658,4400,800];

const result = arrys(myArr1,myArr2);
console.log(result);


