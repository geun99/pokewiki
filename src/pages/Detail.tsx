import { useParams } from "react-router";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
  return (
    <DetailStyle>
      <h1>{id}</h1>
    </DetailStyle>
  );
};

const DetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

export default Detail;
