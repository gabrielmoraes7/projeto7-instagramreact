import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Posts from "./Posts";

export default function Body(){
    return(
        <div class="corpo">
            <div class="conteudo">
                <Stories/>
                <Posts />
            </div>
            <Sidebar/>
        </div>
    );
}