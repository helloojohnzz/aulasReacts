import React, { useState } from "react";
import Relogio from "./componentes/Relogio";
import Timer from "./componentes/Timer";

export default function App() {
  const [exibirRelogio, setExibirRelogio] = useState(true);
  const [exibirTimer, setExibirTimer] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Relógio</h1>

      {/* Controles do Relógio */}
      <section style={{ marginBottom: '20px' }}>
        <button onClick={() => setExibirRelogio(prev => !prev)}>
          {exibirRelogio ? 'Desmontar Relógio' : 'Montar Relógio'}
        </button>
        {exibirRelogio && <Relogio />}
      </section>

      <hr />

      {/* Controles do Timer */}
      <section style={{ marginTop: '20px' }}>
        <button onClick={() => setExibirTimer(prev => !prev)}>
          {exibirTimer ? 'Desmontar Timer' : 'Montar Timer'}
        </button>
        {exibirTimer && <Timer tempoInicial={0} />}
      </section>
    </div>
  );
}