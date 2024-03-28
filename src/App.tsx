import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import Main from "./pages/Main";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Main />
      <Footer />
    </>
  );
};

export default App;
