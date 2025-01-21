abstract class Agricultura {
    id: number;
    nome: string;
    descricao: string;

    constructor(id:number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class Agropecuaria extends Agricultura {
    producao: string[]; // Ex: milho, soja, leite
    pragas: string[];
    produtividade: number;
}

class Agronegocio extends Agricultura {
    produtos: string[];
    mercados: string[];
    cadeiaProdutiva: string;
}

class Tecnologia extends Agricultura {
    tipo: string; // Ex: máquina, software
    beneficios: string[];
}

class Organizacao extends Agricultura{
    tipo: string; // Ex: cooperativa, associação
    servicos: string[];
}

class Ambiental extends Agricultura {
    indicadores: string[]; // Ex: desmatamento, qualidade da água
    praticasSustentaveis: string[];
}
abstract class Cidades {
    id: number;
    nome: string;
    descricao: string;

    constructor(id:number,nome:string,desdricao:string) {
        this.id = id;
        this.nome = nome;
        this.descricao = desdricao;
    }
}

class DesigualdadeSocial extends Cidades {
    indiceGini: number;
    rendaPerCapita: number;
    educacao: number;
    saude: number;
}

class AcessoPopulacao extends Cidades{
    servicos: string[]; // Ex: água, energia, coleta de lixo
    cobertura: number;
}

class Moradia extends Cidades {
    programas: string[];
    unidadesConstruidas: number;
    familiasBeneficiadas: number;
}

class Saneamento extends Cidades {
    aguaPotável: number; // Porcentagem da população com acesso
    esgotamentoSanitario: number;
    qualidadeAgua: string;
}

class Transporte extends Cidades {
    modais: string[]; // Ex: rodoviário, ferroviário
    infraestrutura: string[];
    mobilidade: number; // Índice de mobilidade urbana
}
abstract class CienciaTecnologiaInovacao {
    id: number;
    nome: string;
    descricao: string;
}

class Pesquisador extends CienciaTecnologiaInovacao {
    afiliacao: string;
    areaAtuacao: string;
    projetos: Projeto[];
}

class InstituicaoPesquisa extends CienciaTecnologiaInovacao {
    localizacao: string;
    areasPesquisa: string[];
    projetos: Projeto[];
}

class Projeto extends CienciaTecnologiaInovacao {
    equipe: Pesquisador[];
    financiamento: number;
    resultados: string;
}

class Publicacao extends CienciaTecnologiaInovacao {
    autores: Pesquisador[];
    revista: string;
    ano: number;
}

class Tecnologica extends CienciaTecnologiaInovacao {
    areaAplicacao: string;
    estagioDesenvolvimento: string;
}

class Empresa extends CienciaTecnologiaInovacao {
    setor: string;
    produtos: string[];
    servicos: string[];
}

class Patente extends CienciaTecnologiaInovacao {
    inventor: Pesquisador;
    dataDeposito: Date;
}

class Investimento extends CienciaTecnologiaInovacao {
    valor: number;
    fonte: string;
    projeto: Projeto;
}
abstract class Comunicacao {
    id: number;
    nome: string;
    descricao: string;

    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Servico{
    id: number;
    nome:string;
    descricao:string;

    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class ServiçoDeRadiodifusão extends Comunicacao {
    frequencia: number;
    modalidade: string;
    emissora: Empresa;
    cobertura: string; // Geográfica ou populacional
}
class Comunicacoes  {
    cnpj: number;
    nomeFantasia: string;
    sede: string;
    servicos: Servico[]; // Array polimórfico para armazenar diferentes tipos de serviços

    constructor(cnpj:number,nomeFantasia:string, sede:string) {
        this.cnpj = cnpj;
        this.nomeFantasia = nomeFantasia;
        this.sede = sede;
    }
}
abstract class Cultura {
    id: number;
    nome: string;
    descricao: string;

    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Obra{
    id: number;
    nome: string;
    descricao: string;

    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class ProjetoCultural extends Cultura {
    orcamento: number;
    responsavel: string;
    fases: Fase[]; // Array de objetos Fase, representando as fases do projeto
}

class InstituicaoCultural extends Cultura {
    localizacao: string;
    tipo: string; // Ex: museu, teatro, biblioteca
    projetos: ProjetoCultural[];
}

class Artista extends Cultura {
    nacionalidade: string;
    areaAtuacao: string;
    obras: Obra[];
    projetos: ProjetoCultural[];
}
class Fase {
    descricao: string;
    dataInicio: Date;
    dataFim: Date;

    constructor(descricao:string,dataInicio: Date,dataFim: Date){
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
}
abstract class Defesa {
    id: number;
    nome: string;
    descricao: string;
}

abstract class Pessoa extends Defesa {
    nomepessoa: string;
    cpf: number;
    telefone: number;

    constructor(nomepessoa: string, cpf: number, telefone: number){
        super();
        this.nomepessoa = nomepessoa;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

abstract class MaterialBelico extends Defesa {
    // Atributos comuns a todo material bélico
}

abstract class ForcaArmadas extends Defesa {
    comandante: Militar[];
}

class Marinha extends ForcaArmadas {
    frota: Navio[];
    basesNavais: BaseNaval[];
}
class Navio {
    frota: string;
    desegnacao: string;
    missao: string;
    status: string; // pausado, em andamento, encerrado

    constructor(frota: string, desegnacao: string, missao: string, status: string) {
        this.frota = frota;
        this.desegnacao = desegnacao;
        this.missao = missao;
        this.status = status;
    }
}

class BaseNaval {
    nome: string;
    localizacao: string;
    status: string; // ativa, inativa

    constructor(nome: string, localizacao: string, status: string){
        this.nome = nome;
        this.localizacao = localizacao;
        this.status = status;

    }
}
class Exercito{
    tropas: Militar[];
    bases: Base[];
    civil: Civil[];
    contratado: Contratado[];
    arma:Arma[];
    veiculo:Veiculo[];
    equipamento:Equipamento[];
    operacao:Operacao[];
    missao:Missao[];

    constructor(tropas: Militar[], bases: Base[], civil: Civil[], contratado: Contratado[], arma: Arma[], veiculo: Veiculo[], equipamento: Equipamento[], operacao: Operacao[], missao: Missao[]) {
        this.tropas = tropas;
        this.bases = bases;
        this.civil = civil;
        this.contratado = contratado;
        this.arma = arma;
        this.veiculo = veiculo;
        this.equipamento = equipamento;
        this.operacao = operacao;
        this.missao = missao;
    }
}
class Aeronautica{
    aeronaves: Aeronave[];
    tropas:Tropas[];
    bases: Base[];
    civil: Civil[];
    contratado: Contratado[];
    arma:Arma[];
    veiculo:Veiculo[];
    equipamento:Equipamento[];
    operacao:Operacao[];
    missao:Missao[];
}
class Equipamento {
    id: number;
    nome: string;
    nomeferramenta: string;
    descricao: string;

    constructor(id: number, nome: string, nomeferramenta: string, descricao: string){
        this.id = id;
        this.nome = nome;
        this.nomeferramenta = nomeferramenta;
        this.descricao = descricao;
    }
}
class Tropas {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Militar{
    nome: string;
    afiliacao: string;
    areaAtuacao: string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];

    constructor(nome:string,afiliacao:string, areaAtuacao:string){
        this.nome = nome;
        this.afiliacao = afiliacao;
        this.areaAtuacao = areaAtuacao;
    }
}
class Civil{
    nome: string;
    afiliacao: string;
    areaAtuacao: string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];

    constructor(nome:string,afiliacao:string,areaAtuacao:string){
        this.nome = nome;
        this.afiliacao = afiliacao;
        this.areaAtuacao = areaAtuacao;
        
    }
}
class Contratado{
    nome: string;
    afiliacao: string;
    areaAtuacao: string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];

    constructor(nome:string,afiliacao:string,areaAtuacao:string){
        this.nome = nome;
        this.afiliacao = afiliacao;
        this.areaAtuacao = areaAtuacao;
    }
}
class Arma{
    id:number;
    nome:string;
    descricao:string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];

    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Veiculo{
    id:number;
    nome:string;
    descricao:string;
    manutencaoPreventiva: string;
    manutencaoCorretiva: string;
    manutencaoPreditiva: string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];

    constructiva(id:number,nome:string,descricao:string,manutencaoPreventiva:string,manutencaoCorretiva:string,manutencaoPreditiva:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.manutencaoPreventiva = manutencaoPreventiva;
        this.manutencaoCorretiva = manutencaoCorretiva;
        this.manutencaoPreditiva = manutencaoPreditiva;
    }
}
class Aeronave{
    id:number;
    nome:string;
    descricao:string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];
    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Operacao{
    id:number;
    nome:string;
    descricao:string;
    militar:Tropas[];
    bases:Base[];
    ordemServico:OrdemServico[];
    missao:Missao[];
    baixas:Baixa[];
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];
    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Baixa {
    id:number;
    nome:string;
    descricao:string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];
    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class tropas{
    id:number;
    nome:string;
    descricao:string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];
    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Base{
    id:number;
    nome:string;
    descricao:string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];
    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class OrdemServico{
    id:number;
    nome:string;
    descricao:string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];
    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Missao{
    id:number;
    nome:string;
    descricao:string;
    projetos: Projeto[];
    projetosCultural: ProjetoCultural[];
    competencias: string[];
    habilidades: string[];
    experiencias: string[];
    constructor(id:number,nome:string,descricao:string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
abstract class AgriculturaFamiliar {
    id: number;
    dataCriacao: Date;
    dataAtualizacao: Date;

    constructor(id: number) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }

    abstract obterDetalhes(): string;
}

abstract class Pessoa1 extends AgriculturaFamiliar {
    nome: string;
    cpf: string;
    telefone: string;

    constructor(id: number, nome: string, cpf: string, telefone: string) {
        super(id);
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

abstract class Imovel extends AgriculturaFamiliar {
    area: number;
    localizacao: string;
    // ... outros atributos
}

abstract class Processo extends AgriculturaFamiliar {
    tipo: string; // reforma agrária, regularização fundiária, etc.
    status: string;
}  
abstract class IndustriaComercioeServicos {
    id: number;
    dataCriacao: Date;
    dataAtualizacao: Date;

    constructor(id: number) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }

    abstract obterDetalhes(): string;
}

abstract class Politica extends IndustriaComercioeServicos {
    descricao: string;
    objetivos: string[];
    
}

abstract class Programa extends IndustriaComercioeServicos {
    nome: string;
    orçamento: number;
    
}

abstract class Empresas extends IndustriaComercioeServicos {
    nome: string;
    cnpj: string;
    telefone: string;
}
abstract class AssistenciaSocialFamiliaeCombateaFome {
    id: number;
    dataCriacao: Date;
    dataAtualizacao: Date;

    constructor(id: number) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }

    abstract obterDetalhes(): string;
}

abstract class Beneficiario extends AssistenciaSocialFamiliaeCombateaFome {
    nome: string;
    cpf: number;
    
}

abstract class ProgramaSocial extends AssistenciaSocialFamiliaeCombateaFome {
    nome: string;
    cpf: number
    objetivo: string;
    
}

abstract class PoliticaPublicas extends AssistenciaSocialFamiliaeCombateaFome {
    descricao: string;
    legislacao: string;
    
}
abstract class DireitosHumanoseCidadania {
    id: number;
    dataCriacao: Date;
    dataAtualizacao: Date;

    constructor(id: number) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }

    abstract obterDetalhes(): string;
}

abstract class Pessoas extends DireitosHumanoseCidadania {
    nome: string;
    cpf: string;
    
}

abstract class GrupoVulneravel extends DireitosHumanoseCidadania {
    descricao: string;
   
}

abstract class PoliticaPublica extends DireitosHumanoseCidadania {
    descricao: string;
    legislacao: string;
   
}
abstract class Educacao {
    id: number;
    dataCriacao: Date;
    dataAtualizacao: Date;

    constructor(id: number) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }

    abstract obterDetalhes(): string;
}

abstract class Pessoas1 extends Educacao {
    nome: string;
    cpf: string;
    
}

abstract class InstituicaoEducacional extends Educacao {
    nome: string;
    tipo: string; // pública, privada
    
}

abstract class ProgramaEducacional extends Educacao {
    nome: string;
    objetivo: string;
    
}   
abstract class EmpreendedorismoMicroempresaeEmpresadePequenoPorte {
    id: number;
    dataCriacao: Date;
    dataAtualizacao: Date;

    constructor(id: number) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }

    abstract obterDetalhes(): string;
}

abstract class Pessoas2 extends EmpreendedorismoMicroempresaeEmpresadePequenoPorte {
    nome: string;
    cpf: number;
    telefone: number;
  
}

abstract class Empresas1 extends EmpreendedorismoMicroempresaeEmpresadePequenoPorte {
    nome: string;
    cnpj: number;
    telefone: number;
}

abstract class Programas extends EmpreendedorismoMicroempresaeEmpresadePequenoPorte {
    nome: string;
    objetivo: string;
    
}
abstract class Esportes {
    id: number;
    dataCriacao: Date;
    dataAtualizacao: Date;

    constructor(id: number) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }

    abstract obterDetalhes(): string;
}

abstract class Pessoa2 extends Esportes {
    nome: string;
    cpf: number;
    areaDeAtuacao: string;
}

abstract class Atleta extends Pessoa2 {
    modalidade: string;
    
}

abstract class Programa1 extends Esportes {
    nome: string;
    objetivo: string;
    
}
abstract class Fazenda {
    id: number;
    dataCriacao: Date;
    dataAtualizacao: Date;

    constructor(id: number) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }

    abstract obterDetalhes(): string;
}

abstract class Pessoa3 extends Fazenda {
    nome: string;
    cpf: number;
   
}

abstract class Empresa2 extends Fazenda {
    nome: string;
    cnpj: number;
   
}

abstract class PoliticaEconomica extends Fazenda {
    descricao: string;
    objetivo: string;
  
}
abstract class GestaoInovacaoeServicosPublicos {
    id: number;
    nome: string;
    descricao: string;
    dataInicio: Date;
    dataFim: Date;
    responsavel: string;

    constructor(id: number, nome: string, descricao: string, dataInicio: Date, dataFim: Date, responsavel: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.responsavel = responsavel;
    }

    abstract executar(): void;
    abstract avaliar(): string;
}

class DigitalizacaoServico extends GestaoInovacaoeServicosPublicos {
    sistema: string;
    beneficios: string[];

    constructor(id: number, nome: string, descricao: string, dataInicio: Date, dataFim: Date, responsavel: string, sistema: string, beneficios: string[]) {
        super(id, nome, descricao, dataInicio, dataFim, responsavel);
        this.sistema = sistema;
        this.beneficios = beneficios;
    }

    executar(): void {
        // Lógica para execução da digitalização do serviço
        console.log(`Iniciando digitalização do serviço ${this.nome}...`);
      
    }

    avaliar(): string {
        
        return "A digitalização do serviço foi concluída com sucesso.";
    }
}

class Desburocratizacao extends GestaoInovacaoeServicosPublicos {
   
    executar(): void {
       
    }

   
    avaliar(): string {
      
        return "A desburocratização foi concluída com sucesso.";
    }
}



abstract class IgualdadeRacial {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class projetos extends IgualdadeRacial {
    dataInicio: Date;
    dataFim: Date;
    responsavel: string;
    indicadores: Indicador[];
    parceiros: Parceiro[];
}

class Indicador extends IgualdadeRacial {
    tipo: string; // Ex: taxa de empregabilidade, representatividade
    valorAtual: number;
    meta: number;
   
}

class Parceiro extends IgualdadeRacial {
    tipo: string; // Público ou privado
    contato: string;
    
}

class Evento extends IgualdadeRacial {
    dataEvento: Date;
    local: string;
    publicoAlvo: string;
    
}

class SistemaGerenciamentoNominal {
    projetos: Projeto[] = [];
    indicadores: Indicador[] = [];
    parceiros: Parceiro[] = [];
    eventos: Evento[] = [];
}

abstract class IntegracaoDesenvolvimentoRegional {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class PlanoRegional extends IntegracaoDesenvolvimentoRegional {
    region: string;
    metas: Meta[];
    indicadores: Indicador[];
    desastres: Desastre[];
    solicitacoesRecurso: SolicitacaoRecurso[];
}

class Meta {
    descricao: string;
    status: string; // Em andamento, concluída, etc.
    
}

class indicadores {
    nome: string;
    valorAtual: number;
    meta: number;
   
}

class Desastre {
    local: string;
    dataOcorrencia: Date;
    tipo: string; // Enchente, deslizamento, etc.
    impactos: Impacto[];
    
}

class Impacto {
    tipo: string; // Danos em infraestrutura, perdas humanas, etc.
    valorEstimado: number;
   
}

class SolicitacaoRecurso extends IntegracaoDesenvolvimentoRegional {
    tipo: string; // Assistência humanitária, reconstrução, etc.
    valorSolicitado: number;
    status: string; // Pendente, aprovado, negado
    
}

class SistemaGerenciamentosIntegrados {
    planosRegionais: PlanoRegional[] = [];
    desastres: Desastre[] = [];
  
}
abstract class JusticaeSegurancaPublica {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class ProcessoLegal extends JusticaeSegurancaPublica {
    tipo: string; // Criminal, civil, etc.
    status: string; // Em andamento, concluído, etc.
    envolvidos: Pessoa[];
    recursos: Recurso[];
}

class OperacaoDesfecho extends JusticaeSegurancaPublica {
    objetivo: string;
    dataInicio: Date;
    dataFim: Date;
    participantes: Pessoa[];
   
}

class PessoaFisicaeJuridica extends JusticaeSegurancaPublica {
    tipo: string; // Suspeito, vítima, testemunha, etc.
    
}

class Recurso extends JusticaeSegurancaPublica {
    tipo: string; // Humano, material, financeiro
    quantidade: number;
   
}

class SistemaGerenciamentoProcessual {
    processos: ProcessoLegal[] = [];
    operacoes: Operacao[] = [];
    pessoas: Pessoa[] = [];
    recursos: Recurso[] = [];
   
}

abstract class MeioAmbienteeMudancaClimatica {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class ProjetoAmbiental extends MeioAmbienteeMudancaClimatica {
    tipo: string; // Recuperação de áreas degradadas, conservação da biodiversidade, etc.
    status: string; // Em andamento, concluído, etc.
    indicadores: Indicador[];
   
}

class indicadoresAtuais extends MeioAmbienteeMudancaClimatica {
    tipo: string; // Qualidade do ar, água, etc.
    valorAtual: number;
    meta: number;
   
}

class UnidadeConservacao extends MeioAmbienteeMudancaClimatica {
    tipo: string; // Parque nacional, reserva biológica, etc.
    localizacao: string;
    biomas: string[];
    // ... outros atributos
}

class LicencaAmbiental extends MeioAmbienteeMudancaClimatica {
    tipo: string; // Prévia, instalação, operação
    empresa: string;
    atividade: string;
    // ... outros atributos
}

class SistemaGerenciamentoContemporaneo {
    projetos: ProjetoAmbiental[] = [];
    indicadores: Indicador[] = [];
    unidadesConservacao: UnidadeConservacao[] = [];
    licencas: LicencaAmbiental[] = [];
   
}

abstract class MineracaoeEnergia {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class ProjetoPesquisa extends MineracaoeEnergia {
    area: string; // Energia, mineração, etc.
    status: string; // Em andamento, concluído, etc.
    resultados: ResultadoPesquisa[];
   
}

class ResultadoPesquisa {
    tipo: string; // Relatório, artigo, etc.
    dataPublicacao: Date;
   
}

class DadoGeologico extends MineracaoeEnergia {
    tipo: string; // Mapa geológico, perfil geológico, etc.
    localizacao: string;
    dataColeta: Date;
  
}

class ConcessaoMineral extends MineracaoeEnergia {
    empresa: string;
    mineral: string;
    area: string;
    status: string; // Solicitada, concedida, suspensa, etc.
    
}

class RecursoEnergetico extends MineracaoeEnergia {
    tipo: string; // Petróleo, gás natural, etc.
    reservaEstimada: number;
    localizacao: string;
   
}

class SistemaGerenciamentoQualificado {
    projetos: ProjetoPesquisa[] = [];
    dadosGeologicos: DadoGeologico[] = [];
    concessoes: ConcessaoMineral[] = [];
    recursosEnergeticos: RecursoEnergetico[] = [];
   
}

abstract class DasMulheresIgualdadeGenero {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class PoliticasPublica extends DasMulheresIgualdadeGenero {
    area: string; // Saúde, educação, trabalho, etc.
    status: string; // Em desenvolvimento, implementada, etc.
    indicadores: Indicador[];
   
}

class IndicadorGenero extends DasMulheresIgualdadeGenero {
    tipo: string; // Taxa de emprego feminino, violência doméstica, etc.
    valorAtual: number;
    meta: number;
    
}

class ProjetoSocial extends DasMulheresIgualdadeGenero {
    publicoAlvo: string; // Mulheres, LGBT+, indígenas, etc.
    localizacao: string;
    status: string; // Em andamento, concluído, etc.
    
}

class DadoDemografico extends DasMulheresIgualdadeGenero {
    tipo: string; // Idade, renda, escolaridade, etc.
    valor: number;
    grupo: string; // Mulheres, homens, LGBT+, etc.
    
}

class SistemaDeGerenciamento {
    politicas: PoliticaPublica[] = [];
    indicadores: Indicador[] = [];
    projetos: ProjetoSocial[] = [];
    dadosDemograficos: DadoDemografico[] = [];
   
}

abstract class PescaeAquicultura {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    //Aquicultura: tratamento do ambiente aquático para criação de peixes, mariscos etc., e tb. para cultivo de produtos naturais
}

class ProjetoPesca extends PescaeAquicultura {
    tipo: string; // Desenvolvimento de pescarias, aquicultura, etc.
    status: string; // Em andamento, concluído, etc.
    indicadores: Indicador[];
    
}

class IndicadoresAtuais extends PescaeAquicultura {
    tipo: string; // Produção pesqueira, produção aquícola, etc.
    valorAtual: number;
    meta: number;
    
}

class LicencaPesca extends PescaeAquicultura {
    tipo: string; // Pesca profissional, pesca amadora, etc.
    embarcacao: Embarcacao;
    validade: Date;
   
}

class Embarcacao {
    nome: string;
    tipo: string; // Artesanal, industrial, etc.
    registro: string;
    
}

class RecursoPesqueiro extends PescaeAquicultura {
    especie: string;
    estoque: number;
    statusConservacao: string; // Sobreexplotado, em recuperação, etc.
    
}

class SistemasdeGerenciamento {
    projetos: ProjetoPesca[] = [];
    indicadores: Indicador[] = [];
    licencas: LicencaPesca[] = [];
   
}

abstract class PlanejamentoeOrcamentoPublico {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class ProjetoGovernamental extends PlanejamentoeOrcamentoPublico {
    area: string; // Saúde, educação, infraestrutura, etc.
    status: string; // Em planejamento, em execução, concluído, etc.
    orcamento: number;
    indicadores: Indicador[];
 
}

class Indicadores extends PlanejamentoeOrcamentoPublico {
    tipo: string; // PIB, taxa de desemprego, etc.
    valorAtual: number;
    meta: number;
    
}

class Orcamento extends PlanejamentoeOrcamentoPublico {
    ano: number;
    valorTotal: number;
    despesas: Despesa[];
   
}

class Despesa extends PlanejamentoeOrcamentoPublico {
    projeto: ProjetoGovernamental;
    valor: number;
    status: string; // Autorizado, pago, etc.
    
}

class SistemaemGerenciamento {
    projetos: ProjetoGovernamental[] = [];
    indicadores: Indicador[] = [];
    orcamentos: Orcamento[] = [];
    
}
abstract class PortoseAeroportos {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class ProjetoInfraestrutura extends PortoseAeroportos {
    tipo: string; // Porto, aeroporto, hidrovia, etc.
    status: string; // Em planejamento, em construção, concluído, etc.
    orcamento: number;
    
}

class Concessao extends PortoseAeroportos {
    tipo: string; // Porto, aeroporto
    empresa: string;
    duracao: number;
  
}

class IndicadorDesempenho extends PortoseAeroportos {
    tipo: string; // Movimentação de cargas, número de passageiros, etc.
    valorAtual: number;
    meta: number;
    
}

class PlanoEstrategico extends PortoseAeroportos {
    ano: number;
    metas: Meta[];
    
}

class MetaPortosEAeroportos {
    descricao: string;
    indicadores: IndicadorDesempenho[];
    
}

class SistemaGerenciamentoPortos {
    projetos: ProjetoInfraestrutura[] = [];
    concessoes: Concessao[] = [];
    indicadores: IndicadorDesempenho[] = [];
    planos: PlanoEstrategico[] = [];
   
}
abstract class PovosIndigenas {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class ProjetoSocialFamiliar extends PovosIndigenas {
    area: string; // Educação, saúde, infraestrutura, etc.
    etnia: string;
    status: string; // Em andamento, concluído, etc.
    
}

class ProcessoDemarcacao extends PovosIndigenas {
    terraIndigena: string;
    etnia: string;
    status: string; // Em análise, homologado, etc.
  
}

class IndicadorSocial extends PovosIndigenas {
    tipo: string; // Taxa de escolarização, mortalidade infantil, etc.
    etnia: string;
    valorAtual: number;
    meta: number;
    
}

class Conflitos extends PovosIndigenas {
    terraIndigena: string;
    etnia: string;
    tipoConflitos: string[]; // Invasão, exploração ilegal, etc.
    dataOcorrencia: Date;
   
}

class SistemaGerenciamentoIndigena {
    projetos: ProjetoSocial[] = [];
    demarcacoes: ProcessoDemarcacao[] = [];
    indicadores: IndicadorSocial[] = [];
    conflitos: Conflitos[] = [];
    
}

abstract class PrevidenciaSocial {
    id: number;
    nome: string;
    descricao: string;
    numerobeneficio: number;
    especie: number;
    datadopedido: Date;
    datadaconcessao: Date;
    datadoinicio: Date;
    datadotermino: Date;
    valor: number;
    valorliquido: number;
    valorbruto: number;
    valorcomplementar: number;
    processo: string; // administrativo ou Judicial
    status: string; // em andamento, concluido, etc.

    constructor(id: number, nome: string, descricao: string, numerobeneficio: number, especie: number, datadopedido: Date, datadaconcessao: Date, datadoinicio: Date, datadotermino: Date, valor: number, valorliquido: number, valorbruto: number, valorcomplementar: number, processo: string, status: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.numerobeneficio = numerobeneficio;
        this.especie = especie;
        this.datadopedido = datadopedido;
        this.datadaconcessao = datadaconcessao;
        this.datadoinicio = datadoinicio;
        this.datadotermino = datadotermino;
        this.valor = valor;
        this.valorliquido = valorliquido;
        this.valorbruto = valorbruto;
        this.valorcomplementar = valorcomplementar;
        this.processo = processo;
        this.status = status;
    }
}

class Beneficio {
    id: number;
    tipo: string; // Aposentadoria, auxílio-doença, etc.
    valor: number;
    dataInicio: Date;
    segurado: Segurado;
    
}

class Segurado {
    id: number;
    nome: string;
    cpf: string;
    contribuicoes: Contribuicao[];
  
}

class Contribuicao {
    id: number;
    valor: number;
    dataPagamento: Date;
    
}

class ProcessoAdministrativo {
    id: number;
    tipo: string; // Recurso, revisão, etc.
    status: string; // Em análise, deferido, indeferido, etc.
    beneficio: Beneficio;
    
}

class IndicadorPrevidencia {
    id: number;
    tipo: string; // Cobertura previdenciária, gastos com benefícios, etc.
    valor: number;
    dataReferencia: Date;
    
}

class SistemaGerenciamentoDataPrev {
    beneficios: Beneficio[] = [];
    segurados: Segurado[] = [];
    processos: ProcessoAdministrativo[] = [];
    indicadores: Indicador[] = [];
    
}
abstract class RelacoesExteriores {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class RelacaoBilateral extends RelacoesExteriores {
    pais: string;
    status: string; // Forte, fraca, em desenvolvimento, etc.
    acordos: Acordo[];
   
}

class Acordo extends RelacoesExteriores {
    tipo: string; // Comercial, cooperação, etc.
    paisesEnvolvidos: string[];
    status: string; // Em negociação, assinado, em vigor, etc.
    
}

class EventoInternacional extends RelacoesExteriores {
    nomedoevento: string;
    data: Date;
    local: string;
    paisesParticipantes: string[];
  
}

class MissaoDiplomatica extends RelacoesExteriores {
    pais: string;
    tipo: string; // Embaixada, consulado, etc.
    chefeDeMissao: string;
   
}

class SistemaGerenciamentoExterno {
    relacoesBilaterais: RelacaoBilateral[] = [];
    acordos: Acordo[] = [];
    eventos: EventoInternacional[] = [];
    missoes: MissaoDiplomatica[] = [];
    
}
abstract class Saude {
    id: number;
    nome: string;
    cpf: number;
    numerodocartaodosus: number
    descricao: string;

    constructor(id: number, nome: string, descricao: string, cpf: number, numerodocartaodosus: number) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.cpf = cpf;
        this.numerodocartaodosus = numerodocartaodosus;
        }
    }


class EstabelecimentoSaude extends Saude {
    tipo: string; // Hospital, clínica, UBS, etc.
    endereco: string;
    servicosOferecidos: string[];
   
}

class ProgramaSaude extends Saude {
    nomepaciente: string; // SUS, vacinação, etc.
    objetivo: string;
    indicadores: Indicador[];
    
}

class Medicamento extends Saude {
    nomeComercial: string;
    substanciaAtiva: string;
    estoque: number;
    
}

class ProfissionalSaude extends Saude {
    crm: string;
    especialidade: string;
    estabelecimento: EstabelecimentoSaude;
    
}

class IndicadordaSaude extends Saude {
    tipo: string; // Taxa de mortalidade infantil, cobertura vacinal, etc.
    valor: number;
    dataReferencia: Date;
    
}

class SistemaGerenciamentoSUS {
    estabelecimentos: EstabelecimentoSaude[] = [];
    programas: ProgramaSaude[] = [];
    medicamentos: Medicamento[] = [];
    profissionais: ProfissionalSaude[] = [];
    indicadores: Indicador[] = [];
   
}

abstract class TrabalhoeEmprego {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class EmpresaseNegocios extends TrabalhoeEmprego {
    idempresa: number;
    nomefantasia: string;
    cnpj: string;
    setor: string;
    funcionarios: Funcionario[];
    
}

class Funcionario {
    id: number;
    nome: string;
    cpf: string;
    cargo: string;
    empresa: Empresa;
  
}

class ProgramaQualificacao {
    id: number;
    nome: string;
    area: string; // TI, construção, etc.
    cargaHoraria: number;
    
}

class Fiscalizacao {
    id: number;
    empresa: Empresa;
    data: Date;
    irregularidades: string[];
  
}

class IndicadorEmpresarial {
    id: number;
    tipo: string; // Taxa de desemprego, número de empresas abertas, etc.
    valor: number;
    dataReferencia: Date;
    
}

class SistemaGerenciamentoEmpresarial {
    empresas: Empresa[] = [];
    funcionarios: Funcionario[] = [];
    programas: ProgramaQualificacao[] = [];
    fiscalizacoes: Fiscalizacao[] = [];
    indicadores: Indicador[] = [];
    
}

abstract class DosTransportes {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class Infraestrutura extends DosTransportes {
    tipo: string; // Rodovia, ferrovia, porto, aeroporto
    status: string; // Em construção, em operação, etc.
    localizacao: string;
   
}

class ProjetoFormal extends DosTransportes {
    nomedoprojeto: string;
    modal: string; // Rodoviário, ferroviário, etc.
    orçamento: number;
    status: string; // Em planejamento, em execução, concluído
    
}

class Contrato extends DosTransportes {
    tipo: string; // Concessão, prestação de serviços, etc.
    empresa: string;
    objeto: string;
    
}

class IndicadordoProjeto extends DosTransportes {
    tipo: string; // Volume de carga transportada, número de passageiros, etc.
    valor: number;
    dataReferencia: Date;
    
}

class SistemaGerenciamentoTransporte {
    infraestruturas: Infraestrutura[] = [];
    projetos: Projeto[] = [];
    contratos: Contrato[] = [];
    indicadores: Indicador[] = [];
    
}

  

  abstract class Turismo {
    id: number;
    nome: string;
    descricao: string;
    dataCadastro: Date;
    
    classificacao: number; // (estrelas para hospedagem, etc.)
  
    constructor(id: number, nome: string, descricao: string) {
      this.id = id;
      this.nome = nome;
      this.descricao = descricao;
      this.dataCadastro = new Date();
    }
  
    
    abstract calcularReceita(): number;
    abstract gerarRelatorio(): string;
  }
  
  
  
  class DestinoTuristicos extends Turismo {
    calcularReceita(): number {
        throw new Error("Metodo não implementado.");
    }
    gerarRelatorio(): string {
        throw new Error("Metodo não implementado.");
    }
    nomedoevento: string;
    dataInicio: Date;
    dataFim: Date;
    local: string;

    constructor(id: number, nome: string, descricao: string, dataInicio: Date, dataFim: Date, local: string) {
      super(id, nome, descricao);
      this.dataInicio = dataInicio;
      this.dataFim = dataFim;
      this.local = local;
    }
    
  }
  class Roteiro {
    nome: string;
    descricao: string;
    destinos: DestinoTuristicos[];

    constructor(nome: string, descricao: string) {
      this.nome = nome;
      this.descricao = descricao;
    }
   
  }
  class DestinosTuristicos {
    id: number;
    nome: string;
    descricao: string;
    dataInicio: Date;
    dataFim: Date;
    local: string;

    constructor(id: number, nome: string, descricao: string, dataInicio: Date, dataFim: Date, local: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.local = local;
    }
  }
  
  class Usuario {
    nome: string;
    email: string;
    tipo: string; // (turista, empresa, gestor)
    
  }
  
  class Reserva {
    usuario: Usuario;
    servico: string;
    dataReserva: Date;
    
  }
  
  class Estatistica {
    totalVisitantes: number;
    calcularMediaEstadia(): number {
      return 0;
    }
  }

  
  abstract class SecretariaComunicacaoSocial {
    id: number;
    nome: string;
  
    dataCadastro: Date;
  }
  

  class CampanhaPublicitaria extends SecretariaComunicacaoSocial implements CampanhaPublicitaria {
    descricao: string;
    dataInicio: Date;
    dataFim: Date;

    constructor(descricao: string, dataInicio: Date, dataFim: Date){
        super();
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
   
    calcularGastosTotais(): number {
        return 0;
    }
}
  
  
  class AgenciaPublicitaria extends SecretariaComunicacaoSocial {
    calcularGastosTotais(): number {
        return 0;
    
  }
}
  

class SolicitacaoOrcamento extends SecretariaComunicacaoSocial implements SolicitacaoOrcamento {
      descricao: string;
      valor: number;
      dataSolicitacao: Date;
      status: string; // (pendente, aprovado, rejeitado)

      constructor(descricao: string, valor: number, dataSolicitacao: Date, status: string) {
        super();
          this.descricao = descricao;
          this.valor = valor;
          this.dataSolicitacao = dataSolicitacao;
          this.status = status;
      }
  }
  
  class Pagamento {
    valor: number;
    dataPagamento: Date;
    status: string; // (pendente, pago)

    constructor(valor: number, dataPagamento: Date, status: string) {
      this.valor = valor;
      this.dataPagamento = dataPagamento;
      this.status = status;
    }
  }
  
  class Relatorio {
    gerarRelatorioDespesas(): string {
     return "Relatório de despesas gerado.";
    }
  }

 
  

  abstract class ReconstrucaoRS {
    id: number;
    nomecidade: string;
    descricao: string;
    dataCadastro: Date;
    solicitacaoOrcamento: SolicitacaoOrcamento;
  }
  
  
  class MunicipioAtingido extends ReconstrucaoRS implements MunicipioAtingido {
    calcularCustoReconstrucao(): number {
      return 0;
    }
  }
  

  class RecursoFinanceiro extends ReconstrucaoRS implements RecursoFinanceiro {
    valor: number;
    dataLiberacao: Date;
    status: string; // (pendente, liberado, gasto)
  }
  
 
  class Voluntario {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    dataCadastro: Date;
    projeto:string;

    constructor(nome: string, cpf: string, telefone: string, email: string, dataCadastro: Date, projeto:string) {
      this.nome = nome;
      this.cpf = cpf;
      this.telefone = telefone;
      this.email = email;
      this.dataCadastro = new Date();
      this.projeto = projeto;

    }
  }



abstract class SecretariaGeral {
    id: number;
    nome: string;
    dataCadastro: Date;

    constructor(id:number,nome:string){
        this.id = id;
        this.nome = nome;
    }
}

 class ProjetoPoliticaPublica extends SecretariaGeral implements ProjetoPoliticaPublica {
     iniciarProjeto(): void {
        console.log(`Iniciando o projeto ${this.nome}`);
     }
     finalizarProjeto(): void {
        console.log(`Finalizando o projeto ${this.nome}`);
     }

    
    descricaoProjeto(): string {
        return `Descrição do projeto: ${this.nome}`;
    } 
}


 class OrganizacaoSociedadeCivil {
   
    nome: string;
    endereco: string;

    constructor(nome: string, endereco: string) {
        this.nome = nome;
        this.endereco = endereco;
    }
}
class Definicao extends OrganizacaoSociedadeCivil implements Definicao { 
    obterDetalhes(): string {
        return  ` Nome: ${this.nome}, Endereço: ${this.endereco} `;
    }
}


 class EventoParticipacaoPopular {
    titulo: string;
    data: Date;
    local: string;

    constructor(titulo: string, data: Date, local: string) {
        this.titulo = titulo;
        this.data = data;
        this.local = local;
    }
}
class OrganizacaoEvento extends OrganizacaoSociedadeCivil {
    titulo: string;
    data: Date;
    local: string;

    constructor(nome: string, endereco: string, titulo: string, data: Date, local: string) {
        super(nome, endereco);
        this.titulo = titulo;
        this.data = data;
        this.local = local;
    }

    obterDetalhes(): string {
        return `Título: ${this.titulo}, Data: ${this.data.toDateString()}, Local: ${this.local}`;
    }

    organizarEvento(): void {
        console.log(`Organizando o evento: ${this.titulo}`);
    }

    cancelarEvento(): void {
        console.log(`Cancelando o evento: ${this.titulo}`);
    }
}



abstract class RelacoesInstitucionais {
    id: number;
    nome: string;
    dataCadastro: Date;

    constructor(id: number, nome: string, dataCadastro: Date){
        this.id = id;
        this.nome = nome;
        this.dataCadastro = new Date();
    }
}


class RelacaoInstitucional extends RelacoesInstitucionais {
    descricao: string;
    tipo: string;
    dataInicio: Date;
    dataFim: Date;

    constructor(id: number, nome: string, dataCadastro: Date, descricao: string, tipo: string, dataInicio: Date, dataFim: Date) {
        super(id, nome, dataCadastro);
        this.descricao = descricao;
        this.tipo = tipo;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    obterDetalhes(): string {
        return `Descrição: ${this.descricao}, Tipo: ${this.tipo}, Data de início: ${this.dataInicio.toDateString()}, Data de fim: ${this.dataFim.toDateString()}`;
    }

    iniciarRelacao(): void {
        console.log(`Iniciando relação ${this.nome}`);
    }

    encerrarRelacao(): void {
        console.log(`Encerrando relação ${this.nome}`);
    }
}

class ProjetoLei {
    id: number;
    nome: string;
    descricao: string;
    dataApresentacao: Date;
    status: string; // Em análise, aprovado, rejeitado, etc.

    constructor(id: number, nome: string, descricao: string, dataApresentacao: Date, status: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataApresentacao = dataApresentacao;
        this.status = status;
    }

    
    atualizarStatus(novoStatus: string): void {
        this.status = novoStatus;
    }
}


class Reunião {
    id: number;
    data: Date;
    local: string;
    pauta: string;

    constructor(id: number, data: Date, local: string, pauta: string) {
        this.id = id;
        this.data = data;
        this.local = local;
        this.pauta = pauta;
    }

    
    obterDetalhes(): string {
        return `Data: ${this.data.toDateString()}, Local: ${this.local}, Pauta: ${this.pauta}`;
    }
}
class MembroConselho {
    nome: string;
    cargo: string;
    conselho: string;
    telefone: number;

    constructor(nome:string, cargo: string, conselho: string, telefone:number){
        this.nome = nome;
        this.cargo = cargo;
        this.conselho = conselho;
        this.telefone = telefone;
    }
}




abstract class ProcessoJuridicoUniao {
    id: number;
    nome: string;
    // ... outros atributos como:
    dataCadastro: Date;
}


class ProcessoJuridico extends ProcessoJuridicoUniao implements ProcessoJuridico {
    tipo: string; // Criminal, civil, etc.
    status: string; // Em andamento, concluído, etc.
    envolvidos: Pessoa[];
    recursos: Recurso[];

    constructor(tipo: string, status: string) {
        super();
        this.tipo = tipo;
        this.status = status;
    }

}


class Advogado {
    nome: string;
    oab: string;
    especialidade: string;

    constructor(nome: string, oab: string, especialidade: string) {
        this.nome = nome;
        this.oab = oab;
        this.especialidade = especialidade;
    }

    
    obterDetalhes(): string {
        return `Nome: ${this.nome}, OAB: ${this.oab}, Especialidade: ${this.especialidade}`;
    }
}


class ClienteInterno {
    nome: string;
    matricula: number;
    setor: string;

    constructor(nome: string, matricula: number, setor: string) {
        this.nome = nome;
        this.matricula = matricula;
        this.setor = setor;
    }

    
    obterDetalhes(): string {
        return `Nome: ${this.nome}, Matrícula: ${this.matricula}, Setor: ${this.setor}`;
    }
}


class Documento {
    id: number;
    tipo: string; // Contrato, procuração, etc.
    dataCriacao: Date;
    status: string; // Ativo, inativo, etc.

    constructor(id: number, tipo: string, dataCriacao: Date, status: string) {
        this.id = id;
        this.tipo = tipo;
        this.dataCriacao = dataCriacao;
        this.status = status;
    }

    
    atualizarStatus(novoStatus: string): void {
        this.status = novoStatus;
    }
}



abstract class CasaCivilGovFederal {
    id: number;
    nome: string;
    dataCadastro: Date;

    constructor(id:number, nome: string, dataCadastro: Date){
        this.id = id;
        this.nome = nome;
        this.dataCadastro = new Date();
    }
}


class ProjetoCasaCivil extends CasaCivilGovFederal implements ProjetoCasaCivil {
    descricao: string;
    status: string; // Em análise, aprovado, rejeitado, etc.
}


class PropostaLegislativa {
    id: number;
    tipo: string; // Projeto de Lei, Emenda, etc.
    dataApresentacao: Date;
    status: string; // Em tramita o, aprovado, rejeitado, etc.
    autores: string

    constructor(id: number, tipo: string, dataApresentacao: Date, status: string, autores: string) {
        this.id = id;
        this.tipo = tipo;
        this.dataApresentacao = dataApresentacao;
        this.status = status;
        this.autores = autores;
    }
}


class AtoOficial {
    id: number;
    tipo: string; // Decreto, portaria, etc.
    dataPublicacao: Date;
    status: string; // Ativo, inativo, etc.

    constructor(id: number, tipo: string, dataPublicacao: Date, status: string) {
        this.id = id;
        this.tipo = tipo;
        this.dataPublicacao = dataPublicacao;
        this.status = status;
    }

    
    atualizarStatus(novoStatus: string): void {
        this.status = novoStatus;
    }
}

abstract class ControladoriaGeralUniao {
    protected _controleinterno: ControleInterno;
    protected _auditoriapublica: AuditoriaPublica;

    constructor() {
        this._controleinterno = new ControleInterno;
        this._auditoriapublica = new AuditoriaPublica;
    }

    abstract tratarAssunto(): void;
}

class ControleInterno extends ControladoriaGeralUniao {
     tratarAssunto(): void {
        console.log("Realizando atividades de controle interno...");
    }
}

class AuditoriaPublica extends ControladoriaGeralUniao {
    tratarAssunto(): void {
        console.log("Realizando auditoria pública...");
    }
}
class Assunto{
    tratarAssunto(): void {
        console.log("Tratando assunto...");
    }
}
class PrevencaoCombatecorrupcao{
    tratarAssunto(): void {
        console.log("Prevenindo e combatendo a corrupção...");
    }
}
class Ouvidoria{
    tratarAssunto(): void {
        console.log("Ouvindo demandas...");
    }
}



class Presidente {
    private _assuntos: Assunto[] = [];

    constructor() {
        this._assuntos = [];
    }

    adicionarAssunto(assunto: Assunto) {
        this._assuntos.push(assunto);
    }

    tratarAssuntos() {
        this._assuntos.forEach(assunto => assunto.tratarAssunto());
    }
}

class CGU {
    presidente: Presidente;
    receberdemandas:string;
    gerarrelatorios:string;

    constructor(presidente: Presidente,receberdemandas:string,gerarrelatorios:string) {
        this.presidente = presidente;
        this.receberdemandas = receberdemandas;
        this.gerarrelatorios = gerarrelatorios;
    }

}
abstract class GabinetedeSegurancaInstitucional {
    nome: string;
    descricao: string;
    dataInicio: Date;
    dataFim: Date;

    constructor(nome: string, descricao: string, dataInicio: Date, dataFim: Date) {
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    abstract executar(): void;
}

class OperacaoMilitar extends GabinetedeSegurancaInstitucional implements OperacaoMilitar {
    executar(): void {
        console.log("Executando operação militar...");
    }
}



class Agente {
   protected nome: string;
   protected especialidade: string;
   
    constructor(nome: string,especialidade:string){
        this.nome = nome;
        this.especialidade = especialidade;
    }
}

class GSI {
    public presidente: Presidente;
    private agente: Agente[] = [];
    private operacao: Operacao[] = [];

}



const presidente = new Presidente();
presidente.adicionarAssunto(new ControleInterno());
presidente.adicionarAssunto(new AuditoriaPublica());

const cgu = new CGU(presidente, "receber demandas", "gerar relatórios");
presidente.tratarAssuntos();



