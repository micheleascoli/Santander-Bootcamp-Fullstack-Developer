// Como podemos melhorar o esse código usando TS? 

// Solução
enum Profissao_ {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol,
    Padeiro
}

interface PessoaN {
    nome: string,
    idade: number,
    profissao_: Profissao_
}

let pessoa1 = {} as PessoaN;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao_ = Profissao_.Atriz;

let pessoa2 = {} as PessoaN;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao_ = Profissao_.Padeiro;

let pessoa3: PessoaN = {
    nome: "laura",
    idade: 32,
    profissao_: Profissao_.Atriz
};

let pessoa4: PessoaN = {
    nome: "carlos",
    idade: 19,
    profissao_: Profissao_.Padeiro
};