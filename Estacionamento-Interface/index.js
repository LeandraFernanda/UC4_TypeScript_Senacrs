// Implementando a classe Veiculo
var Veiculo = /** @class */ (function () {
    function Veiculo(placa, modelo, cor) {
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
    }
    return Veiculo;
}());
// Implementando a classe Vaga
var Vaga = /** @class */ (function () {
    function Vaga(numero, status) {
        if (status === void 0) { status = 'livre'; }
        this.numero = numero;
        this.status = status;
        this.veiculo = null;
    }
    Vaga.prototype.ocupar = function (veiculo) {
        this.veiculo = veiculo;
        this.status = 'ocupada';
    };
    Vaga.prototype.desocupar = function () {
        this.veiculo = null;
        this.status = 'livre';
    };
    return Vaga;
}());
// Implementando a classe Estacionamento
var Estacionamento = /** @class */ (function () {
    function Estacionamento(nome, endereco, vagas) {
        this.nome = nome;
        this.endereco = endereco;
        this.vagas = vagas;
    }
    Estacionamento.prototype.encontrarVagaLivre = function () {
        return this.vagas.find(function (vaga) { return vaga.status === 'livre'; }) || null;
    };
    return Estacionamento;
}());
// Implementando a classe Entrada
var Entrada = /** @class */ (function () {
    function Entrada(data, hora, veiculo, vaga) {
        this.data = data;
        this.hora = hora;
        this.veiculo = veiculo;
        this.vaga = vaga;
        if (vaga.status !== 'livre') {
            throw new Error('Vaga já está ocupada');
        }
        vaga.ocupar(veiculo);
    }
    return Entrada;
}());
// Implementando a classe Saida
var Saida = /** @class */ (function () {
    function Saida(data, hora, veiculo, vaga) {
        this.data = data;
        this.hora = hora;
        this.veiculo = veiculo;
        this.vaga = vaga;
        if (vaga.status !== 'ocupada' || vaga.veiculo !== veiculo) {
            throw new Error('Veículo não está nesta vaga');
        }
        vaga.desocupar();
        this.valorAPagar = this.calcularValorAPagar(vaga, data, hora);
    }
    Saida.prototype.calcularValorAPagar = function (vaga, dataSaida, horaSaida) {
        var tarifaPorHora = 5; // Tarifa por hora
        var tarifaDiaria = 50; // Tarifa diária
        var dataEntrada = new Date(); // Aqui você deve definir como obter a data de entrada
        var horaEntrada = new Date(); // Aqui você deve definir como obter a hora de entrada
        var duracaoEstadia = (dataSaida.getTime() - dataEntrada.getTime()) / (1000 * 3600 * 24); // Duração em dias
        var horasAdicionais = (horaSaida.getTime() - horaEntrada.getTime()) / (1000 * 3600); // Duração em horas
        var valorTotal = 0;
        if (duracaoEstadia >= 1) {
            valorTotal += Math.floor(duracaoEstadia) * tarifaDiaria; // Cálculo para dias completos
            if (horasAdicionais > 0) {
                valorTotal += tarifaPorHora * horasAdicionais; // Cálculo para horas adicionais
            }
        }
        else {
            valorTotal += tarifaPorHora * horasAdicionais; // Cálculo para estadias menores que um dia
        }
        return valorTotal;
    };
    return Saida;
}());
// Em estacionamento.ts
var estacionamento = new Estacionamento('Estacionamento Central', 'Rua das Flores, 123', [
    new Vaga(1, 'livre'),
    new Vaga(2, 'livre'),
]);
var carro = new Veiculo('ABC-1234', 'Gol', 'Prata');
var vagaLivre = estacionamento.encontrarVagaLivre();
if (vagaLivre) {
    var entrada = new Entrada(new Date(), new Date(), carro, vagaLivre);
    console.log('Veículo estacionado na vaga', vagaLivre.numero);
    // Simulando a saída
    var saida = new Saida(new Date(), new Date(), carro, vagaLivre);
    console.log('Veículo saiu da vaga', vagaLivre.numero);
    console.log('Valor a pagar:', saida.valorAPagar);
}
