import styled from "styled-components"

export default function Contador(props){
    function exibirresult(l){
        switch(l){
            case "#2FBE34":
                return<img src={props.icones.certo} alt="certo" />
                break;
            case "#FF922E":
                return<img src={props.icones.quase} alt="quase" />
                break;
            case "#FF3030":
                return<img src={props.icones.errado} alt="errado"/>
                break;
            default:
                break;
        }
    }
    const result = props.escolha.map((result)=>exibirresult(result))
    const Contadorhtml = styled.div`
    position: fixed;
    left:0px;
    bottom: 0px;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    align-items:center;
    justify-content: space-evenly;
    h1{
        justify-content: center;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        text-align: center;
    }
    img{
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 23px;
    };
    `
    const Atualizador = styled.div`
    display:none;`
    return(
        <Contadorhtml data-test="footer">
            <Atualizador>{props.lidos}{props.respondidos}</Atualizador>
            <h1>{props.respondidos}/{props.expandir.length} CONCLUÍDOS</h1>
            {result}
        </Contadorhtml>
    )
}