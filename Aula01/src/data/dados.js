import alexaImg from '../images/alexa.png';
import siriImg from '../images/siri.png';
import roboImg from '../images/robo.png';

export const dadosDosEquipamentos = [
    {   id: 1, 
        imagemEquip: alexaImg, 
        nome: "Alexa", 
        status: "Funcionando", 
        funcao: "Assistente Virtual" 
    },
    { 
        id: 2, 
        imagemEquip: siriImg, 
        nome: "Siri", 
        status: "Desligado", 
        funcao: "Assistente Virtual"
    },
    { 
        id: 3, 
        imagemEquip: roboImg, 
        nome: "Robô Aspirador", 
        status: "Em Manutenção", 
        funcao: "Limpeza" 
    },
];