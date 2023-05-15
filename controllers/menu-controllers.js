export class MenuController extends HTMLElement {
    constructor(){
        super();
    }
    initMenu = () =>{
        document.querySelectorAll('.link-menu').forEach((val,id)=>{
            val.addEventListener("click", (e) =>) {
                console.log("ooki");
                const valor = e.target.dataset.info;
                switch(valor){
                    case "modal":
                        console.log(dato)
                    case "wc"
                }
            }
        }
        )
    }

}
customElements.define("menu-controller",MenuController)