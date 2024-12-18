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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cpf, dataAdmissao) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataAdmissao = dataAdmissao;
    }
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cpf, dataAdmissao, departamento, bonificacao) {
        var _this = _super.call(this, nome, cpf, dataAdmissao) || this;
        _this.departamento = departamento;
        _this.bonificacao = bonificacao;
        return _this;
    }
    Gerente.prototype.calcularSalario = function () {
        throw new Error("Erro na Implementação");
    };
    return Gerente;
}(Funcionario));
var Horista = /** @class */ (function (_super) {
    __extends(Horista, _super);
    function Horista(nome, cpf, dataAdmissao, valorHora) {
        var _this = _super.call(this, nome, cpf, dataAdmissao) || this;
        _this.valorHora = valorHora;
        _this.horasTrabalhadas = 0;
        return _this;
    }
    Horista.prototype.calcularSalario = function () {
        return this.valorHora * this.horasTrabalhadas;
    };
    return Horista;
}(Funcionario));
var Assalariado = /** @class */ (function (_super) {
    __extends(Assalariado, _super);
    function Assalariado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Assalariado.prototype.calcularSalario = function () {
        return 2000;
    };
    return Assalariado;
}(Funcionario));
var Comissionado = /** @class */ (function (_super) {
    __extends(Comissionado, _super);
    function Comissionado(nome, cpf, dataAdmissao, comissao, vendas) {
        var _this = _super.call(this, nome, cpf, dataAdmissao) || this;
        _this.comissao = comissao;
        _this.vendas = vendas;
        return _this;
    }
    return Comissionado;
}(Funcionario));
var Ativo = /** @class */ (function () {
    function Ativo() {
    }
    return Ativo;
}());
var BancoDeDados = /** @class */ (function () {
    function BancoDeDados() {
        this.funcionarios = [];
    }
    BancoDeDados.prototype.adicionarFuncionario = function (funcionario) {
        this.funcionarios.push(funcionario);
    };
    return BancoDeDados;
}());
var banco = new BancoDeDados();
var funcionario1 = new Horista('João', '12345678910', new Date(2024, 11, 25), 20);
var gerente1 = new Gerente('Maria', '98765432109', new Date(2020, 1, 1), 'Financeiro', 1000);
