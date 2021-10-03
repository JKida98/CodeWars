function digital_root(n) {
    var sum = 0;
    n.toString().split('').map(x => {
        sum = sum + parseInt(x);
    });

    
    if (sum > 9) {
        return digital_root(sum);
    } else {
        return sum;
    }
}

var result = digital_root(23129);
console.log(result);