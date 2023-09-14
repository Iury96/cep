
function fetchCEPData(cep) {
  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

  // Retorna a promessa gerada pelo fetch
  return fetch(apiUrl)
    .then(response => {
      return response.json();
    });
}

// Uso da função:
fetchCEPData('22450270')
  .then(data => {
    console.log(data.logradouro);
    console.log(data.localidade);
    console.log(data.bairro);
    console.log(data.ddd);
  });