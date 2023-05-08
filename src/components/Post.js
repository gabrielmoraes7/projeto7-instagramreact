import { useState } from "react";

export default function Post(props){

    let [save, setSave] = useState('bookmark-outline');
    let [like, setLike] = useState('heart-outline');
    let [colorLike, setColorLike] = useState('black');
    let [curtidas, setCurtidas] = useState(props.curtidas);
    
    function salvarPost(){
        if (save == 'bookmark-outline') {
            setSave('bookmark');
        }
        if (save == 'bookmark') {
            setSave('bookmark-outline');
        }
    }
    
    function switchLike(){
        if (like == 'heart-outline') {
            setLike('heart')
            setColorLike('danger');
            console.log(curtidas);
            setCurtidas((liked) => liked + 1);
            console.log(curtidas);
        }
        if (like == 'heart') {
            setLike('heart-outline')
            setColorLike('');
            console.log(curtidas);
            setCurtidas((liked) => liked - 1);
            console.log(curtidas);
        }
    }

    function postLike(){
            setLike('heart')
            setColorLike('danger');
            setCurtidas((liked) => liked + 1);
            console.log(curtidas);
            console.log("curtiu pelo post");

            
    }

                return(
                    <>
                        <div class="post" data-test="post">

                            <div class="post-topo">
                            <div class="post-usuario">
                                <img src={props.icon} alt="" />
                                <p>{props.nome}</p>
                            </div>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                            <div class="postagem">
                            <img src={props.img} alt="" data-test="post-image" onDoubleClick={postLike}/>
                            </div>

                            <div class="post-inferior">
                            <div class="interacao">
                                <ion-icon name={like} onClick={switchLike} color={colorLike} data-test="like-post"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div class="salvar">
                                <ion-icon name={save} onClick={salvarPost} data-test="save-post"></ion-icon>
                            </div>
                            </div>
                            <div class="curtidas">
                            <img src="assets/9gag.svg" alt=""/>
                            <p data-test="likes-number">Curtido por <strong>respondeai</strong> e <strong>outras {curtidas} pessoas</strong></p>
                            </div>
                            <div class="add-comentario">
                                <input type="text" class="comentario" placeholder="Adicione um comentário" />
                                <button type="button" class="publicar">
                                Publicar  <ion-icon name="happy-outline"></ion-icon>
                                </button>
                            </div>
                        </div> 
               </>

    );
}