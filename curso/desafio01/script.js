
var nomes = ['Kelly', 'Carlos' , 'Marcos'];
var notaA= [9.0 , 5.0 , 5.0];
var notaB = [10.0 , 9.0 , 3.5];


function media(n1,n2)
{
    return (n1+n2)/2;
}


var situacao= '';

for(var i in nomes)
{    
medias = media(notaA[i],notaB[i])
if(medias > 5)
{
situacao='Aprovado';
}
else
situacao='Reprovado';

console.log("Nome do aluno: " + nomes[i] + " | Nota A: " + notaA[i] + " | Nota B: " + notaB[i] + " | Média: " + medias + " | Situação: " + situacao);
}