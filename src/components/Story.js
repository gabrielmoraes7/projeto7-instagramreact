export default function Story(){

    const story = [
        {nome:"9gag",img:"assets/9gag.svg"},
        {nome:"barked",img:"assets/barked.svg"},
        {nome:"filomoderna",img:"assets/filomoderna.svg"},
        {nome:"meowed",img:"assets/meowed.svg"},
        {nome:"nathanwp",img:"assets/nathanwpylestrangeplanet.svg"}
    ];

    return(
        <>
        {story.map((posts) =>
            <div class="profile">
              <div class="profile-image">
                  <img
                  src={posts.img}
                  alt=""
                />
              </div>
              <p>{posts.name}</p>
          </div>
            )};
        </>
    );
}