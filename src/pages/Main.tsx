import React, { useEffect, useState } from "react";
import { getPokemonDatas } from "../apis/pokemon";
import { pokemon } from "../types/pokemon.type";
import styled from "styled-components";
import PokeCard from "../components/Main/PokeCard";
import TypeButtons from "../components/Main/TypeButtons";
import GenerationButtons from "../components/Main/GenerationButtons";
import ScrollTopButton from "../components/Common/ScrollTopButton";

const Main: React.FC = () => {
  const [pokemons, setPokemons] = useState<pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<pokemon[]>([]);
  const [generation, setGeneration] = useState<number>(1);

  useEffect(() => {
    getPokemonDatas(generation).then((data) => {
      setPokemons(data);
      setFilteredPokemons(data);
    });
  }, [generation]);

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
      <PokeCard pokemons={filteredPokemons} />
      <GenerationButtons onGenerationClick={setGeneration} />
      <ScrollTopButton />
    </MainStyle>
  );
};

const MainStyle = styled.div`
  display: flex;
  background-color: #b0daea;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;

export default Main;
