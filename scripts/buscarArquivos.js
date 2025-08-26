export async function buscaArquivos(tipoFunção) {

    if(tipoFunção === 0){
        const dados = await fetch("https://super-telegram-6qj4qw969rxhr6pp-3000.app.github.dev/arquivos",);
        const  dadosTraduzidos = await dados.json();
        //console.log(dadosTraduzidos);
     
        return dadosTraduzidos
    }
    const dados = await fetch("https://super-telegram-6qj4qw969rxhr6pp-3000.app.github.dev/arquivosAdicionados",);
        const  dadosTraduzidos = await dados.json();
        //console.log(dadosTraduzidos);
     
        return dadosTraduzidos

}
