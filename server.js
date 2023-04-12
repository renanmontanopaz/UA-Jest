const Conta = require("./src/Conta")

let conta = new Conta();

conta.ativar();
conta.depositar(100.00);

console.log("Valor atual da conta: "+ conta)