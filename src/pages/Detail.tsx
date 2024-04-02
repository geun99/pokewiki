import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { pokemonDetail } from "../types/pokemon.type";
import { getPokemonDetail } from "../apis/pokemonDetail";
import PokemonImage from "../components/Detail/PokemonImage";
import PokemonInform from "../components/Detail/PokemonInform";
import PokemonType from "../components/Detail/PokemonType";
import PokemonDetail from "../components/Detail/PokemonDetail";
import PageMoveButtons from "../components/Detail/PageMoveButtons";

const Detail = () => {
  const { id }: { id: string } = useParams() as { id: string };
  const [pokemon, setPokemon] = useState<pokemonDetail>();
  useEffect(() => {
    if (id) {
      getPokemonDetail(parseInt(id)).then((data) => {
        setPokemon(data);
      });
    }
  }, [id]);
  const navigate = useNavigate();
  return (
    <DetailStyle>
      {pokemon && <PokemonInform id={pokemon.id} name={pokemon.name} />}
      {pokemon && <PokemonImage image={pokemon.img} alt={pokemon.name} />}
      {pokemon && <PokemonType types={pokemon.types} />}
      {pokemon && (
        <PokemonDetail
          detail={pokemon.detail}
          height={pokemon.height}
          weight={pokemon.weight}
          genera={pokemon.genera}
        />
      )}
      {pokemon && <PageMoveButtons id={id} navigate={navigate} />}
    </DetailStyle>
  );
};

const DetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

export default Detail;
