export const digitalRoot = (n:number):number => {
    let numbers = String(n).split('');
    let sum = numbers.reduce((sum, val) => sum += Number(val), 0);

    while( numbers.length !== 1 ) {
        numbers = String(sum).split('');
        sum = numbers.reduce((sum, val) => sum += Number(val), 0);
    }

    return sum;
};