/*function obj(n,s){//objeto
    return { nome: n, sobrenome: s}//retorna
}

var a = obj("Kelly", "Kawase")*/

function obj(n,s){
    this.nome=n;
    this.sobrenome= s;
}

var a = new obj("Kelly", "Kawase")

console.log(a);// a é um objeto, tanto que sai entre chaves.
console.log(a.nome);
console.log(a["nome"])