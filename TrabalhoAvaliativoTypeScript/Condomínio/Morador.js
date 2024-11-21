var Morador = /** @class */ (function () {
    function Morador(nome, apartamento, telefone, email) {
        this.nome = nome;
        this.apartamento = apartamento;
        this.telefone = telefone;
        this.email = email;
        this.contatosEmergencia = [];
        this.historicoPagamentos = [];
        this.permissoesAcesso = [];
    }
    return Morador;
}());
var Aluguel = /** @class */ (function () {
    function Aluguel(imovel, inquilino, valor, dataInicio, dataVencimento, status) {
        this.imovel = imovel;
        this.inquilino = inquilino;
        this.valor = valor;
        this.dataInicio = dataInicio;
        this.dataVencimento = dataVencimento;
        this.status = status;
    }
    return Aluguel;
}());
var Manutencao = /** @class */ (function () {
    function Manutencao() {
    }
    Manutencao.prototype.construtor = function (descricao, dataSolicitacao, custo, status, responsavel) {
        this.descricao = descricao;
        this.dataSolicitacao = dataSolicitacao;
        this.custo = custo;
        this.status = status;
        this.responsavel = responsavel;
    };
    return Manutencao;
}());
var Servico = /** @class */ (function () {
    function Servico(tipo, frequencia, contratado, custo) {
        this.tipo = tipo;
        this.frequencia = frequencia;
        this.contratado = contratado;
        this.custo = custo;
    }
    return Servico;
}());
var Relatorio = /** @class */ (function () {
    function Relatorio(tipo, periodo, dadosGerados) {
        this.tipo = tipo;
        this.periodo = periodo;
        this.dadosGerados = dadosGerados;
    }
    return Relatorio;
}());
var Ferramenta = /** @class */ (function () {
    function Ferramenta(nome, descricao, funcionalidade) {
        this.nome = nome;
        this.descricao = descricao;
        this.funcionalidade = funcionalidade;
    }
    return Ferramenta;
}());
var Seguranca = /** @class */ (function () {
    function Seguranca(moduloControleAcesso, monitoramentoCameras, alarmes) {
        this.moduloControleAcesso = moduloControleAcesso;
        this.monitoramentoCameras = monitoramentoCameras;
        this.alarmes = alarmes;
    }
    return Seguranca;
}());
var GestaoPagamentos = /** @class */ (function () {
    function GestaoPagamentos() {
        this.emissaoBoletos = [];
        this.registroPagamentos = [];
        this.conciliacaoBancaria = [];
    }
    return GestaoPagamentos;
}());
// Criando um morador
var morador1 = new Morador('João Silva', 101, 123456789, 'joaosilva@email.com');
// Criando um aluguel
var aluguel1 = new Aluguel('Apartamento 101', 'morador1', 1500, new Date('01-03-2023'), new Date('10-12-2023'), 'Ativo');
// Adicionando um contato de emergência ao morador
morador1.contatosEmergencia.push(987654321);
console.log(morador1);
console.log(aluguel1);
