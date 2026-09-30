import React, { useState, useEffect } from 'react';

function TituloDinamico() {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    if (texto.trim() === '') {
      document.title = 'React App'; 
    } else {
      document.title = texto;
    }
  }, [texto]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' }}>
      <h2>Título Dinâmico</h2>
      
      <label htmlFor="input-titulo" style={{ display: 'block', marginBottom: '8px' }}>
        Digite o novo título da página:
      </label>
      
      <input
        id="input-titulo"
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '16px',
          boxSizing: 'border-box'
        }}
      />

      <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
        <strong>Texto digitado:</strong> {texto || 'Nenhum texto digitado ainda.'}
      </div>
    </div>
  );
}

export default TituloDinamico;