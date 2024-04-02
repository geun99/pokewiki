import styled from "styled-components";
import { typeTranslate } from "../../utils/typeTranslate";

const PokemonType = ({ types }: { types: string[] }) => {
  return (
    <PokemonTypeStyle>
      {types.length > 1 &&
        types.map((type, idx) => {
          return <h1 key={idx}>{typeTranslate(type)}</h1>;
        })}
      {types.length == 1 && <h1>{typeTranslate(types[0])}</h1>}
    </PokemonTypeStyle>
  );
};

const PokemonTypeStyle = styled.div``;

export default PokemonType;
