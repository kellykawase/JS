const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'//não pode quebrar desse jeito

//dessa forma fica mais elegante
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)// o que está entre chaves que irá somar, irá interpolar

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)//deixa em maiúsculo a expressão dentro do up