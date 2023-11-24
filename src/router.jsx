import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import MelhoriaGeralSaude from "./Pages/MelhoriaGeralSaude/MelhoriaGeralSaude";
import MortalidadeInfatil from "./Pages/MortalidadeInfantil/MortalidadeInfatil";
import Header from "./Components/Header/Header";
import DoencaTransmissiveis from "./Pages/DoençasTransmissiveis/DoencaTransmissiveis";
import TratamentoDoencasNaoTransmissiveis from "./Pages/TratamentoDoencasNaoTransmissiveis/TratamentoDoencasNaoTransmissiveis";
import CopyTratamentoDoencasNaoTransmissiveis from "./Pages/TratamentoDoencasNaoTransmissiveis/CopyTratamentoDoencasNaoTransmissiveis";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/Tratamento-Doencas-Nao-Transmissiveis"
          element={<CopyTratamentoDoencasNaoTransmissiveis />}
        />
        {/* <Route
          path="/Tratamento-Doencas-Nao-Transmissiveis"
          element={<TratamentoDoencasNaoTransmissiveis />}
        /> */}
        <Route
          path="/Melhoria-Geral-Da-Saude"
          element={<MelhoriaGeralSaude />}
        />
        <Route
          path="/Prevencao-Doenca-Transmissiveis"
          element={<DoencaTransmissiveis />}
        />
        <Route path="/Mortalidade-Infatil" element={<MortalidadeInfatil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
