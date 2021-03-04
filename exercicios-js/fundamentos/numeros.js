const peso1 = 1.0//ele considera que é 1 , número inteiro
//const peso1 = 1.1 ele consider que é número flutuante
const peso2 = Number('2.0')//outra forma

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//perguntando se é um valor inteiro
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//fixa duas casas decimais
console.log(media.toString())//aqui transforma em string
console.log(media.toString(2))//transforma em número binário
console.log(typeof media)
console.log(typeof Number)//Number é uma função
