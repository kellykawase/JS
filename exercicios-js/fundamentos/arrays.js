const valores = [7.7, 8.9, 6.3, 9.2]// vírgula é o separador dos elementos
console.log(valores[0], valores[3])
console.log(valores[6])// vai dar undefined pq não tem, mas não aparece como erro

valores[4] = 10
console.log(valores)// passou a ter o índice 4

valores[10] = 11 // apareceria o 11 no final e como ítens vazios no meio
console.log(valores)
console.log(valores.length)//tamanho/comprimento

valores.push({id: 3}, false, null, 'teste')//incluindo quatro valores, NÃO É BOM MISTURAR DADOS
console.log(valores)

console.log(valores.pop())//pega o último valor do array(exclui o último)
delete valores[0]// deleta o elemento 0(zero)
console.log(valores)// irá tirar o último e o primeiro elemento

console.log(typeof valores)// o array é do tipo object