import { capturaArquivosDiferente } from "./arrastaESolta.js";
import { buscaArquivos } from "./buscarArquivos.js";
export const btnUploadFile = document.getElementById("file");

//console.log("ta lendo sim");


btnUploadFile.addEventListener("change",async e =>{
    
    const arquivos = e.target.files;
    
    //console.log(arquivos);

    const dados = await buscaArquivos(0);
     Array.from(arquivos).forEach( async (element) => {
        
        //console.log(element);
       await capturaArquivosDiferente(element, dados);
    
    });

})