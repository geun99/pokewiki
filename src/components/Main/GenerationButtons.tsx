import styled from "styled-components";

interface Props {
  onGenerationClick: (generation: number) => void;
}

const GenerationButtons = ({ onGenerationClick }: Props) => {
  const gene = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <GenerationButtonsStyle>
      {gene.map((gen) => (
        <button
          key={gen}
          onClick={() => {
            onGenerationClick(gen);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {gen}
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
