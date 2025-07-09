import { dropArea } from "./arrastaESolta.js";

export function abrindoVideo (icone,video){
    icone.addEventListener("dblclick", () =>{
        console.log("É um vídeo")
        const Ovideo = document.createElement("video");
        Ovideo.src = video;
        Ovideo.width = 500;
        Ovideo.height = 500;
        Ovideo.controls = true;

        dropArea.innerHTML = "";
        dropArea.appendChild(Ovideo);

    })
}