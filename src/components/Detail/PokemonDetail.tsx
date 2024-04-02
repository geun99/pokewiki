import styled from "styled-components";

interface Props {
  detail: string;
  height: number;
  weight: number;
}

const PokemonDetail = ({ detail, height, weight }: Props) => {
  return (
    <PokemonDetailStyle>
      <p>{detail}</p>
      <p>키 : {height / 10}m</p>
      <p>몸무게 : {weight / 10}kg</p>
    </PokemonDetailStyle>
  );
};

const PokemonDetailStyle = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default PokemonDetail;
