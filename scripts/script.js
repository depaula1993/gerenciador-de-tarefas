import { abrindoTxt } from "./leituraTexto.js";
import { abrindoImg } from "./leituraImg.js";
import { abrindoPdf } from "./leituraPdf.js";
import { abrindoVideo } from "./leituraVideo.js";
import { dropArea } from "./arrastaESolta.js"
import { buscaArquivos } from "./buscarArquivos.js";
const listaArquvivos = document.getElementById("file-list");

//ELIMINAR DAS DUAS FUNÇÕES DE BUSCAR ARQUIVOS, TANTO PELO BOTÃO DE UPLOAD, COMO ARRASTA E SOLTA AS BUSCAR DE ARQUIVOS
//DEIXANDO APENAS NA FUNÇÃO CRIA ARQUIVO DIFERENTE QUE AMBAS AS FUNÇÕES TEM EM COMUM.

(async () =>{
    
    const arquivosBD = await buscaArquivos(2);
    //console.log(arquivosBD);

    const dadosMime = arquivosBD.resposta1.record.arquivos // ESSES DADOS PODEM SER ARMAZENADOS JUNTO COM O SISTEMA PARA DEIXALO MAIS RÁPIDO
    
    const arrayDeArquivos  = arquivosBD.resposta2.record.arquivosExistentes;
    

    arrayDeArquivos.forEach(elemento => {
        const tipoArquivo = elemento.tipo;
        const dado = dadosMime.find(dado => dado.mime === tipoArquivo);

        criaArquivo(elemento, dado, elemento.resultado);
        
    });

})()

  
export function criaArquivo(arquivo,dado, informacaoDeExibicao){

    const itemLista = document.createElement("li");
        const icone = document.createElement("div");
        icone.classList.add("icones__completos");
        
        icone.innerHTML = `<img src="../imgs/${dado.img}.png" 
        class="icone__imagem"><span class="icone__leg">${arquivo.name || arquivo.nome}</span>`;
     
        funcoes[dado.func](icone,informacaoDeExibicao);
        surgirMenuExclusao(icone);
        
        itemLista.appendChild(icone);
        listaArquvivos.appendChild(itemLista);


}

const funcoes = {
    abrindoTxt,
    abrindoImg,
    abrindoPdf,
    abrindoVideo
}

//Menu de exclusão:

    export const menuExclusao = document.createElement('div');
            const paragrafoMenuExc = document.createElement('p');
            paragrafoMenuExc.innerText = 'Excluir';
            paragrafoMenuExc.style.textAlign = 'center';
            menuExclusao.appendChild(paragrafoMenuExc);
            menuExclusao.classList.add("menuExclusao");

    //Evento para remoção menu exclusão: 
    document.addEventListener("click", e =>{

        e.preventDefault();

        if(!menuExclusao.contains(e.target)){
            menuExclusao.style.display = "none";
        }

    })

    //Função de surgimento do menu de exclusão:

    function surgirMenuExclusao(icone){

        icone.addEventListener("contextmenu", e =>{
        
            e.preventDefault();

            const menuExclusaoExistente = document.querySelector('.menuExclusao');
            
            if(menuExclusaoExistente){
                menuExclusaoExistente.style.display = 'none';
            }

            menuExclusao.style.display = 'block'
            menuExclusao.style.left = e.pageX + "px";
            menuExclusao.style.top = e.pageY + "px";

            dropArea.appendChild(menuExclusao);

        })
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