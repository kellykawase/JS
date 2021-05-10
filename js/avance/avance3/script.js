//formas de declarar a função

function dobro(x){
    console.log(2*x);
}

dobro(5)


//////
let dobro1 = function(x){
    console.log(2*x)
}

dobro1(6)


//////
/*let dobro2 = (x) =>{
    console.log(2 * x);
}

dobro2(8);*/

let dobro2 = x =>//{se tem somente um agumento
    //não precisa dos parênteses
   // return(2 * x);não precisa do return
//}
2*x;
console.log(dobro2(8));


//fica assim:
/*
let dobro = x=>2*x;
console.log(dobro(8));
*/

//ARROW FUNCTIONS: não funciona com bind e não entende o 
//this, vai ser sempre para ela o objeto 
//global quando usa this.
