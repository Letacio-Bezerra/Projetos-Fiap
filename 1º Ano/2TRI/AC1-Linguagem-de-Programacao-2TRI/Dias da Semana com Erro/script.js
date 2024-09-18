function mostrarDia() { /* Function escrito errado*/
    const diaNumero = parseInt(document.getElementById('diaNumero').value); /* Tinha um ")" faltando*/
    const resultado = document.getElementById('resultado'); /* Faltou um "t" */

        let diaNome;
        switch (diaNumero) {
            case 1:
                diaNome = "Domingo";
                break;
            case 2: /* Faltou o "2"*/
                diaNome = "Segunda-feira";
                break;
            case 3:
                diaNome = "Terça-feira";
                break;
            case 4:
                diaNome = "Quarta-feira";
                break;
            case 5:
                diaNome = "Quinta-feira";
                break;
            case 6:
                diaNome = "Sexta-feira";
                break;
            case 7:
                diaNome = "Sábado";
                break;
            default:
                diaNome = "Erro: Dia inválido"; 
        }
        resultado.innerText = `O dia correspondente é ${diaNome}`;
}
