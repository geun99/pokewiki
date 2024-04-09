import styled from "styled-components";

interface Props {
  onGenerationClick: (generation: number) => void;
  resetPagination: () => void;
}

const GenerationButtons = ({ onGenerationClick, resetPagination }: Props) => {
  const location = [
    "관동 지방",
    "성도 지방",
    "호연 지방",
    "신오 지방",
    "하나 지방",
    "칼로스 지방",
    "알로라 지방",
    "가라르/히스이 지방",
    "팔데아 지방",
  ];
  const gene = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <GenerationButtonsStyle>
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
    </GenerationButtonsStyle>
  );
};

const GenerationButtonsStyle = styled.div`
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
  }
`;

export default GenerationButtons;
