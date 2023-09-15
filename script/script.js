const botao = document.querySelector('#botao');

function fetchCEPData(cep) {
  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

  return fetch(apiUrl)
    .then(response => {
      return response.json();
    });
}


function consultarEndereco(evento) {
  evento.preventDefault();
  const cep = document.querySelector('#cep').value;

  if (cep.length !== 8) {
    alert('CEP incorreto.');
    return;
  }

  fetchCEPData(cep)
    .then(data => mostrarResultado(data))
    .catch(error => {
      console.error(error);
      alert('Erro ao consultar o CEP.');
    });
}

function mostrarResultado(data) {
  const resultado = document.querySelector('#resultado')
  if (data.erro) {
    resultado.innerHTML = "Não foi possível localizar!"
  } else {
    resultado.innerHTML = `
  <p>Endereço: ${data.logradouro}</p>
  <p>Endereço: ${data.ddd}</p>
  
  `
  }
}

botao.addEventListener('click', consultarEndereco);
