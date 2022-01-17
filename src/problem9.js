function duplicateEncode(word){
    const lowerString = word.toLowerCase().split('');
    const objCharacters = {};

    for(let i = 0; i < lowerString.length; i++) {
        if( !objCharacters[lowerString[i]] ) {
        objCharacters[lowerString[i]] = 1;  
        } else {
        objCharacters[lowerString[i]] = objCharacters[lowerString[i]] + 1;   
        }
    }

    for(let i = 0; i < lowerString.length; i++) {
        if( objCharacters[lowerString[i]] > 1 ) {
        lowerString[i] = ")";    
        } else {
        lowerString[i] = "(";    
        }
    }

    return lowerString.join(''); 
}