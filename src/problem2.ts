export class Kata {
  static spinWords(words: string) {
    const wordsArr: string[] = words.split(' ');
    
    const newWordsArr: string[] = wordsArr.map((word) => {
      if( word.length >= 5 ) return word.split('').reverse().join('');
      return word;
    });
    
    return newWordsArr.join(' ');
  }
}