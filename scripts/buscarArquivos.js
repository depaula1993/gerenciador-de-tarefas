export async function buscaArquivos() {

    //const dados = await fetch("http://localhost:3000/arquivos");
    const dados = await fetch("db.json");
    console.log(dados);
    const  dadosTraduzidos = await dados.json();

     return dadosTraduzidos 

}
