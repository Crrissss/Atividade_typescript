//2. Crie uma função que receba uma lista de objetos contendo nota e
//peso, realize a média das notas considerando o peso. Exemplos:
//Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
//Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

interface NotaPeso {
  nota: number;
  peso: number;
}

function fazerMedia(notas: NotaPeso[]): number {
  let calculosNotas: number = 0;
  let qtdNotas: number = 0;

  notas.forEach((aluno) => {
    calculosNotas += aluno.nota * aluno.peso;
    qtdNotas++;
  });

  const mediaFinal = calculosNotas / qtdNotas;
  return mediaFinal;
}

// Exemplo de uso da função fazerMedia
const notas: NotaPeso[] = [
  { nota: 8, peso: 0.5 },
  { nota: 9, peso: 0.5 },
  { nota: 7, peso: 0.3 },
  { nota: 6, peso: 0.2 },
];

const media = fazerMedia(notas);
console.log("A média final é:", media);
console.log("---------------------------------");

//3. Crie um programa que simule uma carteira de dinheiro. Este
//programa vai precisar ter uma carteira contendo saldo, transações
//de entrada e saídas. Ou seja, será um objeto com estas
//propriedades. Depois crie uma função para lançar uma entrada e
//uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
//um erro ou avisar.
interface carteira {
  saldo: number;
  entrada: number;
  saida: number;
}

// Função para lançar uma entrada na carteira
function entrada(carteira: carteira, valor: number): void {
  carteira.saldo += valor;
  carteira.entrada += valor;
}

// Função para lançar uma saída na carteira
function saida(carteira: carteira, valor: number): void {
  if (valor > carteira.saldo) {
    console.error("Saldo insuficiente!");
    return;
  }

  carteira.saldo -= valor;
  carteira.saida += valor;
}

// Exemplo
const carteira: carteira = {
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
  id: number;
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
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

  excluir(id: number) {
    this.id = id;
  }
}

const produto: Produto = new Produto("Notebook", 2500);

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
  nome: string;
  idade: number;
  ocupacao: string;
  salario?: number;

  constructor(nome: string, idade: number, ocupacao: string, salario?: number) {
    this.nome = nome;
    this.idade = idade;
    this.ocupacao = ocupacao;
    this.salario = salario;
  }

  mostrarInfos() {
    if (this.salario !== undefined) {
      return `${this.nome}, ${this.idade} anos, ${this.ocupacao}, salário R$ ${this.salario}`;
    } else {
      return `${this.nome}, ${this.idade} anos, ${this.ocupacao}, salário N/A`;
    }
  }
}

const user1: User = new User("Daphne", 23, "analista de TI", 1000);
const user2: User = new User("Daphne", 23, "analista de TI");

console.log(user1.mostrarInfos());
console.log(user2.mostrarInfos());
console.log("---------------------------------");
//6. Usando o contexto do exercício 6, crie um tipo de usuário que
//representa funcionários da diretoria da empresa. O tipo Diretor deve
//conter as propriedades: nome, idade, salário (opcional) e nível de
//comissionamento (numérico). Crie uma função que receba um
//Diretor e mostre suas informações. Exemplos:
//a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
//b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
