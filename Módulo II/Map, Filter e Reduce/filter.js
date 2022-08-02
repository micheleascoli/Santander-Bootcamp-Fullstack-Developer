function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;    
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));

// Outra forma de fazer

function filtraPares2(arr) {
    return arr.filter( function (item) {
      return item % 2 === 0;    
    });
}

console.log(filtraPares2(meuArray));


// Ímpares

function filtraImpares(arr) {
    return arr.filter( function (item) {
      return item % 2 !== 0;    
    });
}

console.log(filtraImpares(meuArray));