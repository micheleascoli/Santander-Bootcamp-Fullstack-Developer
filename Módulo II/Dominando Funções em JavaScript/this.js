function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Maria',
	idade: 30,
};

const pessoa2 = {
	nome: 'Carla',
	idade: 26,
};

const pessoa3 = {
	nome: 'Junior',
	idade: 16,
};

const animal = {
	nome: 'Ralf',
	idade: 3,
    raca: 'vira-lata',
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));