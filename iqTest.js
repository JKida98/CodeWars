function iqTest(numbers) {
    var evenList = [];
    var oddList = [];
    numbers.split(" ").map((x, index) => {
        if (x % 2 === 0) {
            evenList.push(x);
        } else {
            oddList.push(x);
        }
    })
    if (evenList.length < oddList.length) {
        return numbers.split(" ").indexOf(evenList[0]) + 1;
    } else {
        return numbers.split(" ").indexOf(oddList[0]) + 1;
    }
}