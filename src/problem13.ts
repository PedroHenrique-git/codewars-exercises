export class G964 {
    public static playPass(s: string, n: number): string {
        const arrS = s.split('');

        const newLetters = arrS.map((l, index) => {
            if( l.match(/[a-z]/i) ) {
                const code = l.charCodeAt(0) + n;
                return index % 2 === 0 ? String.fromCharCode(code).toLocaleUpperCase() : String.fromCharCode(code).toLocaleLowerCase();
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

console.log(val === "!!!vPz fWpM J");
