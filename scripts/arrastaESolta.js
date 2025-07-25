import { abrindoTxt } from "./leituraTexto.js";
import { abrindoImg } from "./leituraImg.js";
import { abrindoPdf } from "./leituraPdf.js";
import { abrindoVideo } from "./leituraVideo.js";
import { buscaArquivos } from "./buscarArquivos.js";
import { btnUploadFile } from "./botaoUploadFile.js";

window.addEventListener('dragover', e => e.preventDefault());
window.addEventListener('drop', e => e.preventDefault());
export const dropArea = document.querySelector("#drop-area");
const listaArquvivos = document.getElementById("file-list");


dropArea.addEventListener("drop", async (event) => {
    event.preventDefault();

    const arquivo = event.dataTransfer.files[0];
    const dados = await buscaArquivos();
    capturaArquivosDiferente(arquivo, dados);

})

//FILEREADER é assíncrono, parece com uma promessa, mas ao invés de resolve e reject, tem onload e onerror, que na realidade 
// são eventos da tentativa de leitura dos arquivos lidos. FILEREADER  possui métodos próprios pra leitura de arquivos.
export async function capturaArquivosDiferente (arquivo, dados){

    let tipoArquivo = arquivo.type;

    const dado = dados.find(dado => dado.mime === tipoArquivo);
    console.log(dado);

    const reader = new FileReader();
    //console.log(arquivo.type);

    reader.onload =  (e) => {
        e.preventDefault();
        //console.log(e);

        const informaçãoDeExibição = e.originalTarget.result;

        //console.log(informaçãoDeExibição);

        const itemLista = document.createElement("li");
        const icone = document.createElement("div");
        icone.classList.add("icones__completos");
        
        icone.innerHTML = `<img src="../imgs/${dado.img}.png" 
        class="icone__imagem"><span class="icone__leg">${arquivo.name}</span>`;
     
        funcoes[dado.func](icone,informaçãoDeExibição);
        
        itemLista.appendChild(icone);
        listaArquvivos.appendChild(itemLista);
    
    }
    
     reader[dado.tipoLeitura](arquivo);

     await fetch("http://localhost:3000/arquivosAdicionados",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                
            }
        )

        
        
});
    
}


const funcoes = {
    abrindoTxt,
    abrindoImg,
    abrindoPdf,
    abrindoVideo
}

