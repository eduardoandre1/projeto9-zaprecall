import styled from "styled-components"
import './assets/logo.png'
export default function Title(){
    const Titulo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    height:153px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 52px;
        height: 60px;
    }
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        transform: rotate(0.58deg);
    }
    `
    return(
    <Titulo>
        <img src="./src/assets/logo.png" alt="logo" />
        <h1>ZapRecall</h1>
    </Titulo>)
}