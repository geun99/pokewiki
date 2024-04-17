import { useState } from "react";
import styled from "styled-components";

interface Props {
  onGenerationClick: (generation: number) => void;
  resetPagination: () => void;
}

const GenerationButtons = ({ onGenerationClick, resetPagination }: Props) => {
  const location = [
    "관동",
    "성도",
    "호연",
    "신오",
    "하나",
    "칼로스",
    "알로라",
    "가라르/히스이",
    "팔데아",
  ];
  const gene = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [showButtons, setShowButtons] = useState(false);
  const toggleShowButtons = () => setShowButtons(!showButtons);

  return (
    <GenerationButtonsStyle>
      <p className="title" onClick={toggleShowButtons}>
        지역 필터
      </p>
      <div className={`gene ${showButtons ? "show" : ""}`}>
        {gene.map((gen) => (
          <button
            key={gen}
            onClick={() => {
              onGenerationClick(gen);
              resetPagination();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {location[gen - 1]}
          </button>
        ))}
      </div>
    </GenerationButtonsStyle>
  );
};

const GenerationButtonsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .gene {
    display: flex;
    justify-content: center;
    gap: 10px;
    button {
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #000;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      font-size: 1.25rem;
      font-weight: 700;
      &:hover {
        background-color: #eee;
      }
      &:focus {
        outline: none;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .title {
      background-color: #eee;
      padding: 10px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 5px;
      width: 100px;
      text-align: center;
      cursor: pointer;
      border: 1px solid #000;
    }
    .gene {
      display: none;
    }
    .show {
      display: grid;
      flex-direction: column;
      display: grid;
      grid-template-columns: repeat(3, minmax(60px, 1fr));
      gap: 5px;
      button {
        width: 100px;
      }
    }
  }
`;

export default GenerationButtons;
