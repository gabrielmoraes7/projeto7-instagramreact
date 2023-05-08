import Suggestion from "./Suggestion";

export default function Suggestions(){

    

    return(
        <div class="recomendados">
            <div class="cabecalho">
                <p>Sugestões para você</p> 
                <button>Ver tudo</button>
            </div>
            
            <Suggestion/>
          </div>
    );
}