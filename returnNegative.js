function makeNegative(num) {
    return num < 0 ? num : 0 - num;
}

console.log(makeNegative(1))
console.log(makeNegative(-5))
console.log(makeNegative(0))
console.log(makeNegative(0.12))