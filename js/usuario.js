function mostraDica()
{
    document.getElementById("dicaTexto").style.display = "inline";
}
function validaSenha()
{
    var campoSenha = document.getElementById("txtSenha");
    var valorSenha = txtSenha.value;
    if(valorSenha.length < 6)
    {
        alert("Senha precisa ter ao menos 6 caracteres");
        return false;
    }
    else
    {
        return true;
    }
}

function DicaEmail()
{
    document.getElementById("dicaTexto").style.display = "inline";
}
function validaEmail()
{
    var campoEmail = document.getElementById("txtEmail");
    var valorEmail = txtEmail.value;
    if(valorEmail.length < 6)
    {
        alert("Esse não é um formato válido para e-mail");
        return false;
    }
    else
    {
        return true;
    }
}

/**Bloco global*/
document.getElementById("dicaTexto").style.display = "none"
document.getElementById("dicaEmail").style.display = "none";