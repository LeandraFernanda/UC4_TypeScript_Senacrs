// Cliente.ts
class Cliente {
    nome: string;
    cpfCnpj: string;
    tipo: string;
    veiculos: { placa: string, modelo: string }[] = [];

    constructor(nome: string, cpfCnpj: string, tipo: string) {
        this.nome = nome;
        this.cpfCnpj = cpfCnpj;
        this.tipo = tipo;
    }

    adicionarVeiculo(placa: string, modelo: string) {
        this.veiculos.push({ placa, modelo });
    }

    removerVeiculo(placa: string) {
        this.veiculos = this.veiculos.filter(v => v.placa !== placa);
    }
}


class ControleDeEstoque {
    atualizarQuantidade(tipo: string, novaQuantidade: number) {
        const produto = this.atualizarQuantidade
        switch (tipo) {
            case "carro":
                console.log(" carro " + produto);
              
                break;
            case "moto":
                console.log("moto " + produto);
                
                break;
            case "caminhao":
                console.log("caminhão " + produto);
                
                break;
            default:
                console.log("Tipo de produto inválido.");
      
            
        }
      
    }
}


class NotaFiscal {
    numero: number;
    data: Date;
    cliente: Cliente;
    itens: { produto: string, quantidade: number, valorUnitario: number, valorTotal: number }[] = [];
    formaPagamento: string;
    valorTotal: number ;

    adicionarItem(produto: string, quantidade: number, valorUnitario: number) {
        const valorTotalItem = quantidade * valorUnitario;
        this.itens.push({ produto, quantidade, valorUnitario, valorTotal: valorTotalItem });
        this.valorTotal += valorTotalItem;
    }
}





const cliente1 = new Cliente("João Silva", "12345678901", "comum");
console.log(cliente1)
cliente1.adicionarVeiculo("ABC1234", "Gol");
console.log(cliente1)



