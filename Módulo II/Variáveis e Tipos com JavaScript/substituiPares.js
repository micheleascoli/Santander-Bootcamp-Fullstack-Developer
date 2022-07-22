function substituiNumerosPares(array) {
    if (!array) return console.log(-1);
    if (!array.length) return console.log(-1);

    const naoZero = (num) => num !== 0;
    const numPar = (num) => num % 2 === 0;

    for (let i = 0; i < array.length; i++) {
        if (numPar(array[i]) && naoZero(array[i])) {
            console.log(`trocando ${array[i]} por 0...`);
            array[i] = 0;
        } else if (!naoZero(array[i])) {
            console.log('Ops, você já vale 0!');
        }
    }
    console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);




function substituiPares(array) {
    if (!array) return console.log(-1);
    if (!array.length) return console.log(-1);

    for (let index = 0; index < array.length; index++) {
        if ((array[index] % 2) == 0 && array[index] != 0) {
            //console.log(array[index]);
            array[index] = 0;
        }
    }
    console.log(array);
}


substituiPares([2, 0, 3, 5])
