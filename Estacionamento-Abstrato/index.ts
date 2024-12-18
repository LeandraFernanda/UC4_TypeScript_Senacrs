/*class Veiculo {
    constructor(public placa: string, public modelo: string, public cor: string) {}
}

class Vaga {
    private _veiculo: Veiculo ;

    constructor(public numero: number, public status: 'livre') {
        this._veiculo = null;
        this.status = 'livre';
    }    
   


class Estacionamento {
    constructor(public nome: string, public endereco: string, public vagas: Vaga[]) 
    {
        this.nome = nome;
        this.endereco = endereco;
        this.vagas = vagas;

    }

   
}

class Entrada {
    constructor(public data: Date, public hora: Date, public veiculo: Veiculo, public vaga: Vaga) {
        if (vaga.status !== 'livre') {
            throw new Error('Vaga já está ocupada');
        }
        vaga.veiculo = veiculo;
    }
}

class Saida {
    constructor(public data: Date, public hora: Date, public veiculo: Veiculo, public vaga: Vaga) {
        if (vaga.status !== 'ocupada' || vaga.veiculo !== veiculo) {
            throw new Error('Veículo não está nesta vaga');
        }
        vaga.veiculo = null;
        // Calcular valor a pagar aqui, baseado em um tarifário
        this.valorAPagar = this.calcularValorAPagar(vaga, data, hora);
    }

    private calcularValorAPagar(vaga: Vaga, dataSaida: Date, horaSaida: Date): number {
        const tarifaPorHora = 5; // Tarifa por hora
        const tarifaDiaria = 50; // Tarifa diária
    
        const dataEntrada = vaga.dataEntrada; // Supondo que a vaga tem uma propriedade dataEntrada
        const horaEntrada = vaga.horaEntrada; // Supondo que a vaga tem uma propriedade horaEntrada
    
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
// Em estacionamento.ts
const estacionamento = new Estacionamento('Estacionamento Central', 'Rua das Flores, 123', [
    new Vaga(1, 'livre'),
    new Vaga(2, 'livre'),
    // ...
]);

const carro = new Veiculo('ABC-1234', 'Gol', 'Prata');
const vagaLivre = estacionamento.encontrarVagaLivre();

if (vagaLivre) {
    const entrada = new Entrada(new Date(), new Date(), carro, vagaLivre);
    console.log('Veículo estacionado na vaga', vagaLivre.numero);

    // Simulando a saída
    const saida = new Saida(new Date(), new Date(), carro, vagaLivre);
    console.log('Valor a pagar:', saida.valorAPagar);
} else {
    console.log('Não há vagas disponíveis');
}
*/




abstract class Veiculo {
    constructor(public placa: string, public modelo: string, public cor: string) {}
}

class Vaga {
    private _veiculo: Veiculo | null;

    constructor(public numero: number, public status: 'livre' | 'ocupada') {
        this._veiculo = null;
        this.status = 'livre';
    }

    public ocupar(veiculo: Veiculo) {
        this._veiculo = veiculo;
        this.status = 'ocupada';
    }

    public desocupar() {
        this._veiculo = null;
        this.status = 'livre';
    }

    public get veiculo(): Veiculo | null {
        return this._veiculo;
    }
}

class Estacionamento {
    constructor(public nome: string, public endereco: string, public vagas: Vaga[]) {}

    public encontrarVagaLivre(): Vaga | null {
        return this.vagas.find(vaga => vaga.status === 'livre') || null;
    }
}

class Entrada {
    constructor(public data: Date, public hora: Date, public veiculo: Veiculo, public vaga: Vaga) {
        if (vaga.status !== 'livre') {
            throw new Error('Vaga já está ocupada');
        }
        vaga.ocupar(veiculo);
    }
}

class Saida {
    public valorAPagar: number;

    constructor(public data: Date, public hora: Date, public veiculo: Veiculo, public vaga: Vaga) {
        if (vaga.status !== 'ocupada' || vaga.veiculo !== veiculo) {
            throw new Error('Veículo não está nesta vaga');
        }
        vaga.desocupar();
        this.valorAPagar = this.calcularValorAPagar(vaga, data, hora);
    }

    private calcularValorAPagar(vaga: Vaga, dataSaida: Date, horaSaida: Date): number {
        const tarifaPorHora = 5; // Tarifa por hora
        const tarifaDiaria = 50; // Tarifa diária

        const dataEntrada = new Date(); // Aqui você deve definir como obter a data de entrada
        const horaEntrada = new Date(); // Aqui você deve definir como obter a hora de entrada

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

const carro = new class extends Veiculo {
    constructor() {
        super('ABC-1234', 'Gol', 'Prata');
    }
}();

const vagaLivre = estacionamento.encontrarVagaLivre();

if (vagaLivre) {
    const entrada = new Entrada(new Date(), new Date(), carro, vagaLivre);
    console.log('Veículo estacionado na vaga', vagaLivre.numero);
    
    // Simulando a saída
    const saida = new Saida(new Date(), new Date(), carro, vagaLivre);
    console.log('Valor a pagar:', saida.valorAPagar);
} else {
    console.log('Não há vagas disponíveis');
}

/* Definindo a interface para Veiculo
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
    constructor(public data: Date, public hora: Date, public veiculo: IVeiculo, public vaga: IVaga) {
        if (vaga.status !== 'livre') {
            throw new Error('Vaga já está ocupada');
        }
        vaga.ocupar(veiculo);
    }
}

// Implementando a classe Saida
class Saida {
    public valorAPagar: number;

    constructor(public data: Date, public hora: Date, public veiculo: IVeiculo, public vaga: IVaga) {
        if (vaga.status !== 'ocupada' || vaga.veiculo !== veiculo) {
            throw new Error('Veículo não está nesta vaga');
        }
        vaga.desocupar();
        this.valorAPagar = this.calcularValorAPagar(vaga, data, hora);
    }

    private calcularValorAPagar(vaga: IVaga, dataSaida: Date, horaSaida: Date): number {
        const tarifaPorHora = 5; // Tarifa por hora
        const tarifaDiaria = 50; // Tarifa diária

        const dataEntrada = new Date(); // Aqui você deve definir como obter a data de entrada
        const horaEntrada = new Date(); // Aqui você deve definir como obter a hora de entrada

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
const vagaLivre = estacionamento.encontrarVagaLivre();

if (vagaLivre) {
    const entrada = new Entrada(new Date(), new Date(), carro, vagaLivre);
    console.log('Veículo estacionado na vaga', vagaLivre.numero);

    // Simulando a saída
    const saida = new Saida(new Date(), new Date(), carro, vagaLivre);*/