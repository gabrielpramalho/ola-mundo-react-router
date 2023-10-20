import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Menu from "./componentes/Menu";
import SobreMim from "./paginas/SobreMim";
import Rodape from "componentes/Rodape/imdex";


function AppRoutes() {
  return ( 
    <BrowserRouter>

      <Menu />


      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div><h2>Página não encontrada</h2></div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
