
class Aluno {
    nome: string;
    matricula: number;
    dataNascimento: Date;
    telefone: number ;
    endereco: string;
    cursos: { nomeCurso: string, dataInicio: Date }[] = [];

    constructor(nome: string, matricula: number, dataNascimento: Date, telefone: number, endereco: string) {
        this.nome = nome;
        this.matricula = matricula;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    matricularEmCurso(curso: string, dataInicio: Date) {
        this.cursos.push({ nomeCurso: curso, dataInicio });
    }

    cancelarMatricula(curso: string) {
        this.cursos = this.cursos.filter(c => c.nomeCurso !== curso);
    }
}


class Curso {
    nome: string;
    professor: string;
    diasDaSemana: Date = new Date;
    horario: number;
    vagas: number;
    alunosMatriculados: Aluno[] = [];

    constructor(nome: string, professor: string, diasDaSemana: Date = new Date, horario: number, vagas: number) {
        this.nome = nome;
        this.professor = professor;
        this.diasDaSemana = diasDaSemana;
        this.horario = horario;
        this.vagas = vagas;
    }

    matricularAluno(aluno: Aluno) {
        if (this.vagas > 0) {
            this.alunosMatriculados.push(aluno);
            aluno.matricularEmCurso(this.nome, new Date());
            this.vagas--;
        } else {
            console.log("Curso lotado.");
        }
    }

    cancelarMatriculaAluno(aluno: Aluno) {
        this.alunosMatriculados = this.alunosMatriculados.filter(a => a.matricula !== aluno.matricula);
        aluno.cancelarMatricula(this.nome);
        this.vagas++;
    }
}


class Escola {
    nome: string;
    endereco: string;
    cursosDisponiveis: Curso[] = [];
    alunosMatriculados: Aluno[] = [];
}

const aluno1  = new Aluno("João", 123456, new Date("15-05-1990"), 5199999999, 'Rua 1, 100');

const curso1 = new Curso("Inglês", "Prof. Gustavo", new Date("02-12-2024"), 18, 50);
console.log(aluno1);
console.log(curso1);
    

