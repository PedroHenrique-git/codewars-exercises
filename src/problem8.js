var uniqueInOrder = function(iterable){
    const string = iterable;
    const finalArray = [];

    for(let i = 0; i < string.length; i++) {
        if( string[i] != string[i + 1] ) {
            finalArray.push(string[i]);
        }     
    }

    return finalArray;
}