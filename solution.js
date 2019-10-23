function plusMinus(arr) {
    let arrayLength = arr.length;

    let positiveFraction = 0;
    let negativeFraction = 0;
    let zeroFraction = 0;

    for ( let i = 0; i < arrayLength; i++) {
        if ( arr[i] > 0 ) {
            positiveFraction++;
        } else if ( arr[i] < 0 ) {
            negativeFraction++;
        } else {
            zeroFraction++;
        };
    };

    console.log(positiveFraction/arrayLength);
    console.log(negativeFraction/arrayLength);
    console.log(zeroFraction/arrayLength);
};
