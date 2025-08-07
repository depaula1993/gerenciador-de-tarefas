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
    console.log(arquivo);
    const dados = await buscaArquivos();        
    capturaArquivosDiferente(arquivo, dados);

})

//FILEREADER é assíncrono, parece com uma promessa, mas ao invés de resolve e reject, tem onload e onerror, que na realidade 
// são eventos da tentativa de leitura dos arquivos lidos. FILEREADER  possui métodos próprios pra leitura de arquivos.
export async function capturaArquivosDiferente (arquivo, dados){

    let tipoArquivo = arquivo.type;

    const dado = dados.find(dado => dado.mime === tipoArquivo);

    const reader = new FileReader();
    //console.log(arquivo.type);

    reader.onload = async (e) => {
        e.preventDefault();
        //console.log(e);

        const informacaoDeExibicao = e.target.result;

        console.log(informacaoDeExibicao);

        const itemLista = document.createElement("li");
        const icone = document.createElement("div");
        icone.classList.add("icones__completos");
        
        icone.innerHTML = `<img src="../imgs/${dado.img}.png" 
        class="icone__imagem"><span class="icone__leg">${arquivo.name}</span>`;
     
        funcoes[dado.func](icone,informacaoDeExibicao);
        
        itemLista.appendChild(icone);
        listaArquvivos.appendChild(itemLista);
        
        try{
            await fetch("https://api.jsonbin.io/v3/bins/6894ed94f7e7a370d1f695c0/arquivos",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "X-Master-Key": "$2a$10$OVQ.Lh9kMP173G1LgjKOVOzFcCf3BdLOQ53RUew/CFwE/3VjQ2OTW"
                },
                body: JSON.stringify(
                    {
                        tipo: arquivo.type,
                        nome: arquivo.name,
                        resultado: informacaoDeExibicao
                    }
                )

            });
        }
        catch{
            console.log("Nao deu certo");
        }
    }
    
    reader[dado.tipoLeitura](arquivo);
}



const funcoes = {
    abrindoTxt,
    abrindoImg,
    abrindoPdf,
    abrindoVideo
}

