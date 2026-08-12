export class Pessoa {
  constructor(nome, idade, telefone) {
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;
  }

  validarIdade(idade) {
    if (idade < 18) {
      throw this.nome + " é de menor, não pode abrir a conta!";
    }
  }
}
