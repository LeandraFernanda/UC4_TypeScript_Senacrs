class Produto {
    nome: string;
    codigo: number;
    quantidade: number;
    preco: number;
    categoria: string;

    constructor(nome: string, codigo: number, quantidade: number, preco: number, categoria: string) {
        this.nome = nome;
        this.codigo = codigo;
        this.quantidade = quantidade;
        this.preco = preco;
        this.categoria = categoria;
    }

    calcularValorTotalEmEstoque(): number {
        return this.quantidade * this.preco;
    }

    verificarEstoqueSuficiente(quantidadeVendida: number): boolean {
        return this.quantidade >= quantidadeVendida;
    }
}
class Cliente {
    nome: string;
    CPF: number;
    email: string;
    telefone: number;
    pontos: number;

    constructor(nome: string, CPF: number, email: string, telefone: number) {
        this.nome = nome;
        this.CPF = CPF;
        this.email = email;
        this.telefone = telefone;
        this.pontos = 0;
    }

    adicionarPontos(pontos: number): void {
        this.pontos += pontos;
    }

    resgatarBrinde(valorBrinde: number): boolean {
        if (this.pontos >= valorBrinde) {
            this.pontos -= valorBrinde;
            return true;
        }
        return false;
    }
}
class Venda {
    data: Date;
    cliente: Cliente;
    itens: { produto: Produto, quantidade: number, valor: number }[];

    constructor(cliente: Cliente) {
        this.data = new Date();
        this.cliente = cliente;
        this.itens = [];
    }

    adicionarItem(produto: Produto, quantidade: number): void {
        const valorItem = produto.preco * quantidade;
        this.itens.push({ produto, quantidade, valor: valorItem });
        produto.quantidade -= quantidade;
        this.cliente.adicionarPontos(valorItem);
    }

    calcularValorTotal(): number {
        return this.itens.reduce((total, item) => total + item.valor, 0);
    }
}
class SistemaGerenciamento {
    private produtos: Produto[] = [];
    private clientes: Cliente[] = [];
    private vendas: Venda[] = [];

    
}



const produto1 = new Produto('Camiseta', 123, 101, 19.99, 'Roupas');
const cliente1 = new Cliente('João da Silva', 123-456-789 - 12, 'joao@email.com', 119876545);


const venda1 = new Venda(cliente1);
venda1.adicionarItem(produto1, 2);


console.log('Valor total da venda:', venda1.calcularValorTotal());