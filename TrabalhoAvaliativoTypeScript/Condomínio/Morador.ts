


class Morador {
    nome: string;
    apartamento: number;
    telefone: number;
    email: string;
    contatosEmergencia: number[];
    historicoPagamentos: string[];
    permissoesAcesso: string[];

    constructor(nome: string, apartamento: number, telefone: number, email: string) {
        this.nome = nome;
        this.apartamento = apartamento;
        this.telefone = telefone;
        this.email = email;
        this.contatosEmergencia = [];
        this.historicoPagamentos = [];
        this.permissoesAcesso = [];
    }
}

class Aluguel {
    imovel: string;
    inquilino: string;
    valor: number;
    dataInicio: Date;
    dataVencimento: Date;
    status: string;

    constructor(imovel: string, inquilino: string, valor: number, dataInicio: Date, dataVencimento: Date, status: string) {
        this.imovel = imovel;
        this.inquilino = inquilino;
        this.valor = valor;
        this.dataInicio = dataInicio;
        this.dataVencimento = dataVencimento;
        this.status = status;
    }
}

class Manutencao {
    descricao: string;
    dataSolicitacao: Date;
    dataExecucao: Date;
    custo: number;
    status: string;
    responsavel: string;

    construtor(descricao: string, dataSolicitacao: Date, custo: number, status: string, responsavel: string) {
        this.descricao = descricao;
        this.dataSolicitacao = dataSolicitacao;
        this.custo = custo;
        this.status = status;
        this.responsavel = responsavel;
    }
}

class Servico {
    tipo: string;
    frequencia: string;
    contratado: string;
    custo: number;

    constructor(tipo: string, frequencia: string, contratado: string, custo: number) {
        this.tipo = tipo;
        this.frequencia = frequencia;
        this.contratado = contratado;
        this.custo = custo;
    }
}

class Relatorio {
    tipo: string;
    periodo: string;
    dadosGerados: string[];

    constructor(tipo: string, periodo: string, dadosGerados: string[]) {
        this.tipo = tipo;
        this.periodo = periodo;
        this.dadosGerados = dadosGerados;
    }
}

class Ferramenta {
    nome: string;
    descricao: string;
    funcionalidade: string;

    constructor(nome: string, descricao: string, funcionalidade: string) {
        this.nome = nome;
        this.descricao = descricao;
        this.funcionalidade = funcionalidade;
    }
}

class Seguranca {
    moduloControleAcesso: string;
    monitoramentoCameras: string;
    alarmes: string;

    constructor(moduloControleAcesso: string, monitoramentoCameras: string, alarmes: string) {
        this.moduloControleAcesso = moduloControleAcesso;
        this.monitoramentoCameras = monitoramentoCameras;
        this.alarmes = alarmes;
    }
}

class GestaoPagamentos {
    emissaoBoletos: string[];
    registroPagamentos: string[];
    conciliacaoBancaria: string[];

    constructor() {
        this.emissaoBoletos = [];
        this.registroPagamentos = [];
        this.conciliacaoBancaria = [];
    }
}



// Criando um morador
const morador1 = new Morador('João Silva', 101, 123456789, 'joaosilva@email.com');

// Criando um aluguel
const aluguel1 = new Aluguel('Apartamento 101', 'morador1', 1500, new Date('01-03-2023'), new Date('10-12-2023'), 'Ativo');

// Adicionando um contato de emergência ao morador
morador1.contatosEmergencia.push(987654321);

console.log(morador1);
console.log(aluguel1);

