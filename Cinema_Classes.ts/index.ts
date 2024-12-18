class Sessao {
    constructor(
        public id: number,
        public filme: string,
        public sala: number,
        public horario: Date,
        public assentos: boolean[][]
    ) {}
}

class Reserva {
    constructor(
        public id: number,
        public cliente: string,
        public sessao: Sessao,
        public assentos: number[][]
    ) {}
}

class Relatorio {
    constructor(
        public periodo: string,
        public totalVendas: number,
        public filmesMaisAssistidos: { filme: string, quantidade: number }[],
        public salasMaisUtilizadas: { sala: number, quantidade: number }[]
    ) {}

    getTotalValorVendido(): number {
        return this.totalVendas;
    }
}