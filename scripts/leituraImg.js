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
    
}    