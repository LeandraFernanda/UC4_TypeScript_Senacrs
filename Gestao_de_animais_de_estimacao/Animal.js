"use strict";
class Animal {
    constructor(nome, idade, especies, raca, peso) {
        this.nome = nome;
        this.idade = idade;
        this.especies = especies;
        this.raca = raca;
        this.peso = peso;
    }
}
class Mamifero {
    constructor(nome, idade, especies, raca, peso, corPelo, temMembrosAquaticos) {
        super(nome, idade, especies, raca, peso);
        this.corPelo = corPelo;
        this.temMembrosAquaticos = temMembrosAquaticos;
    }
}
class Mamifero extends Animal {
    constructor(nome, idade, especies, raca, peso, corPelo, temMembrosAquaticos, temPelo) {
        super(nome, idade, especies, raca, peso);
        this.corPelo = corPelo;
        this.temMembrosAquaticos = temMembrosAquaticos;
        this.temPelo = temPelo;
    }
    emitirSom() {
        console.log("Tomeeeeee...");
    }
    dormir() {
        console.log("zzzzzzzz...");
    }
    crescer() {
        console.log("Aumentando...");
    }
    mamar() {
        console.log("Mmmmmm...");
    }
    nadar() {
        if (this.temMembrosAquaticos) {
            console.log("Nadando...");
        }
        else {
            console.log("Não posso nadar.");
        }
    }
    correr() {
        console.log("Correndo...");
    }
}
class Ave {
    constructor(nome, idade, especies, raca, peso, corPelo, temMembrosAquaticos, temPelo, corPena, temNariz, temAsas) {
        super(nome, idade, especies, raca, peso, corPelo, temMembrosAquaticos, temPelo);
        this.corPena = corPena;
        this.temNariz = temNariz;
        this.temAsas = temAsas;
    }
}
class Ave extends Animal {
    constructor(nome, idade, especies, raca, peso, corPelo, temMembrosAquaticos, temPelo, corPena, temNariz, temAsas) {
        super(nome, idade, especies, raca, peso, corPelo, temMembrosAquaticos, temPelo);
        this.corPena = corPena;
        this.temNariz = temNariz;
        this.temAsas = temAsas;
    }
    voar() {
        console.log("Voando...");
    }
    cacar() {
        console.log("Cacar...");
    }
    moverAsas() {
        console.log("Movendo asas...");
    }
    cuidarPeixe() {
        console.log("Cuidando do peixe...");
    }
    correr() {
        console.log("Correndo...");
    }
    nadar() {
        console.log("Nadando...");
    }
    pular() {
        console.log("Pulou...");
    }
    falar() {
        console.log("Ssssssss...");
    }
    mamar() {
        console.log("Mmmmmm...");
    }
}
class Peixe {
    constructor(nome, idade, especies, raca, peso, corPelo, temMembrosAquaticos, temPelo, corEscama, temNadadeira, temNariz) {
        super(nome, idade, especies, raca, peso, corPelo, temMembrosAquaticos, temPelo);
        this.corEscama = corEscama;
        this.temNadadeira = temNadadeira;
        this.temNariz = temNariz;
    }
}
class Peixe extends Animal {
    constructor(nome, idade, especies, raca, peso, corPelo, temMembrosAquaticos, temPelo, corEscama, temNadadeira, temNariz) {
        super(nome, idade, especies, raca, peso, corPelo, temMembrosAquaticos, temPelo);
        this.corEscama = corEscama;
        this.temNadadeira = temNadadeira;
        this.temNariz = temNariz;
    }
    nadar() {
        console.log("Nadando...");
    }
    cacar() {
        console.log("Cacar...");
    }
    cuidarPeixe() {
        console.log("Cuidando do peixe...");
    }
}
main();
{
    const mamifero = new Mamifero("Rex", 5, "Cão", "Labrador", "10kg", "Preto", true, true);
    const ave = new Ave("Polly", 2, "Pássaro", "Peregrino Africano", "5kg", "Branco", false, true, "Verde", true, true);
    const peixe = new Peixe("Nemo", 1, "Peixe", "Camarão", "3kg", "Marrom", true, true, "Vermelha", true, true);
    mamifero.alimentar();
    ave.brincar();
    peixe.nadar();
    peixe.cuidarPeixe();
    console.log(mamifero);
    console.log(ave);
    console.log(peixe);
}
let mamifero = new Mamifero();
mamifero.nome = "Rex";
mamifero.idade = 5;
mamifero.especie = "Cão";
mamifero.raca = "Labrador";
mamifero.peso = "10kg";
mamifero.corPelo = "Preto";
mamifero.temMembrosAquaticos = true;
mamifero.temPelo = true;
let ave = new Ave();
ave.nome = "Polly";
ave.idade = 2;
ave.especie = "Pássaro";
ave.raca = "Peregrino Africano";
ave.peso = "5kg";
ave.corPelo = "Branco";
ave.temMembrosAquaticos = false;
ave.temPelo = true;
ave.corPena = "Verde";
ave.temNariz = true;
ave.temAsas = true;
let peixe = new Peixe();
peixe.nome = "Nemo";
peixe.idade = 1;
peixe.especie = "Peixe";
peixe.raca = "Camarão";
peixe.peso = "3kg";
peixe.corPelo = "Marrom";
peixe.temMembrosAquaticos = true;
peixe.temPelo = true;
peixe.corEscama = "Vermelha";
peixe.temNadadeira = true;
console.log(mamifero);
console.log(ave);
console.log(peixe);
