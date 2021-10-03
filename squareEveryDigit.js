function squareDigits(num) {
    var result = "";
    num.toString().split("").map(x => {
        var intRep = parseInt(x, 10);
        result = result + (intRep * intRep).toString();
        console.log(result);

    });
    return parseInt(result, 10);
}