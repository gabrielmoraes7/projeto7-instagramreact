import Story from "./Story";

export default function Stories(){
    return(
        <div class="stories">

          <button class="b-scroll">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </button>

          <Story/>
        </div>
    );
}