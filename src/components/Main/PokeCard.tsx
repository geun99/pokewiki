import styled from "styled-components";

import { pokemon } from "../../types/pokemon.type";
import PokeTypes from "./PokeTypes";

interface PokeCardProps {
  pokemons: pokemon[];
}

const PokeCard: React.FC<PokeCardProps> = ({ pokemons }) => {
  return (
    <PokeCardStyle>
      {pokemons?.map((pokemon) => (
        <div key={pokemon.id} className="card">
          <h2>
            {pokemon.id} {pokemon.name}
          </h2>

          <img src={pokemon.img} alt={pokemon.name} />
          <PokeTypes types={pokemon.types} />
        </div>
      ))}
    </PokeCardStyle>
  );
};

const PokeCardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 20px;
  padding: 10px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
    padding: 10px;
    border: 1px solid #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    h2 {
      font-size: 1.5rem;
    }

    img {
      width: 80%;
    }
  }
`;

export default PokeCard;
