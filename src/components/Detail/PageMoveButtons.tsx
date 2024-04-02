import styled from "styled-components";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const PageMoveButtons = ({
  id,
  navigate,
}: {
  id: string;
  navigate: (id: string) => void;
}) => {
  const prevId = parseInt(id) - 1;
  const nextId = parseInt(id) + 1;

  return (
    <PageMoveButtonsStyle>
      <FaArrowCircleLeft
        className={`btn left-btn ${prevId <= 0 ? "disabled" : ""}`}
        onClick={() => {
          if (prevId > 0) navigate(`/detail/${prevId}`);
        }}
      />
      <FaArrowCircleRight
        className={`btn right-btn ${nextId >= 1025 ? "disabled" : ""}`}
        onClick={() => {
          if (nextId <= 1025) navigate(`/detail/${nextId}`);
        }}
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
  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default PageMoveButtons;
