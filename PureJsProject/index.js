
let getPokemon = (e) => {
    e.preventDefault();
    const pokemon = document.getElementById("pokemonName").value;
    fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemon)
        .then(response => {
            let parsed = response.json();
            parsed.then( data => {
                let span = document.createElement('span');
                span.innerText = data.name;
                document.getElementById("selectedPokemon").appendChild(span);
            })
          
        });
}