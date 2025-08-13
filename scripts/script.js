import { buscarArquivosExistentes } from "./arrastaESolta.js";

let arquivosRecebidos
async function arquivosExistentes () {
    arquivosRecebidos = await buscarArquivosExistentes();
    console.log(arquivosRecebidos.record.arquivos);

}

arquivosExistentes();

























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