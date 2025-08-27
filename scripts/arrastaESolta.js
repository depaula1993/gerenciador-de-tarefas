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

    const funçãoBuscarTipoArquivos = 0; //variável que identifica qual array buscar no arquivo db.json

    const arquivo = event.dataTransfer.files[0];
    //console.log(arquivo);
    const dados = await buscaArquivos(funçãoBuscarTipoArquivos);        
    capturaArquivosDiferente(arquivo, dados);

})

//FILEREADER é assíncrono, parece com uma promessa, mas ao invés de resolve e reject, tem onload e onerror, que na realidade 
// são eventos da tentativa de leitura dos arquivos lidos. FILEREADER  possui métodos próprios pra leitura de arquivos.
export async function capturaArquivosDiferente (arquivo, dados){

    let tipoArquivo = arquivo.type;

    const dadosTraduzidos = dados.record.arquivos;
    console.log(dados);
    const dado = dadosTraduzidos.find(dado => dado.mime === tipoArquivo);

    const reader = new FileReader();
    //console.log(arquivo.type);

    reader.onload = async (e) => {
        e.preventDefault();
        //console.log(e);
        const informacaoDeExibicao = e.target.result;

        //console.log(informacaoDeExibicao);

        const itemLista = document.createElement("li");
        const icone = document.createElement("div");
        icone.classList.add("icones__completos");
        
        icone.innerHTML = `<img src="../imgs/${dado.img}.png" 
        class="icone__imagem"><span class="icone__leg">${arquivo.name}</span>`;
     
        funcoes[dado.func](icone,informacaoDeExibicao);
        
        await criaArquivos(arquivo, informacaoDeExibicao);
        itemLista.appendChild(icone);
        listaArquvivos.appendChild(itemLista);
    }
    
    reader[dado.tipoLeitura](arquivo);
}



const funcoes = {
    abrindoTxt,
    abrindoImg,
    abrindoPdf,
    abrindoVideo
}


async function criaArquivos(arquivo, informacaoDeExibicao){
    
    try{
           const arquivoatual = {
                        tipo: arquivo.type,
                        nome: arquivo.name,
                        resultado: informacaoDeExibicao
                    }
                    
            const funçãoBuscarArquivosExistentes = 1; //variável que identifica qual array buscar no arquivo db.json

            const dadosSalvos = await buscaArquivos(funçãoBuscarArquivosExistentes); 
                    
                //dadosSalvos.push(arquivoatual);
                console.log(dadosSalvos);

                //atualizararquivosExistentes(arquivoatual);

            /*if(dadosSalvos.length === 0){
            }else{
                arquivosExistentes.push(arquivoatual);
                atualizararquivosExistentes(arquivosExistentes);
            }*/
        }
        catch(erro){
            console.log("Nao deu certo", erro);
        }

    }


/*
export async function buscarArquivosExistentes(){
    const resposta = await fetch("https://api.jsonbin.io/v3/b/689930b143b1c97be91b5f4e",{
        method: "GET",
        headers:{
             "X-Master-Key": "$2a$10$OVQ.Lh9kMP173G1LgjKOVOzFcCf3BdLOQ53RUew/CFwE/3VjQ2OTW"
        }
    });
    const arquivos = await resposta.json();

    return arquivos;
}
*/    

async function atualizararquivosExistentes(arquivos) {
    
       await fetch("https://super-telegram-6qj4qw969rxhr6pp-3000.app.github.dev/arquivosAdicionados",{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(arquivos)
            });
    
    
}