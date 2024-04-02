import React from "react";
import styled from "styled-components";
import { typeTranslate } from "../../utils/typeTranslate";

interface TypeButtonsProps {
  onTypeClick: (type: string) => void;
}

const TypeButtons: React.FC<TypeButtonsProps> = ({ onTypeClick }) => {
  const typeClassNames = [
    "all",
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
    "steel",
    "fairy",
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
  grid-template-columns: repeat(9, minmax(100px, 1fr));
  gap: 15px;
  padding: 10px;
  margin: 10px;
  button {
    width: 150px;
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
