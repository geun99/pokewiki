import axios from "axios";

export async function getPokemonNamesInKorean() {
  const allPokemonData = [];
  for (let i = 1; i <= 151; i++) {
    const speciesResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${i}`
    );
    console.log();
    allPokemonData.push(speciesResponse.data.names[2].name);
  }
  return allPokemonData;
}
