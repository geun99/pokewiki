import { Route, Routes } from "react-router";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import Main from "./pages/Main";
import { GlobalStyle } from "./styles/global";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
