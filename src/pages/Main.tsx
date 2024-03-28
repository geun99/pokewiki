import React, { useEffect, useState } from "react";
import { getPokemonDatas } from "../apis/pokemon";
import { pokemon } from "../types/pokemon.type";
import styled from "styled-components";
import PokeCard from "../components/Main/PokeCard";
import TypeButtons from "../components/Main/TypeButtons";

const Main: React.FC = () => {
  const [pokemons, setPokemons] = useState<pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<pokemon[]>([]);

  useEffect(() => {
    getPokemonDatas().then((data) => {
      setPokemons(data);
      setFilteredPokemons(data);
    });
  }, []);

  const handleTypeClick = (type: string) => {
    if (type === "all") {
      setFilteredPokemons(pokemons);
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.types.includes(type)
      );
      setFilteredPokemons(filtered);
    }
  };

  return (
    <MainStyle>
      <TypeButtons onTypeClick={handleTypeClick} />
      {!pokemons?.length && <p>Loading...</p>}
      <div className="pokemons">
        <PokeCard pokemons={filteredPokemons} />
      </div>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  background-color: #b0daea;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;

export default Main;
