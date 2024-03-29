const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    },
];

const saldoDisponivel = 100;

function calculaSaldo (saldoDisponivel, lista) {
    return lista.reduce( function (prev, current, index) {
        console.log('rodada', index+1);
        console.log({ prev });    // prev é conhecido como acumulador.
        console.log({ current });
        return prev - current.preco;   // aqui precisa definir que vai usar apenas o preco.
        
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));