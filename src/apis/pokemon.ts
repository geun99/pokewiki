import axios from "axios";

export interface poketype {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export const getPokemonDatas = async () => {
  const allPokemonData = [];
  for (let i = 1; i <= 151; i++) {
    // 1세대 151마리
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
