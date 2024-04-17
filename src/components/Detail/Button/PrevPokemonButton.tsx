import { FaArrowCircleLeft } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  prevId: number;
  navigate: (id: string) => void;
  prevPokemon?: string;
}
const PrevPokemonButton = ({ navigate, prevPokemon, prevId }: Props) => {
  return (
    <PrevPokemonButtonStyle>
      <div className="btn left-btn">
        <FaArrowCircleLeft
          onClick={() => {
            if (prevId === 0) return;
            navigate(`/detail/${prevId}`);
          }}
        />
        <p className="info">{prevId > 0 && prevPokemon}</p>
      </div>
    </PrevPokemonButtonStyle>
  );
};

const PrevPokemonButtonStyle = styled.div``;

export default PrevPokemonButton;
