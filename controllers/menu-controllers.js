export class MenuController extends HTMLElement {
    constructor(){
        super();
    }
    initMenu = () =>{
        document.querySelectorAll('.link-menu').forEach((val,id)=>{
            val.addEventListener("click", (e) =>) {
                console.log("ooki"), (e)
            }
        }
        )
    }

}
customElements.define("menu-controller",MenuController)