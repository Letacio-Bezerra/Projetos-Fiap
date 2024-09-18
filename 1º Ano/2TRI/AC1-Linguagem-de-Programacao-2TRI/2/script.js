function mensagem(){
    const traducao = document.getElementById("traducao")
    let idiomas = document.getElementById("idiomas").value

    switch(idiomas){
        case "ingles":
            traducao.innerText = "Welcome"
        break;

        case "espanhol":
            traducao.innerText = "Bienvenido"
        break;

        case "frances":
            traducao.innerText = "Accueillir"
        break;

        case "arabe":
            traducao.innerText = "مرحباً"
        break;

        case "portugues":
            traducao.innerText = "Bem Vindo"
        break;
        default:
            traducao.innerText = "Opção Invalida"
    }
}