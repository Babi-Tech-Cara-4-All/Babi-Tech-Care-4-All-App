import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import TratamentoDoencasNaoTransmissiveis from "./Pages/TratamentoDoencasNaoTransmissiveis/TratamentoDoencasNaoTransmissiveis";
import MelhoriaGeralSaude from "./Pages/MelhoriaGeralSaude/MelhoriaGeralSaude";
import DoencaTransmissiveis from "./Pages/DoençasTransmissiveis/DoencaTransmissiveis";
import MotarlidadeInfatil from "./Pages/MortalidadeInfantil/MotarlidadeInfatil";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route
              path="/Tratamento-Doencas-Nao-Transmissiveis"
              element={<TratamentoDoencasNaoTransmissiveis />}
            />
            <Route
              path="/Melhoria-Geral-Da-Saude"
              element={<MelhoriaGeralSaude />}
            />
            <Route
              path="/Doenca-Transmissiveis"
              element={<DoencaTransmissiveis />}
            />
            <Route
              path="/Motarlidade-Infatil"
              element={<MotarlidadeInfatil />}
            />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
