import Post from "./Post";

export default function Posts(){

    const post = [{nome:"meowed",icon:"assets/meowed.svg", curtidas:11776, img:"assets/gato-telefone.svg",save:false,like:false},
                {nome:"barked",icon:"assets/barked.svg", curtidas:12665, img:"assets/dog.svg",save:false,like:false},
                {nome:"meowed",icon:"assets/meowed.svg", curtidas:13899, img:"assets/gato-telefone.svg",save:false,like:false}];
    return(
        <>
            {post.map(postagem => <Post icon={postagem.icon} nome={postagem.nome} img={postagem.img} curtidas={postagem.curtidas}/>)}
        </>
    );
}