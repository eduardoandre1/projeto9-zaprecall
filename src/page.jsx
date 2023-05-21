import styled from "styled-components";
import Contador from "./contador";
import Questions from "./questions";
import Title from "./title";
import { useState } from "react";
import  certo from'./assets/icone_certo.png'
import errado from  './assets/icone_erro.png'
import quase from './assets/icone_quase.png'
import abrir from './assets/seta_play.png'
import fechar from './assets/seta_virar.png'

export default function Page(props){
    const icones = {
    certo:certo,
    errado: errado,
    quase: quase,
    abrir:abrir,
    fechar:fechar,
    }

    const [escolha,Setescolha] = useState(props.cards.map((r)=>{return ""}))
    const [expandir,SetExpandir] = useState(props.cards.map(()=>{return 0}))
    const [lidos,Setlidos] =useState(0)
    const posição=Array.from({length: props.cards.length}, (_, index) => index + 1)
    const [respondidos,SetRespondidos]= useState(0)
    const SCPagesize = styled.div`
        width: 100%;
        height: 100%;
        background: #FB6B6B;
        border: 1px solid #DBDBDB;
        display:flex;
        flex-direction: column ;
        align-items: center;
        `
    
    return(
        <SCPagesize>
            <Title />
            <Questions 
            cards={props.cards} 
            posição={posição} 
            expandir={expandir} 
            SetExpandir={SetExpandir} 
            SetRespondidos={SetRespondidos}
            escolha={escolha} 
            Setescolha={Setescolha} 
            icones={icones}
            Setlidos={Setlidos}
            lidos ={lidos}
            />
            <Contador 
            respondidos={respondidos} 
            icones={icones} 
            expandir={expandir}
            lidos = {lidos}
            />
        </SCPagesize>
    )
}