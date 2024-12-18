var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Prato = /** @class */ (function () {
    function Prato(nome, preco, ingredientes) {
        this._nome = nome;
        this._preco = preco;
        this._ingredientes = ingredientes;
    }
    Object.defineProperty(Prato.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Prato.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Prato.prototype, "ingredientes", {
        get: function () {
            return this._ingredientes;
        },
        set: function (ingredientes) {
            this._ingredientes = ingredientes;
        },
        enumerable: false,
        configurable: true
    });
    return Prato;
}());
var Entrada = /** @class */ (function (_super) {
    __extends(Entrada, _super);
    function Entrada() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Entrada;
}(Prato));
var PratoPrincipal = /** @class */ (function (_super) {
    __extends(PratoPrincipal, _super);
    function PratoPrincipal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PratoPrincipal;
}(Prato));
var Sobremesa = /** @class */ (function (_super) {
    __extends(Sobremesa, _super);
    function Sobremesa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sobremesa;
}(Prato));
var ItemPedido = /** @class */ (function () {
    function ItemPedido(prato, quantidade) {
        this.prato = prato;
        this.quantidade = quantidade;
        if (quantidade <= 0) {
            throw new Error("Quantidade de itens deve ser maior que zero.");
        }
    }
    return ItemPedido;
}());
var Pedido = /** @class */ (function () {
    function Pedido(numero, data, mesa, itens) {
        if (itens === void 0) { itens = []; }
        this.numero = numero;
        this.data = data;
        this.mesa = mesa;
        this.itens = itens;
    }
    Pedido.prototype.calcularValorTotal = function () {
        return this.itens.reduce(function (total, item) { return total + item.prato.preco * item.quantidade; }, 0);
    };
    return Pedido;
}());
var Mesa = /** @class */ (function () {
    function Mesa(numero, capacidade, status) {
        this.numero = numero;
        this.capacidade = capacidade;
        this.status = status;
        if (capacidade <= 0) {
            throw new Error("Capacidade da mesa deve ser maior que zero.");
        }
    }
    Mesa.prototype.alterarStatus = function () {
        this.status = this.status === 'livre' ? 'ocupada' : 'livre';
    };
    return Mesa;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
    return Cliente;
}());
var Garcom = /** @class */ (function () {
    function Garcom(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
    }
    return Garcom;
}());
// Em index.ts
var mesa1 = new Mesa(1, 4, 'livre');
mesa1.alterarStatus();
var pratoPrincipal = new PratoPrincipal('Bife à Parmegiana', 39.90, ['bife', 'molho de tomate', 'queijo']);
var itemPedido = new ItemPedido(pratoPrincipal, 2);
var pedido1 = new Pedido(1, new Date(), mesa1, [itemPedido]);
var total = pedido1.calcularValorTotal();
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
