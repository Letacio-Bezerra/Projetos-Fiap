function calcular(){
    let valorP = parseFloat(document.getElementById("valorP").value)
    let jurosT = parseFloat(document.getElementById("jurosT").value) / 100
    let mesA = parseInt(document.getElementById("mesA").value)

    if (isNaN(valorP) || isNaN(jurosT) || isNaN(mesA) || valorP <= 0 || jurosT < 0 || mesA < 0) {
        alert("Por favor, insira valores válidos.");
    }
    
    let valorTotal = valorP * (1 + jurosT) ** mesA;
    
    document.getElementById("resultado").innerText = `Valor total a ser pago: R$ ${valorTotal.toFixed(2)}`;
}