var Aluno = /** @class */ (function () {
    function Aluno(nome, matricula, dataNascimento, telefone, endereco) {
        this.cursos = [];
        this.nome = nome;
        this.matricula = matricula;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.endereco = endereco;
    }
    Aluno.prototype.matricularEmCurso = function (curso, dataInicio) {
        this.cursos.push({ nomeCurso: curso, dataInicio: dataInicio });
    };
    Aluno.prototype.cancelarMatricula = function (curso) {
        this.cursos = this.cursos.filter(function (c) { return c.nomeCurso !== curso; });
    };
    return Aluno;
}());
var Curso = /** @class */ (function () {
    function Curso(nome, professor, diasDaSemana, horario, vagas) {
        if (diasDaSemana === void 0) { diasDaSemana = new Date; }
        this.diasDaSemana = new Date;
        this.alunosMatriculados = [];
        this.nome = nome;
        this.professor = professor;
        this.diasDaSemana = diasDaSemana;
        this.horario = horario;
        this.vagas = vagas;
    }
    Curso.prototype.matricularAluno = function (aluno) {
        if (this.vagas > 0) {
            this.alunosMatriculados.push(aluno);
            aluno.matricularEmCurso(this.nome, new Date());
            this.vagas--;
        }
        else {
            console.log("Curso lotado.");
        }
    };
    Curso.prototype.cancelarMatriculaAluno = function (aluno) {
        this.alunosMatriculados = this.alunosMatriculados.filter(function (a) { return a.matricula !== aluno.matricula; });
        aluno.cancelarMatricula(this.nome);
        this.vagas++;
    };
    return Curso;
}());
var Escola = /** @class */ (function () {
    function Escola() {
        this.cursosDisponiveis = [];
        this.alunosMatriculados = [];
    }
    return Escola;
}());
var aluno1 = new Aluno("João", 123456, new Date("15-05-1990"), 5199999999, 'Rua 1, 100');
var curso1 = new Curso("Inglês", "Prof. Gustavo", new Date("02-12-2024"), 18, 50);
