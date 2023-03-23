//vamos criar uma classe para uma conta corrente, com o # ele
//fica privado, mas usamos_ por enquanto:
export class ContaCorrente{
   agencia
   _saldo = 0

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
}