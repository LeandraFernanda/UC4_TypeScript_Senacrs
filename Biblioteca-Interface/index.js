var autor = {
    nome: 'George Orwell',
    nacionalidade: 'Britanico'
};
var livro1984 = {
    titulo: '1984',
    autor: autor,
    isbn: '1234567890',
    numeroDePaginas: 328
};
var usuario1 = {
    nome: 'João da Silva',
    matricula: '12345',
    emprestimos: []
};
var emprestimo1 = {
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
