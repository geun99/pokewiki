import { FaArrowCircleRight } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  nextId: number;
  navigate: (id: string) => void;
  nextPokemon?: string;
}
const NextPokemonButton = ({ navigate, nextPokemon, nextId }: Props) => {
  return (
    <NextPokemonButtonStyle>
      <div className="btn right-btn">
        <FaArrowCircleRight
          onClick={() => {
            if (nextId === 1025) return;
            navigate(`/detail/${nextId}`);
          }}
        />
        <p className="info">{nextId !== 1025 && nextPokemon}</p>
      </div>
    </NextPokemonButtonStyle>
  );
};

const NextPokemonButtonStyle = styled.div``;

export default NextPokemonButton;
