function fetchFormacoesInfo(){
    fetch('https://www.alura.com.br/api/formacoes')
        .then(response => response.json())
        .then(todasAsFormacoes => console.log(todasAsFormacoes));
}

fetchFormacoesInfo();