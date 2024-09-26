//************************************* Variáveis globais que devem ser inicializadas no início do jogo *************************************

//variável que irá guardar o personagem sorteado
let personagemPrincipal = "";
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0;
//variavel para saber se o personagem tá vivo
let vivo = true;
//variável que irá guardar a consequência de cada número sorteado no desafio da caverna
const consequenciasCadeia = [
  "Você não tomou cuidado e todos os guardas da prisão estão indo te espancar até a morte.",
  "Você não tomou cuidado e quase todos os guardas da prisão estão indo te espancar até a morte.",
  "Você tomou um pouco de cuidado, mas foi percebido por alguns guardas! Ganhe para fugir.",
  "Você provou sua habilidade de furtivida e conseguiu escapar sem ser percebido, mas conseguirá fugir por quanto tempo?",
];

const armadilhaFlorestaC = [
  "Você não conseguiu desviar e teve sua perna decepada. Após isso o VOLIBA te encontra e te devora.",
  "Você desvia da armadilha.",
];

const florestaFomeC = [
  "Você deu azar e a mãe e o pai dos ovos apareceu e irá lhe pegar",
  "Você deu azar e a mãe dos ovos apareceu e irá lhe pegar",
  "Você conseguiu comer os ovos e não está mais com fome",
];

const VolibaC = [
  "Você não conseguiu sair e sua única opção é lutar!",
  "Você conseguiu sair, muito bem! Está livre agora.",
];

//************************************* Funções que serão repetidas ao longo do jogo *************************************

// Função para rolar um dado (1 a 20)
function rolarDado() {
  return Math.floor(Math.random() * 20) + 1;
}

// Função para batalha de nível fácil
function batalhaFacil() {
  let vidaPersonagem = 10;
  let vidaInimigo = 15;

  while (vidaPersonagem >= 0 && vidaInimigo >= 0) {
    alert(
      `Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`
    );
    let numeroSorteadoPersonagem = rolarDado();
    alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`);
    let numeroSorteadoInimigo = rolarDado();
    if (numeroSorteadoPersonagem > numeroSorteadoInimigo) {
      vidaInimigo -= 2;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`
      );
    } else if (numeroSorteadoPersonagem < numeroSorteadoInimigo) {
      vidaPersonagem -= 4;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`
      );
    } else {
      alert("Empate! Nada acontece.");
    }
  }

  if (vidaPersonagem <= 0) {
    alert("Você morreu! O jogo acabou.");
  } else {
    alert("Você sobreviveu! Agora a história continua....");
  }

  if (vidaPersonagem <= 0) {
    vivo = false;
    return;
  } else {
    vivo = true;
    return;
  }
}

// Função para batalha de nível médio
function batalhaMedia() {
  let vidaPersonagem = 11;
  let vidaInimigo = 30;

  alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`);

  while (vidaPersonagem >= 0 && vidaInimigo >= 0) {
    alert(
      `Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`
    );
    let numeroSorteadoPersonagem = rolarDado();
    alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`);
    let numeroSorteadoInimigo = rolarDado();
    if (numeroSorteadoPersonagem > numeroSorteadoInimigo) {
      vidaInimigo -= 3;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`
      );
    } else if (numeroSorteadoPersonagem < numeroSorteadoInimigo) {
      vidaPersonagem -= 5;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`
      );
    } else {
      alert("Empate! Nada acontece.");
    }
  }
  if (vidaPersonagem <= 0) {
    alert("Você morreu! O jogo acabou.");
  } else {
    alert("Você sobreviveu! Agora a história continua....");
  }

  if (vidaPersonagem <= 0) {
    vivo = false;
    return;
  } else {
    vivo = true;
    return;
  }
}

// Função para batalha de nível difiil
function batalhaDificil() {
  let vidaPersonagem = 10;
  let vidaInimigo = 50;

  alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`);

  while (vidaPersonagem >= 0 && vidaInimigo >= 0) {
    alert(
      `Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`
    );
    let numeroSorteadoPersonagem = rolarDado();
    alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`);
    let numeroSorteadoInimigo = rolarDado();
    if (numeroSorteadoPersonagem > numeroSorteadoInimigo) {
      vidaInimigo -= 5;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`
      );
    } else if (numeroSorteadoPersonagem < numeroSorteadoInimigo) {
      vidaPersonagem -= 10000;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`
      );
    } else {
      alert("Empate! Nada acontece.");
    }
  }
  if (vidaPersonagem <= 0) {
    alert("Você morreu! O jogo acabou.");
  } else {
    alert("Você sobreviveu! Agora a história continua....");
  }

  if (vidaPersonagem <= 0) {
    vivo = false;
    return;
  } else {
    vivo = true;
    return;
  }
}

//************************************* Função para batalha do Maguinho Covarde *************************************

// Função para batalha de nível fácil
function batalhaFacilM() {
  let vidaPersonagem = 50;
  let vidaInimigo = 15;

  while (vidaPersonagem >= 0 && vidaInimigo >= 0) {
    alert(
      `Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`
    );
    let numeroSorteadoPersonagem = rolarDado();
    alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`);
    let numeroSorteadoInimigo = rolarDado();
    if (numeroSorteadoPersonagem > numeroSorteadoInimigo) {
      vidaInimigo -= 10;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`
      );
    } else if (numeroSorteadoPersonagem < numeroSorteadoInimigo) {
      vidaPersonagem -= 3;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`
      );
    } else {
      alert("Empate! Nada acontece.");
    }
  }
  if (vidaPersonagem <= 0) {
    alert("Você morreu! O jogo acabou.");
  } else {
    alert("Você sobreviveu! Agora a história continua....");
  }

  if (vidaPersonagem <= 0) {
    vivo = false;
    return;
  } else {
    vivo = true;
    return;
  }
}

