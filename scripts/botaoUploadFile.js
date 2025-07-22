import { capturaArquivosDiferente } from "./arrastaESolta.js";
import { buscaArquivos } from "./buscarArquivos.js";
export const btnUploadFile = document.getElementById("file");


btnUploadFile.addEventListener("change",async e =>{
    
    const arquivos = e.target.files;
    console.log(arquivos);

    const dados = await buscaArquivos();
     Array.from(arquivos).forEach( element => {
        
        capturaArquivosDiferente(element, dados);
    
    });

})