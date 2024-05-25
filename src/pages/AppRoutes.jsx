import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Pravidla from "./Pravidla/Pravidla";
import Nabor from "./Nábor/Nabor";
import Konvoje from "./Konvoje/Konvoje";
import Kontakty from "./Kontakty/Kontakty";
import Galerie from "./Galerie/Galerie";
export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/Home.jsx" element={<Home />} />
        <Route path="/Pravidla/Pravidla.jsx" element={<Pravidla />} />
        <Route path="/Nábor/Nabor.jsx" element={<Nabor />} />
        <Route path="/Konvoje/Konvoje.jsx" element={<Konvoje />} />
        <Route path="/Kontakty/Kontakty.jsx" element={<Kontakty />} />
        <Route path="/Galerie/Galerie.jsx" element={<Galerie />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}
