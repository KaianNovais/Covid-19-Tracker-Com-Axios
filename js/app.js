// Função que será chamada quando o formulário for enviado
const enviarDadosDoFormulario = event => {
    // Previne o comportamento padrão do formulário, que seria recarregar a página
    event.preventDefault();

    // Obtém o valor do campo 'country' do formulário
    var country = document.getElementById('country').value;
    
    // Obtém o valor do campo 'date' do formulário
    var date = document.getElementById('date').value;

    // Chama a função fetchData (definida em outro arquivo) passando os valores dos campos 'country' e 'date'
    window.buscaDados(country, date);
}

// Adiciona um ouvinte de evento 'submit' ao formulário.
// Quando o formulário for enviado, a função handleFormSubmit será chamada
document.getElementById('search-form').addEventListener('submit', enviarDadosDoFormulario);

// Função que obtém os dados iniciais ao carregar a página
function funcaoInicial() {
    // Chama a função fetchData (definida em outro arquivo) com os valores iniciais 'usa' e '2022-01-10'
    window.buscaDados('usa', '2022-01-10');
}

// Chama a função fetchInitialData para buscar os dados iniciais ao carregar a página
funcaoInicial();
