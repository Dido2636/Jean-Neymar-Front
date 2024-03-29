import { Route, Router, Routes } from "react-router-dom";
import Accueil from "./pages/Acceuil";
import Navbar from "./components/Navbar";
import Apropos from "./pages/Apropos";
import Oeuvres from "./pages/Oeuvres";



function App() {
  return (
    <>
      {/* <Router> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<Apropos />} />
          <Route path="/books" element={<Oeuvres/>} />
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
