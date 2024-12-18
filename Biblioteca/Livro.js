"use strict";
// Classe ItemBiblioteca (classe pai)
class ItemBiblioteca {
    constructor(titulo, dataPublicacao) {
        this.titulo = titulo;
        this.dataPublicacao = dataPublicacao;
    }
    obterInformacoes() {
        return `Título: ${this.titulo} - Data de Publicação: ${this.dataPublicacao.toLocaleDateString()}`;
    }
}
// Classe Livro (classe filha)
class Livro extends ItemBiblioteca {
    constructor(titulo, dataPublicacao, autor, numeroPaginas) {
        super(titulo, dataPublicacao);
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
    obterInformacoes() {
        return `${super.obterInformacoes()} - Autor: ${this.autor} - Número de Páginas: ${this.numeroPaginas}`;
    }
}
// Classe Revista (classe filha)
class Revista extends ItemBiblioteca {
    constructor(titulo, dataPublicacao, volume, numeroEdicao) {
        super(titulo, dataPublicacao);
        this.volume = volume;
        this.numeroEdicao = numeroEdicao;
    }
    obterInformacoes() {
        return `${super.obterInformacoes()} - Volume: ${this.volume} - Número de Edição: ${this.numeroEdicao}`;
    }
}
// Classe Usuario
class Usuario {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }
    obterInformacoes() {
        return `Nome: ${this.nome} - Matrícula: ${this.matricula}`;
    }
}
// Classe Emprestimo
class Emprestimo {
    constructor(dataDoEmprestimo, dataDaDevoluçãoPrevista, usuario, itemEmprestado) {
        this.dataDoEmprestimo = dataDoEmprestimo;
        this.dataDaDevoluçãoPrevista = dataDaDevoluçãoPrevista;
        this.usuario = usuario;
        this.itemEmprestado = itemEmprestado;
    }
    obterInformacoes() {
        return `Data do Empréstimo: ${this.dataDoEmprestimo.toLocaleDateString()} - Data de Devolução Prevista: ${this.dataDaDevoluçãoPrevista.toLocaleDateString()} - Usuário: ${this.usuario.obterInformacoes()} - Item Emprestado: ${this.itemEmprestado.obterInformacoes()}`;
    }
}
// Arrays para armazenar dados
let livros = [];
let revistas = [];
let usuarios = [];
let emprestimos = [];
// Menu principal
function menuPrincipal() {
    console.log("Biblioteca");
    console.log("1. Cadastrar Livro");
    console.log("2. Cadastrar Revista");
    console.log("3. Cadastrar Usuário");
    console.log("4. Realizar Empréstimo");
    console.log("5. Listar Livros");
    console.log("6. Listar Revistas");
    console.log("7. Listar Usuários");
    console.log("8. Listar Empréstimos");
    console.log("9. Sair");
    const opcao = parseInt(prompt("Escolha uma opção: "));
    switch (opcao) {
        case 1:
            cadastrarLivro();
            break;
        case 2:
            cadastrarRevista();
            break;
        case 3:
            cadastrarUsuario();
            break;
        case 4:
            realizarEmprestimo();
            break;
        case 5:
            listarLivros();
            break;
        case 6:
            listarRevistas();
            break;
        case 7:
            listarUsuarios();
            break;
        case 8:
            listarEmprestimos();
            break;
        case 9:
            console.log("Saindo...");
            return;
        default:
            console.log("Opção inválida");
    }
    / Funções para cadastrar, listar e realizar empréstimos;
    function cadastrarLivro() {
        const titulo = prompt("Título: ");
        const dataPublicacao = new Date(prompt("Data de Publicação: "));
        const autor = prompt("Autor: ");
        const numeroPaginas = parseInt(prompt("Número de Páginas: "));
        const livro = new Livro(titulo, dataPublicacao, autor, numeroPaginas);
        livros.push(livro);
        console.log("Livro cadastrado com sucesso!");
    }
    function cadastrarRevista() {
        const titulo = prompt("Título: ");
        const dataPublicacao = new Date(prompt("Data de Publicação: "));
        const volume = parseInt(prompt("Volume: "));
        const numeroEdicao = parseInt(prompt("Número de Edição: "));
        const revista = new Revista(titulo, dataPublicacao, volume, numeroEdicao);
        revistas.push(revista);
        console.log("Revista cadastrada com sucesso!");
    }
    function cadastrarUsuario() {
        const nome = prompt("Nome: ");
        const cpf = prompt("CPF: ");
        const usuario = new Usuario(nome, cpf);
        usuarios.push(usuario);
        console.log("Usuário cadastrado com sucesso!");
    }
    function realizarEmprestimo() {
        const livroId = parseInt(prompt("ID do Livro: "));
        const usuarioId = parseInt(prompt("ID do Usuário: "));
        const livro = livros.find((livro) => (link), unavailable) === livroId;
        const usuario = usuarios.find((usuario) => (link), unavailable) === usuarioId;
        if (livro && usuario) {
            const emprestimo = new Emprestimo(livro, usuario);
            emprestimos.push(emprestimo);
            console.log("Empréstimo realizado com sucesso!");
        }
        else {
            console.log("Livro ou usuário não encontrado!");
        }
    }
    function listarLivros() {
        console.log("Livros:");
        livros.forEach((livro) => console.log(livro.obterInformacoes()));
    }
    function listarRevistas() {
        console.log("Revistas:");
        revistas.forEach((revista) => console.log(revista.obterInformacoes()));
    }
    function listarUsuarios() {
        console.log("Usuários:");
        usuarios.forEach((usuario) => console.log(usuario.obterInformacoes()));
    }
    function listarEmprestimos() {
        console.log("Empréstimos:");
        emprestimos.forEach((emprestimo) => console.log(emprestimo.obterInformacoes()));
    }
    menuPrincipal();
}
// Funções para cadastrar, listar e realizar empréstimos
