// Classes base
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpfCnpj, endereco, telefone) {
        this.nome = nome;
        this.cpfCnpj = cpfCnpj;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    return Cliente;
}());
var Veiculo = /** @class */ (function () {
    function Veiculo(placa, modelo, capacidadeDeCarga, tipoCarga, status) {
        this.placa = placa;
        this.modelo = modelo;
        this.capacidadeDeCarga = capacidadeDeCarga;
        this.tipoCarga = tipoCarga;
        this.status = status;
    }
    return Veiculo;
}());
var Carga = /** @class */ (function () {
    function Carga(peso, volume, tipo, valor, origem, destino, datadeEmbarque, datadeEntrega) {
        this.peso = peso;
        this.volume = volume;
        this.tipo = tipo;
        this.valor = valor;
        this.origem = origem;
        this.destino = destino;
        this.datadeEmbarque = datadeEmbarque;
        this.datadeEntrega = datadeEntrega;
    }
    return Carga;
}());
var Motorista = /** @class */ (function () {
    function Motorista(nome, CNH, categorias, tempoDeExperiencia, veiculoAtribuido) {
        this.nome = nome;
        this.CNH = CNH;
        this.categorias = categorias;
        this.tempoDeExperiencia = tempoDeExperiencia;
        this.veiculoAtribuido = veiculoAtribuido;
    }
    return Motorista;
}());
var Rota = /** @class */ (function () {
    function Rota(origem, destino, distancia, tempoEstimadoDeViagem, listaDeVeiculosDeRota) {
        this.origem = origem;
        this.destino = destino;
        this.distancia = distancia;
        this.tempoEstimadoDeViagem = tempoEstimadoDeViagem;
        this.listaDeVeiculosDeRota = listaDeVeiculosDeRota;
    }
    return Rota;
}());
var Entrega = /** @class */ (function () {
    function Entrega(cliente, dataDaEntrega, horaPrevista, rota, status, carga, veiculo, motorista, observacao) {
        this.rota = []; // Array de pontos da rota
        this.carga = [];
        this.veiculo = [];
        this.cliente = cliente;
        this.dataDaEntrega = dataDaEntrega;
        this.horaPrevista = horaPrevista;
        this.rota = rota;
        this.status = status;
        this.carga = carga;
        this.veiculo = veiculo;
        this.motorista = motorista;
        this.observacao = observacao;
    }
    return Entrega;
}());
var NotaFiscal = /** @class */ (function () {
    function NotaFiscal(codigo, dataDeEmissao, cliente, itens, valorTotal, formaDePagamento) {
        this.cliente = [];
        this.codigo = codigo;
        this.dataDeEmissao = dataDeEmissao;
        this.cliente = cliente;
        this.itens = itens;
        this.valorTotal = valorTotal;
        this.formaDePagamento = formaDePagamento;
    }
    return NotaFiscal;
}());
var cliente = new Cliente('José', 12345678901, 'Rua 1, 123', 1234567890);
var carga = new Carga(10, 100, 'Perigosa', 200, 'Perigosa', 'Hospital', new Date("21/08/2024"), new Date("21/08/2024"));
