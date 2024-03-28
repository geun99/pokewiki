import React from "react";
import styled from "styled-components";
import { typeTranslate } from "../../utils/typeTranslate";

interface TypeButtonsProps {
  onTypeClick: (type: string) => void;
}

const TypeButtons: React.FC<TypeButtonsProps> = ({ onTypeClick }) => {
  const typeClassNames = [
    "all", // Add a button for displaying all Pokémon
    "grass",
    "fire",
    "water",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
    "unknown",
    "normal",
  ];

  return (
    <TypeButtonsStyle>
      {typeClassNames.map((className) => (
        <button
          key={className}
          className={className}
          onClick={() => onTypeClick(className)}
        >
          {typeTranslate(className)}
        </button>
      ))}
    </TypeButtonsStyle>
  );
};

const TypeButtonsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(100px, 1fr));
  gap: 10px;
  padding: 10px;
  button {
    width: 100px;
    border-radius: 10px;
    border: 1px solid #000;
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
`;

export default TypeButtons;
