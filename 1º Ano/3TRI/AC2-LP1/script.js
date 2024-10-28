// Atividade 1
function corrigir(){
    let produtos = ["Celuar", "Mouse", "Monitor", "Notebbok",
    "Impressora", "Teclado", "Telveisão", "Fone", "Webcam", "HD Externo"];

    produtos[0] = "Celular"
    produtos[3] = "Notebook"
    produtos[6] = "Televisão"

    console.log(produtos)
}


// Atividade 2
function gerarNumero() {
    return Math.floor(Math.random() * 10) + 1;
}

function adicionar(){
    let numeros = [2, 5, 8, 13, 16, 21];
    let numerosNovos = [];
    let multiplicador = gerarNumero()

    numeros.forEach(function(numero) {
        if (numero % 2 === 0) {
            numerosNovos.push(numero);
        }
        else{
            numeroImpar = numero * multiplicador
            numerosNovos.push(numeroImpar)
        }
        console.log(numerosNovos)
        });

}


// Atividade 3
function arredondar(){
    let numeros = [1.2, 3.7, 4.5, 6.1, 8.9];
    let numerosA = []

    numeros.forEach(function(numero) {
        numerosA.push(Math.ceil(numero));
    });
    
    console.log(numerosA);
}


// Atividade 4
function contar(){
    let frase = "Letacio da Silva Bezerra";
    let palavras = frase.split(" ");
    let contagemPalavras = 0;
    
    palavras.forEach(function() {
      contagemPalavras++;
    });

    console.log(contagemPalavras);
}


// Atividade 5
function inicio(){
    let numerosOriginais = [4, 5, 6];
    let novosNumeros = [1, 2, 3];

    novosNumeros.forEach(function(novos){
        numerosOriginais.unshift(novos);
    })
    
    console.log(numerosOriginais);
}