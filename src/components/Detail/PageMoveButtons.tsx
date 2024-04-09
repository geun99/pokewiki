import styled from "styled-components";
import NextPokemonButton from "./Button/NextPokemonButton";
import PrevPokemonButton from "./Button/PrevPokemonButton";

interface Props {
  id: string;
  navigate: (id: string) => void;
  prevPokemon?: string;
  nextPokemon?: string;
}

const PageMoveButtons = ({ id, navigate, prevPokemon, nextPokemon }: Props) => {
  const prevId = parseInt(id) - 1;
  const nextId = parseInt(id) + 1;
  console.log(prevPokemon, nextPokemon, id);
  return (
    <PageMoveButtonsStyle>
      <NextPokemonButton
        navigate={navigate}
        nextId={nextId}
        nextPokemon={nextPokemon}
      />
      <PrevPokemonButton
        navigate={navigate}
        prevId={prevId}
        prevPokemon={prevPokemon}
      />
    </PageMoveButtonsStyle>
  );
};

const PageMoveButtonsStyle = styled.div`
  .btn {
    color: #eee;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .left-btn {
    position: absolute;
    left: 10px;
    top: 50%;
  }
  .right-btn {
    position: absolute;
    right: 10px;
    top: 50%;
  }
  .info {
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
  }
`;

export default PageMoveButtons;
