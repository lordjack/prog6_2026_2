export class Conta {
  constructor(pessoa) {
    this.pessoa = pessoa;
    this.saldo = 0;
    this.pessoa.validarIdade(pessoa.idade);
  }

  depositar(valor) {
    this.saldo += valor;
  }
  sacar(valor) {
    this.saldo -= valor;
  }
  transferir(outraConta, valor) {
    this.sacar(valor);
    outraConta.depositar(valor);
  }
}
