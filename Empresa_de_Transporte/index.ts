// Classes base
 class Cliente {
  nome: string;
  cpfCnpj: number;
  endereco: string;
  telefone: number;
  constructor(nome: string, cpfCnpj: number, endereco: string, telefone: number){
    this.nome = nome;
    this.cpfCnpj = cpfCnpj;
    this.endereco = endereco;
    this.telefone = telefone;
  }
}                                                                                                   
   
class Veiculo {
  placa: number;
  modelo: string;
  capacidadeDeCarga: number;
  tipoCarga: string; // seca, refrigerada, perigosa
  status: string;//disponível, em manutenção, em rota
  
  constructor(placa: number,modelo:string, capacidadeDeCarga: number, tipoCarga: string, status: string){
    this.placa = placa;
    this.modelo = modelo;
    this.capacidadeDeCarga = capacidadeDeCarga;
    this.tipoCarga = tipoCarga;
    this.status = status;
  } 
}

class Carga {
  peso: number;
  volume: number;
  tipo: string;
  valor: number;
  origem: string;
  destino: string;
  datadeEmbarque: Date;
  datadeEntrega: Date;

  constructor(peso: number, volume: number, tipo: string, valor: number, origem: string, destino: string, datadeEmbarque: Date, datadeEntrega: Date){
    this.peso = peso;
    this.volume = volume;
    this.tipo = tipo;
    this.valor = valor;
    this.origem = origem;
    this.destino = destino;
    this.datadeEmbarque = datadeEmbarque;
    this.datadeEntrega = datadeEntrega;
  } 

  
}
class Motorista{
    nome: string;
    CNH: number;
    categorias: string;
    tempoDeExperiencia: number;
    veiculoAtribuido: string;

    constructor(nome: string, CNH: number, categorias: string, tempoDeExperiencia: number, veiculoAtribuido: string){
        this.nome = nome;
        this.CNH = CNH;
        this.categorias = categorias;
        this.tempoDeExperiencia = tempoDeExperiencia;
        this.veiculoAtribuido = veiculoAtribuido;
    }
}

class Rota{
    origem: string;
    destino: string;
    distancia: number;
    tempoEstimadoDeViagem: number;
    listaDeVeiculosDeRota: string;

    constructor(origem: string, destino: string, distancia: number, tempoEstimadoDeViagem: number, listaDeVeiculosDeRota: string){
        this.origem = origem;
        this.destino = destino;
        this.distancia = distancia;
        this.tempoEstimadoDeViagem = tempoEstimadoDeViagem;
        this.listaDeVeiculosDeRota = listaDeVeiculosDeRota;
    } 
}


class Entrega {
    cliente: string;
  dataDaEntrega: Date;
  horaPrevista: number;
  rota: Rota[] = []; // Array de pontos da rota
  status: string; // pendente, em andamento, entregue
  carga: Carga[] = [];
  veiculo: Veiculo[] = []; 
  motorista: Motorista;
  observacao: string;

  constructor(cliente: string, dataDaEntrega: Date, horaPrevista: number, rota: Rota[], status: string, carga: Carga[], veiculo: Veiculo[], motorista: Motorista, observacao: string){
    this.cliente = cliente;
    this.dataDaEntrega = dataDaEntrega;
    this.horaPrevista = horaPrevista;
    this.rota = rota;
    this.status = status;
    this.carga = carga;
    this.veiculo = veiculo;
    this.motorista = motorista;
    this.observacao = observacao;
  }
  

    
}

class NotaFiscal{
    codigo: number;
    dataDeEmissao: Date;
    cliente: Cliente[] = [];
    itens: number; //lista de cargas
    valorTotal: number;
    formaDePagamento: string;

    constructor(codigo: number, dataDeEmissao: Date, cliente: Cliente[], itens: number, valorTotal: number, formaDePagamento: string){
        this.codigo = codigo;
        this.dataDeEmissao = dataDeEmissao;
        this.cliente = cliente;
        this.itens = itens;
        this.valorTotal = valorTotal;
        this.formaDePagamento = formaDePagamento;
    }
   
}

let cliente = new Cliente('José', 12345678901, 'Rua 1, 123', 1234567890);


let carga = new Carga(10, 100, 'Perigosa', 200,'Perigosa','Hospital', new Date("21/08/2024"), new Date("21/08/2024") );


   
   




   