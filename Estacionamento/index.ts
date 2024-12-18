


class Veiculo {
    constructor(public placa: string, public modelo: string, public cor: string) {}
}

class Cliente {
    constructor(public nome: string, public cpf: string, public telefone: string) {}
}

class Estacionamento {
    vagasOcupadas: number = 0;
    veiculos: Veiculo[] = []; // Correção na definição do array

    constructor(public vagas: number, public valorHora: number) {}

    registrarEntrada(veiculo: Veiculo): void {
        if (this.vagasOcupadas < this.vagas) {
            this.veiculos.push(veiculo);
            this.vagasOcupadas++;
            console.log(`Veículo ${veiculo.placa} registrado com sucesso.`);
        } else {
            console.log("Não há vagas disponíveis.");
        }
    }

    registrarSaida(placa: string): void {
        const index = this.veiculos.findIndex(v => v.placa === placa);
        if (index !== -1) {
            this.veiculos.splice(index, 1);
            this.vagasOcupadas--;
            console.log(`Veículo ${placa} removido com sucesso.`);
        } else {
            console.log("Veículo não encontrado.");
        }
    }
}

class Ticket {
    id: number;
    horaEntrada: Date;
    horaSaida?: Date; // Pode ser undefined inicialmente
    valorTotal?: number; // Pode ser undefined inicialmente

    constructor(public veiculo: Veiculo) {
        this.id = Date.now();
        this.horaEntrada = new Date();
    }
}

// Exemplo de uso
const estacionamento = new Estacionamento(10, 5);
const carro = new Veiculo('ABC1234', 'Gol', 'Prata');

estacionamento.registrarEntrada(carro);
// ... outras operações