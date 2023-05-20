import Quest from "./quest";
export default function Questions(props){
    let perguntas = props.posição.map(
        function gerarpergunta(numero){
            
            return <Quest 
                    //variaveis exclusivas na construção de cada pergunta
                    key={numero} 
                    pergunta={props.cards[numero-1].question} 
                    posição={numero}
                    icones={props.icones}
                    //variaveis dinamicas da pagina 
                    expansão ={props.expandir}
                    SetExpandir={props.SetExpandir}
                    SetRespondidos={props.SetRespondidos}
                    Setatualizar={props.Setatualizar}
                    />
        }
    )
    return(
        <>
            {perguntas}
        </>)
}