import { dropArea } from "./arrastaESolta.js";
import {menuExclusao} from "./script.js";

export function abrindoImg(icone, img){
    icone.addEventListener("dblclick", e =>{

        const imagem = document.createElement('img');
        imagem.src = img;
        imagem.classList.add("principal__arquivos__imagem")

        dropArea.innerHTML = "";
        console.log(imagem)
        dropArea.appendChild(imagem);
        //console.log(dropArea);
        //console.log("É uma imagem png")         
    })

    icone.addEventListener("contextmenu", e =>{
        
        e.preventDefault();

        const menuExclusaoExistente = document.querySelector('.menuExclusao');
        
        if(menuExclusaoExistente){
            menuExclusaoExistente.style.display = 'none';
        }

        menuExclusao.style.left = e.pageX + "px";
        menuExclusao.style.top = e.pageY + "px";

        dropArea.appendChild(menuExclusao);

        dropArea.addEventListener("click", e =>{
            
            menuExclusao.style.display = "none";
            //MODO CORRETO ?? OU ESTOU GERANDO VÁRIOS MENUS 
            //MELHOR MODO DE FAZER O MENU SUMIR, É O JEITO CORRETO ??
        })

    })
}    