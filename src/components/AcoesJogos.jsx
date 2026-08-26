import "../styles/style.css";

export default function AcoesJogo({ onPontuar, onPassarBola }) {
  return (
    <div className="acoes-container">
      <button className="btn-red" onClick={() => onPontuar(1)}>+1 Ponto</button>
      <button className="btn-red" onClick={() => onPontuar(2)}>+2 Pontos</button>
      <button className="btn-red" onClick={() => onPontuar(3)}>+3 Pontos</button>
      <button className="btn-red-outline" onClick={onPassarBola}>Trocar Posse</button>
    </div>
  );
}