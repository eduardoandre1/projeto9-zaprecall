import styled from "styled-components"

export default function Quest(props){
    function expandir(array,posição){
        let abertos = array;
        abertos[posição-1] = true;
        return abertos
    }    
    console.log(props.expansão)
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
    display: ${props.expansão[props.posição-1]==false?'none':'flex'};
    h1{
        width: 247.83px;
        height: 44px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    `

    const SCQuesthtmlmicro = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props.expansão[props.posição-1]==false?'flex':'none'};
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
    button{
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
    
    return(
    <>
    <SCQuesthtmlmicro >
        <h1>pergunta{props.posição}</h1>
        <img onClick={()=>props.SetExpandir(expandir(props.expansão,props.posição))} src={props.icones.abrir} alt="read the question" />
    </SCQuesthtmlmicro>
    <SCQuesthtmlmacro >
        <h1>{props.pergunta}</h1>
        <div>
            <redbuton>Não lembrei</redbuton>
            <yellowbutton>Quase não lembrei</yellowbutton>
            <greenbutton>Zap!</greenbutton>
        </div>
    </SCQuesthtmlmacro>
    </>
    )
}