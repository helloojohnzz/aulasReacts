import React, { useState, useEffect } from 'react';
function LikeCounter() {
  const [likes, setLikes] = useState(0);

  // Ciclo de Vida: Monitora alterações no estado 'likes'
  useEffect(() => {
    if (likes >= 5) {
      console.log('Fase de Atualização: A postagem entrou em alta!');
    }

    return () => {
      if (likes >= 5) {
        console.log('Limpeza do efeito executada.');
      }
    };
  }, [likes]);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <div className="like-counter-card">
      <h3>Postagem</h3>
      <p>Curtidas: <strong>{likes}</strong></p>
      <button className="like-button" onClick={handleLike}>
        Curtir
      </button>

      {likes >= 5 && (
        <div className="trending-alert">
          Curtidas em alta!
        </div>
      )}
    </div>
  );
}

export default LikeCounter;