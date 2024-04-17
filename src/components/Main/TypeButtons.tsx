import React, { useState } from "react";
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

  const [showButtons, setShowButtons] = useState(false);
  const toggleShowButtons = () => setShowButtons(!showButtons);
  return (
    <TypeButtonsStyle>
      <p className="title" onClick={toggleShowButtons}>
        타입 필터
      </p>
      <div className={`types ${showButtons ? "show" : ""}`}>
        {typeClassNames.map((className) => (
          <button
            key={className}
            className={className}
            onClick={() => onTypeClick(className)}
          >
            {typeTranslate(className)}
          </button>
        ))}
      </div>
    </TypeButtonsStyle>
  );
};

const TypeButtonsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .types {
    display: grid;
    grid-template-columns: repeat(9, minmax(100px, 1fr));
    gap: 15px;
    padding: 10px;
    margin: 10px;
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
  }
  @media (max-width: 768px) {
    .title {
      background-color: #eee;
      padding: 10px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 5px;
      width: 100px;
      text-align: center;
      border: 1px solid #000;
    }
    .types {
      display: none;
    }
    .show {
      display: grid;
      grid-template-columns: repeat(3, minmax(100px, 1fr));
      gap: 5px;
      button {
        width: 100px;
        height: 40px;
        font-size: 1.25rem;
      }
    }
  }
`;

export default TypeButtons;
