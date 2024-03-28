import styled from "styled-components";
import { typeTranslate } from "../../utils/typeTranslate";

import { pokemon } from "../../types/pokemon.type";

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
          <div className="types">
            {pokemon.types.length == 1 && (
              <p className={`${pokemon.types[0]} oneType`}>
                {typeTranslate(pokemon.types[0])}
              </p>
            )}
            {pokemon.types.length > 1 &&
              pokemon.types.map((type) => (
                <p key={type} className={type}>
                  {typeTranslate(type)}
                </p>
              ))}
          </div>
          <img src={pokemon.img} alt={pokemon.name} />
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

  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    h2 {
      font-size: 1.5rem;
  }

  img {
    width: 80%;
  }
  .types {
    display: flex;
    justify-content: space-between;
    width: 100%;
    p {
      flex-basis: 50%;
      padding: 5px;
      border-radius: 100px;
      text-align: center;
      margin: 5px;
      
    }
    .oneType {
        flex-basis: 100%;
      }
  }
  
`;

export default PokeCard;
