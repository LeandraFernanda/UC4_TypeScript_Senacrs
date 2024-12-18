"use strict";
class Veiculo {
    constructor(placa, modelo, cor) {
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
    }
}
class Cliente {
    constructor(nome, cpf, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}
class Estacionamento {
    constructor(vagas, valorHora) {
        this.vagas = vagas;
        this.valorHora = valorHora;
        this.vagasOcupadas = 0;
        this.veiculos = []; // Correção na definição do array
    }
    registrarEntrada(veiculo) {
        if (this.vagasOcupadas < this.vagas) {
            this.veiculos.push(veiculo);
            this.vagasOcupadas++;
            console.log(`Veículo ${veiculo.placa} registrado com sucesso.`);
        }
        else {
            console.log("Não há vagas disponíveis.");
        }
    }
    registrarSaida(placa) {
        const index = this.veiculos.findIndex(v => v.placa === placa);
        if (index !== -1) {
            this.veiculos.splice(index, 1);
            this.vagasOcupadas--;
            console.log(`Veículo ${placa} removido com sucesso.`);
        }
        else {
            console.log("Veículo não encontrado.");
        }
    }
}
class Ticket {
    constructor(veiculo) {
        this.veiculo = veiculo;
        this.id = Date.now();
        this.horaEntrada = new Date();
    }
}
// Exemplo de uso
const estacionamento = new Estacionamento(10, 5);
const carro = new Veiculo('ABC1234', 'Gol', 'Prata');
estacionamento.registrarEntrada(carro);
// ... outras operações
