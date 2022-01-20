export class G964 {
    private static alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

    public static playPass(s: string, n: number): string {
        const arrS = s.split('');

        const newLetters = arrS.map((l, index) => {
            if( l.match(/[a-z]/i) ) {
                const letterPosition = this.alphabet.indexOf(l.toLowerCase());
                const newLetter = (letterPosition + n) % 26;
                return index % 2 === 0 ? this.alphabet[newLetter].toLocaleUpperCase() : this.alphabet[newLetter].toLowerCase();
            }

            if( l.match(/[0-9]/) ) {
                const n = Number(l);
                const nineComplement = 9 - n;
                return nineComplement;
            }

            return l;
        });
        
        return newLetters.reverse().join('');
    }
}

const val = G964.playPass("I LOVE YOU!!!", 1);

console.log(val);
