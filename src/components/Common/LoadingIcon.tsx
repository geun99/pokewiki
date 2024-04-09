import { SpinningCircles } from "react-loading-icons";
import styled from "styled-components";

const LoadingIcon = () => {
  return (
    <Spinner>
      <SpinningCircles />
    </Spinner>
  );
};

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default LoadingIcon;
