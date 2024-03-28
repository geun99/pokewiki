import axios from "axios";
import { getPokemonTypes, poketype } from "./pokemon";

interface entry {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}
export const getPokemonDetail = async (id: number) => {
  const speciesResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const pokemonResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  const typesData = await getPokemonTypes(id);
  const types = typesData.map((type: poketype) => type.type.name);
  const detail = speciesResponse.data.flavor_text_entries.find(
    (entry: entry) => entry.language.name === "ko"
  ).flavor_text;

  const genera = speciesResponse.data.genera[1].genus;
  return {
    id: speciesResponse.data.id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    name: speciesResponse.data.names[2].name,
    types: types,
    detail: detail,
    weight: pokemonResponse.data.weight,
    height: pokemonResponse.data.height,
    genera: genera,
  };
};
