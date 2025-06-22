import { dropArea } from "./arrastaESolta.js";

export function abrindoTxt(icone, txt){
    icone.addEventListener("dblclick", () =>{
        const texto = document.createElement("pre");
        texto.innerHTML = `<code>${txt}</code>`;
        texto.classList.add("principal__arquivos__texto");

        dropArea.innerHTML = "";
        dropArea.appendChild(texto);

        console.log(txt);
    })
}