function isPangram(string) {
    // make array out of string
    var splitted = string.split("");
    // filter out chars that we don't count as alphabeth letters
    var filtered = splitted.filter(x => x.match(/[a-z]/i));
    // convert values to lower case
    var toLowerCase = filtered.map(x => x.toLowerCase());
    // create set of unique values
    var setOfValues = new Set(toLowerCase);
    console.log(setOfValues);
    return setOfValues.size == 26;
}


console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));
console.log(isPangram("This is not a pangram."));