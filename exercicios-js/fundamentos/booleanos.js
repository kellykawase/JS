let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//na negação duas vezes ele deu verdadeiro, então é verdadeiro originalmente

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))// se o valor é resolvível, então ele é true
console.log(!!(isAtivo = 33))// todo número inteiro dá true, exceto o 0(zero)
console.log(!!(isAtivo = Infinity))

console.log('os falsos...')
console.log(!!0)
console.log(!!(isAtivo = 0))
console.log(!!null)
console.log(!!NaN)
console.log(!undefined)
console.log(!!(isAtivo = false))// o valor não é resolvível, então é falso

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''

console.log(nome || 'Desconhecido')// vai retornar Desconhecido pq nome deu falso

let nome2 = 'Felipe'
console.log(nome2 || 'Desconhecido')//vai aparecer felipe, pq 'Felip' é verdadeiro