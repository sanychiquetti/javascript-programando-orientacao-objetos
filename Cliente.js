//aqui criamos uma as classe, nelas colocamos 
//os atributos:
export class Cliente{
   nome
   _cpf
   _rg

   //aqui não vamos deixar ninguém alterar o cpf e rg
   get cpf(){
      return this._cpf
   }

   get rg(){
      return this._rg
   }

   constructor(nome, cpf, rg){
      this.nome = nome
      this._cpf = cpf
      this._rg = rg
   }
}