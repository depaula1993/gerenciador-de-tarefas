export async function buscaArquivos() {

    const dados = await fetch("http://localhost:3000/arquivos");
    const  dadosTraduzidos = await dados.json();

     return dadosTraduzidos 

}
