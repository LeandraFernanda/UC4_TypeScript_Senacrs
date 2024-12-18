interface IItemPedido {
    prato: Prato;
    quantidade: number;
  }
  
  abstract class Prato {
    protected _nome: string;
    protected _preco: number;
    protected _ingredientes: string[];
  
    constructor(nome: string, preco: number, ingredientes: string[]) {
      this._nome = nome;
      this._preco = preco;
      this._ingredientes = ingredientes;
    }
  
    get nome(): string {
      return this._nome;
    }
  
    set nome(nome: string) {
      this._nome = nome;
    }
  
    get preco(): number {
      return this._preco;
    }
  
    set preco(preco: number) {
      this._preco = preco;
    }
  
    get ingredientes(): string[] {
      return this._ingredientes;
    }
  
    set ingredientes(ingredientes: string[]) {
      this._ingredientes = ingredientes;
    }
  }
  
  class Entrada extends Prato {}
  class PratoPrincipal extends Prato {}
  class Sobremesa extends Prato {}
  
  class ItemPedido implements IItemPedido {
    constructor(public prato: Prato, public quantidade: number) {
      if (quantidade <= 0) {
        throw new Error("Quantidade de itens deve ser maior que zero.");
      }
    }
  }
  
  class Pedido {
    constructor(
      public numero: number,
      public data: Date,
      public mesa: Mesa,
      public itens: ItemPedido[] = []
    ) {}
  
    calcularValorTotal(): number {
      return this.itens.reduce((total, item) => total + item.prato.preco * item.quantidade, 0);
    }
  }
  
  class Mesa {
    constructor(public numero: number, public capacidade: number, public status: 'livre' | 'ocupada') {
      if (capacidade <= 0) {
        throw new Error("Capacidade da mesa deve ser maior que zero.");
      }
    }
  
    alterarStatus(): void {
      this.status = this.status === 'livre' ? 'ocupada' : 'livre';
    }
  }
  
  class Cliente {
    constructor(public nome: string, public telefone: string) {}
  }
  
  class Garcom {
    constructor(public nome: string, public codigo: number) {}
  }
  // Em index.ts
const mesa1 = new Mesa(1, 4, 'livre');
mesa1.alterarStatus();

const pratoPrincipal = new PratoPrincipal('Bife à Parmegiana', 39.90, ['bife', 'molho de tomate', 'queijo']);
const itemPedido = new ItemPedido(pratoPrincipal, 2);

const pedido1 = new Pedido(1, new Date(), mesa1, [itemPedido]);
const total = pedido1.calcularValorTotal();

console.log('Total do pedido:', total);





































/*
interface IItemPedido {
    prato: Prato;
    quantidade: number;
}

abstract class Prato {
    private _nome: string;
    private _preco: number;
    private _ingredientes: string[];

    constructor(nome: string, preco: number, ingredientes: string[]) {
        this._nome = nome;
        this._preco = preco;
        this._ingredientes = ingredientes;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    // ... getters and setters for preco and ingredientes
}

class Entrada extends Prato {}
class PratoPrincipal extends Prato {}
class Sobremesa extends Prato {}

class ItemPedido implements IItemPedido {
    constructor(public prato: Prato, public quantidade: number) {
        if (quantidade <= 0) {
            throw new Error("Quantidade de itens deve ser maior que zero.");
        }
    }
}

class Pedido {
    constructor(
        public numero: number,
        public data: Date,
        public mesa: Mesa,
        public itens: ItemPedido[] = []
    ) {}

    calcularValorTotal(): number {
        return this.itens.reduce((total, item) => total + item.prato.preco * item.quantidade, 0);
    }
}

class Mesa {
    constructor(public numero: number, public capacidade: number, public status: 'livre' | 'ocupada') {
        if (capacidade <= 0) {
            throw new Error("Capacidade da mesa deve ser maior que zero.");
        }
    }

    alterarStatus(): void {
        this.status = this.status === 'livre' ? 'ocupada' : 'livre';
    }
}

class Cliente {
    constructor(public nome: string, public telefone: string) {}
}

class Garcom {
    constructor(public nome: string, public codigo: number) {}
}
*/