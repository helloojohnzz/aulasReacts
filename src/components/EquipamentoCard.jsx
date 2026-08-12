import '../styles/visual.css';

const EquipamentoCard = ({ dados }) => {
    const corStatus = {
        "Funcionando": "green",
        "Desligado": "grey",
        "Em Manutenção": "lightgrey"
    };

    return(
        <div className='card'>
            <h3>{dados.nome}</h3>
            <img 
            src={dados.imagemEquip} 
            alt=""
            className='imagem-equipamento' />
            <p>Função: <strong>{dados.funcao}</strong></p>
            <p>
                <strong>Status: </strong>
                <span style={{ color: corStatus[dados.status]}}>
                    {dados.status}
                </span>
            </p>
        </div>
    )
}

export default EquipamentoCard