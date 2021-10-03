function arrayDiff(a, b) {
    if (b.length === 0) {
        return a;
    }
    else if (a.length === 0) {
        return [];
    }
    b.map((x) => {
        let newList = a.filter(element => x !== element);
        if (newList === a) {
            a = a.slice(1, a.length);
        } else {
            a = newList;
        }
    })
    return a;
}