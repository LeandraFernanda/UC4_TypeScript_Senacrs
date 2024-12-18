class paciente {
    constructor(
        public id: number,
        public nome: string,
        public dataNascimento: Date,
        public CPF: string,
        public convenio: string,
        public historicoMedico: { data: Date, descricao: string, diagnostico: string }[]
    ) {}
}

class medico {
    constructor(
        public id: number,
        public nome: string,
        public CRM: string,
        public especialidade: string
    ) {}
}

class internação {
    constructor(
        public id: number,
        public paciente: paciente,
        public medico: medico,
        public dataEntrada: Date,
        public dataSaida: Date | null,
        public diagnostico: string,
        public procedimentos: { data: Date, descricao: string, valor: number }[]
    ) {}
    

    public calcularGasto(): number {
        let gasto = 0;
        for (let procedimento of this.procedimentos) {
            gasto += procedimento.valor;
        }
        return gasto;
    }
}

class estoque {
    constructor(
        public id: number,
        public nome: string,
        public quantidade: number,
        public tipo: string
    ) {}

    public descontarEstoque(quantidade: number): void {
        if (this.quantidade >= quantidade) {
            this.quantidade -= quantidade;
        } else {
            console.log("Estoque insuficiente.");
        }
    }
}