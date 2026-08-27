import React, { useState, useEffect } from "react";

export default function Timer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    // Inicia o intervalo ao montar o componente
    const intervalo = setInterval(() => {
      setSegundos(prevSegundos => prevSegundos + 1);
    }, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalo);
  }, []); // Array vazio [] garante que o intervalo seja criado apenas UMA vez

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Timer: {segundos}s</h2>

      <button onClick={() => setSegundos(0)}>
        Zerar
      </button>
    </div>
  );
}