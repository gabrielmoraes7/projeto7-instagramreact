export default function Navbar(){
    return(
            <div class="box desktop">
                <div class="menu-topo desktop">
                    <div class="menu-esquerda">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div class="barra"></div>
                        <img class="logo" src="assets/logo.png" alt="" />
                    </div> 

                    <div class="menu-centro">
                        <input class="pesquisa" type="text" placeholder="Pesquisar" />
                    </div>

                    <div class="menu-direita">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>
    );
}
