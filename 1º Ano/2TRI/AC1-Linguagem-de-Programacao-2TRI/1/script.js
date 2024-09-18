function resultado(){
    const resultado = document.getElementById("resultado")
    let resposta1 = document.getElementById("resposta1").value
    let resposta2 = document.getElementById("resposta2").value
    let pontos = 0

    if (resposta1 = "paris"){
        pontos++;
    }
    else{
        pontos = 0
    }

    if (resposta2 = "pacifico"){
        pontos++;
    }
    else{
        pontos = 0
    }
    resultado.innerText = `Você acertou ${pontos} de 2 perguntas`;
}