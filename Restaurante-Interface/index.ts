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