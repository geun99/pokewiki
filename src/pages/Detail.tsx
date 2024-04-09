import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { pokemonDetail } from "../types/pokemon.type";
import { getPokemonDetail } from "../apis/pokemonDetail";
import PokemonImage from "../components/Detail/PokemonImage";
import PokemonInform from "../components/Detail/PokemonInform";
import PokemonDetail from "../components/Detail/PokemonDetail";
import PageMoveButtons from "../components/Detail/PageMoveButtons";
import PokeTypes from "../components/Common/PokeTypes";
import PokemonStat from "../components/Detail/PokemonStat";

const Detail = () => {
  const { id }: { id: string } = useParams() as { id: string };
  const [pokemon, setPokemon] = useState<pokemonDetail>();
  const [nextPokemon, setNextPokemon] = useState<string | undefined>(undefined);
  const [prevPokemon, setPrevPokemon] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    getPokemonDetail(parseInt(id)).then((data) => {
      setPokemon(data);
    });

    const prevId = parseInt(id) - 1;
    const nextId = parseInt(id) + 1;

    if (prevId > 0) {
      getPokemonDetail(prevId).then((prevData) => {
        setPrevPokemon(prevData.name);
      });
    }

    if (nextId < 1026) {
      getPokemonDetail(nextId).then((nextData) => {
        setNextPokemon(nextData.name);
      });
    }
  }, [id]);

  return (
    <DetailStyle>
      {pokemon && (
        <PokemonInform
          id={pokemon.id}
          name={pokemon.name}
          genera={pokemon.genera}
        />
      )}
      {pokemon && <PokemonImage image={pokemon.img} alt={pokemon.name} />}
      {pokemon && <PokeTypes types={pokemon.types} />}
      {pokemon && (
        <PokemonDetail
          detail={pokemon.detail}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      )}
      {pokemon && (
        <PageMoveButtons
          id={id}
          navigate={navigate}
          nextPokemon={nextPokemon}
          prevPokemon={prevPokemon}
        />
      )}

      {pokemon && <PokemonStat stats={pokemon.stats} />}
    </DetailStyle>
  );
};

const DetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  border-radius: 20px;
  padding: 10px;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export default Detail;
