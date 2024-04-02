import styled from "styled-components";

interface Props {
  id: number;
  name: string;
}

const PokemonInform = ({ id, name }: Props) => {
  return (
    <PokemonInformStyle>
      <h1>{id}</h1>
      <h1>{name}</h1>
    </PokemonInformStyle>
  );
};

const PokemonInformStyle = styled.div``;

export default PokemonInform;
