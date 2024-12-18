"use strict";
class Treino {
    constructor(descricao, serie, repeticoes) {
        this.descricao = descricao;
        this.serie = serie;
        this.repeticoes = repeticoes;
    }
}
class Aluno {
    constructor() {
        this.nome = "";
        this.sobre_nome = "";
        this.peso = 0;
        this.altura = 0;
        this.treinos = [];
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    adicionarTreino(treino) {
        this.treinos.push(treino);
    }
}
class Academia {
    constructor() {
        this.alunos = [];
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    adicionarTreinoAluno(aluno, descricao, serie, repeticoes) {
        const treino = new Treino(descricao, serie, repeticoes);
        aluno.adicionarTreino(treino);
    }
}
let academia = new Academia();
let aluno_1 = new Aluno();
aluno_1.nome = "Pedro";
aluno_1.sobre_nome = "Das Neves";
aluno_1.altura = 180;
aluno_1.peso = 80;
let aluno_2 = new Aluno();
aluno_2.nome = "João";
aluno_2.sobre_nome = "Das Canhas";
aluno_2.altura = 1.75;
aluno_2.peso = 87;
academia.adicionarAluno(aluno_1);
academia.adicionarAluno(aluno_2);
academia.adicionarTreinoAluno(aluno_1, "Biceps", 3, 12);
academia.adicionarTreinoAluno(aluno_2, "Esteira", 3, 15);
console.log(aluno_1.treinos);
console.log(aluno_2.treinos);
console.log(aluno_1.nome);
console.log(aluno_1.calcularIMC());
console.log(aluno_2.calcularIMC());
