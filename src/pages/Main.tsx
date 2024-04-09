import { useEffect, useState } from "react";
import { getPokemonDatas } from "../apis/pokemon";
import { pokemon } from "../types/pokemon.type";
import styled from "styled-components";
import PokeCard from "../components/Main/PokeCard";
import TypeButtons from "../components/Main/TypeButtons";
import GenerationButtons from "../components/Main/GenerationButtons";
import ScrollTopButton from "../components/Common/ScrollTopButton";
import Pagination from "../components/Main/Pagination";
import LoadingIcon from "../components/Common/LoadingIcon";

const Main = () => {
  const [pokemons, setPokemons] = useState<pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [generation, setGeneration] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const itemsPerPage = 18;

  const fetchData = async (
    generation: number,
    page: number,
    itemsPerPage: number
  ) => {
    setLoading(true);
    const data = await getPokemonDatas(generation, page, itemsPerPage);
    setPokemons(data);
    setFilteredPokemons(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(generation, currentPage, itemsPerPage);
  }, [generation, currentPage, itemsPerPage]);

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    fetchData(generation, pageNumber, itemsPerPage);
  };

  const resetPagination = () => {
    setCurrentPage(1);
    fetchData(generation, currentPage, itemsPerPage);
  };

  return (
    <MainStyle>
      <TypeButtons onTypeClick={handleTypeClick} />
      <GenerationButtons
        onGenerationClick={setGeneration}
        resetPagination={resetPagination}
      />
      {loading && <LoadingIcon />}
      {!loading && (
        <>
          {!pokemons?.length && <p>Loading...</p>}
          <PokeCard pokemons={filteredPokemons} />
        </>
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        gene={generation}
        onPageChange={handlePageChange}
      />
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
