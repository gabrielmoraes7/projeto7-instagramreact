import { useState } from "react";

export default function User(){

    let [nome, setNome] = useState('CatanaComics');
    let [imagem, setImagem] = useState('assets/catanacomics.svg');

    function perguntarNome() {
        let novoNome = prompt('Qual é o seu nome?');
        //document.querySelector('p').innerHTML = `Seja bem vindo(a), ${nome}!`;
        // React tem que atualizar o DOM!

        if (novoNome != '') {
            setNome(novoNome);    
            console.log("deu boa")
        }else{
            console.log("deu ruim, coloca um nome")
        }
        
    }

    function trocarImagem(){
        let novaImagem = prompt('Digite a nova imagem');
        ;
        if (novaImagem != '') {
            setImagem(novaImagem)
            console.log("deu boa a imagem")
        }else{
            console.log("deu ruim, coloca uma imagem aí")
        }
    }

    return(
        <div class="usuario">
              <div class="perfil-usuario">
                  <img src={imagem} onClick={trocarImagem} alt="" data-test="profile-image"/>
                  <div class="info">
                    <a data-test="name">{nome}</a>
                    <p>Catana</p>
                  </div>
                  <ion-icon onClick={perguntarNome} name="pencil" data-test="edit-name"></ion-icon>
              </div>

          </div>
    );
}