const input = document.getElementById("input-field")
const button = document.getElementById("submit-button")

let result_cep = document.getElementById('result_cep')

button.addEventListener("click", function(){
  const cep = input.value
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  
  fetch(proxy + `https://0wr6ic76da.execute-api.us-east-1.amazonaws.com/cep/consultacep?cep=${cep}`)
    .then(response => response.text())
    .then(data => result_cep.textContent = data)
    .catch(error => console.error(error))  
})
