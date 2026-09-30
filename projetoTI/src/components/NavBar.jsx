export default function NavBar({ paginaAtiva, onMudarPagina }) {
    return (
        <nav>
            <button 
                onClick={() => onMudarPagina('lista')}
            >
                Chamados Abertos
            </button>

            <button
                onClick={() => onMudarPagina('form')}
                style={{ fontWeight: paginaAtiva === 'lista' ? 'bold' : 'normal' }}
            >
                Abrir Chamado
            </button>
        </nav>
    );
}