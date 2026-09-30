import { useState, useEffect } from "react";

export default function ChamadosAbertos() {
    const [chamados, setChamados] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/chamados')
            .then((res) => {
                return res.json();
            })
            .then((dados) => {
                setChamados(dados);
                setCarregando(false);
            })
            .catch((erro) => {
                console.error("Erro ao buscar chamados: ", erro);
                setCarregando(false);
            });
    }, []);

    if (carregando) {
        return <p>Carregando chamados</p>
    }

    return (
        <div className="chamados-abertos-container">
            <h2>Chamados Abertos</h2>

            {chamados.length === 0 ? (
                <p>Não há nenhum chamado aberto no momento.</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {chamados.map((chamado, index) => (
                        <li
                            key={chamado.id || index}
                            style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '5px' }}
                        >
                            <h3>{chamado.tipoProblema} - {chamado.setor}</h3>
                            <p><strong>Solicitante:</strong> {chamado.nome}</p>
                            <p><strong>Prioridade:</strong> {chamado.prioridade}</p>
                            <p><strong>Descrição:</strong> {chamado.descricao}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}