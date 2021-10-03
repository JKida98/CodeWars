var uniqueInOrder=function(iterable){
    //iterable can be a string or an array

    if(typeof iterable === "string"){
        iterable = iterable.split("");
    }

    var result = [];    
    iterable.map((x,index)=> {
        if(index !== 0){
            if(x !== iterable[index-1]){
                result.push(x);
            }
        }else{
            result.push(x);
        }
    });
    console.log("RESULT: ", result);
    return result;
}


uniqueInOrder('AAAABBBCCDAABBB');
uniqueInOrder('ABBCcAD');
uniqueInOrder([1, 2, 2, 3, 3]);