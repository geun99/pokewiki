import styled from "styled-components";

interface Props {
  detail: string;
  height: number;
  weight: number;
}

const PokemonDetail = ({ detail, height, weight }: Props) => {
  return (
    <PokemonDetailStyle>
      <p className="detail">{detail}</p>
      <div className="height-weight">
        <p>키 : {height / 10}m</p>
        <p>몸무게 : {weight / 10}kg</p>
      </div>
    </PokemonDetailStyle>
  );
};

const PokemonDetailStyle = styled.div`
  .detail{
    height: 4rem;
    margin: 5px;  
  }
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .height-weight{
    display: flex;
    justify-content: space-between;
    width: 100%;
    p{
      flex-basis: 50%;
      padding: 5px;
      border-radius: 100px;
      background-color: #bbb;
      text-align: center;
      margin: 5px;
      font-size: 1.2rem;
  }
`;

export default PokemonDetail;
