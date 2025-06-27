import { dropArea } from "./arrastaESolta.js";

export function abrindoPdf (icone, pdf){
    icone.addEventListener('dblclick', e => {
        const elementoPdf = document.createElement('embed');
        elementoPdf.src = pdf;
        elementoPdf.type = "application/pdf";
        elementoPdf.width = "100%";
        elementoPdf.height = "600px";

        dropArea.innerHTML = "";
        dropArea.appendChild(elementoPdf);

    })
}