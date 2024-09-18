function exibirNumeros() {

    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(inicio) || isNaN(fim) || inicio >= fim) {
        resultado.innerHTML = 'Por favor, insira valores válidos.';
    }

    for (let i = inicio + 1; i < fim; i++) {
        resultado.innerHTML += i;
    }
}