 function multipliacar (num1 : number, num2: number): number {
     return num1 * num2;
 }

 console.log (multipliacar(3, 3));

abstract class Pessoa {
    ola: string
     nome: string;
     SobreNome: string;

     constructor( ola: string, n: string, s: string) {
        this.ola = ola
         this.nome = n;
         this.SobreNome = s;
     }

 }

 class Antonio extends Pessoa{
    idade: number;

    constructor( ola: string,n: string, s: string, i: number){
        super(ola,n, s)
        this.idade = i
    }
   
 }

 let pessoa = new Antonio("Ola","Antonio", "Miasso", 52)


 console.log(`${pessoa.ola} sou ${pessoa.nome} ${pessoa.SobreNome} e tenho ${pessoa.idade } de idade`);