// Função para batalha de nível médio
function batalhaMediaM() {
  let vidaPersonagem = 50;
  let vidaInimigo = 30;

  alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`);

  while (vidaPersonagem >= 0 && vidaInimigo >= 0) {
    alert(
      `Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`
    );
    let numeroSorteadoPersonagem = rolarDado();
    alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`);
    let numeroSorteadoInimigo = rolarDado();
    if (numeroSorteadoPersonagem > numeroSorteadoInimigo) {
      vidaInimigo -= 10;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`
      );
    } else if (numeroSorteadoPersonagem < numeroSorteadoInimigo) {
      vidaPersonagem -= 5;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`
      );
    } else {
      alert("Empate! Nada acontece.");
    }
  }
  if (vidaPersonagem <= 0) {
    alert("Você morreu! O jogo acabou.");
  } else {
    alert("Você sobreviveu! Agora a história continua....");
  }

  if (vidaPersonagem <= 0) {
    vivo = false;
    return;
  } else {
    vivo = true;
    return;
  }
}

// Função para batalha de nível difiil VOLIBA
function batalhaDificilMV() {
  let vidaPersonagem = 50;
  let vidaInimigo = 50;

  alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`);

  while (vidaPersonagem >= 0 && vidaInimigo >= 0) {
    alert(
      `Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`
    );
    let numeroSorteadoPersonagem = rolarDado();
    alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`);
    let numeroSorteadoInimigo = rolarDado();
    if (numeroSorteadoPersonagem > numeroSorteadoInimigo) {
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`
      );
    } else if (numeroSorteadoPersonagem < numeroSorteadoInimigo) {
      vidaPersonagem -= 10000000;
      alert(
        `O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`
      );
    } else {
      alert("Empate! Nada acontece.");
    }
  }
  if (vidaPersonagem <= 0) {
    alert("VOLIBA DE BIGODON ganha de qualquer maguinho! O jogo acabou.");
  } else {
    alert("Como você sobreviveu?");
  }

  if (vidaPersonagem <= 0) {
    vivo = false;
    return;
  } else {
    vivo = true;
    return;
  }
}

//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar() {
  const personagem = prompt(`Seja bem-vindo! Escolha uma das opções: 
        1 - Sortear Personagem
        2 - Sair do Jogo`);

  switch (personagem) {
    case "1":
      personagemPrincipal = sortearPersonagem();
      alert(`O personagem sorteado foi ${personagemPrincipal}`);
      if (personagemPrincipal === "Guerreiro") iniciarJornadaGuerreiro();
      else if (personagemPrincipal === "Mago") iniciarJornadaMago();
      else iniciarJornadaArqueiro();
      break;
    case "2":
      alert("Espero te ver novamente!");
      break;
    default:
      alert("Isso não é uma opção! Recomeço do zero cabeçudo!");
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
function iniciarJornadaArqueiro() {
  const opcao1 =
    prompt(`Você está preso por ser um criminoso muito procurado. O que você faz?
        1 - Tento roubar a chave da cela
        2 - Não tento fugir`);
  if (opcao1 == "1") {
    const rolarDados = confirm("Agora vamos ver se você é capaz!");
    if (rolarDados === true) {
      sorteioDado = rolarDado();
      alert(`O número sorteado foi ${sorteioDado}!`);
      if (sorteioDado >= 0 && sorteioDado <= 1) {
        alert(`${consequenciasCadeia[0]}`);
        batalhaDificil();
      } else if (sorteioDado >= 2 && sorteioDado <= 8) {
        alert(`${consequenciasCadeia[1]}`);
        batalhaMedia();
      } else if (sorteioDado >= 9 && sorteioDado <= 18) {
        alert(`${consequenciasCadeia[2]}`);
        batalhaFacil();
      } else {
        alert(`${consequenciasCadeia[3]}`);
      }
    }
    if (vivo) {
      continuarAventuraMago();
    } else {
      alert(`Se ainda não está preparado, volte mais tarde.`);
      return;
    }
  } else {
    alert(`Enviar para outras aventuras....`);
    return;
  }
}

// Função para iniciar a jornada do guerreiro
function iniciarJornadaGuerreiro() {
  const opcao1 =
    prompt(`Você está preso por ser um criminoso muito procurado. O que você faz?
        1 - Tento entortar as grades da cela para fugir
        2 - Não tento fugir`);
  if (opcao1 == "1") {
    const rolarDados = confirm("Agora vamos ver se você é capaz!");
    if (rolarDados === true) {
      sorteioDado = rolarDado();
      alert(`O número sorteado foi ${sorteioDado}!`);
      if (sorteioDado >= 0 && sorteioDado <= 1) {
        alert(`${consequenciasCadeia[0]}`);
        batalhaDificil();
      } else if (sorteioDado >= 2 && sorteioDado <= 8) {
        alert(`${consequenciasCadeia[1]}`);
        batalhaMedia();
      } else if (sorteioDado >= 9 && sorteioDado <= 18) {
        alert(`${consequenciasCadeia[2]}`);
        batalhaFacil();
      } else {
        alert(`${consequenciasCadeia[3]}`);
      }
    }
    if (vivo) {
      continuarAventuraMago();
    } else {
      alert(`Se ainda não está preparado, volte mais tarde.`);
      return;
    }
  } else {
    alert(`Enviar para outras aventuras....`);
    return;
  }
}

// Função para iniciar a jornada do mago
function iniciarJornadaMago() {
  const opcao1 =
    prompt(`Você está preso por ser um criminoso muito procurado. O que você faz?
        1 - Tento teleportar para fora da prisão
        2 - Não tento fugir`);
  if (opcao1 == "1") {
    const rolarDados = confirm("Agora vamos ver se você é capaz!");
    if (rolarDados === true) {
      sorteioDado = rolarDado();
      alert(`O número sorteado foi ${sorteioDado}!`);
      if (sorteioDado >= 0 && sorteioDado <= 5) {
        alert(`${consequenciasCadeia[1]}`);
        batalhaMediaM();
      } else if (sorteioDado >= 6 && sorteioDado <= 11) {
        alert(`${consequenciasCadeia[2]}`);
        batalhaFacilM();
      } else {
        alert(`${consequenciasCadeia[3]}`);
      }
    }
    if (vivo) {
      continuarAventuraMago();
    }
  } else {
    alert(`Você morreu de velhice na prisão`);
    return;
  }
}

function continuarAventuraMago() {
  const escolhaCaminho =
    prompt(`Você conseguiu escapar da cadeia com sucesso pra onde irá agora?
    1 - Cidade
    2 - Floresta
    3 - Se vingar`);
  if (escolhaCaminho == "1") {
    CidadeMago();
  } else if (escolhaCaminho == "2") {
    encontraArmadilhaFloresta();
  } else if (escolhaCaminho == "3") {
    VingançaMago();
  } else {
    alert(`Se ainda não está preparado, volte mais tarde.`);
    return;
  }
}

function encontraArmadilhaFloresta() {
  sorteioDado = rolarDado();
  alert(`Você está andando pela floresta, será que encontra alguma coisa?`);
  alert(`O número sorteado foi ${sorteioDado}!`);
  if (sorteioDado >= 0 && sorteioDado <= 10) {
    FlorestaMago();
  } else {
    FlorestaMagoP2();
  }
}

function FlorestaMago() {
  const armadilhaFloresta =
    prompt(`Você encontra uma armadilha de VOLIBA. Você desvia dela?
        1 - Tento desviar
        2 - Não tento desviar`);
  if (armadilhaFloresta == "1") {
    const rolarDados = confirm("Agora vamos ver se você é capaz!");
    if (rolarDados === true) {
      sorteioDado = rolarDado();
      alert(`O número sorteado foi ${sorteioDado}!`);
      if (sorteioDado >= 0 && sorteioDado <= 5) {
        alert(`${armadilhaFlorestaC[0]}`);
        vivo = false;
      } else {
        alert(`${armadilhaFlorestaC[1]}`);
      }
    }
    if (vivo) {
      FlorestaMagoP2();
    }
  } else {
    alert(`Você morreu!`);
    return;
  }
}

function FlorestaMagoP2() {
  const florestaFome =
    prompt(`Você encontra um ninho de gaviões míticos, onde pode comer os ovos dele. Vai tentar?
        1 - Tento comer os ovos de gaviões
        2 - Continuar com fome`);
  if (florestaFome == "1") {
    const rolarDados = confirm("Agora vamos ver se você é capaz!");
    if (rolarDados === true) {
      sorteioDado = rolarDado();
      alert(`O número sorteado foi ${sorteioDado}!`);
      if (sorteioDado >= 0 && sorteioDado <= 3) {
        alert(`${florestaFomeC[0]}`);
        batalhaDificil();
      } else if (sorteioDado >= 4 && sorteioDado <= 8) {
        alert(`${florestaFomeC[1]}`);
        batalhaFacilM();
      } else {
        alert(`${florestaFomeC[2]}`);
      }
    }
    if (vivo) {
      encontroVoliba();
    }
  } else {
    alert(encontroVoliba());
  }
}

function encontroVoliba() {
  const voliba =
    prompt(`Você encontra uma caverna e sente algo poderoso vindo dela, tem coragem para entrar?
        1 - Entro na caverna
        2 - Saio da floresta`);
  if (voliba == "1") {
    const lutaVoliba =
      prompt(`Quando você entra a entrada da caverna é bloqueada por uma parede de raios! E o GRANDIOSO VOLIBA DO BIGODON aparece!
        1 - Tento lutar
        2 - Tento fugir`);
    if (lutaVoliba == "1") {
      alert("Agora vamos ver se você é capaz!");
      batalhaDificilMV();
    }
    else if (lutaVoliba == "2") {
      const rolarDados = confirm("Agora vamos ver se você é capaz!");
      if (rolarDados === true) {
        sorteioDado = rolarDado();
        alert(`O número sorteado foi ${sorteioDado}!`);
        if (sorteioDado >= 0 && sorteioDado <= 19) {
          alert(`${VolibaC[0]}`);
          batalhaDificilMV();
        } else {
          alert(`${VolibaC[1]}`);
        }
      }
    }
  } else {
    alert(`Você sai da floresta e está livre.`);
  }
}
