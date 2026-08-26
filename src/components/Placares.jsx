import "../styles/style.css";

export default function Placar({ pontosA, pontosB, posseTimeA }) {
  return (
    <div className="placar-container">
      <div className="placar-cards">
        <div className={`time-card ${posseTimeA ? 'ativo' : ''}`}>
          <span className="time-nome">Time A</span>
          <div className="time-pontos">{pontosA}</div>
        </div>

        <div className={`time-card ${!posseTimeA ? 'ativo' : ''}`}>
          <span className="time-nome">Time B</span>
          <div className="time-pontos">{pontosB}</div>
        </div>
      </div>

      <p className="ataque-status">
        Ataque Atual: <strong className="ataque-destaque">{posseTimeA ? 'Time A' : 'Time B'}</strong>
      </p>
    </div>
  );
}