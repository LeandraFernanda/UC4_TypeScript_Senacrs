// Classe ItemBiblioteca (classe pai)
class ItemBiblioteca {
    protected titulo: string;
    protected dataPublicacao: Date;
  
    constructor(titulo: string, dataPublicacao: Date) {
      this.titulo = titulo;
      this.dataPublicacao = dataPublicacao;
    }
  
    obterInformacoes(): string {
      return `Título: ${this.titulo} - Data de Publicação: ${this.dataPublicacao.toLocaleDateString()}`;
    }
  }
  
  // Classe Livro (classe filha)
  class Livro extends ItemBiblioteca {
    private autor: string;
    private numeroPaginas: number;
  
    constructor(titulo: string, dataPublicacao: Date, autor: string, numeroPaginas: number) {
      super(titulo, dataPublicacao);
      this.autor = autor;
      this.numeroPaginas = numeroPaginas;
    }
  
    obterInformacoes(): string {
      return `${super.obterInformacoes()} - Autor: ${this.autor} - Número de Páginas: ${this.numeroPaginas}`;
    }
  }
  
  // Classe Revista (classe filha)
  class Revista extends ItemBiblioteca {
    private volume: number;
    private numeroEdicao: number;
  
    constructor(titulo: string, dataPublicacao: Date, volume: number, numeroEdicao: number) {
      super(titulo, dataPublicacao);
      this.volume = volume;
      this.numeroEdicao = numeroEdicao;
    }
  
    obterInformacoes(): string {
      return `${super.obterInformacoes()} - Volume: ${this.volume} - Número de Edição: ${this.numeroEdicao}`;
    }
  }
  
  // Classe Usuario
  class Usuario {
    private nome: string;
    private matricula: number;
  
    constructor(nome: string, matricula: number) {
      this.nome = nome;
      this.matricula = matricula;
    }
  
    obterInformacoes(): string {
      return `Nome: ${this.nome} - Matrícula: ${this.matricula}`;
    }
  }
  
  // Classe Emprestimo
  class Emprestimo {
    private dataDoEmprestimo: Date;
    private dataDaDevoluçãoPrevista: Date;
    private usuario: Usuario;
    private itemEmprestado: ItemBiblioteca;
  
    constructor(dataDoEmprestimo: Date, dataDaDevoluçãoPrevista: Date, usuario: Usuario, itemEmprestado: ItemBiblioteca) {
      this.dataDoEmprestimo = dataDoEmprestimo;
      this.dataDaDevoluçãoPrevista = dataDaDevoluçãoPrevista;
      this.usuario = usuario;
      this.itemEmprestado = itemEmprestado;
    }
  
    obterInformacoes(): string {
      return `Data do Empréstimo: ${this.dataDoEmprestimo.toLocaleDateString()} - Data de Devolução Prevista: ${this.dataDaDevoluçãoPrevista.toLocaleDateString()} - Usuário: ${this.usuario.obterInformacoes()} - Item Emprestado: ${this.itemEmprestado.obterInformacoes()}`;
    }
  }
  
  // Arrays para armazenar dados
  let livros: Livro[] = [];
  let revistas: Revista[] = [];
  let usuarios: Usuario[] = [];
  let emprestimos: Emprestimo[] = [];
  
  // Menu principal
  function menuPrincipal(): void {
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
  
    const opcao: number = parseInt(prompt("Escolha uma opção: "));
  
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
    / Funções para cadastrar, listar e realizar empréstimos
function cadastrarLivro(): void {
  const titulo: string = prompt("Título: ");
  const dataPublicacao: Date = new Date(prompt("Data de Publicação: "));
  const autor: string = prompt("Autor: ");
  const numeroPaginas: number = parseInt(prompt("Número de Páginas: "));

  const livro: Livro = new Livro(titulo, dataPublicacao, autor, numeroPaginas);
  livros.push(livro);

  console.log("Livro cadastrado com sucesso!");
}

function cadastrarRevista(): void {
  const titulo: string = prompt("Título: ");
  const dataPublicacao: Date = new Date(prompt("Data de Publicação: "));
  const volume: number = parseInt(prompt("Volume: "));
  const numeroEdicao: number = parseInt(prompt("Número de Edição: "));

  const revista: Revista = new Revista(titulo, dataPublicacao, volume, numeroEdicao);
  revistas.push(revista);

  console.log("Revista cadastrada com sucesso!");
}

function cadastrarUsuario(): void {
  const nome: string = prompt("Nome: ");
  const cpf: string = prompt("CPF: ");

  const usuario: Usuario = new Usuario(nome, cpf);
  usuarios.push(usuario);

  console.log("Usuário cadastrado com sucesso!");
}

function realizarEmprestimo(): void {
  const livroId: number = parseInt(prompt("ID do Livro: "));
  const usuarioId: number = parseInt(prompt("ID do Usuário: "));

  const livro: Livro | undefined = livros.find((livro) => (link unavailable) === livroId);
  const usuario: Usuario | undefined = usuarios.find((usuario) => (link unavailable) === usuarioId);

  if (livro && usuario) {
    const emprestimo: Emprestimo = new Emprestimo(livro, usuario);
    emprestimos.push(emprestimo);

    console.log("Empréstimo realizado com sucesso!");
  } else {
    console.log("Livro ou usuário não encontrado!");
  }
}
    function listarLivros(): void {
        console.log("Livros:");
        livros.forEach((livro) => console.log(livro.obterInformacoes()));
      }
      
      function listarRevistas(): void {
        console.log("Revistas:");
        revistas.forEach((revista) => console.log(revista.obterInformacoes()));
      }
      
      function listarUsuarios(): void {
        console.log("Usuários:");
        usuarios.forEach((usuario) => console.log(usuario.obterInformacoes()));
      }
      
      function listarEmprestimos(): void {
        console.log("Empréstimos:");
        emprestimos.forEach((emprestimo) => console.log(emprestimo.obterInformacoes()));
      }
  
    menuPrincipal();
  }
  
  // Funções para cadastrar, listar e realizar empréstimos
 



