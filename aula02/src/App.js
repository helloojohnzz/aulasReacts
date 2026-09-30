import React, { useState } from 'react';
import DefeitoCard from './components/DefeitosCard';
import { defeitosIniciais, incrementarDefeito, calcularTotalDefeitos } from './data/data';
import './styles/style.css'

export default function App() {
  const [defeitos, setDefeitos] = useState(defeitosIniciais);

  {/*
    Essa função atualiza os defeitos. Por convenção, utilizar "handle" para lidar com eventos em nomes de funções.
    O parâmetro dessa função é o id. O setDefeitos vem do useState acima, que é a função de atualização de alguma 
    propriedade. A variável prev guarda o estado atual da lista, e incrementarDefeito é uma função criada em data.js
    para incrementar 1 ao card clicado.  
  */}
  const handleRegistrar = (id) => {
    setDefeitos((prev) => incrementarDefeito(prev, id));
  };

  const total = calcularTotalDefeitos(defeitos);

  return (
    <div className="container">
      <h2>Controle de Defeitos - Linha de Produção</h2>

      {defeitos.map((defeito) => (
        <DefeitoCard
          key={defeito.id}
          nome={defeito.nome}
          quantidade={defeito.quantidade}
          onRegistrar={() => handleRegistrar(defeito.id)}
        />
      ))}

      <p className="status-footer">
        {total === 0
          ? 'Nenhum defeito registrado até o momento.'
          : `Total de defeitos registrados: ${total}`}
      </p>
    </div>
  );
}