import { useState } from 'react';
import Placar from './components/Placares';
import AcoesJogo from './components/AcoesJogos';
import Historico from './components/Historico';
import ControlesGerais from './components/ControlesGerais';
import './styles/style.css';

export default function App() {
  const [pontosA, setPontosA] = useState(0);
  const [pontosB, setPontosB] = useState(0);
  const [posseTimeA, setPosseTimeA] = useState(true);
  const [historico, setHistorico] = useState([]);
  const [vencedor, setVencedor] = useState(null);

  function registrarPontos(pontos) {
    if (vencedor) return;

    const timeAtual = posseTimeA ? 'Time A' : 'Time B';

    if (posseTimeA) {
      const novosPontos = pontosA + pontos;
      setPontosA(novosPontos);
      if (novosPontos >= 21) setVencedor('Time A');
    } else {
      const novosPontos = pontosB + pontos;
      setPontosB(novosPontos);
      if (novosPontos >= 21) setVencedor('Time B');
    }

    setHistorico(prev => [
      ...prev,
      `${timeAtual} marcou +${pontos} ponto(s)`
    ]);

    setPosseTimeA(prev => !prev);
  }

  function passarBola() {
    setPosseTimeA(prev => !prev);
  }

  function reiniciarPartida() {
    setPontosA(0);
    setPontosB(0);
    setPosseTimeA(true);
    setHistorico([]);
    setVencedor(null); 
  }

  function desfazerUltimaJogada() {
    if (historico.length === 0) return;
    setVencedor(null);
    setPosseTimeA(prev => !prev);

    const ultimaJogada = historico[historico.length - 1];

    if (ultimaJogada.includes('Time A')) {
      if (ultimaJogada.includes('+1')) setPontosA(prev => prev - 1);
      if (ultimaJogada.includes('+2')) setPontosA(prev => prev - 2);
      if (ultimaJogada.includes('+3')) setPontosA(prev => prev - 3);
    } else if (ultimaJogada.includes('Time B')) {
      if (ultimaJogada.includes('+1')) setPontosB(prev => prev - 1);
      if (ultimaJogada.includes('+2')) setPontosB(prev => prev - 2);
      if (ultimaJogada.includes('+3')) setPontosB(prev => prev - 3);
    }

    setHistorico(prev => prev.slice(0, -1));
  }

  return (
    <div className="app-container">
      <h1 className="main-title">Placar do Jogo</h1>
      {vencedor && (
        <div className="vencedor-banner">
          🏆 {vencedor} VENCEU A PARTIDA! 🏆
        </div>
      )}
      <Placar
        pontosA={pontosA}
        pontosB={pontosB}
        posseTimeA={posseTimeA}
      />
      <AcoesJogo
        onPontuar={registrarPontos}
        onPassarBola={passarBola}
      />
      <ControlesGerais
        onReiniciar={reiniciarPartida}
        onDesfazer={desfazerUltimaJogada}
      />
      <Historico historico={historico} />
    </div>
  );
}