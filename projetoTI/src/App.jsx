import { useState, useEffect } from 'react';
import Navbar from './components/NavBar';
import AbrirChamado from './screens/AbrirChamado';
import ChamadosAbertos from './screens/ChamadosAbertos';
import './App.css'

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState('lista');
  const [chamados, setChamados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/chamados')
      .then((res) => res.json())
      .then((dados) => {
        setChamados(dados);
        setCarregando(false);
      })
      .catch((erro) => {
        console.error(erro);
      })
  }, [])

  const adicionarChamadoNoState = (novoChamado) => {
    setChamados((prev) => [...prev, novoChamado]);
  };

  return (
    <div>
      <Navbar 
          paginaAtiva={paginaAtiva} 
          onMudarPagina={setPaginaAtiva} 
        />

        <main style={{ padding: '20px' }}>
        {/* Regra 3: Renderização condicional usando && */}
        {paginaAtiva === 'lista' && (
          <ChamadosAbertos 
            chamados={chamados} 
            carregando={carregando} 
          />
        )}
        
        {paginaAtiva === 'form' && (
          <AbrirChamado 
            aoCadastrarSucesso={(novoChamado) => {
              adicionarChamadoNoState(novoChamado); // Atualiza a lista sem novo GET
              setPaginaAtiva('lista'); // Volta para a tela de lista
            }} 
          />
        )}
      </main>
    </div>
  )
}

export default App
