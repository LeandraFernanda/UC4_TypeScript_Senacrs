var Produto = /** @class */ (function () {
    function Produto(codigo, nome, preco, descricao) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
    return Produto;
}());
var Cliente = /** @class */ (function () {
    function Cliente(codigo, nome, endereco, telefone) {
        this.codigo = codigo;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    return Cliente;
}());
var ItemPedido = /** @class */ (function () {
    function ItemPedido(produto, quantidade, precoUnitario) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }
    return ItemPedido;
}());
var Pedido = /** @class */ (function () {
    function Pedido(numero, data, cliente, itens // Inicializa a lista de itens como um array vazio
    ) {
        if (itens === void 0) { itens = []; }
        this.numero = numero;
        this.data = data;
        this.cliente = cliente;
        this.itens = itens;
    }
    // Método para calcular o valor total do pedido
    Pedido.prototype.calcularTotal = function () {
        return this.itens.reduce(function (total, item) { return total + item.quantidade * item.precoUnitario; }, 0);
    };
    return Pedido;
}());
// Criando produtos, clientes e itens
var produto1 = new Produto(1, 'Camiseta', 29.99, 'Camiseta algodão');
var cliente1 = new Cliente(1, 'João Silva', 'Rua A, 123', '(11) 98765-4321');
var item1 = new ItemPedido(produto1, 2, 29.99);
// Criando um pedido
var pedido1 = new Pedido(1, new Date(), cliente1, [item1]);
// Calculando o total do pedido
var totalPedido = pedido1.calcularTotal();
console.log('Total do pedido:', totalPedido);
