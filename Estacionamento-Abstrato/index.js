var Veiculo = /** @class */ (function () {
    function Veiculo(placa, modelo, cor) {
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
    }
    return Veiculo;
}());
var Vaga = /** @class */ (function () {
    function Vaga() {
    }
    return Vaga;
}()); // ou    
// public status: 'livre' |        
//  'ocupa
var Estacionamento = /** @class */ (function () {
    function Estacionamento(nome, endereco, vagas) {
        this.nome = nome;
        this.endereco = endereco;
        this.vagas = vagas;
        this.nome = nome;
        this.endereco = endereco;
        this.vagas = vagas;
    }
    return Estacionamento;
}());
var Entrada = /** @class */ (function () {
    function Entrada(data, hora, veiculo, vaga) {
        this.data = data;
        this.hora = hora;
        this.veiculo = veiculo;
        this.vaga = vaga;
        if (vaga.status !== 'livre') {
            throw new Error('Vaga já está ocupada');
        }
        vaga.veiculo = veiculo;
    }
    return Entrada;
}());
var Saida = /** @class */ (function () {
    function Saida(data, hora, veiculo, vaga) {
        this.data = data;
        this.hora = hora;
        this.veiculo = veiculo;
        this.vaga = vaga;
        if (vaga.status !== 'ocupada' || vaga.veiculo !== veiculo) {
            throw new Error('Veículo não está nesta vaga');
        }
        vaga.veiculo = null;
        // Calcular valor a pagar aqui, baseado em um tarifário
        this.valorAPagar = this.calcularValorAPagar(vaga, data, hora);
    }
    Saida.prototype.calcularValorAPagar = function (vaga, dataSaida, horaSaida) {
        // Lógica para calcular o valor a pagar, considerando tarifa por hora, dia, etc.
        // ...
        return 10; // Valor exemplo
    };
    return Saida;
}());
// Em estacionamento.ts
var estacionamento = new Estacionamento('Estacionamento Central', 'Rua das Flores, 123', [
    new Vaga(1, 'livre'),
    new Vaga(2, 'livre'),
    // ...
]);
var carro = new Veiculo('ABC-1234', 'Gol', 'Prata');
var vagaLivre = estacionamento.encontrarVagaLivre();
if (vagaLivre) {
    var entrada = new Entrada(new Date(), new Date(), carro, vagaLivre);
    console.log('Veículo estacionado na vaga', vagaLivre.numero);
    // Simulando a saída
    var saida = new Saida(new Date(), new Date(), carro, vagaLivre);
    console.log('Valor a pagar:', saida.valorAPagar);
}
else {
    console.log('Não há vagas disponíveis');
}
