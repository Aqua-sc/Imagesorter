
const fetchPokemon = async() => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=159`
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map
}