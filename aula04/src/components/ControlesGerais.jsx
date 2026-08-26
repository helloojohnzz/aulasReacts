export default function ControlesGerais({ onReiniciar, onDesfazer }) {
    return (
        <div style={{ marginTop: '20px' }}>
            <button className="btn-red-outline" onClick={onDesfazer}>
                Desfazer Jogada
            </button>
            <button className="btn-red-outline" onClick={onReiniciar}>
                Reiniciar Partida
            </button>
        </div>
    );
}