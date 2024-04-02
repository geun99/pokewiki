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

interface genus {
  genus: string;
  language: {
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

  // 어떤 포켓몬인지의 설명과 포켓몬 분류의 경우 최신 세대 포켓몬의 한글 API정보가 없어서 한글 정보가 없을 경우 영어 정보를 사용한다.
  const koEntry = speciesResponse.data.flavor_text_entries.find(
    (entry: entry) => entry.language.name === "ko"
  );

  const enEntry = speciesResponse.data.flavor_text_entries.find(
    (entry: entry) => entry.language.name === "en"
  );

  const detail = koEntry
    ? koEntry.flavor_text
    : enEntry
    ? enEntry.flavor_text
    : "";
  const koGenera = speciesResponse.data.genera.find(
    (genus: genus) => genus.language.name === "ko"
  )?.genus;
  const enGenera = speciesResponse.data.genera.find(
    (genus: genus) => genus.language.name === "en"
  )?.genus;
  const genera = koGenera ? koGenera : enGenera ? enGenera : "";
  return {
    id: speciesResponse.data.id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    name: speciesResponse.data.names[2].name,
    types,
    detail,
    weight: pokemonResponse.data.weight,
    height: pokemonResponse.data.height,
    genera,
  };
};
