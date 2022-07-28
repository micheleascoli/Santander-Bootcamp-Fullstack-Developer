// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// Solução

let funcionario: {codigo: number, nome: string } = {
    codigo: 101,
    nome:'John Lev'
};

funcionario.codigo = 10;
funcionario.nome = 'John';


let funcionario2 = {
    codigo: 102,
    nome:'Maria'
};


interface Funcionario {
    codigo: number,
    nome: string
}

const funcionario3 = {} as Funcionario;

funcionario3.codigo = 22;
funcionario3.nome = 'Joana';
