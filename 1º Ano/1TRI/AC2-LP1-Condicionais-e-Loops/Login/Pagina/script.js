function pokemon(){
    const pokemon = document.getElementById("pokemon")
    let escolhaPokemon = document.getElementById("opcoes").value;

    switch(escolhaPokemon){
        case "pikachu":
            pokemon.innerHTML = `
            <h1 class="pikachu">O seu pokemon é o: Pikachu</h1>

            <img src="Pikachu.png" alt="pikachu">

            <h2 class="tipoEletrico">Tipo: Elétrico<h2>

            <ul>
            <h2>Poderes<h2>
                <li>Quick Attack</li>
                <li>Electro Ball</li>
                <li>Thunder Wave</li>
                <li>Feint</li>
            </ul>
            `
        break;
        case "charmander":
            pokemon.innerHTML = `
            <h1 class="charmander">O seu pokemon é o: Charmander</h1>

            <img src="https://www.kindpng.com/picc/m/117-1172397_pokemon-charmander-png-high-quality-image-cute-pokemon.png" alt="Pokemon Charmander Png High-quality Image - Cute Pokemon Charmander, Transparent Png@kindpng.com">

            <h2 class="tipoFogo">Tipo: Fogo<h2>

            <ul>
            <h2>Poderes<h2>
                <li>Brasa</li>
                <li>Arranhão</li>
                <li>Lança-chamas</li>
                <li>Ataque de Chamas</li>
            </ul>
            `
        break;
        case "squirtle":
            pokemon.innerHTML = `
            <h1 class="squirtle">O seu pokemon é o: Squirtle</h1>

            <img src="squirtle.jpg" alt="Squirtle">

            <h2 class="tipoAgua">Tipo: Água<h2>

            <ul>
            <h2>Poderes<h2>
                <li>Invetida</li>
                <li>Bolhas</li>
                <li>Aqua Míssil</li>
                <li>Pulsação de Água</li>
            </ul>
            `
        break;
        case "bulbasaur":
            pokemon.innerHTML = `
            <h1 class="bulbasaur">O seu pokemon é o: Bulbasaur</h1>

            <img src="bulbasaur.png" alt="Bulbasaur">

            <h2 class="tipoPlanta">Tipo: Planta/Veneno<h2>

            <ul>
            <h2>Poderes<h2>
                <li>Chicote de Vinha</li>
                <li>Investida</li>
                <li>Bomba de Lodo</li>
                <li>Bomba de Sementes</li>
            </ul>
            `
        break;
        case "eevee":
            pokemon.innerHTML = `
            <h1 class="eevee">O seu pokemon é o: Eevee</h1>

            <img src="https://www.kindpng.com/picc/m/120-1204522_download-zip-archive-cartoon-hd-png-download.png" alt="Download Zip Archive - Cartoon, HD Png Download@kindpng.com">

            <h2 class="tipoNormal">Tipo: Normal<h2>

            <ul>
            <h2>Poderes<h2>
                <li>Dig</li>
                <li>Swift</li>
                <li>Body Slam Elite TM</li>
                <li>Last Resort Elite TM</li>
            </ul>
            `
        break;
        default:
            pokemon.innerText = "Opção Invalida"
    }
}