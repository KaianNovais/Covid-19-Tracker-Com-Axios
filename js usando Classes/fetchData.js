class CovidDataFetcher {
    //construtor
    constructor(){
        this.chart = null;
        window.dataFetcher = this;
    }
    //Função que busca os dados da nossa api e joga os dados numa funcao que desenhará o gráfico
    //com base nos dados
    fetchData(country, date){
        axios.get(`https://covid-api.com/api/reports/total?date=${date}&iso=${country}`).then(
            this.createChart.bind(this)
        ).catch((error)=> console.error(error))
    }

    //vai desenhar o gráfico com base nos dados recebidos
    createChart(response){
        const apiData = response.data.data;
        const context = document.getElementById('chart-container');

        //verifica se o gráfico já existe
        if(this.chart){
            this.chart.destroy()
        }

        //cria o gráfico
        this.chart = new Chart(context,{
            type: 'pie',
            data: {
                labels: ['Mortes', 'Confirmados', 'Confirmados descartados'],
                datasets: [{
                    data: [apiData.deaths, apiData.confirmed, apiData.confirmed_diff],
                    backgroundColor: ['red', 'blue', 'green']
                }]
            }
        })

    }

}
new CovidDataFetcher();


