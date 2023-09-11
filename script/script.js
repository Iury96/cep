
// URL da API
const apiUrl = `https://viacep.com.br/ws/01001000/json/`;

// Requisição usando fetch
fetch(apiUrl)
  .then(response => {
  
    return response.json();
  })

  .then(data => {
    
    console.log(data.localidade);
  })
 
