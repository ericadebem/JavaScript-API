async function buscaEndereco(cep) {
   try {
     let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
     let consultaCEPConvertida = await consultaCEP.json()
     if (consultaCEPConvertida.erro){
      throw Error('CEP não existente!');
    }
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
 } catch(erro){
    console.log(erro)
   }
 } 

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));