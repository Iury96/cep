const botao = document.querySelector('#botao');
const botaoReset = document.querySelector('#botaoReset')
function fetchCEPData(cep) {
  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

  return fetch(apiUrl)
    .then(response => {
      return response.json();
    });
}

function atualizar() {
  window.location.reload();

}
function consultarEndereco(evento) {
  evento.preventDefault();
  const cep = document.querySelector('#cep').value;

  if (cep.length !== 8) {
    alert('Verifique o CEP fornecido.');
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
    resultado.innerHTML = "<span>Não foi possível localizar, verifique o CEP fornecido.</span>"
  } else {
    resultado.innerHTML = `
  <p>Logradouro:<span> ${data.logradouro} </span></p>
  <p>Bairro:<span> ${data.bairro}</span></p>
  <p>Estado:<span> ${data.uf} </span></p>
    
  `
  }
}

botao.addEventListener('click', consultarEndereco);
botaoReset.addEventListener('click', atualizar);