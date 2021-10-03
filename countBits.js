var result = "";
var first = true;

var countBits = function (n) {

    if (first && n === 0) {
        return 0;
    }

    let divideResult = Math.floor(n / 2);

    if (divideResult >= 1) {
        first = false;
        result = result.concat((n % 2).toString());
        return countBits(Math.floor(divideResult));
    } else {
        result = result.concat("1");   
        result = result.replace(/0/g, "");
        var x = result.length;
        result = "";
        return x;
    }
};

//!! Alternative !!
// var n = 2;
// n.toString(2).split('0').join('').length;

countBits(0);
countBits(4);
countBits(7);
countBits(9);
countBits(10);
