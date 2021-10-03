function list(names) {
    var toReturn = '';
    if (names.length === 1) {
        toReturn = toReturn + names[0].name;
    } else {
        names.map((x, index) => {
            if (index === names.length - 2) {
                toReturn = toReturn + x.name + " & "
            } else if (index === names.length - 1) {
                toReturn = toReturn + x.name
            } else {
                toReturn = toReturn + x.name + ", "
            }
        })
    }
    return toReturn
}

console.log(list([{ name: 'Bart' }]))