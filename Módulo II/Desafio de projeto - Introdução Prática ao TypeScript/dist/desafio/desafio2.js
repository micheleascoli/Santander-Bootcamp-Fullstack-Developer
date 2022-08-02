"use strict";
// Como podemos melhorar o esse código usando TS? 
// Solução
var Profissao_;
(function (Profissao_) {
    Profissao_[Profissao_["Professora"] = 0] = "Professora";
    Profissao_[Profissao_["Atriz"] = 1] = "Atriz";
    Profissao_[Profissao_["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao_[Profissao_["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
    Profissao_[Profissao_["Padeiro"] = 4] = "Padeiro";
})(Profissao_ || (Profissao_ = {}));
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao_ = Profissao_.Atriz;
let pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao_ = Profissao_.Padeiro;
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao_: Profissao_.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao_: Profissao_.Padeiro
};
