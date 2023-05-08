import Suggestions from "./Suggestions";
import User from "./User";

export default function Sidebar(){

   
    return(
        <div class="sidebar">
          <User/>

          <Suggestions/>
          <div class="links">
              <a href="https://about.instagram.com/">Sobre • </a>
              <a href="https://help.instagram.com/">Ajuda • </a>
              <a href="https://about.instagram.com/blog">Imprensa • </a>
              <a href="https://developers.facebook.com/docs/instagram">API • </a>
              <a href="https://www.instagram.com/about/jobs/">Carreiras • </a>
              <a href="https://www.instagram.com/legal/privacy/">Privacidade • </a>
              <a href="https://www.instagram.com/legal/terms/">Termos • </a>
              <a href="https://www.instagram.com/explore/locations/">Localizações • </a>
              <a href="https://www.instagram.com/">Contas mais relevantes • </a>
              <a href="https://www.instagram.com/">Hashtags • </a>
              <p>Idioma</p>
          </div>
          <div class="copyrigth">
              <div class="p">© 2021 INSTAGRAM DO FACEBOOK</div>
          </div> 
        </div>
    );
}