type input = number | string;

function somarValores(input1: input, input2: input) {
    if (typeof input1 === 'string' || input2 === 'string') {
        return input1.toString() + input2.toString();
    } else  if(typeof input1 === 'number' && input2 === 'number'){
        // o segundo if ficou redundante, mas o TS obriga a deixar tudo amarrado.
        return input1 + input2;
    }   
}

console.log(somarValores(1,5));
console.log(somarValores('olá, ', 'tudo bem?'));
console.log(somarValores('1',5));