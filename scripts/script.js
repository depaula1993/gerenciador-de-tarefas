import { abrindoTxt } from "./leituraTexto.js";
import { abrindoImg } from "./leituraImg.js";
import { abrindoPdf } from "./leituraPdf.js";
import { abrindoVideo } from "./leituraVideo.js";
import { dropArea } from "./arrastaESolta.js"
import { buscaArquivos } from "./buscarArquivos.js";
const listaArquvivos = document.getElementById("file-list");
console.log(dropArea);


//Fazer um terceiro tipo de busca na buscarArquivos, em que utilizando promisseAll vc faz duas requisições em paralelo 
// para poder adicionar os arquivos já existentes

(async () =>{
    
    const arquivosJaSalvos = await buscaArquivos(2);
    const arrayDeArquivos  = arquivosJaSalvos.record.arquivosExistentes;

    arrayDeArquivos.forEach(element => {
        
    });



})()

  
export function criaArquivo(arquivo,dado, informacaoDeExibicao){

    const itemLista = document.createElement("li");
        const icone = document.createElement("div");
        icone.classList.add("icones__completos");
        
        icone.innerHTML = `<img src="../imgs/${dado.img}.png" 
        class="icone__imagem"><span class="icone__leg">${arquivo.name}</span>`;
     
        funcoes[dado.func](icone,informacaoDeExibicao);
        
        itemLista.appendChild(icone);
        listaArquvivos.appendChild(itemLista);


}

const funcoes = {
    abrindoTxt,
    abrindoImg,
    abrindoPdf,
    abrindoVideo
}




















let lucas = new Promise((resolve, reject) =>{

    resolve()


})

//=======================================================================================================


 //SOBRE ASSINCRONIDADE E PROMESSAS
/*
 function dizerOla(){
    
     let promessa = new Promise((resolve, reject) =>{

        resolve(console.log("Olá, aqui é a promessa"));

    }) 

  return promessa; 
}

dizerOla();

*/