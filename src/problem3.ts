export const findOdd = (xs: number[]): number => {
    const obj: Record<string, number> = {};
    let odd = 0;
    
    for(const number of xs) {
      if( obj[number] ) obj[number] += 1;
      else obj[number] = 1; 
    }
    
    for(const key in obj) {
      if ( obj[key] % 2 !== 0 ) { 
        odd = Number(key);
        break;
      }  
    }
    
    return odd;
};