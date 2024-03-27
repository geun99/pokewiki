import React, { useEffect, useState } from "react";
import { getPokemonDatas } from "../apis/pokemon";
import { pokemon } from "../types/pokemon.type";
import { typeTranslate } from "../utils/typeTranslate";

const Main: React.FC = () => {
  const [pokemon, setPokemon] = useState<pokemon[]>([]);
  useEffect(() => {
    getPokemonDatas().then((data) => setPokemon(data));
  }, []);

  pokemon.map((pokemon) => console.log(pokemon.name));
  return (
    <div>
      <h1>Poke Wiki</h1>
      <ul>
        {pokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            {pokemon.types.map((type) => (
              <p>{typeTranslate(type)}</p>
            ))}
            <p>{pokemon.id}</p>
            <img src={pokemon.img} alt={pokemon.name} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Main;
