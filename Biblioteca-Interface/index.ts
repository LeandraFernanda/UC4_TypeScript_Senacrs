interface Autor {
    nome: string;
    nacionalidade: string;
  }
  
  interface Livro {
    titulo: string;
    autor: Autor;
    isbn: string;
    numeroDePaginas: number;
  }
  
  interface Emprestimo {
    dataEmprestimo: Date;
    dataDevolucao: Date;
    livro: Livro;
    usuario: Usuario;
  }
  
  interface Usuario {
    nome: string;
    matricula: string;
    emprestimos: Emprestimo[];
  }
  
  
  const autor: Autor = {
    nome: 'George Orwell',
    nacionalidade: 'Britanico'
  };
  
  
  const livro1984: Livro = {
    titulo: '1984',
    autor: autor,
    isbn: '1234567890',
    numeroDePaginas: 328
  };
  
  
  const usuario1: Usuario = {
    nome: 'João da Silva',
    matricula: '12345',
    emprestimos: []
  };
  
  
  const emprestimo1: Emprestimo = {
    dataEmprestimo: new Date(),
    dataDevolucao: new Date(2024, 11, 31), 
    livro: livro1984,
    usuario: usuario1
  };
  
  
  usuario1.emprestimos.push(emprestimo1);
  console.log(usuario1);
  
  console.log(emprestimo1);
  
  console.log(livro1984);
  
  console.log(autor); 