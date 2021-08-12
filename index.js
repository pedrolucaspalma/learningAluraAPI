//pega as informações dos cursos
function fetchFormacoesInfo(){
    fetch('https://www.alura.com.br/api/formacoes')
        .then(response => response.json())
        //.then(todasAsFormacoes => console.log(todasAsFormacoes));
        .then(function(todasAsFormacoes){
            console.log(todasAsFormacoes);
            todasAsFormacoes.forEach(function(formacao){
                renderFormacao(formacao);
                // console.log(this);
            });
        })
}

//renderiza na tela por DOM
function renderFormacao(formacao){
    let containerDeFormacoes = document.getElementById('alura-container');

    let formacaoContainer = document.createElement("div");
    formacaoContainer.className = "formaçao";

    let nomeDaFormacao = document.createElement('h4');
    nomeDaFormacao.innerText = formacao.title;

    formacaoContainer.append(nomeDaFormacao);
    containerDeFormacoes.appendChild(formacaoContainer);
}

fetchFormacoesInfo();