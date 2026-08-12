import EquipamentoCard from "./components/EquipamentoCard";
import { dadosDosEquipamentos } from "./data/dados";
import './styles/visual.css';

function App() {
  return (
    <div className="container">
      <h1>Painel de Equipamentos Inteligentes</h1>
      <div className="lista-cards">
        {dadosDosEquipamentos.map(dados => (
          <EquipamentoCard key={dados.id} dados={dados} />
        ))}
      </div>
    </div>
  );
};

export default App