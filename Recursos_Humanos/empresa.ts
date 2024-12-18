class Funcionario {
    nome: string;
    cpf: string;
    dataAdmissao: Date;

    constructor(nome: string, cpf: string, dataAdmissao: Date) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataAdmissao = dataAdmissao;
    }

    }
    class Gerente extends Funcionario {
        calcularSalario(): number {
            throw new Error("Erro na Implementação");
        }
        departamento: string;
        bonificacao: number;
        constructor(nome: string, cpf: string, dataAdmissao: Date, departamento: string, bonificacao: number) {
            super(nome, cpf, dataAdmissao);
            this.departamento = departamento;
            this.bonificacao = bonificacao;
        }
    }


class Horista extends Funcionario {
    valorHora: number;
    horasTrabalhadas: number;

    constructor(nome: string, cpf: string, dataAdmissao: Date, valorHora: number) {
        super(nome, cpf, dataAdmissao);
        this.valorHora = valorHora;
        this.horasTrabalhadas = 0;
    }

    calcularSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

class Assalariado extends Funcionario {
   calcularSalario(): number {
        return 2000;
    }
}

class Comissionado extends Funcionario {
    comissao: number;
    vendas: number;
    constructor(nome: string, cpf: string, dataAdmissao: Date, comissao: number, vendas: number) {
        super(nome, cpf, dataAdmissao);
        this.comissao = comissao;
        this.vendas = vendas;
    }
}

class Ativo {
    nome: string;
    categoria: string;
    dataAdmissao: Date;
    
}


class BancoDeDados {
    private funcionarios: Funcionario[] = [];
    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }
    
}


const banco = new BancoDeDados();
const funcionario1 = new Horista('João', '12345678910', new Date(2024, 11, 25), 20);
const gerente1 = new Gerente('Maria', '98765432109', new Date(2020, 1, 1), 'Financeiro', 1000);






   





   




