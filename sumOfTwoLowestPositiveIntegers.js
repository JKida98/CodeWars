function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort((x, y) => (x < y ? -1 : x > y ? 1 : 0));
    return numbers[0] + numbers[1];
}


console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));