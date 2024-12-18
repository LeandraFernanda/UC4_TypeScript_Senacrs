class Peca {
    constructor(
        public id: number,
        public nome: string,
        public descricao: string,
        public tamanho: string,
        public cor: string,
        public preco: number,
        public quantidade: number
    ) {}
}

class Cliente {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public telefone: string,
        public endereco: string
    ) {}
}

class Venda {
    constructor(
        public id: number,
        public cliente: Cliente,
        public data: Date,
        public itens: { peça: Peca, quantidade: number }[],
        public valorTotal: number
    ) {
        this.valorTotal = this.calcularValorTotal();
    }
    private calcularValorTotal(): number {
        return this.itens.reduce((total, item) => total + item.peça.preco * item.quantidade, 0);
    }
}


