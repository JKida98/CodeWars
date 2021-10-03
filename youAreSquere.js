var isSquare = function (n) {
    return Math.sqrt(n).toFixed(1) * Math.sqrt(n).toFixed(1) === n;
}

var result = isSquare(22)