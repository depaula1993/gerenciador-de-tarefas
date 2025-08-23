export async function buscaArquivos(tipoFunção) {

    if(tipoFunção === 0){
        const dados = await fetch("http://localhost:3000/arquivos",);
        const  dadosTraduzidos = await dados.json();
        //console.log(dadosTraduzidos);
     
        return dadosTraduzidos
    }
    const dados = await fetch("http://localhost:3000/arquivosAdicionados",);
        const  dadosTraduzidos = await dados.json();
        //console.log(dadosTraduzidos);
     
        return dadosTraduzidos

}
