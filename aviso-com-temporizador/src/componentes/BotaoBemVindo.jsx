import React, { useState, useEffect } from 'react';

function BotaoBemVindo() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!visivel) return;

    const timer = setTimeout(() => {
      setVisivel(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      console.log('Temporizador limpo para evitar vazamento de memória.');
    };
  }, [visivel]);

  const handleMostrarAviso = () => {
    setVisivel(true);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <button 
        onClick={handleMostrarAviso} 
        style={{ padding: '10px 16px', fontSize: '14px', cursor: 'pointer' }}
      >
        Exibir Boas-Vindas
      </button>

      {visivel && (
        <div style={{
          marginTop: '12px',
          padding: '12px',
          backgroundColor: '#d1fae5',
          color: '#065f46',
          borderRadius: '6px',
          fontWeight: 'bold'
        }}>
           Bem-vindo!
        </div>
      )}
    </div>
  );
}

export default BotaoBemVindo;