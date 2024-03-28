import React, { useEffect, useState } from "react";
import { getPokemonDatas } from "../apis/pokemon";
import { pokemon } from "../types/pokemon.type";
import styled from "styled-components";
import PokeCard from "../components/Main/PokeCard";

const Main: React.FC = () => {
  const [pokemons, setPokemons] = useState<pokemon[]>([]);
  useEffect(() => {
    getPokemonDatas().then((data) => setPokemons(data));
  }, []);

  return (
    <MainStyle>
      <h1>Poke Wiki</h1>
      {!pokemons?.length && <p>Loading...</p>}
      <div className="pokemons">
        <PokeCard pokemons={pokemons} />
      </div>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Main;
