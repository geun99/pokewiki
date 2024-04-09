import styled from "styled-components";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { pokemonDetail } from "../../types/pokemon.type";

interface Props {
  id: string;
  navigate: (id: string) => void;
  prevPokemon: pokemonDetail;
  nextPokemon: pokemonDetail;
}

const PageMoveButtons = ({ id, navigate, prevPokemon, nextPokemon }: Props) => {
  const prevId = parseInt(id) - 1;
  const nextId = parseInt(id) + 1;

  return (
    <PageMoveButtonsStyle>
      {prevId > 0 && (
        <div className="btn left-btn">
          <FaArrowCircleLeft
            onClick={() => {
              navigate(`/detail/${prevId}`);
            }}
          />
          <p className="info">{prevPokemon.name}</p>
        </div>
      )}
      {nextId <= 1025 && (
        <div className="btn right-btn disabled">
          <FaArrowCircleRight
            onClick={() => {
              navigate(`/detail/${nextId}`);
            }}
          />
          <p className="info">{nextPokemon.name}</p>
        </div>
      )}
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
