import styled from "styled-components";

interface Props {
  image: string;
  alt: string;
}

const PokemonImage = ({ image, alt }: Props) => {
  return (
    <PokemonImageStyle>
      {image && <img src={image} alt={alt} loading="lazy" />}
    </PokemonImageStyle>
  );
};

const PokemonImageStyle = styled.div`
  img {
    width: auto;
    height: 250px;
  }
`;

export default PokemonImage;
