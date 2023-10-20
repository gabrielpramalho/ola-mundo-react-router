import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Menu from "./componentes/Menu";
import SobreMim from "./paginas/SobreMim";
import Rodape from "componentes/Rodape/imdex";
import PaginaPadrao from "componentes/PaginaPadrao";


function AppRoutes() {
  return ( 
    <BrowserRouter>

      <Menu />

      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="*" element={<div><h2>Página não encontrada</h2></div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
