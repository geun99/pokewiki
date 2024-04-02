import styled from "styled-components";

interface Props {
  detail: string;
  height: number;
  weight: number;
  genera: string;
}

const PokemonDetail = ({ detail, height, weight, genera }: Props) => {
  return (
    <PokemonDetailStyle>
      <p>{detail}</p>
      <p>키 : {height}</p>
      <p>몸무게 : {weight}</p>
      <p>{genera}</p>
    </PokemonDetailStyle>
  );
};

const PokemonDetailStyle = styled.div``;

export default PokemonDetail;
