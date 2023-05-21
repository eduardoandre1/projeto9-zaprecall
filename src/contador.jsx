import styled from "styled-components"

export default function Contador(props){
    const Contadorhtml = styled.div`
    position: fixed;
    left:0px;
    bottom: 0px;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    align-items:center;
    h1{
        justify-content: center;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        text-align: center;
    };
    `
    const Atualizador = styled.div`
    display:none;`
    return(
        <Contadorhtml data-test="footer">
            <Atualizador>{props.lidos}{props.respondidos}</Atualizador>
            <h1>{props.respondidos}/{props.expandir.length} CONCLUÍDOS</h1>
        </Contadorhtml>
    )
}