import React, { useState, useEffect } from "react";

export default function Relogio() {
  const [horaAtual, setHoraAtual] = useState('');

  useEffect(() => {
    const atualizarHora = () => {
      const agora = new Date();
      const horaFormatada = agora.toLocaleTimeString('pt-BR');
      setHoraAtual(horaFormatada);
    };

    atualizarHora();
    const intervalo = setInterval(atualizarHora, 1000);

    // Executado ao desmontar o componente
    return () => clearInterval(intervalo);
  }, []);

  return <h2>{horaAtual}</h2>;
}