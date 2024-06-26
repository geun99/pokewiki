import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #b0daea;
  }
  .grass{
    background-color: #78C850;
   }
  .fire{
     background-color: #F08030;
   }
  .water{
     background-color: #6890F0;
   }
  .electric{
     background-color: #F8D030;
   }
  .ice{
     background-color: #98D8
  }
  .fighting{
    background-color: #C03028;
   }
  .poison{
     background-color: #A040A0;
   }
  .ground{
     background-color: #E0C068;
   }
  .flying{
     background-color: #A890F0;
   }
  .psychic{
     background-color: #F85888;
  }
  .bug{
    background-color: #A8B820;
   }
  .rock{
     background-color: #B8A038;
   }
  .ghost{
     background-color: #705898;
   }
  .dragon{
     background-color: #7038F8;
   }
  .dark{
    background-color: #705848;
   }
  .steel{
     background-color: #B8B8D0;
   }
  .fairy{
     background-color: #EE99AC;
   }
  .unknown{
     background-color: #606060;
   }
   .normal{
     background-color: #A8A878;
   }
`;
