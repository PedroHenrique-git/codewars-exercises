const a1: number[] = [121, 144, 19, 161, 19, 144, 19, 11];
const a2: number[] = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

const a3 = [121, 144, 19, 161, 19, 144, 19, 11];
const a4 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

export function comp(a1: number[] | null, a2: number[] | null): boolean {
    if( a1 && a2 && a1.length !== a2.length ) return false;

    const sortedA1 = a1?.sort((a, b) => a - b);
    const sortedA2 = a2?.sort((a, b) => a - b);

    const squaresA1 = sortedA1?.map((n) => n * n);

    if( squaresA1 && sortedA2 ) {
        return squaresA1.every((n, index) => n === sortedA2[index]);
    }

    return false;
}

// should be return true
console.log(comp(a1, a2));

// should be return false
console.log(comp(a3, a4));