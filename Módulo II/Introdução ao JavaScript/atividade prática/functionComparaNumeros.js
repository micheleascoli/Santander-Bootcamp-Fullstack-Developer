function comparaNumeros(num1, num2) {

    if (!num1 || !num2) return "Defina dois números!";

    const saoIguais = num1 === num2; // saoIguais é um valor booleano;
    const soma = num1 + num2;
    var parte1 = 'não';
    var parte2 = 'menor';
    var parte3 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;
    
    if (saoIguais) {
        parte1 = '';        
    }

    if (compara10) {
        parte2 = 'maior';
    }

    if (compara20) {
        parte3 = 'maior';
    }

    let contador = 0;
    console.log(contador++);
    return `Os números ${num1} e ${num2} ${parte1} são iguais. Sua soma é ${soma}, que é ${parte2} que 10 e ${parte3} que 20.`;
}

console.log(comparaNumeros(1,2));
