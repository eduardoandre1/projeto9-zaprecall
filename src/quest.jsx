import styled from "styled-components"

export default function Quest(props){
    function expansão(array,posição,expandir){
        let abertos = array;
        abertos[posição-1] = true;
        return abertos
    }    
    // dados css
    const SCQuesthtmlmacro =styled.div`
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    margin-bottom: 25px;
    width: 300px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props.expandir[props.posição-1]==false?'none':'flex'};
    flex-direction: column;
    h1{
        width: 247.83px;
        height: 44px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        text-align: center;
    }
    `
    const SCQuesthtmlmicro = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props.expandir[props.posição-1]==false?'flex':'none'};
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
        color: #333333;
    }
    img{
        margin-right: 15px;
        width: 20px;
        height: 23px;
    }`
    
    const questbuttom = styled.button`
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    `
    const redbuton = styled(questbuttom)`background: #FF3030;`
    const yellowbutton = styled(questbuttom)`background: #FF922E;`
    const greenbutton = styled(questbuttom)`background:#2FBE34;`
    if(props.expandir[props.posição-1]==true){
        return(
        <SCQuesthtmlmacro >
        <h1>{props.pergunta}</h1>
        <div>
            <redbuton>Não lembrei</redbuton>
            <yellowbutton>Quase não lembrei</yellowbutton>
            <greenbutton>Zap!</greenbutton>
        </div>
        </SCQuesthtmlmacro>
        )
    }else{
    return(
    <>
    <SCQuesthtmlmicro >
        <h1>pergunta {props.posição}</h1>
        <img onClick={()=>{props.SetExpandir(expansão(props.expandir,props.posição));props.SetRespondidos(props.posição)}} src={props.icones.abrir} alt="read the question" />
    </SCQuesthtmlmicro>
    </>
    )
    }
}