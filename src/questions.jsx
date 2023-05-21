import Quest from "./quest";
import styled from "styled-components"
export default function Questions(props){
    const Lista = styled.div`
    margin-bottom:70px`
    const perguntas = props.posição.map(
         (numero)=>{
            return <Quest 
                    //variaveis exclusivas na construção de cada pergunta
                    key={props.expandir[numero-1]} 
                    pergunta={props.cards[numero-1].question} 
                    resposta={props.cards[numero-1].answer}
                    posição={numero}
                    icones={props.icones}
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
        }
    )
    return(
        <Lista >
            {perguntas}
        </Lista>)
}