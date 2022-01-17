const returnNotRepeatedLetters = (string) => {
    const letters = {};
    const letterArr = [];

    for(const key of string) {
        if( !letters[key] ) letters[key] = key;  
    }

    for(const letter in letters) {
        letterArr.push(letters[letter]);  
    }

    return letterArr;
};
  
function longest(s1, s2) {
    const s3 = s1.concat(s2);
    const lettersS3 = returnNotRepeatedLetters(s3);
    return lettersS3.sort((a,b) => a.localeCompare(b)).join(''); 
}