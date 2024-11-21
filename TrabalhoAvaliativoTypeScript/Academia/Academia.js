var Treino = /** @class */ (function () {
    function Treino(descricao, serie, repeticoes) {
        this.descricao = descricao;
        this.serie = serie;
        this.repeticoes = repeticoes;
    }
    return Treino;
}());
var Aluno = /** @class */ (function () {
    function Aluno() {
        this.nome = "";
        this.sobre_nome = "";
        this.peso = 0;
        this.altura = 0;
        this.treinos = [];
    }
    Aluno.prototype.calcularIMC = function () {
        return this.peso / (this.altura * this.altura);
    };
    Aluno.prototype.adicionarTreino = function (treino) {
        this.treinos.push(treino);
    };
    return Aluno;
}());
var Academia = /** @class */ (function () {
    function Academia() {
        this.alunos = [];
    }
    Academia.prototype.adicionarAluno = function (aluno) {
        this.alunos.push(aluno);
    };
    Academia.prototype.adicionarTreinoAluno = function (aluno, descricao, serie, repeticoes) {
        var treino = new Treino(descricao, serie, repeticoes);
        aluno.adicionarTreino(treino);
    };
    return Academia;
}());
var academia = new Academia();
var aluno_1 = new Aluno();
aluno_1.nome = "Pedro";
aluno_1.sobre_nome = "Das Neves";
aluno_1.altura = 180;
aluno_1.peso = 80;
var aluno_2 = new Aluno();
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
