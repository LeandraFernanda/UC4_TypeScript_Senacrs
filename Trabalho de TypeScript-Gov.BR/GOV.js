var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Agricultura = /** @class */ (function () {
    function Agricultura(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Agricultura;
}());
var Agropecuaria = /** @class */ (function (_super) {
    __extends(Agropecuaria, _super);
    function Agropecuaria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Agropecuaria;
}(Agricultura));
var Agronegocio = /** @class */ (function (_super) {
    __extends(Agronegocio, _super);
    function Agronegocio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Agronegocio;
}(Agricultura));
var Tecnologia = /** @class */ (function (_super) {
    __extends(Tecnologia, _super);
    function Tecnologia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tecnologia;
}(Agricultura));
var Organizacao = /** @class */ (function (_super) {
    __extends(Organizacao, _super);
    function Organizacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Organizacao;
}(Agricultura));
var Ambiental = /** @class */ (function (_super) {
    __extends(Ambiental, _super);
    function Ambiental() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ambiental;
}(Agricultura));
var Cidades = /** @class */ (function () {
    function Cidades(id, nome, desdricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = desdricao;
    }
    return Cidades;
}());
var DesigualdadeSocial = /** @class */ (function (_super) {
    __extends(DesigualdadeSocial, _super);
    function DesigualdadeSocial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DesigualdadeSocial;
}(Cidades));
var AcessoPopulacao = /** @class */ (function (_super) {
    __extends(AcessoPopulacao, _super);
    function AcessoPopulacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AcessoPopulacao;
}(Cidades));
var Moradia = /** @class */ (function (_super) {
    __extends(Moradia, _super);
    function Moradia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Moradia;
}(Cidades));
var Saneamento = /** @class */ (function (_super) {
    __extends(Saneamento, _super);
    function Saneamento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Saneamento;
}(Cidades));
var Transporte = /** @class */ (function (_super) {
    __extends(Transporte, _super);
    function Transporte() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Transporte;
}(Cidades));
var CienciaTecnologiaInovacao = /** @class */ (function () {
    function CienciaTecnologiaInovacao() {
    }
    return CienciaTecnologiaInovacao;
}());
var Pesquisador = /** @class */ (function (_super) {
    __extends(Pesquisador, _super);
    function Pesquisador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pesquisador;
}(CienciaTecnologiaInovacao));
var InstituicaoPesquisa = /** @class */ (function (_super) {
    __extends(InstituicaoPesquisa, _super);
    function InstituicaoPesquisa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InstituicaoPesquisa;
}(CienciaTecnologiaInovacao));
var Projeto = /** @class */ (function (_super) {
    __extends(Projeto, _super);
    function Projeto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Projeto;
}(CienciaTecnologiaInovacao));
var Publicacao = /** @class */ (function (_super) {
    __extends(Publicacao, _super);
    function Publicacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Publicacao;
}(CienciaTecnologiaInovacao));
var Tecnologica = /** @class */ (function (_super) {
    __extends(Tecnologica, _super);
    function Tecnologica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tecnologica;
}(CienciaTecnologiaInovacao));
var Empresa = /** @class */ (function (_super) {
    __extends(Empresa, _super);
    function Empresa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Empresa;
}(CienciaTecnologiaInovacao));
var Patente = /** @class */ (function (_super) {
    __extends(Patente, _super);
    function Patente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Patente;
}(CienciaTecnologiaInovacao));
var Investimento = /** @class */ (function (_super) {
    __extends(Investimento, _super);
    function Investimento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Investimento;
}(CienciaTecnologiaInovacao));
var Comunicacao = /** @class */ (function () {
    function Comunicacao(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Comunicacao;
}());
var Servico = /** @class */ (function () {
    function Servico(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Servico;
}());
var ServiçoDeRadiodifusão = /** @class */ (function (_super) {
    __extends(ServiçoDeRadiodifusão, _super);
    function ServiçoDeRadiodifusão() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ServiçoDeRadiodifusão;
}(Comunicacao));
var Comunicacoes = /** @class */ (function () {
    function Comunicacoes(cnpj, nomeFantasia, sede) {
        this.cnpj = cnpj;
        this.nomeFantasia = nomeFantasia;
        this.sede = sede;
    }
    return Comunicacoes;
}());
var Cultura = /** @class */ (function () {
    function Cultura(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Cultura;
}());
var Obra = /** @class */ (function () {
    function Obra(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Obra;
}());
var ProjetoCultural = /** @class */ (function (_super) {
    __extends(ProjetoCultural, _super);
    function ProjetoCultural() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjetoCultural;
}(Cultura));
var InstituicaoCultural = /** @class */ (function (_super) {
    __extends(InstituicaoCultural, _super);
    function InstituicaoCultural() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InstituicaoCultural;
}(Cultura));
var Artista = /** @class */ (function (_super) {
    __extends(Artista, _super);
    function Artista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Artista;
}(Cultura));
var Fase = /** @class */ (function () {
    function Fase(descricao, dataInicio, dataFim) {
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
    return Fase;
}());
var Defesa = /** @class */ (function () {
    function Defesa() {
    }
    return Defesa;
}());
var Pessoa = /** @class */ (function (_super) {
    __extends(Pessoa, _super);
    function Pessoa(nomepessoa, cpf, telefone) {
        var _this = _super.call(this) || this;
        _this.nomepessoa = nomepessoa;
        _this.cpf = cpf;
        _this.telefone = telefone;
        return _this;
    }
    return Pessoa;
}(Defesa));
var MaterialBelico = /** @class */ (function (_super) {
    __extends(MaterialBelico, _super);
    function MaterialBelico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MaterialBelico;
}(Defesa));
var ForcaArmadas = /** @class */ (function (_super) {
    __extends(ForcaArmadas, _super);
    function ForcaArmadas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ForcaArmadas;
}(Defesa));
var Marinha = /** @class */ (function (_super) {
    __extends(Marinha, _super);
    function Marinha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Marinha;
}(ForcaArmadas));
var Navio = /** @class */ (function () {
    function Navio(frota, desegnacao, missao, status) {
        this.frota = frota;
        this.desegnacao = desegnacao;
        this.missao = missao;
        this.status = status;
    }
    return Navio;
}());
var BaseNaval = /** @class */ (function () {
    function BaseNaval(nome, localizacao, status) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.status = status;
    }
    return BaseNaval;
}());
var Exercito = /** @class */ (function () {
    function Exercito(tropas, bases, civil, contratado, arma, veiculo, equipamento, operacao, missao) {
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
    return Exercito;
}());
var Aeronautica = /** @class */ (function () {
    function Aeronautica() {
    }
    return Aeronautica;
}());
var Equipamento = /** @class */ (function () {
    function Equipamento(id, nome, nomeferramenta, descricao) {
        this.id = id;
        this.nome = nome;
        this.nomeferramenta = nomeferramenta;
        this.descricao = descricao;
    }
    return Equipamento;
}());
var Tropas = /** @class */ (function () {
    function Tropas(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Tropas;
}());
var Militar = /** @class */ (function () {
    function Militar(nome, afiliacao, areaAtuacao) {
        this.nome = nome;
        this.afiliacao = afiliacao;
        this.areaAtuacao = areaAtuacao;
    }
    return Militar;
}());
var Civil = /** @class */ (function () {
    function Civil(nome, afiliacao, areaAtuacao) {
        this.nome = nome;
        this.afiliacao = afiliacao;
        this.areaAtuacao = areaAtuacao;
    }
    return Civil;
}());
var Contratado = /** @class */ (function () {
    function Contratado(nome, afiliacao, areaAtuacao) {
        this.nome = nome;
        this.afiliacao = afiliacao;
        this.areaAtuacao = areaAtuacao;
    }
    return Contratado;
}());
var Arma = /** @class */ (function () {
    function Arma(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Arma;
}());
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    Veiculo.prototype.constructiva = function (id, nome, descricao, manutencaoPreventiva, manutencaoCorretiva, manutencaoPreditiva) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.manutencaoPreventiva = manutencaoPreventiva;
        this.manutencaoCorretiva = manutencaoCorretiva;
        this.manutencaoPreditiva = manutencaoPreditiva;
    };
    return Veiculo;
}());
var Aeronave = /** @class */ (function () {
    function Aeronave(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Aeronave;
}());
var Operacao = /** @class */ (function () {
    function Operacao(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Operacao;
}());
var Baixa = /** @class */ (function () {
    function Baixa(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Baixa;
}());
var tropas = /** @class */ (function () {
    function tropas(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return tropas;
}());
var Base = /** @class */ (function () {
    function Base(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Base;
}());
var OrdemServico = /** @class */ (function () {
    function OrdemServico(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return OrdemServico;
}());
var Missao = /** @class */ (function () {
    function Missao(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return Missao;
}());
var AgriculturaFamiliar = /** @class */ (function () {
    function AgriculturaFamiliar(id) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
    return AgriculturaFamiliar;
}());
var Pessoa1 = /** @class */ (function (_super) {
    __extends(Pessoa1, _super);
    function Pessoa1(id, nome, cpf, telefone) {
        var _this = _super.call(this, id) || this;
        _this.nome = nome;
        _this.cpf = cpf;
        _this.telefone = telefone;
        return _this;
    }
    return Pessoa1;
}(AgriculturaFamiliar));
var Imovel = /** @class */ (function (_super) {
    __extends(Imovel, _super);
    function Imovel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Imovel;
}(AgriculturaFamiliar));
var Processo = /** @class */ (function (_super) {
    __extends(Processo, _super);
    function Processo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Processo;
}(AgriculturaFamiliar));
var IndustriaComercioeServicos = /** @class */ (function () {
    function IndustriaComercioeServicos(id) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
    return IndustriaComercioeServicos;
}());
var Politica = /** @class */ (function (_super) {
    __extends(Politica, _super);
    function Politica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Politica;
}(IndustriaComercioeServicos));
var Programa = /** @class */ (function (_super) {
    __extends(Programa, _super);
    function Programa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Programa;
}(IndustriaComercioeServicos));
var Empresas = /** @class */ (function (_super) {
    __extends(Empresas, _super);
    function Empresas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Empresas;
}(IndustriaComercioeServicos));
var AssistenciaSocialFamiliaeCombateaFome = /** @class */ (function () {
    function AssistenciaSocialFamiliaeCombateaFome(id) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
    return AssistenciaSocialFamiliaeCombateaFome;
}());
var Beneficiario = /** @class */ (function (_super) {
    __extends(Beneficiario, _super);
    function Beneficiario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Beneficiario;
}(AssistenciaSocialFamiliaeCombateaFome));
var ProgramaSocial = /** @class */ (function (_super) {
    __extends(ProgramaSocial, _super);
    function ProgramaSocial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProgramaSocial;
}(AssistenciaSocialFamiliaeCombateaFome));
var PoliticaPublicas = /** @class */ (function (_super) {
    __extends(PoliticaPublicas, _super);
    function PoliticaPublicas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PoliticaPublicas;
}(AssistenciaSocialFamiliaeCombateaFome));
var DireitosHumanoseCidadania = /** @class */ (function () {
    function DireitosHumanoseCidadania(id) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
    return DireitosHumanoseCidadania;
}());
var Pessoas = /** @class */ (function (_super) {
    __extends(Pessoas, _super);
    function Pessoas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pessoas;
}(DireitosHumanoseCidadania));
var GrupoVulneravel = /** @class */ (function (_super) {
    __extends(GrupoVulneravel, _super);
    function GrupoVulneravel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GrupoVulneravel;
}(DireitosHumanoseCidadania));
var PoliticaPublica = /** @class */ (function (_super) {
    __extends(PoliticaPublica, _super);
    function PoliticaPublica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PoliticaPublica;
}(DireitosHumanoseCidadania));
var Educacao = /** @class */ (function () {
    function Educacao(id) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
    return Educacao;
}());
var Pessoas1 = /** @class */ (function (_super) {
    __extends(Pessoas1, _super);
    function Pessoas1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pessoas1;
}(Educacao));
var InstituicaoEducacional = /** @class */ (function (_super) {
    __extends(InstituicaoEducacional, _super);
    function InstituicaoEducacional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InstituicaoEducacional;
}(Educacao));
var ProgramaEducacional = /** @class */ (function (_super) {
    __extends(ProgramaEducacional, _super);
    function ProgramaEducacional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProgramaEducacional;
}(Educacao));
var EmpreendedorismoMicroempresaeEmpresadePequenoPorte = /** @class */ (function () {
    function EmpreendedorismoMicroempresaeEmpresadePequenoPorte(id) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
    return EmpreendedorismoMicroempresaeEmpresadePequenoPorte;
}());
var Pessoas2 = /** @class */ (function (_super) {
    __extends(Pessoas2, _super);
    function Pessoas2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pessoas2;
}(EmpreendedorismoMicroempresaeEmpresadePequenoPorte));
var Empresas1 = /** @class */ (function (_super) {
    __extends(Empresas1, _super);
    function Empresas1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Empresas1;
}(EmpreendedorismoMicroempresaeEmpresadePequenoPorte));
var Programas = /** @class */ (function (_super) {
    __extends(Programas, _super);
    function Programas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Programas;
}(EmpreendedorismoMicroempresaeEmpresadePequenoPorte));
var Esportes = /** @class */ (function () {
    function Esportes(id) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
    return Esportes;
}());
var Pessoa2 = /** @class */ (function (_super) {
    __extends(Pessoa2, _super);
    function Pessoa2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pessoa2;
}(Esportes));
var Atleta = /** @class */ (function (_super) {
    __extends(Atleta, _super);
    function Atleta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Atleta;
}(Pessoa2));
var Programa1 = /** @class */ (function (_super) {
    __extends(Programa1, _super);
    function Programa1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Programa1;
}(Esportes));
var Fazenda = /** @class */ (function () {
    function Fazenda(id) {
        this.id = id;
        this.dataCriacao = new Date();
        this.dataAtualizacao = new Date();
    }
    return Fazenda;
}());
var Pessoa3 = /** @class */ (function (_super) {
    __extends(Pessoa3, _super);
    function Pessoa3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pessoa3;
}(Fazenda));
var Empresa2 = /** @class */ (function (_super) {
    __extends(Empresa2, _super);
    function Empresa2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Empresa2;
}(Fazenda));
var PoliticaEconomica = /** @class */ (function (_super) {
    __extends(PoliticaEconomica, _super);
    function PoliticaEconomica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PoliticaEconomica;
}(Fazenda));
var GestaoInovacaoeServicosPublicos = /** @class */ (function () {
    function GestaoInovacaoeServicosPublicos(id, nome, descricao, dataInicio, dataFim, responsavel) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.responsavel = responsavel;
    }
    return GestaoInovacaoeServicosPublicos;
}());
var DigitalizacaoServico = /** @class */ (function (_super) {
    __extends(DigitalizacaoServico, _super);
    function DigitalizacaoServico(id, nome, descricao, dataInicio, dataFim, responsavel, sistema, beneficios) {
        var _this = _super.call(this, id, nome, descricao, dataInicio, dataFim, responsavel) || this;
        _this.sistema = sistema;
        _this.beneficios = beneficios;
        return _this;
    }
    DigitalizacaoServico.prototype.executar = function () {
        // Lógica para execução da digitalização do serviço
        console.log("Iniciando digitaliza\u00E7\u00E3o do servi\u00E7o ".concat(this.nome, "..."));
    };
    DigitalizacaoServico.prototype.avaliar = function () {
        return "A digitalização do serviço foi concluída com sucesso.";
    };
    return DigitalizacaoServico;
}(GestaoInovacaoeServicosPublicos));
var Desburocratizacao = /** @class */ (function (_super) {
    __extends(Desburocratizacao, _super);
    function Desburocratizacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Desburocratizacao.prototype.executar = function () {
    };
    Desburocratizacao.prototype.avaliar = function () {
        return "A desburocratização foi concluída com sucesso.";
    };
    return Desburocratizacao;
}(GestaoInovacaoeServicosPublicos));
var IgualdadeRacial = /** @class */ (function () {
    function IgualdadeRacial(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return IgualdadeRacial;
}());
var projetos = /** @class */ (function (_super) {
    __extends(projetos, _super);
    function projetos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return projetos;
}(IgualdadeRacial));
var Indicador = /** @class */ (function (_super) {
    __extends(Indicador, _super);
    function Indicador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Indicador;
}(IgualdadeRacial));
var Parceiro = /** @class */ (function (_super) {
    __extends(Parceiro, _super);
    function Parceiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Parceiro;
}(IgualdadeRacial));
var Evento = /** @class */ (function (_super) {
    __extends(Evento, _super);
    function Evento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Evento;
}(IgualdadeRacial));
var SistemaGerenciamentoNominal = /** @class */ (function () {
    function SistemaGerenciamentoNominal() {
        this.projetos = [];
        this.indicadores = [];
        this.parceiros = [];
        this.eventos = [];
    }
    return SistemaGerenciamentoNominal;
}());
var IntegracaoDesenvolvimentoRegional = /** @class */ (function () {
    function IntegracaoDesenvolvimentoRegional(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return IntegracaoDesenvolvimentoRegional;
}());
var PlanoRegional = /** @class */ (function (_super) {
    __extends(PlanoRegional, _super);
    function PlanoRegional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PlanoRegional;
}(IntegracaoDesenvolvimentoRegional));
var Meta = /** @class */ (function () {
    function Meta() {
    }
    return Meta;
}());
var indicadores = /** @class */ (function () {
    function indicadores() {
    }
    return indicadores;
}());
var Desastre = /** @class */ (function () {
    function Desastre() {
    }
    return Desastre;
}());
var Impacto = /** @class */ (function () {
    function Impacto() {
    }
    return Impacto;
}());
var SolicitacaoRecurso = /** @class */ (function (_super) {
    __extends(SolicitacaoRecurso, _super);
    function SolicitacaoRecurso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SolicitacaoRecurso;
}(IntegracaoDesenvolvimentoRegional));
var SistemaGerenciamentosIntegrados = /** @class */ (function () {
    function SistemaGerenciamentosIntegrados() {
        this.planosRegionais = [];
        this.desastres = [];
    }
    return SistemaGerenciamentosIntegrados;
}());
var JusticaeSegurancaPublica = /** @class */ (function () {
    function JusticaeSegurancaPublica(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return JusticaeSegurancaPublica;
}());
var ProcessoLegal = /** @class */ (function (_super) {
    __extends(ProcessoLegal, _super);
    function ProcessoLegal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProcessoLegal;
}(JusticaeSegurancaPublica));
var OperacaoDesfecho = /** @class */ (function (_super) {
    __extends(OperacaoDesfecho, _super);
    function OperacaoDesfecho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OperacaoDesfecho;
}(JusticaeSegurancaPublica));
var PessoaFisicaeJuridica = /** @class */ (function (_super) {
    __extends(PessoaFisicaeJuridica, _super);
    function PessoaFisicaeJuridica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PessoaFisicaeJuridica;
}(JusticaeSegurancaPublica));
var Recurso = /** @class */ (function (_super) {
    __extends(Recurso, _super);
    function Recurso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Recurso;
}(JusticaeSegurancaPublica));
var SistemaGerenciamentoProcessual = /** @class */ (function () {
    function SistemaGerenciamentoProcessual() {
        this.processos = [];
        this.operacoes = [];
        this.pessoas = [];
        this.recursos = [];
    }
    return SistemaGerenciamentoProcessual;
}());
var MeioAmbienteeMudancaClimatica = /** @class */ (function () {
    function MeioAmbienteeMudancaClimatica(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return MeioAmbienteeMudancaClimatica;
}());
var ProjetoAmbiental = /** @class */ (function (_super) {
    __extends(ProjetoAmbiental, _super);
    function ProjetoAmbiental() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjetoAmbiental;
}(MeioAmbienteeMudancaClimatica));
var indicadoresAtuais = /** @class */ (function (_super) {
    __extends(indicadoresAtuais, _super);
    function indicadoresAtuais() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return indicadoresAtuais;
}(MeioAmbienteeMudancaClimatica));
var UnidadeConservacao = /** @class */ (function (_super) {
    __extends(UnidadeConservacao, _super);
    function UnidadeConservacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnidadeConservacao;
}(MeioAmbienteeMudancaClimatica));
var LicencaAmbiental = /** @class */ (function (_super) {
    __extends(LicencaAmbiental, _super);
    function LicencaAmbiental() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LicencaAmbiental;
}(MeioAmbienteeMudancaClimatica));
var SistemaGerenciamentoContemporaneo = /** @class */ (function () {
    function SistemaGerenciamentoContemporaneo() {
        this.projetos = [];
        this.indicadores = [];
        this.unidadesConservacao = [];
        this.licencas = [];
    }
    return SistemaGerenciamentoContemporaneo;
}());
var MineracaoeEnergia = /** @class */ (function () {
    function MineracaoeEnergia(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return MineracaoeEnergia;
}());
var ProjetoPesquisa = /** @class */ (function (_super) {
    __extends(ProjetoPesquisa, _super);
    function ProjetoPesquisa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjetoPesquisa;
}(MineracaoeEnergia));
var ResultadoPesquisa = /** @class */ (function () {
    function ResultadoPesquisa() {
    }
    return ResultadoPesquisa;
}());
var DadoGeologico = /** @class */ (function (_super) {
    __extends(DadoGeologico, _super);
    function DadoGeologico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DadoGeologico;
}(MineracaoeEnergia));
var ConcessaoMineral = /** @class */ (function (_super) {
    __extends(ConcessaoMineral, _super);
    function ConcessaoMineral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConcessaoMineral;
}(MineracaoeEnergia));
var RecursoEnergetico = /** @class */ (function (_super) {
    __extends(RecursoEnergetico, _super);
    function RecursoEnergetico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RecursoEnergetico;
}(MineracaoeEnergia));
var SistemaGerenciamentoQualificado = /** @class */ (function () {
    function SistemaGerenciamentoQualificado() {
        this.projetos = [];
        this.dadosGeologicos = [];
        this.concessoes = [];
        this.recursosEnergeticos = [];
    }
    return SistemaGerenciamentoQualificado;
}());
var DasMulheresIgualdadeGenero = /** @class */ (function () {
    function DasMulheresIgualdadeGenero(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return DasMulheresIgualdadeGenero;
}());
var PoliticasPublica = /** @class */ (function (_super) {
    __extends(PoliticasPublica, _super);
    function PoliticasPublica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PoliticasPublica;
}(DasMulheresIgualdadeGenero));
var IndicadorGenero = /** @class */ (function (_super) {
    __extends(IndicadorGenero, _super);
    function IndicadorGenero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IndicadorGenero;
}(DasMulheresIgualdadeGenero));
var ProjetoSocial = /** @class */ (function (_super) {
    __extends(ProjetoSocial, _super);
    function ProjetoSocial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjetoSocial;
}(DasMulheresIgualdadeGenero));
var DadoDemografico = /** @class */ (function (_super) {
    __extends(DadoDemografico, _super);
    function DadoDemografico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DadoDemografico;
}(DasMulheresIgualdadeGenero));
var SistemaDeGerenciamento = /** @class */ (function () {
    function SistemaDeGerenciamento() {
        this.politicas = [];
        this.indicadores = [];
        this.projetos = [];
        this.dadosDemograficos = [];
    }
    return SistemaDeGerenciamento;
}());
var PescaeAquicultura = /** @class */ (function () {
    function PescaeAquicultura(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return PescaeAquicultura;
}());
var ProjetoPesca = /** @class */ (function (_super) {
    __extends(ProjetoPesca, _super);
    function ProjetoPesca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjetoPesca;
}(PescaeAquicultura));
var IndicadoresAtuais = /** @class */ (function (_super) {
    __extends(IndicadoresAtuais, _super);
    function IndicadoresAtuais() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IndicadoresAtuais;
}(PescaeAquicultura));
var LicencaPesca = /** @class */ (function (_super) {
    __extends(LicencaPesca, _super);
    function LicencaPesca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LicencaPesca;
}(PescaeAquicultura));
var Embarcacao = /** @class */ (function () {
    function Embarcacao() {
    }
    return Embarcacao;
}());
var RecursoPesqueiro = /** @class */ (function (_super) {
    __extends(RecursoPesqueiro, _super);
    function RecursoPesqueiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RecursoPesqueiro;
}(PescaeAquicultura));
var SistemasdeGerenciamento = /** @class */ (function () {
    function SistemasdeGerenciamento() {
        this.projetos = [];
        this.indicadores = [];
        this.licencas = [];
    }
    return SistemasdeGerenciamento;
}());
var PlanejamentoeOrcamentoPublico = /** @class */ (function () {
    function PlanejamentoeOrcamentoPublico(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return PlanejamentoeOrcamentoPublico;
}());
var ProjetoGovernamental = /** @class */ (function (_super) {
    __extends(ProjetoGovernamental, _super);
    function ProjetoGovernamental() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjetoGovernamental;
}(PlanejamentoeOrcamentoPublico));
var Indicadores = /** @class */ (function (_super) {
    __extends(Indicadores, _super);
    function Indicadores() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Indicadores;
}(PlanejamentoeOrcamentoPublico));
var Orcamento = /** @class */ (function (_super) {
    __extends(Orcamento, _super);
    function Orcamento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Orcamento;
}(PlanejamentoeOrcamentoPublico));
var Despesa = /** @class */ (function (_super) {
    __extends(Despesa, _super);
    function Despesa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Despesa;
}(PlanejamentoeOrcamentoPublico));
var SistemaemGerenciamento = /** @class */ (function () {
    function SistemaemGerenciamento() {
        this.projetos = [];
        this.indicadores = [];
        this.orcamentos = [];
    }
    return SistemaemGerenciamento;
}());
var PortoseAeroportos = /** @class */ (function () {
    function PortoseAeroportos(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return PortoseAeroportos;
}());
var ProjetoInfraestrutura = /** @class */ (function (_super) {
    __extends(ProjetoInfraestrutura, _super);
    function ProjetoInfraestrutura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjetoInfraestrutura;
}(PortoseAeroportos));
var Concessao = /** @class */ (function (_super) {
    __extends(Concessao, _super);
    function Concessao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Concessao;
}(PortoseAeroportos));
var IndicadorDesempenho = /** @class */ (function (_super) {
    __extends(IndicadorDesempenho, _super);
    function IndicadorDesempenho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IndicadorDesempenho;
}(PortoseAeroportos));
var PlanoEstrategico = /** @class */ (function (_super) {
    __extends(PlanoEstrategico, _super);
    function PlanoEstrategico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PlanoEstrategico;
}(PortoseAeroportos));
var MetaPortosEAeroportos = /** @class */ (function () {
    function MetaPortosEAeroportos() {
    }
    return MetaPortosEAeroportos;
}());
var SistemaGerenciamentoPortos = /** @class */ (function () {
    function SistemaGerenciamentoPortos() {
        this.projetos = [];
        this.concessoes = [];
        this.indicadores = [];
        this.planos = [];
    }
    return SistemaGerenciamentoPortos;
}());
var PovosIndigenas = /** @class */ (function () {
    function PovosIndigenas(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return PovosIndigenas;
}());
var ProjetoSocialFamiliar = /** @class */ (function (_super) {
    __extends(ProjetoSocialFamiliar, _super);
    function ProjetoSocialFamiliar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjetoSocialFamiliar;
}(PovosIndigenas));
var ProcessoDemarcacao = /** @class */ (function (_super) {
    __extends(ProcessoDemarcacao, _super);
    function ProcessoDemarcacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProcessoDemarcacao;
}(PovosIndigenas));
var IndicadorSocial = /** @class */ (function (_super) {
    __extends(IndicadorSocial, _super);
    function IndicadorSocial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IndicadorSocial;
}(PovosIndigenas));
var Conflitos = /** @class */ (function (_super) {
    __extends(Conflitos, _super);
    function Conflitos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Conflitos;
}(PovosIndigenas));
var SistemaGerenciamentoIndigena = /** @class */ (function () {
    function SistemaGerenciamentoIndigena() {
        this.projetos = [];
        this.demarcacoes = [];
        this.indicadores = [];
        this.conflitos = [];
    }
    return SistemaGerenciamentoIndigena;
}());
var PrevidenciaSocial = /** @class */ (function () {
    function PrevidenciaSocial(id, nome, descricao, numerobeneficio, especie, datadopedido, datadaconcessao, datadoinicio, datadotermino, valor, valorliquido, valorbruto, valorcomplementar, processo, status) {
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
    return PrevidenciaSocial;
}());
var Beneficio = /** @class */ (function () {
    function Beneficio() {
    }
    return Beneficio;
}());
var Segurado = /** @class */ (function () {
    function Segurado() {
    }
    return Segurado;
}());
var Contribuicao = /** @class */ (function () {
    function Contribuicao() {
    }
    return Contribuicao;
}());
var ProcessoAdministrativo = /** @class */ (function () {
    function ProcessoAdministrativo() {
    }
    return ProcessoAdministrativo;
}());
var IndicadorPrevidencia = /** @class */ (function () {
    function IndicadorPrevidencia() {
    }
    return IndicadorPrevidencia;
}());
var SistemaGerenciamentoDataPrev = /** @class */ (function () {
    function SistemaGerenciamentoDataPrev() {
        this.beneficios = [];
        this.segurados = [];
        this.processos = [];
        this.indicadores = [];
    }
    return SistemaGerenciamentoDataPrev;
}());
var RelacoesExteriores = /** @class */ (function () {
    function RelacoesExteriores(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return RelacoesExteriores;
}());
var RelacaoBilateral = /** @class */ (function (_super) {
    __extends(RelacaoBilateral, _super);
    function RelacaoBilateral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RelacaoBilateral;
}(RelacoesExteriores));
var Acordo = /** @class */ (function (_super) {
    __extends(Acordo, _super);
    function Acordo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Acordo;
}(RelacoesExteriores));
var EventoInternacional = /** @class */ (function (_super) {
    __extends(EventoInternacional, _super);
    function EventoInternacional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventoInternacional;
}(RelacoesExteriores));
var MissaoDiplomatica = /** @class */ (function (_super) {
    __extends(MissaoDiplomatica, _super);
    function MissaoDiplomatica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MissaoDiplomatica;
}(RelacoesExteriores));
var SistemaGerenciamentoExterno = /** @class */ (function () {
    function SistemaGerenciamentoExterno() {
        this.relacoesBilaterais = [];
        this.acordos = [];
        this.eventos = [];
        this.missoes = [];
    }
    return SistemaGerenciamentoExterno;
}());
var Saude = /** @class */ (function () {
    function Saude(id, nome, descricao, cpf, numerodocartaodosus) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.cpf = cpf;
        this.numerodocartaodosus = numerodocartaodosus;
    }
    return Saude;
}());
var EstabelecimentoSaude = /** @class */ (function (_super) {
    __extends(EstabelecimentoSaude, _super);
    function EstabelecimentoSaude() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EstabelecimentoSaude;
}(Saude));
var ProgramaSaude = /** @class */ (function (_super) {
    __extends(ProgramaSaude, _super);
    function ProgramaSaude() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProgramaSaude;
}(Saude));
var Medicamento = /** @class */ (function (_super) {
    __extends(Medicamento, _super);
    function Medicamento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Medicamento;
}(Saude));
var ProfissionalSaude = /** @class */ (function (_super) {
    __extends(ProfissionalSaude, _super);
    function ProfissionalSaude() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProfissionalSaude;
}(Saude));
var IndicadordaSaude = /** @class */ (function (_super) {
    __extends(IndicadordaSaude, _super);
    function IndicadordaSaude() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IndicadordaSaude;
}(Saude));
var SistemaGerenciamentoSUS = /** @class */ (function () {
    function SistemaGerenciamentoSUS() {
        this.estabelecimentos = [];
        this.programas = [];
        this.medicamentos = [];
        this.profissionais = [];
        this.indicadores = [];
    }
    return SistemaGerenciamentoSUS;
}());
var TrabalhoeEmprego = /** @class */ (function () {
    function TrabalhoeEmprego(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return TrabalhoeEmprego;
}());
var EmpresaseNegocios = /** @class */ (function (_super) {
    __extends(EmpresaseNegocios, _super);
    function EmpresaseNegocios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EmpresaseNegocios;
}(TrabalhoeEmprego));
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    return Funcionario;
}());
var ProgramaQualificacao = /** @class */ (function () {
    function ProgramaQualificacao() {
    }
    return ProgramaQualificacao;
}());
var Fiscalizacao = /** @class */ (function () {
    function Fiscalizacao() {
    }
    return Fiscalizacao;
}());
var IndicadorEmpresarial = /** @class */ (function () {
    function IndicadorEmpresarial() {
    }
    return IndicadorEmpresarial;
}());
var SistemaGerenciamentoEmpresarial = /** @class */ (function () {
    function SistemaGerenciamentoEmpresarial() {
        this.empresas = [];
        this.funcionarios = [];
        this.programas = [];
        this.fiscalizacoes = [];
        this.indicadores = [];
    }
    return SistemaGerenciamentoEmpresarial;
}());
var DosTransportes = /** @class */ (function () {
    function DosTransportes(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    return DosTransportes;
}());
var Infraestrutura = /** @class */ (function (_super) {
    __extends(Infraestrutura, _super);
    function Infraestrutura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Infraestrutura;
}(DosTransportes));
var ProjetoFormal = /** @class */ (function (_super) {
    __extends(ProjetoFormal, _super);
    function ProjetoFormal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjetoFormal;
}(DosTransportes));
var Contrato = /** @class */ (function (_super) {
    __extends(Contrato, _super);
    function Contrato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Contrato;
}(DosTransportes));
var IndicadordoProjeto = /** @class */ (function (_super) {
    __extends(IndicadordoProjeto, _super);
    function IndicadordoProjeto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IndicadordoProjeto;
}(DosTransportes));
var SistemaGerenciamentoTransporte = /** @class */ (function () {
    function SistemaGerenciamentoTransporte() {
        this.infraestruturas = [];
        this.projetos = [];
        this.contratos = [];
        this.indicadores = [];
    }
    return SistemaGerenciamentoTransporte;
}());
var Turismo = /** @class */ (function () {
    function Turismo(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCadastro = new Date();
    }
    return Turismo;
}());
var DestinoTuristicos = /** @class */ (function (_super) {
    __extends(DestinoTuristicos, _super);
    function DestinoTuristicos(id, nome, descricao, dataInicio, dataFim, local) {
        var _this = _super.call(this, id, nome, descricao) || this;
        _this.dataInicio = dataInicio;
        _this.dataFim = dataFim;
        _this.local = local;
        return _this;
    }
    DestinoTuristicos.prototype.calcularReceita = function () {
        throw new Error("Metodo não implementado.");
    };
    DestinoTuristicos.prototype.gerarRelatorio = function () {
        throw new Error("Metodo não implementado.");
    };
    return DestinoTuristicos;
}(Turismo));
var Roteiro = /** @class */ (function () {
    function Roteiro(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
    return Roteiro;
}());
var DestinosTuristicos = /** @class */ (function () {
    function DestinosTuristicos(id, nome, descricao, dataInicio, dataFim, local) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.local = local;
    }
    return DestinosTuristicos;
}());
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());
var Reserva = /** @class */ (function () {
    function Reserva() {
    }
    return Reserva;
}());
var Estatistica = /** @class */ (function () {
    function Estatistica() {
    }
    Estatistica.prototype.calcularMediaEstadia = function () {
        return 0;
    };
    return Estatistica;
}());
var SecretariaComunicacaoSocial = /** @class */ (function () {
    function SecretariaComunicacaoSocial() {
    }
    return SecretariaComunicacaoSocial;
}());
var CampanhaPublicitaria = /** @class */ (function (_super) {
    __extends(CampanhaPublicitaria, _super);
    function CampanhaPublicitaria(descricao, dataInicio, dataFim) {
        var _this = _super.call(this) || this;
        _this.descricao = descricao;
        _this.dataInicio = dataInicio;
        _this.dataFim = dataFim;
        return _this;
    }
    CampanhaPublicitaria.prototype.calcularGastosTotais = function () {
        return 0;
    };
    return CampanhaPublicitaria;
}(SecretariaComunicacaoSocial));
var AgenciaPublicitaria = /** @class */ (function (_super) {
    __extends(AgenciaPublicitaria, _super);
    function AgenciaPublicitaria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AgenciaPublicitaria.prototype.calcularGastosTotais = function () {
        return 0;
    };
    return AgenciaPublicitaria;
}(SecretariaComunicacaoSocial));
var SolicitacaoOrcamento = /** @class */ (function (_super) {
    __extends(SolicitacaoOrcamento, _super);
    function SolicitacaoOrcamento(descricao, valor, dataSolicitacao, status) {
        var _this = _super.call(this) || this;
        _this.descricao = descricao;
        _this.valor = valor;
        _this.dataSolicitacao = dataSolicitacao;
        _this.status = status;
        return _this;
    }
    return SolicitacaoOrcamento;
}(SecretariaComunicacaoSocial));
var Pagamento = /** @class */ (function () {
    function Pagamento(valor, dataPagamento, status) {
        this.valor = valor;
        this.dataPagamento = dataPagamento;
        this.status = status;
    }
    return Pagamento;
}());
var Relatorio = /** @class */ (function () {
    function Relatorio() {
    }
    Relatorio.prototype.gerarRelatorioDespesas = function () {
        return "Relatório de despesas gerado.";
    };
    return Relatorio;
}());
var ReconstrucaoRS = /** @class */ (function () {
    function ReconstrucaoRS() {
    }
    return ReconstrucaoRS;
}());
var MunicipioAtingido = /** @class */ (function (_super) {
    __extends(MunicipioAtingido, _super);
    function MunicipioAtingido() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MunicipioAtingido.prototype.calcularCustoReconstrucao = function () {
        return 0;
    };
    return MunicipioAtingido;
}(ReconstrucaoRS));
var RecursoFinanceiro = /** @class */ (function (_super) {
    __extends(RecursoFinanceiro, _super);
    function RecursoFinanceiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RecursoFinanceiro;
}(ReconstrucaoRS));
var Voluntario = /** @class */ (function () {
    function Voluntario(nome, cpf, telefone, email, dataCadastro, projeto) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.dataCadastro = new Date();
        this.projeto = projeto;
    }
    return Voluntario;
}());
var SecretariaGeral = /** @class */ (function () {
    function SecretariaGeral(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    return SecretariaGeral;
}());
var ProjetoPoliticaPublica = /** @class */ (function (_super) {
    __extends(ProjetoPoliticaPublica, _super);
    function ProjetoPoliticaPublica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjetoPoliticaPublica.prototype.iniciarProjeto = function () {
        console.log("Iniciando o projeto ".concat(this.nome));
    };
    ProjetoPoliticaPublica.prototype.finalizarProjeto = function () {
        console.log("Finalizando o projeto ".concat(this.nome));
    };
    ProjetoPoliticaPublica.prototype.descricaoProjeto = function () {
        return "Descri\u00E7\u00E3o do projeto: ".concat(this.nome);
    };
    return ProjetoPoliticaPublica;
}(SecretariaGeral));
var OrganizacaoSociedadeCivil = /** @class */ (function () {
    function OrganizacaoSociedadeCivil(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    return OrganizacaoSociedadeCivil;
}());
var Definicao = /** @class */ (function (_super) {
    __extends(Definicao, _super);
    function Definicao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Definicao.prototype.obterDetalhes = function () {
        return " Nome: ".concat(this.nome, ", Endere\u00E7o: ").concat(this.endereco, " ");
    };
    return Definicao;
}(OrganizacaoSociedadeCivil));
var EventoParticipacaoPopular = /** @class */ (function () {
    function EventoParticipacaoPopular(titulo, data, local) {
        this.titulo = titulo;
        this.data = data;
        this.local = local;
    }
    return EventoParticipacaoPopular;
}());
var OrganizacaoEvento = /** @class */ (function (_super) {
    __extends(OrganizacaoEvento, _super);
    function OrganizacaoEvento(nome, endereco, titulo, data, local) {
        var _this = _super.call(this, nome, endereco) || this;
        _this.titulo = titulo;
        _this.data = data;
        _this.local = local;
        return _this;
    }
    OrganizacaoEvento.prototype.obterDetalhes = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Data: ").concat(this.data.toDateString(), ", Local: ").concat(this.local);
    };
    OrganizacaoEvento.prototype.organizarEvento = function () {
        console.log("Organizando o evento: ".concat(this.titulo));
    };
    OrganizacaoEvento.prototype.cancelarEvento = function () {
        console.log("Cancelando o evento: ".concat(this.titulo));
    };
    return OrganizacaoEvento;
}(OrganizacaoSociedadeCivil));
var RelacoesInstitucionais = /** @class */ (function () {
    function RelacoesInstitucionais(id, nome, dataCadastro) {
        this.id = id;
        this.nome = nome;
        this.dataCadastro = new Date();
    }
    return RelacoesInstitucionais;
}());
var RelacaoInstitucional = /** @class */ (function (_super) {
    __extends(RelacaoInstitucional, _super);
    function RelacaoInstitucional(id, nome, dataCadastro, descricao, tipo, dataInicio, dataFim) {
        var _this = _super.call(this, id, nome, dataCadastro) || this;
        _this.descricao = descricao;
        _this.tipo = tipo;
        _this.dataInicio = dataInicio;
        _this.dataFim = dataFim;
        return _this;
    }
    RelacaoInstitucional.prototype.obterDetalhes = function () {
        return "Descri\u00E7\u00E3o: ".concat(this.descricao, ", Tipo: ").concat(this.tipo, ", Data de in\u00EDcio: ").concat(this.dataInicio.toDateString(), ", Data de fim: ").concat(this.dataFim.toDateString());
    };
    RelacaoInstitucional.prototype.iniciarRelacao = function () {
        console.log("Iniciando rela\u00E7\u00E3o ".concat(this.nome));
    };
    RelacaoInstitucional.prototype.encerrarRelacao = function () {
        console.log("Encerrando rela\u00E7\u00E3o ".concat(this.nome));
    };
    return RelacaoInstitucional;
}(RelacoesInstitucionais));
var ProjetoLei = /** @class */ (function () {
    function ProjetoLei(id, nome, descricao, dataApresentacao, status) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataApresentacao = dataApresentacao;
        this.status = status;
    }
    ProjetoLei.prototype.atualizarStatus = function (novoStatus) {
        this.status = novoStatus;
    };
    return ProjetoLei;
}());
var Reunião = /** @class */ (function () {
    function Reunião(id, data, local, pauta) {
        this.id = id;
        this.data = data;
        this.local = local;
        this.pauta = pauta;
    }
    Reunião.prototype.obterDetalhes = function () {
        return "Data: ".concat(this.data.toDateString(), ", Local: ").concat(this.local, ", Pauta: ").concat(this.pauta);
    };
    return Reunião;
}());
var MembroConselho = /** @class */ (function () {
    function MembroConselho(nome, cargo, conselho, telefone) {
        this.nome = nome;
        this.cargo = cargo;
        this.conselho = conselho;
        this.telefone = telefone;
    }
    return MembroConselho;
}());
var ProcessoJuridicoUniao = /** @class */ (function () {
    function ProcessoJuridicoUniao() {
    }
    return ProcessoJuridicoUniao;
}());
var ProcessoJuridico = /** @class */ (function (_super) {
    __extends(ProcessoJuridico, _super);
    function ProcessoJuridico(tipo, status) {
        var _this = _super.call(this) || this;
        _this.tipo = tipo;
        _this.status = status;
        return _this;
    }
    return ProcessoJuridico;
}(ProcessoJuridicoUniao));
var Advogado = /** @class */ (function () {
    function Advogado(nome, oab, especialidade) {
        this.nome = nome;
        this.oab = oab;
        this.especialidade = especialidade;
    }
    Advogado.prototype.obterDetalhes = function () {
        return "Nome: ".concat(this.nome, ", OAB: ").concat(this.oab, ", Especialidade: ").concat(this.especialidade);
    };
    return Advogado;
}());
var ClienteInterno = /** @class */ (function () {
    function ClienteInterno(nome, matricula, setor) {
        this.nome = nome;
        this.matricula = matricula;
        this.setor = setor;
    }
    ClienteInterno.prototype.obterDetalhes = function () {
        return "Nome: ".concat(this.nome, ", Matr\u00EDcula: ").concat(this.matricula, ", Setor: ").concat(this.setor);
    };
    return ClienteInterno;
}());
var Documento = /** @class */ (function () {
    function Documento(id, tipo, dataCriacao, status) {
        this.id = id;
        this.tipo = tipo;
        this.dataCriacao = dataCriacao;
        this.status = status;
    }
    Documento.prototype.atualizarStatus = function (novoStatus) {
        this.status = novoStatus;
    };
    return Documento;
}());
var CasaCivilGovFederal = /** @class */ (function () {
    function CasaCivilGovFederal(id, nome, dataCadastro) {
        this.id = id;
        this.nome = nome;
        this.dataCadastro = new Date();
    }
    return CasaCivilGovFederal;
}());
var ProjetoCasaCivil = /** @class */ (function (_super) {
    __extends(ProjetoCasaCivil, _super);
    function ProjetoCasaCivil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjetoCasaCivil;
}(CasaCivilGovFederal));
var PropostaLegislativa = /** @class */ (function () {
    function PropostaLegislativa(id, tipo, dataApresentacao, status, autores) {
        this.id = id;
        this.tipo = tipo;
        this.dataApresentacao = dataApresentacao;
        this.status = status;
        this.autores = autores;
    }
    return PropostaLegislativa;
}());
var AtoOficial = /** @class */ (function () {
    function AtoOficial(id, tipo, dataPublicacao, status) {
        this.id = id;
        this.tipo = tipo;
        this.dataPublicacao = dataPublicacao;
        this.status = status;
    }
    AtoOficial.prototype.atualizarStatus = function (novoStatus) {
        this.status = novoStatus;
    };
    return AtoOficial;
}());
var ControladoriaGeralUniao = /** @class */ (function () {
    function ControladoriaGeralUniao() {
        this._controleinterno = new ControleInterno;
        this._auditoriapublica = new AuditoriaPublica;
    }
    return ControladoriaGeralUniao;
}());
var ControleInterno = /** @class */ (function (_super) {
    __extends(ControleInterno, _super);
    function ControleInterno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControleInterno.prototype.tratarAssunto = function () {
        console.log("Realizando atividades de controle interno...");
    };
    return ControleInterno;
}(ControladoriaGeralUniao));
var AuditoriaPublica = /** @class */ (function (_super) {
    __extends(AuditoriaPublica, _super);
    function AuditoriaPublica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuditoriaPublica.prototype.tratarAssunto = function () {
        console.log("Realizando auditoria pública...");
    };
    return AuditoriaPublica;
}(ControladoriaGeralUniao));
var Assunto = /** @class */ (function () {
    function Assunto() {
    }
    Assunto.prototype.tratarAssunto = function () {
        console.log("Tratando assunto...");
    };
    return Assunto;
}());
var PrevencaoCombatecorrupcao = /** @class */ (function () {
    function PrevencaoCombatecorrupcao() {
    }
    PrevencaoCombatecorrupcao.prototype.tratarAssunto = function () {
        console.log("Prevenindo e combatendo a corrupção...");
    };
    return PrevencaoCombatecorrupcao;
}());
var Ouvidoria = /** @class */ (function () {
    function Ouvidoria() {
    }
    Ouvidoria.prototype.tratarAssunto = function () {
        console.log("Ouvindo demandas...");
    };
    return Ouvidoria;
}());
var Presidente = /** @class */ (function () {
    function Presidente() {
        this._assuntos = [];
        this._assuntos = [];
    }
    Presidente.prototype.adicionarAssunto = function (assunto) {
        this._assuntos.push(assunto);
    };
    Presidente.prototype.tratarAssuntos = function () {
        this._assuntos.forEach(function (assunto) { return assunto.tratarAssunto(); });
    };
    return Presidente;
}());
var CGU = /** @class */ (function () {
    function CGU(presidente, receberdemandas, gerarrelatorios) {
        this.presidente = presidente;
        this.receberdemandas = receberdemandas;
        this.gerarrelatorios = gerarrelatorios;
    }
    return CGU;
}());
var GabinetedeSegurancaInstitucional = /** @class */ (function () {
    function GabinetedeSegurancaInstitucional(nome, descricao, dataInicio, dataFim) {
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
    return GabinetedeSegurancaInstitucional;
}());
var OperacaoMilitar = /** @class */ (function (_super) {
    __extends(OperacaoMilitar, _super);
    function OperacaoMilitar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperacaoMilitar.prototype.executar = function () {
        console.log("Executando operação militar...");
    };
    return OperacaoMilitar;
}(GabinetedeSegurancaInstitucional));
var Agente = /** @class */ (function () {
    function Agente(nome, especialidade) {
        this.nome = nome;
        this.especialidade = especialidade;
    }
    return Agente;
}());
var GSI = /** @class */ (function () {
    function GSI() {
        this.agente = [];
        this.operacao = [];
    }
    return GSI;
}());
var presidente = new Presidente();
presidente.adicionarAssunto(new ControleInterno());
presidente.adicionarAssunto(new AuditoriaPublica());
var cgu = new CGU(presidente, "receber demandas", "gerar relatórios");
presidente.tratarAssuntos();
