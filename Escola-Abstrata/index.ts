

  abstract class Pessoa {
    constructor(
        public nome: string,
        public dataNascimento: Date
    ) {}
}

class Aluno extends Pessoa {
    constructor(
        public matricula: number,
        nome: string,
        dataNascimento: Date,
        public endereco: string
    ) {
        super(nome, dataNascimento);
    }
}

class Disciplina {
    constructor(
        public codigo: string,
        public nome: string,
        public cargaHoraria: number
    ) {}
}

class Professor extends Pessoa {
    constructor(
        public titulacao: string,
        nome: string,
        dataNascimento: Date
    ) {
        super(nome, dataNascimento);
    }
}

class Turma {
    constructor(
        public codigo: number,
        public disciplina: Disciplina,
        public professor: Professor,
        public alunos: Aluno[] = [] // Inicializa com um array vazio por padrão
    ) {}
}
const aluno1 = new Aluno(1, "João Silva", new Date("1, 1, 2000"), "Rua A");
const disciplina1 = new Disciplina("MAT101", "Matemática", 60);
const professor1 = new Professor("Dr.", "Maria Souza", new Date(1980, 11, 31));

const turma1 = new Turma(1, disciplina1, professor1, [aluno1]);

let aluno1a = new Aluno(1, "João Silva", new Date("1, 1, 2000"), "Rua A");

turma1.alunos.push(aluno1a);

console.log(turma1);



/*
// Definindo a interface Pessoa
interface IPessoa {
  nome: string;
  dataNascimento: Date;
}

// Definindo a interface Aluno que estende Pessoa
interface IAluno extends IPessoa {
  matricula: number;
  endereco: string;
}

// Definindo a interface Disciplina
interface IDisciplina {
  codigo: string;
  nome: string;
  cargaHoraria: number;
}

// Definindo a interface Professor que estende Pessoa
interface IProfessor extends IPessoa {
  titulacao: string;
}

// Definindo a interface Turma
interface ITurma {
  codigo: number;
  disciplina: IDisciplina;
  professor: IProfessor;
  alunos: IAluno[];
}

// Implementando as interfaces em classes
class Aluno implements IAluno {
  constructor(
      public matricula: number,
      public nome: string,
      public dataNascimento: Date,
      public endereco: string
  ) {}
}

class Disciplina implements IDisciplina {
  constructor(
      public codigo: string,
      public nome: string,
      public cargaHoraria: number
  ) {}
}

class Professor implements IProfessor {
  constructor(
      public titulacao: string,
      public nome: string,
      public dataNascimento: Date
  ) {}
}

class Turma implements ITurma {
  constructor(
      public codigo: number,
      public disciplina: IDisciplina,
      public professor: IProfessor,
      public alunos: IAluno[] = [] // Inicializa com um array vazio por padrão
  ) {}
}

// Criando instâncias
const aluno1 = new Aluno(1, "João Silva", new Date("1, 1, 2000"), "Rua A");
const disciplina1 = new Disciplina("MAT101", "Matemática", 60);
const professor1 = new Professor("Dr.", "Maria Souza", new Date(1980, 11, 31));

const turma1 = new Turma(1, disciplina1, professor1, [aluno1]);

let aluno1a = new Aluno(1, "João Silva", new Date("1, 1, 2000"), "Rua A");

turma1.alunos.push(aluno1a);

console.log(turma1); */
