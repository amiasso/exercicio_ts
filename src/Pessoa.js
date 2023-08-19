"use strict";
function multipliacar(num1, num2) {
    return num1 * num2;
}
console.log(multipliacar(3, 3));
class Pessoa {
    constructor(ola, n, s) {
        this.ola = ola;
        this.nome = n;
        this.SobreNome = s;
    }
}
class Antonio extends Pessoa {
    constructor(ola, n, s, i) {
        super(ola, n, s);
        this.idade = i;
    }
}
let pessoa = new Antonio("Ola", "Antonio", "Miasso", 52);
console.log(`${pessoa.ola} sou ${pessoa.nome} ${pessoa.SobreNome} e tenho ${pessoa.idade} de idade`);
