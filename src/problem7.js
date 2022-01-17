function findOutlier(integers){
    const qtdObject = {
        even: 0,
        odd: 0
    };

    for(let i = 0; i < integers.length; i++) {
        if( integers[i] % 2 === 0 ) {
        qtdObject.even += 1;
        } else {
        qtdObject.odd += 1;  
        }
    }

    console.log(qtdObject);

    if( qtdObject.even === 1 ) {
        return integers.find((integer) => integer % 2 === 0 );
    }
    
    return integers.find((integer) => integer % 2 !== 0 );
}