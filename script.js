async function buscaEndereco(cep) {
   try {
     let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
     let consultaCEPConvertida = await consultaCEP.json()
     if (consultaCEPConvertida.erro){
      throw Error('CEP não existente!');
    }
    let cidade = document.getElementById('cidade');
    let logradouro = document.getElementById('endereco');
    let estado = document.getElementById('estado');

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
 } catch(erro){
    console.log(erro)
   }
 } 

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));