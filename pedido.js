"use strict";
/*class Pedido {
    constructor(
        public id: number,
        public cliente: Cliente,
        public data: Date,
        public itens: { peça: Peca; quantidade: number; }[],
        public status: string,
        public valorTotal: number
    );
}*/
class Pedido {
    constructor(id, cliente, data, itens, status, valorTotal) {
        this.id = id;
        this.cliente = cliente;
        this.data = data;
        this.itens = itens;
        this.status = status;
        this.valorTotal = valorTotal;
    }
}
