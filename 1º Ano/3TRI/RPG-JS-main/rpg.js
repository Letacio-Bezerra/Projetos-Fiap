//************************************* Variáveis globais que devem ser inicializadas no início do jogo *************************************

//variável que irá guardar o personagem sorteado
let personagemPrincipal = ""
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0
//variável que irá guardar a consequência de cada número sorteado no desafio da caverna
const consequenciasCadeia = [
    'Você não tomou cuidado e todos os guardas da prisão estão indo te espancar até a morte.',
    'Você não tomou cuidado e quase todos os guardas da prisão estão indo te espancar até a morte.',
    'Você tomou um pouco de cuidado, mas foi percebido por alguns guardas! Ganhe para fugir.',
    'Você provou sua habilidade de furtivida e conseguiu escapar sem ser percebido, mas conseguirá fugir por quanto tempo?'    
]

//************************************* Funções que serão repetidas ao longo do jogo *************************************

  // Função para rolar um dado (1 a 20)
  function rolarDado() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Função para batalha de nível fácil
  function batalhaFacil(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 15

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 4
            alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! Nada acontece.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você morreu! O jogo acabou.")
    }
    else{
        alert("Você sobreviveu! Agora a história continua....")
    }
}

    // Função para batalha de nível médio
    function batalhaMedia(){
        
        let vidaPersonagem = 11
        let vidaInimigo = 30

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 3
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 5
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("Você morreu! O jogo acabou.")
        }
        else{
            alert("Você sobreviveu! Agora a história continua....")
        }
}

    // Função para batalha de nível difiil
    function batalhaDificil(){
        
        let vidaPersonagem = 10
        let vidaInimigo = 50

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 5
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 10000
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("Você morreu! O jogo acabou.")
        }
        else{
            alert("Você sobreviveu! Agora a história continua....")
        }
}

//************************************* Função para batalha do Maguinho Covarde *************************************

  // Função para batalha de nível fácil
  function batalhaFacilM(){
    
    let vidaPersonagem = 50
    let vidaInimigo = 15

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 10
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 3
            alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! Nada acontece.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você morreu! O jogo acabou.")
    }
    else{
        alert("Você sobreviveu! Agora a história continua....")
    }
}

    // Função para batalha de nível médio
    function batalhaMediaM(){
        
        let vidaPersonagem = 50
        let vidaInimigo = 30

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 10
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 5
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("Você morreu! O jogo acabou.")
        }
        else{
            alert("Você sobreviveu! Agora a história continua....")
        }
}

    // Função para batalha de nível difiil VOLIBA
    function batalhaDificilMV(){
        
        let vidaPersonagem = 50
        let vidaInimigo = 50

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 10000000
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("VOLIBA DE BIGODON ganha de qualquer maguinho! O jogo acabou.")
        }
        else{
            alert("Como você sobreviveu?")
        }


}

//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar(){
    const personagem = prompt(`Seja bem-vindo! Escolha uma das opções: 
        1 - Sortear Personagem
        2 - Sair do Jogo`)

    switch(personagem){
        case "1":
            personagemPrincipal = sortearPersonagem()
            alert(`O personagem sorteado foi ${personagemPrincipal}`)
            if(personagemPrincipal === "Guerreiro")
                iniciarJornadaGuerreiro()
            else if(personagemPrincipal === "Mago")
                iniciarJornadaMago()
            else
                iniciarJornadaArqueiro()
        break
        case "2":
            alert("Espero te ver novamente!")
        break
        default:
            alert("Isso não é uma opção! Recomeço do zero cabeçudo!")
    }
}


//************************************* Função para sortear personagem *************************************
function sortearPersonagem() {
    const personagens = ["Guerreiro", "Mago", "Arqueiro"];
  
    const sorteado = Math.floor(Math.random() * personagens.length);
    return personagens[sorteado];
  }


//************************************* Funções para jornada de cada personagem *************************************

// Função para iniciar a jornada do arqueiro
function iniciarJornadaArqueiro(){
    const opcao1 = prompt(`Você está preso por ser um criminoso muito procurado. O que você faz?
        1 - Tento roubar a chave da cela
        2 - Não tento fugir`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos ver se você é capaz!")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 1) { 
                alert ( `${consequenciasCadeia[0]}`)
                batalhaDificil()
            }
            else if(sorteioDado >= 2 && sorteioDado <= 8) { 
                alert ( `${consequenciasCadeia[1]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=9 && sorteioDado <=18 ){
                alert ( `${consequenciasCadeia[2]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCadeia[3]}`) }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }
    else{
        alert(`Enviar para outras aventuras....`)
        return
    }
}

// Função para iniciar a jornada do guerreiro
function iniciarJornadaGuerreiro(){
    const opcao1 = prompt(`Você está preso por ser um criminoso muito procurado. O que você faz?
        1 - Tento entortar as grades da cela para fugir
        2 - Não tento fugir`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos ver se você é capaz!")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 1) { 
                alert ( `${consequenciasCadeia[0]}`)
                batalhaDificil()
            }
            else if(sorteioDado >= 2 && sorteioDado <= 8) { 
                alert ( `${consequenciasCadeia[1]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=9 && sorteioDado <=18 ){
                alert ( `${consequenciasCadeia[2]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCadeia[3]}`) }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }
    else{
        alert(`Enviar para outras aventuras....`)
        return
    }
}

// Função para iniciar a jornada do mago
function iniciarJornadaMago(){
    const opcao1 = prompt(`Você está preso por ser um criminoso muito procurado. O que você faz?
        1 - Tento teleportar para fora da prisão
        2 - Não tento fugir`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos ver se você é capaz!")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 5) { 
                alert ( `${consequenciasCadeia[1]}`)
                batalhaMediaM()
            }
            else if (sorteioDado >=6 && sorteioDado <=11 ){
                alert ( `${consequenciasCadeia[2]}`)
                batalhaFacilM()
            }
            else {alert ( `${consequenciasCadeia[3]}`) }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }
    else{
        alert(`Enviar para outras aventuras....`)
        return
    }
}