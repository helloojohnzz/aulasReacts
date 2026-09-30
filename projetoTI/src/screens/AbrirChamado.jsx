import { useState } from "react";

export default function AbrirChamado({ irParaChamadosAbertos }) {
    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');
    const [tipoProblema, setTipoProblema] = useState('');
    const [descricao, setDescricao] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [enviando, setEnviando] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setEnviando(true);

        const novoChamado = { nome, setor, tipoProblema, descricao, prioridade };

        fetch('http://localhost:3000/chamados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoChamado)
        })
            .then((res) => {
                return res.json();
            })
            .then((chamadoCriado) => {
                console.log('Chamado salvo no servidor com ID: ', chamadoCriado.id);
                setNome('');
                setSetor('');
                setTipoProblema('');
                setDescricao('');
                setPrioridade('');

                if (irParaChamadosAbertos) {
                    irParaChamadosAbertos();
                }
            })
            .catch((erro) => {
                console.error('Erro ao enviar o chamado: ', erro);
                alert('Erro ao enviar chamado. Tente novamente')
            })
            .finally(() => {
                setEnviando(false);
            });
    };

    return (
        <div className="abrir-chamado-container">
            <h2>Abrir novo chamado</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Nome do solicitante:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        minLength={3}
                        required
                    />
                </label>

                <label htmlFor="">
                    Setor:
                    <select
                        value={setor}
                        onChange={(e) => setSetor(e.target.value)}
                        required
                    >
                        <option value="" disabled>Selecione um setor...</option>
                        <option value="TI">TI</option>
                        <option value="RH">RH</option>
                        <option value="Financeiro">Financeiro</option>
                        <option value="Operacoes">Operações</option>
                        <option value="Comercial">Comercial</option>
                    </select>
                </label>

                <label>
                    Tipo de Problema:
                    <select
                        value={tipoProblema}
                        onChange={(e) => setTipoProblema(e.target.value)}
                        required
                        style={{ display: 'block', width: '100%' }}
                    >
                        <option value="" disabled>Selecione o tipo de problema...</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Software">Software</option>
                        <option value="Rede">Rede</option>
                        <option value="Acesso">Acesso</option>
                    </select>
                </label>

                <label >
                    Descrição do Problema:
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        minLength={10}
                        required
                        rows={4}
                    />
                </label>

                <label>
                    Prioridade:
                    <select
                        value={prioridade}
                        onChange={(e) => setPrioridade(e.target.value)}
                        required
                        style={{ display: 'block', width: '100%' }}
                    >
                        <option value="" disabled>Selecione a prioridade...</option>
                        <option value="Baixa">Baixa</option>
                        <option value="Média">Média</option>
                        <option value="Alta">Alta</option>
                    </select>
                </label>

                <button
                    type="submit"
                    disabled={enviando}
                    style={{ padding: '10px', marginTop: '10px', cursor: enviando ? 'not-allowed' : 'pointer' }}
                >
                    {enviando ? 'Enviando...' : 'Salvar Chamado'}
                </button>
            </form>
        </div>
    )
}