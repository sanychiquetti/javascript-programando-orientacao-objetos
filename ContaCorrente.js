//vamos criar uma classe para uma conta corrente, com o # ele

import { Cliente } from "./Cliente.js"

//fica privado, mas usamos_ por enquanto:
export class ContaCorrente{
   static numeroDeContas = 0 //aqui ele é acessado por outras classes
   agencia
   _cliente
   _saldo = 0
   set cliente(novoValor){
      if(novoValor instanceof Cliente){ // se o novo valor for um instância de Clinte, entao..
          this._cliente = novoValor 
      }      
   }

   get cliente(){ // fazendo um acessor desse cliente
      return this._cliente
   }

   get saldo(){ // aqui estamos diendo que o saldo será apena para leitura, não podendo mudar manuamente
      return this.saldo
   }

   constructor(agencia, cliente){
      this.agencia = agencia
      this.cliente = cliente
      ContaCorrente.numeroDeContas += 1 //estou somando mais 1 a cada nova conta criada
   }

   //vamos colocar um comportamento de saque, esse this quer dizer desta conta em questão:
   sacar(valor){
      if(this._saldo >= valor){
         this._saldo -= valor
         return valor
      }
   }

   //vamos criar o comportamente de deposito, nessa rega ele só vai depositar se valor +:
   depositar(valor){
      if(valor <= 0) return   //se o valor for menor ou igual a zero ele já para o metodo
      this._saldo += valor
   }

   //vamos sacar um valor e fazer o depósido em outra conta:
   transferir(valor, conta){
      const valorSacado = this.sacar(valor)
      conta.depositar(valorSacado)
   }
}