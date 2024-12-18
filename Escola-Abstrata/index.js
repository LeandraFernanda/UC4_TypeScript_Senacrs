/*abstract class Pessoa {
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
      this.nome = nome;
      this.dataNascimento = dataNascimento;
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
      // super();
      super(nome, dataNascimento);
      this.nome = nome;
      this.dataNascimento = dataNascimento;
    }
  
  class Turma {
   codigo: number;
   disciplina: Disciplina;
   professor: Professor;
   alunos: Aluno[] = [];

   constructor(
     codigo: number,
     disciplina: Disciplina,
     professor: Professor,
     alunos: Aluno[] = []
    ) {}
  }
  
  // Create instances
  const aluno1 = new Aluno(123456, 'João Silva', new Date("01,01,2005"), 'Rua A, 123');
  console.log(aluno1);
  
  const matematica = new Disciplina('MAT101', 'Matemática', 60);
  
  const professor1 = new Professor( 'Maria Oliveira',  new Date("01,01,1992"));
  
  const turmaA = new Turma('A1', matematica, professor1);
  turmaA.alunos.push(aluno1);
  */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(matricula, nome, dataNascimento, endereco) {
        var _this = _super.call(this, nome, dataNascimento) || this;
        _this.matricula = matricula;
        _this.endereco = endereco;
        return _this;
    }
    return Aluno;
}(Pessoa));
var Disciplina = /** @class */ (function () {
    function Disciplina(codigo, nome, cargaHoraria) {
        this.codigo = codigo;
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
    }
    return Disciplina;
}());
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(titulacao, nome, dataNascimento) {
        var _this = _super.call(this, nome, dataNascimento) || this;
        _this.titulacao = titulacao;
        return _this;
    }
    return Professor;
}(Pessoa));
var Turma = /** @class */ (function () {
    function Turma(codigo, disciplina, professor, alunos // Inicializa com um array vazio por padrão
    ) {
        if (alunos === void 0) { alunos = []; }
        this.codigo = codigo;
        this.disciplina = disciplina;
        this.professor = professor;
        this.alunos = alunos;
    }
    return Turma;
}());
var aluno1 = new Aluno(1, "João Silva", new Date(2000, 1, 1), "Rua A");
var disciplina1 = new Disciplina("MAT101", "Matemática", 60);
var professor1 = new Professor("Dr.", "Maria Souza", new Date(1980, 11, 31));
var turma1 = new Turma(1, disciplina1, professor1, [aluno1]);
