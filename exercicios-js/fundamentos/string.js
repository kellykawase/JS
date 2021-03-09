const escola = "Cod3r"//tem 5 índices, começando pelo zero
//posição da string começa em índice 0(zero)
console.log(escola.charAt(4))//posição 4 é a letra r
console.log(escola.charAt(5))//retorna valor vazio pq não achou o índice 5
console.log(escola.charCodeAt(3))// valor na tabela unicode
console.log(escola.indexOf('d'))//em qual índice está 
console.log(escola.substring(1))//começa a escrever do índice 1
console.log(escola.substring(0, 3))//pega do índice 0 e vai até o índice 2 (anterior ao 3)

console.log('Escola '.concat(escola).concat("!"))//pode usar aspas simples ou duplas para cadeia de caracteres, aqui está concatenando

console.log('Escola ' + escola + "!")// o mais (+) é concatenação também

console.log(escola.replace(3, 'e'))//pega a posição 3 e substitui pela letra e

console.log(escola.replace(/\d/,'e'))//substitua todos os dígitos pela letra e
console.log(escola.replace(/\w/g,'e'))//substitua todas as letras e dígitos pela letra e

console.log('Ana,Maria,Pedro'.split(','))//converter uma string em array, separar o array pela vírgula. Cria um array com três elementos independentes

console.log('Ana,Maria,Pedro'.split(/,/))//dá no mesmo, substituir por regect