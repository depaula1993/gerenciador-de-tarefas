import { capturaArquivosDiferente } from "./arrastaESolta.js";
import { buscaArquivos } from "./buscarArquivos.js";
export const btnUploadFile = document.getElementById("file");

//console.log("ta lendo sim");


btnUploadFile.addEventListener("change",async e =>{
    
    const arquivos = e.target.files;

    const dados = await buscaArquivos();
     Array.from(arquivos).forEach( element => {
        
        capturaArquivosDiferente(element, dados);
    
    });

})