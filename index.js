//precisamos importar as classes:
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//aqui na index fica só a execução
// para usarmos essa classe criamos um new cliente para cada cliente
const cliente1 = new Cliente("Sany", 11122233309, 13268954)
const cliente2 = new Cliente("Alice", 73265418, 65981256)

// vamos criar uma variavel para saber quantas contas temos:
const contaCorrenteSany = new ContaCorrente(1001, cliente1)

contaCorrenteSany.depositar(500) // fazendo um depósito
const conta2 = new ContaCorrente(102, cliente2)

let valor = 200
contaCorrenteSany.transferir(valor, conta2) // transferindo de uma conta para outra

console.log(ContaCorrente.numeroDeContas)