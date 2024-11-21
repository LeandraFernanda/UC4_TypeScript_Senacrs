/* código em typescript Classes Propostas:

Morador:
Nome
Apartamento
Telefone
E-mail
Contatos de emergência
Histórico de pagamentos
Permissões de acesso
Aluguel:
Imóvel
Inquilino (referência para a classe Morador)
Valor
Data de início
Data de vencimento
Status (pago, pendente, cancelado)
Manutenção:
Descrição
Data de solicitação
Data de execução
Custo
Status (pendente, em andamento, concluída)
Responsável
Serviço:
Tipo (limpeza, segurança, etc.)
Frequência
Contratado (empresa ou pessoa física)
Custo
Relatório:
Tipo (financeiro, manutenção, etc.)
Período
Dados gerados
Ferramenta:
Nome
Descrição
Funcionalidade
Segurança:
Módulo para controle de acesso
Monitoramento de câmeras
Alarmes
Gestão de Pagamentos:
Emissão de boletos
Registro de pagamentos
Conciliação bancária */


class Morador {
    nome: string;
    apartamento: string;
    telefone: string;
    email: string;
    contatosEmergencia: string[];
    historicoPagamentos: string[];
    permissoesAcesso: string[];

    construtor(nome: string, apartamento: string, telefone: string, email: string) {
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
    inquilino: Morador;
    valor: number;
    dataInicio: Date;
    dataVencimento: Date;
    status: string;

    construtor(imovel: string, inquilino: Morador, valor: number, dataInicio: Date, dataVencimento: Date, status: string) {
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

