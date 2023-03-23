//precisamos importar as classes:
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//aqui na index fica só a execução
// para usarmos essa classe criamos um new cliente para cada cliente
const cliente1 = new Cliente()
cliente1.nome = 'Sany'
cliente1.cpf = 11122233309
cliente1.rg = 12365437

const cliente2 = new Cliente()
cliente2.nome = 'Alice'
cliente2.cpf = 88822233309
cliente2.rg = 72361547

//vamo criar uma new váriavel de conta corrente
const contaCorrenteSany = new ContaCorrente()
contaCorrenteSany.agencia = 1001

contaCorrenteSany.depositar(300) // quero reatribuir valor para minha conta - deposito

const valorSacado = contaCorrenteSany.sacar(50) //aqui vamos guardar o valor sacado numa várivel

console.log(contaCorrenteSany)
