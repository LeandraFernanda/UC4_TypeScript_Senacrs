class Treino{
    descricao: string
    serie: number
    repeticoes: number

    constructor(descricao: string,
                serie: number, 
                repeticoes: number
                )
    {
        this.descricao = descricao
        this.serie = serie
        this.repeticoes = repeticoes
    }
}

class Aluno{
    nome: string = ""
    sobre_nome: string = ""
    peso: number = 0
    altura: number = 0
    treinos: Treino[] = []

    calcularIMC(): number{
        return this.peso / (this.altura * this.altura)
    }

    adicionarTreino(treino: Treino){
        this.treinos.push(treino)
    }
}

class Academia{
    alunos: Aluno[] = []

    adicionarAluno(aluno: Aluno){
        this.alunos.push(aluno)
    }

    adicionarTreinoAluno(aluno: Aluno,descricao: string, serie:number, repeticoes: number){
        const treino = new Treino(descricao, serie, repeticoes)
        aluno.adicionarTreino(treino)
    }

}

let academia = new Academia()
let aluno_1 = new Aluno()
aluno_1.nome = "Pedro"
aluno_1.sobre_nome = "Das Neves"
aluno_1.altura = 180
aluno_1.peso = 80

let aluno_2 = new Aluno()
aluno_2.nome = "João"
aluno_2.sobre_nome = "Das Canhas"
aluno_2.altura = 1.75
aluno_2.peso = 87

academia.adicionarAluno(aluno_1)
academia.adicionarAluno(aluno_2)
academia.adicionarTreinoAluno(aluno_1, "Biceps",3, 12)
academia.adicionarTreinoAluno(aluno_2, "Esteira", 3,15)

console.log(aluno_1.treinos)
console.log(aluno_2.treinos)
console.log(aluno_1.nome)
console.log(aluno_1.calcularIMC())
console.log(aluno_2.calcularIMC()) 