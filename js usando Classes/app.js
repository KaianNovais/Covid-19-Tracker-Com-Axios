class App {
    constructor(){
        this.initListeners();
        this.fetchInitialData();
    }
    //método que add um ouvinte ao formulário
    initListeners(){
        document.getElementById('search-form').addEventListener('submit', this.handleSubmit.bind(this));
    }
    //assim que o form for enviado...
    handleSubmit(event){
        event.preventDefault();
        const country = document.getElementById('country').value 
        const date = document.getElementById('date').value 
        this.fetchData(country, date);
    }

    //funcao que cria um grafico inicial, assim que a página for carrega
    fetchInitialData(){
        const data = Date.now
        console.log(data)
        this.fetchData('usa', '2022-01-10');
    }

    //esse método é uma ponte que interliga a nossa classe atual com a outra classe
    fetchData(country, date){
        window.dataFetcher.fetchData(country, date);
    }
}

new App()