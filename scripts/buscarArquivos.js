export async function buscaArquivos(tipoFunção) {

    if(tipoFunção === 0){
        const dados = await fetch("https://api.jsonbin.io/v3/b/68841d6cae596e708fbbd5f8",{
            method: "GET",
            headers:{
                "X-Master-Key": "$2a$10$OVQ.Lh9kMP173G1LgjKOVOzFcCf3BdLOQ53RUew/CFwE/3VjQ2OTW",
                "X-Access-Key": "$2a$10$9760SjmsNo.iwbtSEuKL/u24wjb671KCepMAd77DYl5POPE2bl0IW"
            }
          
        });
        const  dadosTraduzidos = await dados.json();
        //console.log(dadosTraduzidos);
     
        return dadosTraduzidos
    }
    const dados = await fetch("https://api.jsonbin.io/v3/b/689930b143b1c97be91b5f4e",{
         method: "GET",
            headers:{
                "X-Master-Key": "$2a$10$OVQ.Lh9kMP173G1LgjKOVOzFcCf3BdLOQ53RUew/CFwE/3VjQ2OTW",
                "X-Access-Key": "$2a$10$9760SjmsNo.iwbtSEuKL/u24wjb671KCepMAd77DYl5POPE2bl0IW"
            }
          });
        const  dadosTraduzidos = await dados.json();
        //console.log(dadosTraduzidos);
     
        return dadosTraduzidos

}
