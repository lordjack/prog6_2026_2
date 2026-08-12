import { Conta } from "./Conta.js";
import { Pessoa } from "./Pessoa.js";

let p1 = new Pessoa("Chaves", 16, "495555-0000");
let p2 = new Pessoa("Seu Madruga", 58, "491111-2222");

try {
  let c1 = new Conta(p2);
  c1.depositar(2);
} catch (error) {
  console.error(error);
}
try {
  let c2 = new Conta(p1);

  c2.depositar(5000);
  c2.transferir(c1, 1600);

  console.log("Titular: " + c1.pessoa.nome + " - Saldo:R$" + c1.saldo);
  console.log("Titular: " + c2.pessoa.nome + " - Saldo:R$" + c2.saldo);

} catch (error) {
  console.error(error);
}
