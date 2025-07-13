

import { dropArea } from "./arrastaESolta.js";

console.log(dropArea);




let lucas = new Promise((resolve, reject) =>{

    resolve()


})

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
//=======================================================================================================

async function testBD() {

    const dados = await fetch("http://localhost:3000/arquivos");
    const  dadosTraduzidos = await dados.json();

    console.log(dadosTraduzidos);

}

testBD();