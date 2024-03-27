import React, { useEffect, useState } from "react";
import { getPokemonNamesInKorean } from "./apis/pokemon";

const PokemonList: React.FC = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  useEffect(() => {
    getPokemonNamesInKorean().then((names) => {
      setPokemonNames(names);
    });
  }, []);
  return (
    <div>
      <h1>Poke Wiki</h1>
      <ul>
        {pokemonNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
