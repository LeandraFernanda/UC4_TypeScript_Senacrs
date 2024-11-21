var Produto = /** @class */ (function () {
    function Produto(nome, codigo, quantidade, preco, categoria) {
        this.nome = nome;
        this.codigo = codigo;
        this.quantidade = quantidade;
        this.preco = preco;
        this.categoria = categoria;
    }
    Produto.prototype.calcularValorTotalEmEstoque = function () {
        return this.quantidade * this.preco;
    };
    Produto.prototype.verificarEstoqueSuficiente = function (quantidadeVendida) {
        return this.quantidade >= quantidadeVendida;
    };
    return Produto;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, CPF, email, telefone) {
        this.nome = nome;
        this.CPF = CPF;
        this.email = email;
        this.telefone = telefone;
        this.pontos = 0;
    }
    Cliente.prototype.adicionarPontos = function (pontos) {
        this.pontos += pontos;
    };
    Cliente.prototype.resgatarBrinde = function (valorBrinde) {
        if (this.pontos >= valorBrinde) {
            this.pontos -= valorBrinde;
            return true;
        }
        return false;
    };
    return Cliente;
}());
var Venda = /** @class */ (function () {
    function Venda(cliente) {
        this.data = new Date();
        this.cliente = cliente;
        this.itens = [];
    }
    Venda.prototype.adicionarItem = function (produto, quantidade) {
        var valorItem = produto.preco * quantidade;
        this.itens.push({ produto: produto, quantidade: quantidade, valor: valorItem });
        produto.quantidade -= quantidade;
        this.cliente.adicionarPontos(valorItem);
    };
    Venda.prototype.calcularValorTotal = function () {
        return this.itens.reduce(function (total, item) { return total + item.valor; }, 0);
    };
    return Venda;
}());
var SistemaGerenciamento = /** @class */ (function () {
    function SistemaGerenciamento() {
        this.produtos = [];
        this.clientes = [];
        this.vendas = [];
    }
    return SistemaGerenciamento;
}());
var produto1 = new Produto('Camiseta', 123, 101, 19.99, 'Roupas');
var cliente1 = new Cliente('João da Silva', 123 - 456 - 789 - 12, 'joao@email.com', 119876545);
var venda1 = new Venda(cliente1);
venda1.adicionarItem(produto1, 2);
console.log('Valor total da venda:', venda1.calcularValorTotal());
