/*var numero1 = 4;//pode ser reatribuída
let numero2 = 5;//let e const foram inseridos na versão s6
const numero3 = 6;//é uma constante, não pode ser (reatribuída), mas o valor as vezes pode ser modificado, mas não pode ser reatribuída.

console.log(numero1);
console.log(numero2);
console.log(numero3);

//constante
const numero4 = [6];
numero4.push(7);
console.log(numero4);

const numero5 = {};
numero5.nome = "Kelly";
console.log(numero5);

//numero3 = 7; dá erro pq teria que reatribuir

//let x var - vai ser diferente no escopo (onde a variável existe e você pode acessá-la e onde ela não existe)
//funções tem um escopo mais fechado. Mesmo uma var, criada dentro do bloco de uma função só existirá ali dentro.
*/
{
var numero1 = 4;//acessível em qualquer lugar (variável global)
let numero2 = 5;//irá aparecer um erro (variável local)
const numero3 = 6;//irá aparecer um erro (variável local)
}//pq o let e o const tem o escopo local, eles só existem dentro do bloco, quando definido lá
console.log(numero1);
console.log(numero2);//aqui está fora do bloco
console.log(numero3);