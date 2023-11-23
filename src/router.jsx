import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import TratamentoDoencasNaoTransmissiveis from "./Pages/TratamentoDoencasNaoTransmissiveis/TratamentoDoencasNaoTransmissiveis";
import MelhoriaGeralSaude from "./Pages/MelhoriaGeralSaude/MelhoriaGeralSaude";
import DoencaTransmissiveis from "./Pages/DoençasTransmissiveis/DoencaTransmissiveis";
import MortalidadeInfatil from "./Pages/MortalidadeInfantil/MortalidadeInfatil";
import Header from "./Components/Header/Header";
import DoencaTransmissiveisCopy from "./Pages/DoençasTransmissiveis/DoencaTransmissiveisCopy";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/Tratamento-Doencas-Nao-Transmissiveis"
          element={<TratamentoDoencasNaoTransmissiveis />}
        />
        <Route
          path="/Melhoria-Geral-Da-Saude"
          element={<MelhoriaGeralSaude />}
        />
        {/* <Route
          path="/Prevencao-Doenca-Transmissiveis"
          element={<DoencaTransmissiveis />}
        /> */}
        <Route
          path="/Prevencao-Doenca-Transmissiveis"
          element={<DoencaTransmissiveisCopy />}
        />
        <Route path="/Mortalidade-Infatil" element={<MortalidadeInfatil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
