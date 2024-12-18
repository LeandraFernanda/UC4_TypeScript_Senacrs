"use strict";
class Peca {
    constructor(id, nome, descricao, tamanho, cor, preco, quantidade) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.tamanho = tamanho;
        this.cor = cor;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}
class Cliente {
    constructor(id, nome, email, telefone, endereco) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}
class Venda {
    constructor(id, cliente, data, itens, valorTotal) {
        this.id = id;
        this.cliente = cliente;
        this.data = data;
        this.itens = itens;
        this.valorTotal = valorTotal;
        this.valorTotal = this.calcularValorTotal();
    }
    calcularValorTotal() {
        return this.itens.reduce((total, item) => total + item.peça.preco * item.quantidade, 0);
    }
}
