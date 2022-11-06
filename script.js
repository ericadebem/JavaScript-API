async function buscaEndereco() {
    try {
    let consultaCEP = await fetch('https://viacep.com.br/ws/01001250/json/')
    let consultaCEPConvertida = await consultaCEP.json()
    if (consultaCEPConvertida.erro){
      throw Error('CEP não existente!');
    }
    console.log(consultaCEPConvertida);
 } catch(erro){
    console.log(erro)
     }
 } 
    
    buscaEndereco();