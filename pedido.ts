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
    constructor(
      public id: number,
      public cliente: Cliente,
      public data: Date,
      public itens: { peça: Peca; quantidade: number; }[],
      public status: string,
      public valorTotal: number
    ) {}
  }