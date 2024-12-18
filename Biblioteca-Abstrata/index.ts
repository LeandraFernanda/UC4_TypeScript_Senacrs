

class Livro {
    constructor(
      public titulo: string,
      public autor: Autor,
      public isbn: string,
      public numeroDePaginas: number
    ) {}
  }
  
  class Autor {
    constructor(public nome: string, public nacionalidade: string) {}
  }
  
  class Emprestimo {
    constructor(
      public dataEmprestimo: Date,
      public dataDevolucao: Date,
      public livro: Livro,
      public usuario: Usuario
    ) {}
  }
  
  class Usuario {
    constructor(public nome: string, public matricula: string) {}
    emprestimos: Emprestimo[] = [];
  }

  // Criando um autor
const autor = new Autor('George Orwell', 'Britanico');

// Criando um livro
const livro1984 = new Livro('1984', autor, '1234567890', 328);

// Criando um usuário
const usuario1 = new Usuario('João da Silva', '12345');

// Criando um empréstimo
const emprestimo1 = new Emprestimo(
  new Date(),
  new Date(31,11,2024),
  livro1984,
  usuario1
);


usuario1.emprestimos.push(emprestimo1);



