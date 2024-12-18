"use strict";
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
    construtor(nome, apartamento, telefone, email) {
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
    construtor(imovel, inquilino, valor, dataInicio, dataVencimento, status) {
        this.imovel = imovel;
        this.inquilino = inquilino;
        this.valor = valor;
        this.dataInicio = dataInicio;
        this.dataVencimento = dataVencimento;
        this.status = status;
    }
}
class Manutencao {
    construtor(descricao, dataSolicitacao, custo, status, responsavel) {
        this.descricao = descricao;
        this.dataSolicitacao = dataSolicitacao;
        this.custo = custo;
        this.status = status;
        this.responsavel = responsavel;
    }
}
class Servico {
    constructor(tipo, frequencia, contratado, custo) {
        this.tipo = tipo;
        this.frequencia = frequencia;
        this.contratado = contratado;
        this.custo = custo;
    }
}
class Relatorio {
    constructor(tipo, periodo, dadosGerados) {
        this.tipo = tipo;
        this.periodo = periodo;
        this.dadosGerados = dadosGerados;
    }
}
class Ferramenta {
    constructor(nome, descricao, funcionalidade) {
        this.nome = nome;
        this.descricao = descricao;
        this.funcionalidade = funcionalidade;
    }
}
class Seguranca {
    constructor(moduloControleAcesso, monitoramentoCameras, alarmes) {
        this.moduloControleAcesso = moduloControleAcesso;
        this.monitoramentoCameras = monitoramentoCameras;
        this.alarmes = alarmes;
    }
}
class GestaoPagamentos {
    constructor() {
        this.emissaoBoletos = [];
        this.registroPagamentos = [];
        this.conciliacaoBancaria = [];
    }
}
