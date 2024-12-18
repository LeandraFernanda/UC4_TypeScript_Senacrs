interface IVeiculo {
    placa: string;
    modelo: string;
    cor: string;
}

// Definindo a interface para Vaga
interface IVaga {
    numero: number;
    status: 'livre' | 'ocupada';
    veiculo?: IVeiculo | null; // Opcional, pois pode não haver veículo
}

// Definindo a interface para Estacionamento
interface IEstacionamento {
    nome: string;
    endereco: string;
    vagas: IVaga[];
    encontrarVagaLivre(): IVaga | null;
}

// Implementando a classe Veiculo
class Veiculo implements IVeiculo {
    constructor(public placa: string, public modelo: string, public cor: string) {}
}

// Implementando a classe Vaga
class Vaga implements IVaga {
    public veiculo: IVeiculo | null;

    constructor(public numero: number, public status: 'livre' | 'ocupada' = 'livre') {
        this.veiculo = null;
    }

    public ocupar(veiculo: IVeiculo) {
        this.veiculo = veiculo;
        this.status = 'ocupada';
    }

    public desocupar() {
        this.veiculo = null;
        this.status = 'livre';
    }
}

// Implementando a classe Estacionamento
class Estacionamento implements IEstacionamento {
    constructor(public nome: string, public endereco: string, public vagas: IVaga[]) {}

    public encontrarVagaLivre(): IVaga | null {
        return this.vagas.find(vaga => vaga.status === 'livre') || null;
    }
}

// Implementando a classe Entrada
class Entrada {
    public dataEntrada: Date;
    public horaEntrada: Date;

    constructor(data: Date, hora: Date, public veiculo: IVeiculo, public vaga: IVaga) {
        if (vaga.status !== 'livre') {
            throw new Error('Vaga já está ocupada');
        }
        this.dataEntrada = data;
        this.horaEntrada = hora;
        vaga.ocupar(veiculo);
    }
}

// Implementando a classe Saida
class Saida {
    public valorAPagar: number;

    constructor(public data: Date, public hora: Date, public veiculo: IVeiculo, public vaga: IVaga, public entrada: Entrada) {
        if (vaga.status !== 'ocupada' || vaga.veiculo !== veiculo) {
            throw new Error('Veículo não está nesta vaga');
        }
        vaga.desocupar();
        this.valorAPagar = this.calcularValorAPagar(entrada.dataEntrada, entrada.horaEntrada, data, hora);
    }

    private calcularValorAPagar(dataEntrada: Date, horaEntrada: Date, dataSaida: Date, horaSaida: Date): number {
        const tarifaPorHora = 5; // Tarifa por hora
        const tarifaDiaria = 50; // Tarifa diária

        const duracaoEstadia = (dataSaida.getTime() - dataEntrada.getTime()) / (1000 * 3600 * 24); // Duração em dias
        const horasAdicionais = (horaSaida.getTime() - horaEntrada.getTime()) / (1000 * 3600); // Duração em horas

        let valorTotal = 0;

        if (duracaoEstadia >= 1) {
            valorTotal += Math.floor(duracaoEstadia) * tarifaDiaria; // Cálculo para dias completos
            if (horasAdicionais > 0) {
                valorTotal += tarifaPorHora * horasAdicionais; // Cálculo para horas adicionais
            }
        } else {
            valorTotal += tarifaPorHora * horasAdicionais; // Cálculo para estadias menores que um dia
        }

        return valorTotal;
    }
}

// Em estacionamento.ts
const estacionamento = new Estacionamento('Estacionamento Central', 'Rua das Flores, 123', [
    new Vaga(1, 'livre'),
    new Vaga(2, 'livre'),
]);

const carro = new Veiculo('ABC-1234', 'Gol', 'Prata');
const vagaLivre = estacionamento.en contrarVagaLivre();

if (vagaLivre) {
    const entrada = new Entrada(new Date(), new Date(), carro, vagaLivre);
    console.log('Veículo estacionado na vaga', vagaLivre.numero);

    // Simulando a saída
    const saida = new Saida(new Date(), new Date(), carro, vagaLivre, entrada);
    console.log('Veículo saiu da vaga', vagaLivre.numero);
    console.log('Valor a pagar:', saida.valorAPagar);
} else {
    console.log('Nenhuma vaga livre disponível');
}