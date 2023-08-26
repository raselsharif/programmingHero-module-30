

const avg = numbers => {
    const arrSquare = []
    for (const number of numbers) {
        const square = number * 2;
        arrSquare.push(square)
    }

    let arrSum = 0;
    for (const arr of arrSquare) {
        arrSum += arr;
    }
    return arrSum / arrSquare.length;
}

const myNumbers = [1, 2, 3, 4, 5];

const result = avg(myNumbers);
console.log(result);