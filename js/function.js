
var calcMedia = function(){
    return (this.nota1 + this.nota2)/2;
}

var turma = [
            {nome: "Igor",
            nota1:9,
            nota2: 7,
        media:calcMedia
    },
        {
            nome: "Joao",
            nota1: 4,
            nota2: 3,
            media: calcMedia
        }
]

var aluno = turma[1];
console.log(aluno);
console.log(aluno.media());