function validaTelefone()
{
    let campoTel = document.getElementById("telefone");
    let valorTel = telefone.value;
    if(valorTel.length <= 9){
        alert("Telefone precisa ter ao menos 10 números (incluindo DDD)")
        return false;

    }
    else{
        return true;
    }
    
}

function validaEmail()
{
    let campoEmail = document.getElementById("email");
    let valorEmail = email.value;
    if(valorTel.length <= 9){
        alert("Telefone precisa ter ao menos 10 números (incluindo DDD)")
        return false;

    }
    else{
        return true;
    }
    
}