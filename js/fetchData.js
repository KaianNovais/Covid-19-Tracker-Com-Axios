//variável que armazena o gráfico que será exibido na tela
let meuGrafico;

//Função que cria o gráfico
const criarGrafico = resposta => {
    //variável para armazenar os dado da API
    const dadosDaAPI = resposta.data.data;
    //Obtendo o contexto de onde iremos desenhar o gráfico
    const contexto = document.getElementById('chart-container').getContext('2d');

    //Verifica se existe o gráfico e caso verdade, excluímos 
    //para desenhar o próximo
    if(meuGrafico){
        meuGrafico.destroy();
    }

    meuGrafico = new Chart(contexto, {
        type: 'pie', 
        data: {
            labels: ['Mortes', 'Confirmados', 'Confirmados descartados'],
            datasets: [{
                data: [dadosDaAPI.deaths, dadosDaAPI.confirmed, dadosDaAPI.confirmed_diff],
                backgroundColor: ['red', 'blue', 'green']
            }]
        }
    });
}

//Função que busca os dados da API
const buscaDados = (paisQueQueroBuscar, dataDaBusca) => {
    axios.get(`https://covid-api.com/api/reports/total?date=${dataDaBusca}&iso=${paisQueQueroBuscar}`)
    .then(criarGrafico).catch((error)=> console.error(error))
}

//exportando a função buscaDados através do objeto window
window.buscaDados = buscaDados;

