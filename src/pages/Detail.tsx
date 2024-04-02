import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { pokemonDetail } from "../types/pokemon.type";
import { getPokemonDetail } from "../apis/pokemonDetail";
import { typeTranslate } from "../utils/typeTranslate";

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
      <h1>{pokemon?.id}</h1>
      <h1>{pokemon?.name}</h1>
      {pokemon?.img && (
        <img src={pokemon.img} alt={pokemon?.name} loading="lazy" />
      )}
      <div className="types">
        {pokemon &&
          pokemon.types.length > 1 &&
          pokemon.types.map((type) => {
            return <h1>{typeTranslate(type)}</h1>;
          })}
        {pokemon && pokemon.types.length == 1 && (
          <h1>{typeTranslate(pokemon.types[0])}</h1>
        )}
      </div>
      <p>{pokemon?.detail}</p>
      <p>{pokemon?.height}</p>
      <p>{pokemon?.weight}</p>
      <p>{pokemon?.genera}</p>
      <button
        onClick={() => {
          navigate(`/detail/${parseInt(id) - 1}`);
        }}
      >
        left
      </button>
      <button
        onClick={() => {
          navigate(`/detail/${parseInt(id) + 1}`);
        }}
      >
        right
      </button>
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
