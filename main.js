var cep = document.querySelector("#cep").value;

// cep.addEventListener("blur" ,function() {
    // console.log(cep.value)
    // fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // .then(response => {
    //   response.json()
    //   console.log()

// })})

function getCep() {
let cep = document.querySelector("#cep").value

    console.log(cep)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      response.json()
      .then(data => Preencher(data)   
      )
  })}

  function Preencher(data){
    let rua = document.querySelector("#logradouro")
    let bairro = document.querySelector("#bairro")
    let localidade = document.querySelector("#localidade")
    let uf = document.querySelector("#uf")
    rua.value = data.logradouro
    bairro.value = data.bairro
    localidade.value = data.localidade
    uf.value = data.uf
  }
  