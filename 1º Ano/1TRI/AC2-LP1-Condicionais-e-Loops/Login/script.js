//Login
function logar(){
    let senha = document.getElementById("senha").value
    let login = document.getElementById("login").value

    do
    {
        if(senha === "" || login === ""){
            alert("O campo não pode estar vazio")
        }
        else if(senha != "pokemon" || login != "pokemon"){
            alert("Usuário ou senha incorretos")
        }
    }
    while (senha != "pokemon" || login != "pokemon")
    alert("Login efetuado com sucesso")
    window.location.href = './Pagina';
}

function cadastrar(){
    let nome, email, idade, senha, senhaConfirma, genero;

    //Nome
    do{
        nome = prompt("Nome:")
        if(nome === ""){
            alert("O campo não pode estar vazio")
        }
        else if(nome.length < 2){
            alert("Informação inválida. Deve ter mais de 2 letras")
        }
    }
    while(nome.length < 2 || nome === null)

    //E-mail
    do{
        email = prompt("E-mail:")
        if(email === ""){
            alert("O campo não pode estar vazio")
        }
    }
    while(email === "")

    //Idade
    do {
        idade = parseFloat(prompt("Digite sua idade:"))
        if (isNaN(idade)){
            alert("O campo não pode estar vazio")
        }
        else if (idade > 100 || idade < 0){
            alert("Informação inválida. Deve ter entre 1 a 100 anos")
        }
    }
    while (idade < 0 || idade > 100 || isNaN(idade))

    //Senha
    do{
        senha = prompt("Senha:")
        if(senha === ""){
            alert("O campo não pode estar vazio")
        }
        else if(senha < 6){
            alert("Informação inválida. Senha precisa de no minimo 6 caracteres")
        }
    }
    while(senha < 6 || senha === "")

    //Confirmar Senha
    do{
        senhaConfirma = prompt("Confirmar senha:")
        if(senhaConfirma != senha){
            alert("Informação inválida. Senha errada.")
        }
    }
    while(senhaConfirma != senha)

    //Genero
    do{
        genero = prompt("Gênero:");
        if (genero === "") {
            alert("O campo não pode estar vazio");
        } 
        else if (genero !== "m" && genero !== "f" && genero !== "M" && genero !== "F") {
            alert("Informação inválida");
        }
    } while (genero === "" || (genero !== "m" && genero !== "f" && genero !== "M" && genero !== "F"));
    alert("Nome: " + nome + " - E-mail: " + email + " - Idade: " + idade + " - Senha: " + senha + " - Gênero: " + genero)
    alert("Cadastro efetuado com sucesso!")
    window.location.href = './Pagina';
}
