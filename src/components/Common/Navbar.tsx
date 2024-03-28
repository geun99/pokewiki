import styled from "styled-components";
import logo from "../../assets/pokewiki.png";

const Navbar = () => {
  return (
    <NavbarStyle>
      <img src={logo} alt="Pokeball" />
      <h1>Poke Wiki</h1>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.div`
  display: flex;
  img {
    width: 50px;
  }
`;

export default Navbar;
