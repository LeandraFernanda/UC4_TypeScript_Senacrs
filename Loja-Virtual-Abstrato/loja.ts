class Produto {
    constructor(
        public codigo: number,
        public nome: string,
        public preco: number,
        public descricao: string
    ) {}
}

class Cliente {
    constructor(
        public codigo: number,
        public nome: string,
        public endereco: string,
        public telefone: string
    ) {}
}

class ItemPedido {
    constructor(
        public produto: Produto,
        public quantidade: number,
        public precoUnitario: number
    ) {}
}

class Pedido {
    constructor(
        public numero: number,
        public data: Date,
        public cliente: Cliente,
        public itens: ItemPedido[] = [] // Inicializa a lista de itens como um array vazio
    ) {}

    // Método para calcular o valor total do pedido
    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + item.quantidade * item.precoUnitario, 0);
    }
}
// Criando produtos, clientes e itens
const produto1 = new Produto(1, 'Camiseta', 29.99, 'Camiseta algodão');
const cliente1 = new Cliente(1, 'João Silva', 'Rua A, 123', '(11) 98765-4321');
const item1 = new ItemPedido(produto1, 2, 29.99);

// Criando um pedido
const pedido1 = new Pedido(1, new Date(), cliente1, [item1]);

// Calculando o total do pedido
const totalPedido = pedido1.calcularTotal();
console.log('Total do pedido:', totalPedido);
