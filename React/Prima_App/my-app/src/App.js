import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prova from "./Components/Prova";
import Mouse from "./Components/Mouse";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/prova" element={<Prova />} />
          <Route path="/mouse" element={<Mouse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
