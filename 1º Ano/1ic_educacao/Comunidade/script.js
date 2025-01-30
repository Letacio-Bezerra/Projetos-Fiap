let perguntas = [
    {
        texto: "Qual a fórmula de Bhaskara?",
        respostas: [
            "A fórmula de Bhaskara é: x = (-b ± √(b² - 4ac)) / 2a.",
            "A fórmula resolve equações quadráticas do tipo ax² + bx + c = 0."
        ],
        origem: "fake"  // Marca que essa pergunta é "fake"
    },
    {
        texto: "Como funciona a fotossíntese?",
        respostas: [
            "A fotossíntese é o processo pelo qual as plantas convertem dióxido de carbono, água e luz solar em oxigênio e glicose.",
            "O processo ocorre nas células vegetais, mais especificamente nas clorofilas das folhas."
        ],
        origem: "fake"  // Marca que essa pergunta é "fake"
    }
];

const formPergunta = document.getElementById('formPergunta');
const inputPergunta = document.getElementById('pergunta');
const listaPerguntas = document.getElementById('listaPerguntas');

// Função para renderizar a lista de perguntas
function renderizarLista() {
    listaPerguntas.innerHTML = perguntas.map((pergunta, index) =>
        `<li>
            <span>${pergunta.texto}</span>
            <button onclick="adicionarResposta(${index})">Responder</button>
            ${pergunta.origem === "usuario" ? `<button onclick="editarPergunta(${index})">Editar</button>` : ""}
            ${pergunta.origem === "usuario" ? `<button onclick="removerPergunta(${index})">Remover</button>` : ""}
            <ul>
                ${pergunta.respostas.map(resposta => `<li>${resposta}</li>`).join('')}
            </ul>
        </li>`
    ).join('');
}

// Adiciona uma nova pergunta
formPergunta.addEventListener('submit', (e) => {
    e.preventDefault();
    const novaPergunta = inputPergunta.value.trim();
    if (novaPergunta) {
        // Adiciona a nova pergunta no início da lista com a origem 'usuario'
        perguntas.unshift({ texto: novaPergunta, respostas: [], origem: "usuario" });
        inputPergunta.value = '';
        renderizarLista();
    }
});

// Remove uma pergunta
function removerPergunta(index) {
    perguntas.splice(index, 1);
    renderizarLista();
}

// Edita uma pergunta
function editarPergunta(index) {
    const novaPergunta = prompt("Editar pergunta:", perguntas[index].texto);
    if (novaPergunta) {
        perguntas[index].texto = novaPergunta.trim();
        renderizarLista();
    }
}

// Adiciona uma resposta a uma pergunta
function adicionarResposta(index) {
    const novaResposta = prompt("Digite sua resposta:");
    if (novaResposta) {
        perguntas[index].respostas.push(novaResposta.trim());
        renderizarLista();
    }
}

// Renderiza as perguntas ao carregar a página
renderizarLista();