"use strict";
//2. Crie uma função que receba uma lista de objetos contendo nota e
//peso, realize a média das notas considerando o peso. Exemplos:
//Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
//Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
function fazerMedia(notas) {
    let calculosNotas = 0;
    let qtdNotas = 0;
    notas.forEach((aluno) => {
        calculosNotas += aluno.nota * aluno.peso;
        qtdNotas++;
    });
    const mediaFinal = calculosNotas / qtdNotas;
    return mediaFinal;
}
// Exemplo de uso da função fazerMedia
const notas = [
    { nota: 8, peso: 0.5 },
    { nota: 9, peso: 0.5 },
    { nota: 7, peso: 0.3 },
    { nota: 6, peso: 0.2 },
];
const media = fazerMedia(notas);
console.log("A média final é:", media);
console.log("---------------------------------");
// Função para lançar uma entrada na carteira
function entrada(carteira, valor) {
    carteira.saldo += valor;
    carteira.entrada += valor;
}
// Função para lançar uma saída na carteira
function saida(carteira, valor) {
    if (valor > carteira.saldo) {
        console.error("Saldo insuficiente!");
        return;
    }
    carteira.saldo -= valor;
    carteira.saida += valor;
}
// Exemplo
const carteira = {
    saldo: 1000,
    entrada: 0,
    saida: 0,
};
console.log("Saldo inicial:", carteira.saldo);
entrada(carteira, 500);
console.log("Saldo após entrada:", carteira.saldo);
saida(carteira, 200);
console.log("Saldo após saída:", carteira.saldo);
saida(carteira, 1000); // Isso vai gerar um erro
console.log("---------------------------------");
//4. Crie um programa para cadastrar, listar e excluir produtos de uma
//lista com tipagem de Produto.
class Produto {
    constructor(nome, preco) {
        this.id = new Date().getTime();
        this.nome = nome;
        this.preco = preco;
    }
    // Remova o parâmetro 'nome' do método cadastrar
    cadastrar() {
        // Não é necessário atribuir o nome novamente aqui
        // this.nome = nome;
        return "Produto cadastrado com sucesso!";
    }
    listar() {
        // Aqui você pode listar os atributos do produto
        return `ID: ${this.id}, Nome: ${this.nome}, Preço: ${this.preco}`;
    }
    excluir(id) {
        this.id = id;
    }
}
const produto = new Produto("Notebook", 2500);
// Chame o método cadastrar sem passar o nome
console.log(produto.cadastrar());
// Agora, para listar o produto, você pode chamar o método listar
console.log(produto.listar());
console.log("---------------------------------");
//5. Crie um programa para mostrar informações de usuários (User) de
//uma empresa. Crie o tipo User com as seguintes propriedades:
//nome, idade, ocupação e salário (opcional). Caso o salário do
//usuário não seja informado, mostre o valor “N/A”. Exemplo:
//a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
//b. “Daphne, 23 anos, analista de TI, salário N/A”
class User {
    constructor(nome, idade, ocupacao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.ocupacao = ocupacao;
        this.salario = salario;
    }
    mostrarInfos() {
        if (this.salario !== undefined) {
            return `${this.nome}, ${this.idade} anos, ${this.ocupacao}, salário R$ ${this.salario}`;
        }
        else {
            return `${this.nome}, ${this.idade} anos, ${this.ocupacao}, salário N/A`;
        }
    }
}
const user1 = new User("Daphne", 23, "analista de TI", 1000);
const user2 = new User("Daphne", 23, "analista de TI");
console.log(user1.mostrarInfos());
console.log(user2.mostrarInfos());
console.log("---------------------------------");
