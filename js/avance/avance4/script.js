//callback

function ola(){
    console.log("olá");
}

function saudacao(s,nome){
    s();
    console.log(nome);
}

saudacao(ola, "Igor");