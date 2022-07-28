"use strict";
let valorAny;
valorAny = 3;
valorAny = 'Olá';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testao';
valorString2 = valorAny;
function somaStrings(string1, string2) {
    console.log(string1 + string2);
}
somaStrings(valorString, valorString2);
somaStrings('olá, ', 'Tudo bem?');
