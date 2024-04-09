import axios from "axios";
import { generation } from "../constants/generation";

export interface poketype {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export const getPokemonDatas = async (
  gene: number,
  page: number,
  itemsPerPage: number
) => {
  const allPokemonData = [];
  const startIdx = generation[gene - 1] + (page - 1) * itemsPerPage + 1;
  const endIdx = Math.min(
    generation[gene - 1] + page * itemsPerPage,
    generation[gene]
  );

  for (let i = startIdx; i <= endIdx; i++) {
    const speciesResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${i}`
    );

    const typesData = await getPokemonTypes(i);
    const types = typesData.map((type: poketype) => type.type.name);

    allPokemonData.push({
      id: speciesResponse.data.id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`,
      name: speciesResponse.data.names[2].name,
      types: types,
    });
  }
  return allPokemonData;
};

export const getPokemonTypes = async (id: number) => {
  const typesResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  return typesResponse.data.types;
};
