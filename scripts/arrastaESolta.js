import { buscaArquivos } from "./buscarArquivos.js";
import { btnUploadFile } from "./botaoUploadFile.js";
import { criaArquivo } from "./script.js";


window.addEventListener('dragover', e => e.preventDefault());
window.addEventListener('drop', e => e.preventDefault());
export const dropArea = document.querySelector("#drop-area");


dropArea.addEventListener("drop", async (event) => {
    event.preventDefault();

    const funçãoBuscarTipoArquivos = 0; //variável que identifica qual array buscar no arquivo db.json

    const arquivo = event.dataTransfer.files[0];
    const dados = await buscaArquivos(funçãoBuscarTipoArquivos);        
    capturaArquivosDiferente(arquivo, dados);

})

//FILEREADER é assíncrono, parece com uma promessa, mas ao invés de resolve e reject, tem onload e onerror, que na realidade 
// são eventos da tentativa de leitura dos arquivos lidos. FILEREADER  possui métodos próprios pra leitura de arquivos.
export async function capturaArquivosDiferente (arquivo, dados){

    let tipoArquivo = arquivo.type;

    const dadosMime = dados.record.arquivos;
    const dado = dadosMime.find(dado => dado.mime === tipoArquivo);

    const reader = new FileReader();
    //console.log(arquivo.type);

    reader.onload = async (e) => {
        e.preventDefault();
        //console.log(e);
        const informacaoDeExibicao = e.target.result;

        //----------LOCAL DE CRIAÇÃO DO ID PARA SER ENVIADO AO HTML E SER SALVO-----------//

        criaArquivo(arquivo,dado, informacaoDeExibicao);

        await salvaArquivos(arquivo, informacaoDeExibicao);
        
    }
    
    reader[dado.tipoLeitura](arquivo);
}

async function salvaArquivos(arquivo, informacaoDeExibicao){
    
    try{
           const arquivoatual = {
                        tipo: arquivo.type,
                        nome: arquivo.name,
                        resultado: informacaoDeExibicao
                    }
                    
            const funçãoBuscarArquivosExistentes = 1; //variável que identifica qual array buscar no arquivo db.json
            const dadosSalvos = await buscaArquivos(funçãoBuscarArquivosExistentes); 
                    //VERIFICAR ALTERAR ESSA BUSCA DE DADOS PARA PODER CRIAR O ID NO HTML E NO BANCO DE DADOS
                    //VERIFICAR ADIANTAR A SALVAARQUIVOS ANTES DA CRIA ARQUIVOS NA CAPTURAARQUIVOSDIFERENTE E USAR UM RETURN COM O LENGTH DO ARRAY PARA USAR NA CRIA ARQUIVO  
            const arquivos = dadosSalvos.record;

            console.log(arquivos);
            arquivos.arquivosExistentes.push(arquivoatual);
            await atualizararquivosExistentes(arquivos);
            
        }
        catch(erro){
            console.log("Nao deu certo", erro);
        }

    }   

async function atualizararquivosExistentes(arquivos) {
    
       await fetch("https://api.jsonbin.io/v3/b/689930b143b1c97be91b5f4e",{
                    method: "PUT",
                    headers:{
                        "Content-Type": "application/json",
                        "X-Master-Key": "$2a$10$OVQ.Lh9kMP173G1LgjKOVOzFcCf3BdLOQ53RUew/CFwE/3VjQ2OTW",
                        "X-Access-Key": "$2a$10$JALe6Re3ukSsHfaIMhoD6ueGAbN/2mfUK7vKK3302Gis8tMsX5lWu"
                    },
                    body: JSON.stringify(arquivos)
            });
    
    
}

