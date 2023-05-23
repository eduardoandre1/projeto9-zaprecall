import styled from "styled-components"
import Quest from "./quest";

const Questbuttom = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #FFFFFF;
    justify-content: center;
    border: none;
    `

export default function Questions(props){
    const Lista = styled.div`
    margin-bottom:70px`
    const perguntas = props.posição.map((numero)=>{
            let imagem = props.icones.abrir 
            switch(props.escolha[numero-1]){
                case '#FF3030':
                    imagem = props.icones.errado
                    break;
                case '#FF922E':
                    imagem = props.icones.quase
                    break;
                case "#2FBE34":
                    imagem = props.icones.certo
            }
            return (<Quest 
                    //variaveis exclusivas na construção de cada pergunta
                    key={props.expandir[numero-1]} 
                    pergunta={props.cards[numero-1].question} 
                    resposta={props.cards[numero-1].answer}
                    posição={numero}
                    icones={props.icones}
                    imagem={imagem}
                    Questbuttom ={Questbuttom}
                    //variaveis dinamicas da pagina 
                    expandir ={props.expandir}
                    SetExpandir={props.SetExpandir}
                    SetRespondidos={props.SetRespondidos}
                    respondidos ={props.respondidos}
                    Setatualizar={props.Setatualizar}
                    Setlidos={props.Setlidos}
                    lidos={props.lidos}
                    escolha={props.escolha} 
                    Setescolha={props.Setescolha} 
                    />
                )
        })
    return(
        <Lista>
            {perguntas}
        </Lista>
        )
}