/*abstract class Livro {
    titulo: string;
    autor: Autor;
    isbn: string;
    numeroDePaginas: number;
    constructor(
        public titulo: string,
        public autor: Autor,
        public isbn: string,
        public numeroDePaginas: number
    )
    abstract public constructor (titulo: string, autor: Autor, isbn: string, numeroDePaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.numeroDePaginas = numeroDePaginas;
    
}

class Autor {
    nome: string;
    nacionalidade: string;
    constructor(public nome: string, public nacionalidade: string)
    }
     
}

class Empréstimo {
    dataEmprestimo: Date;
    dataDevolucao: Date
    livro: Livro;
    usuario: Usuario;
    constructor(
        public dataEmprestimo: Date,
        public dataDevolucao: Date,
        public livro: Livro,
        public usuario: Usuario)
        
}

class Usuario {
    nome: string;
    matricula: number;
    constructor(public nome: string, public matricula: number)
    
}
const autor1 = new Autor("George Orwell", "Brasileiro");
const livro1 = new Livro("1984", autor1, "1234567890", 328);
const usuario1 = new Usuario("João da Silva", 12345);
const emprestimo1 = new Empréstimo(new Date(), new Date(2023, 11, 31), livro1, usuario1);
*/
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, isbn, numeroDePaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.numeroDePaginas = numeroDePaginas;
    }
    return Livro;
}());
var Autor = /** @class */ (function () {
    function Autor(nome, nacionalidade) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
    }
    return Autor;
}());
var Emprestimo = /** @class */ (function () {
    function Emprestimo(dataEmprestimo, dataDevolucao, livro, usuario) {
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.livro = livro;
        this.usuario = usuario;
    }
    return Emprestimo;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
        this.emprestimos = [];
    }
    return Usuario;
}());
// Criando um autor
var autor = new Autor('George Orwell', 'Britanico');
// Criando um livro
var livro1984 = new Livro('1984', autor, '1234567890', 328);
// Criando um usuário
var usuario1 = new Usuario('João da Silva', '12345');
// Criando um empréstimo
var emprestimo1 = new Emprestimo(new Date(), new Date(31, 11, 2024), livro1984, usuario1);
// Adicionando o empréstimo à lista de empréstimos do usuário
usuario1.emprestimos.push(emprestimo1);
