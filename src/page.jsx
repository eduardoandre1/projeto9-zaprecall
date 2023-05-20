import styled from "styled-components";
import Contador from "./contador";
import Questions from "./questions";
import Title from "./title";
import { useState } from "react";
export default function Page(props){
    const icones = {
    certo:'./assets/icone_certo.png',
    errado: './assets/icone_erro.png',
    quase: './assets/icone_quase.png',
    abrir:'./assets/seta_play.png',
    fechar:'./assets/seta_virar.png',
    }

    const [escolha,Setescolha] = useState(props.cards.map((r)=>{return ""}))
    const [expandir,SetExpandir] = useState(props.cards.map(()=>{return false}))
    const [atualizar,Setatualizar] = useState(true)
    const posição=Array.from({length: props.cards.length}, (_, index) => index + 1)
    console.log("pai")
    console.log(posição)
    const [respondidos,SetRespondidos]= useState(0)
    const SCPagesize = styled.div`
        width: 100%;
        height: 100vh;
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
            atualizar={atualizar}
            Setatualizar={Setatualizar}
            />
            <Contador respondidos={respondidos} icones={icones} expandir={expandir}/>
        </SCPagesize>
    )
}