var d1 = new Date()
// Date(year, month, day, hours, minutes, seconds, milliseconds)
//quando passamos o mês em formato de número, esse número vai corresponder ao index de um Array de meses, de 12 posições, onde 0 = Janeiro e 11 = Dez.
var d2 = new Date(2021, 07 , 05, 19,44)
var d3 = new Date (60 * 60 * 60);//sozinho é em milisegundos e não ano
var d4 = new Date("2017");//para funcionar ano tem que passar como uma string (sozinha)

var d5 = new Date("08 05 2017")

var d6 = new Date("05/05/1999")
var d7 = new Date("08-05-2017")

console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);
console.log(d5);
console.log(d6);
console.log(d7);


//ano
console.log(d1.getFullYear());
//mes
console.log(d1.getMonth());
//dia
console.log(d1.getDate());

//horas
var h = new Date(2021,8,8,5,4,3,2);
console.log(h);
console.log(h.getHours());
console.log(h.getMinutes());
console.log(h.getSeconds());
console.log(h.getMilliseconds());
console.log(h.getTime());//milisegundos total

console.log(d1.getDay());//pega o dia da semana, que vai de 0 a 6 - 0 é domingo

console.log(d1.setDate(20));//o set em vez de get, vai mudar para dia 20, pode mudar hora, ano etc
console.log(d1);//aqui irá aparecer o dia 20

var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex"]

console.log(dias[d1.getDay()]);
