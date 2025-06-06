import { clicandoEAbrindoConteudoiconeTxt } from "./leituraTexto.js";
window.addEventListener('dragover', e => e.preventDefault());
window.addEventListener('drop', e => e.preventDefault());
export const dropArea = document.querySelector("#drop-area");
const listaArquvivos = document.getElementById("file-list");

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();

    //console.log(event);
    const arquivo = event.dataTransfer.files[0];
    capturaArquivosDiferente(arquivo);

})

// Se possível para otimizar criar somente um objeto, e uma única função que puxa tudo isso, ou que essa
//única função seja a que já está dentro do onload. 
//ADICIONAR SERVIDOR REMOTO: GITHUB !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//FILEREADER é assíncrono, parece com uma promessa, mas ao invés de resolve e reject, tem onload e onerror, que na realidade 
// são eventos da tentativa de leitura dos arquivos lidos. FILEREADER  possui métodos próprios pra leitura de arquivos.
function capturaArquivosDiferente (arquivo){

    let tipoArquivo = arquivo.type
    const reader = new FileReader();
    console.log(arquivo);

    reader.onload = e => {
        e.preventDefault();
        console.log(e);

        const informaçãoDeExibição = e.originalTarget.result;

        const itemLista = document.createElement("li");
        const icone = document.createElement("div");
        icone.classList.add("icones__completos");
        
        icone.innerHTML = `<img src="../imgs/${leituraArquivo.leitura[tipoArquivo].img}.png" class="icone__imagem"><span class="icone__leg">${arquivo.name}</span>`;
        
        clicandoEAbrindoConteudoiconeTxt(icone,informaçãoDeExibição);
        
        itemLista.appendChild(icone);
        listaArquvivos.appendChild(itemLista);
    
    }
    
    //reader.readAsText(arquivo);
    reader[leituraArquivo.leitura[tipoArquivo].tipoLeitura](arquivo);
    
}

//adicionar no json server
const leituraArquivo = {
    leitura:{
        "text/plain": {
            tipoLeitura:"readAsText",
            img:"txt"
        },
        "image/jpeg": {
            tipoLeitura:"readAsDataURL",
            img:"img"
        },
        "image/png": {
            tipoLeitura:"readAsDataURL",
            img:"img"
        },
        "image/gif": {
            tipoLeitura:"readAsDataURL",
            img:"img"
        },
        "image/webp": {
            tipoLeitura:"readAsDataURL",
            img:"img"
        },
        "video/mp4": {
            tipoLeitura:"readAsDataURL",
            img:"video"
        },
        "video/webm": {
            tipoLeitura:"readAsDataURL",
            img:"video"
        },
        "video/ogg": {
            tipoLeitura:"readAsDataURL",
            img:"video"
        },
        "application/pdf": {
            tipoLeitura:"readAsDataURL",
            img:"pdf"
        },
        "application/json": {
            tipoLeitura:"readAsText",
            img:"txt"
        }
    }
}
