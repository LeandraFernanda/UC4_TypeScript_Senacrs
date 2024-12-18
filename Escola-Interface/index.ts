interface IPessoa {
    nome: string;
    dataNascimento: Date;
  }
  
  
  interface IAluno extends IPessoa {
    matricula: number;
    endereco: string;
  }
  

  interface IDisciplina {
    codigo: string;
    nome: string;
    cargaHoraria: number;
  }
  

  interface IProfessor extends IPessoa {
    titulacao: string;
  }
  
  
  interface ITurma {
    codigo: number;
    disciplina: IDisciplina;
    professor: IProfessor;
    alunos: IAluno[];
  }
  
  
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
        public alunos: IAluno[] = [] 
    ) {}
  }
  
  const aluno1 = new Aluno(1, "João Silva", new Date("1, 1, 2000"), "Rua A");
  const disciplina1 = new Disciplina("MAT101", "Matemática", 60);
  const professor1 = new Professor("Dr.", "Maria Souza", new Date(1980, 11, 31));
  
  const turma1 = new Turma(1, disciplina1, professor1, [aluno1]);
  
  let aluno1a = new Aluno(1, "João Silva", new Date("1, 1, 2000"), "Rua A");
  
  turma1.alunos.push(aluno1a);
  
  console.log(turma1); 
  