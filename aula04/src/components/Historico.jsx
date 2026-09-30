import "../styles/style.css";

export default function Historico({ historico }) {
  return (
    <div className="historico-container">
      <h3 className="historico-titulo">Histórico de Jogadas</h3>
      {historico.length === 0 ? (
        <p className="historico-vazio">Nenhuma jogada registrada ainda.</p>
      ) : (
        <ul className="historico-lista">
          {historico.map((jogada, index) => (
            <li key={index} className="historico-item">
              <span className="historico-bullet">—</span>{jogada}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}