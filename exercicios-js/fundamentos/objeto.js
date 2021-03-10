const prod1 = {}
prod1.nome = 'Celular Ultra Mega'// esse nome foi criado dinamicamente dentro de um objeto
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40//evitar atributos com espaço

console.log(prod1)// aparece uma coleção de pares chaves (nome: valor)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }//pode ter só um nome de objeto, mas aqui está um interno ao outro
    }
}

console.log(prod2)