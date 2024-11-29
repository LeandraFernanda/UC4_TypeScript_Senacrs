// Cliente.ts
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpfCnpj, tipo) {
        this.veiculos = [];
        this.nome = nome;
        this.cpfCnpj = cpfCnpj;
        this.tipo = tipo;
    }
    Cliente.prototype.adicionarVeiculo = function (placa, modelo) {
        this.veiculos.push({ placa: placa, modelo: modelo });
    };
    Cliente.prototype.removerVeiculo = function (placa) {
        this.veiculos = this.veiculos.filter(function (v) { return v.placa !== placa; });
    };
    return Cliente;
}());
var ControleDeEstoque = /** @class */ (function () {
    function ControleDeEstoque() {
    }
    ControleDeEstoque.prototype.atualizarQuantidade = function (tipo, novaQuantidade) {
        var produto = this.atualizarQuantidade;
        switch (tipo) {
            case "carro":
                console.log(" carro " + produto);
                break;
            case "moto":
                console.log("moto " + produto);
                break;
            case "caminhao":
                console.log("caminhão " + produto);
                break;
            default:
                console.log("Tipo de produto inválido.");
        }
    };
    return ControleDeEstoque;
}());
var NotaFiscal = /** @class */ (function () {
    function NotaFiscal() {
        this.itens = [];
    }
    NotaFiscal.prototype.adicionarItem = function (produto, quantidade, valorUnitario) {
        var valorTotalItem = quantidade * valorUnitario;
        this.itens.push({ produto: produto, quantidade: quantidade, valorUnitario: valorUnitario, valorTotal: valorTotalItem });
        this.valorTotal += valorTotalItem;
    };
    return NotaFiscal;
}());
var cliente1 = new Cliente("João Silva", "12345678901", "comum");
cliente1.adicionarVeiculo("ABC1234", "Gol");
