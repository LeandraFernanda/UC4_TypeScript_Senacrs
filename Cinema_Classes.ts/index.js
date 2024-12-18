"use strict";
class Sessao {
    constructor(id, filme, sala, horario, assentos) {
        this.id = id;
        this.filme = filme;
        this.sala = sala;
        this.horario = horario;
        this.assentos = assentos;
    }
}
class Reserva {
    constructor(id, cliente, sessao, assentos) {
        this.id = id;
        this.cliente = cliente;
        this.sessao = sessao;
        this.assentos = assentos;
    }
}
class Relatorio {
    constructor(periodo, totalVendas, filmesMaisAssistidos, salasMaisUtilizadas) {
        this.periodo = periodo;
        this.totalVendas = totalVendas;
        this.filmesMaisAssistidos = filmesMaisAssistidos;
        this.salasMaisUtilizadas = salasMaisUtilizadas;
    }
    getTotalValorVendido() {
        return this.totalVendas;
    }
}
