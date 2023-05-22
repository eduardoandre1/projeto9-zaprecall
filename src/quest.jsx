import styled from "styled-components"
import questbuttom from "./questbuttom";
export default function Quest(props){
    function exp(){
        let novo = props.expandir;
        novo[props.posição-1] ++;
        props.SetExpandir(novo)
        props.Setlidos(props.lidos+1)
    }
    function enviar(escolhido){
        let recomeço = props.expandir
        recomeço[props.posição-1] = 0;
        let escolha = props.escolha
        escolha[props.posição-1] = escolhido
        props.SetExpandir(recomeço)
        props.Setlidos(props.lidos+1)
        props.Setescolha(escolha)
        props.SetRespondidos(props.respondidos+1);
        
    }    
    // dados css
    const SCexpandido =styled.div`
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 10px;
    }
    position:relative;
    margin-bottom: 25px;
    width: 300px;
    min-height: 131px;
    height: 100%;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props.expandir[props.posição-1]==0?'none':'flex'};
    flex-direction: column;
    justify-content: space-between;
    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color:#333333;
        text-align: center;
    }
    img{
        position:absolute;
        right: 0px;
        bottom: 0px;
        margin-right: 15px;
        margin-bottom: 15px;
        width: 25px;
        height: 25px;
    }
    
    `
    const SCcomprimido = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props.expandir[props.posição-1]==0?'flex':'none'};
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    h1{
        margin-left: 15px;
        width: 87px;
        height: 19px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props.escolha[props.posição-1]};
        text-decoration-line: ${props.escolha[props.posição-1]==='black'?'':'line-through'}
    }
    img{
        margin-right: 15px;
        width: 20px;
        height: 23px;
    }
    button{
        all: unset;
        border: none;
        background: none;
        padding: none;
    }`
    
    const Redbuton = styled(questbuttom)`background: #FF3030;`;
    const Yellowbutton = styled(questbuttom)`background: #FF922E;`;
    const Greenbutton = styled(questbuttom)`background:#2FBE34;`;
    
    switch (props.expandir[props.posição-1]){
        case 1 :
            return(
                <SCexpandido data-test="flashcard" id={props.lidos}>
                <h1 data-test="flashcard-text">{props.pergunta}</h1>
                <img 
                    data-test="play-btn" 
                    onClick={()=>exp()}
                    src={props.icones.fechar} 
                    alt="read the resposta" />
                </SCexpandido>
            )
        case 2:
            return(
                <SCexpandido data-test="flashcard">
                <h1 data-test="flashcard-text">{props.resposta}</h1>
                <div>
                    <Redbuton 
                    onClick={()=>{enviar('#FF3030')}}
                    >Não lembrei</Redbuton>
                    <Yellowbutton
                    onClick={()=>{enviar('#FF922E')}}
                    >Quase não lembrei</Yellowbutton>
                    <Greenbutton
                    onClick={()=>{enviar('#2FBE34')}}
                    >Zap!</Greenbutton>
                </div>
                </SCexpandido>
            )
        default:
            return(
                <>
                <SCcomprimido data-test="flashcard" >
                    <h1 data-test="flashcard-text">pergunta {props.posição}</h1>
                    <button
                        disabled={props.escolha[props.posição-1]==='black'?false:true}
                        onClick={()=>exp()} 
                        data-test="play-btn" 
                        ><img 
                        src={props.imagem}
                        alt="read the question" 
                        />
                    </button>
                </SCcomprimido>
                </>
            )
    }
}
