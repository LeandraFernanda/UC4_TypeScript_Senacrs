"use strict";
class paciente {
    constructor(id, nome, dataNascimento, CPF, convenio, historicoMedico) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.CPF = CPF;
        this.convenio = convenio;
        this.historicoMedico = historicoMedico;
    }
}
class medico {
    constructor(id, nome, CRM, especialidade) {
        this.id = id;
        this.nome = nome;
        this.CRM = CRM;
        this.especialidade = especialidade;
    }
}
class internação {
    constructor(id, paciente, medico, dataEntrada, dataSaida, diagnostico, procedimentos) {
        this.id = id;
        this.paciente = paciente;
        this.medico = medico;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
        this.diagnostico = diagnostico;
        this.procedimentos = procedimentos;
    }
    calcularGasto() {
        let gasto = 0;
        for (let procedimento of this.procedimentos) {
            gasto += procedimento.valor;
        }
        return gasto;
    }
}
class estoque {
    constructor(id, nome, quantidade, tipo) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.tipo = tipo;
    }
    descontarEstoque(quantidade) {
        if (this.quantidade >= quantidade) {
            this.quantidade -= quantidade;
        }
        else {
            console.log("Estoque insuficiente.");
        }
    }
}
