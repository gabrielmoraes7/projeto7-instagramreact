export default function Suggestion(){

    const rec = [{nome:"adorable_animals",link:"assets/adorable_animals.svg", insta:"https://www.instagram.com/adorableanimals/"},
    {nome:"bad.vibe.memes",link:"assets/bad.vibes.memes.svg", insta:"https://www.instagram.com/badvibesmemes/"},
    {nome:"smallcutecats",link:"assets/smallcutecats.svg", insta:"https://www.instagram.com/smallcutecats/"}]

    return( 
        <>
        {rec.map((reco) => 
            <div class="recomendacoes">
            <div class="perfil">
                <img src={reco.link} alt=""/>
                <div class="info">
                  <a href= {reco.insta}>{reco.nome}</a>
                  <p>Segue você</p>
                </div>
            </div>
            <button>Seguir</button>
          </div>)}
          </>
    );
}