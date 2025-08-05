export async function buscaArquivos() {

    const dados = await fetch("https://api.jsonbin.io/v3/b/68841d6cae596e708fbbd5f8",{
        method: "GET",
        headers:{
             "X-Master-Key": "$2a$10$OVQ.Lh9kMP173G1LgjKOVOzFcCf3BdLOQ53RUew/CFwE/3VjQ2OTW"
        }
    });
    const  dadosTraduzidos = await dados.json();
    //console.log(dadosTraduzidos.record.arquivos);
     
    return dadosTraduzidos.record.arquivos 

}
