function callBackExemplo(callBack) {
  let retorno = "Retorno da função";

  return callBack(retorno);
}

callBackExemplo(function(retorno) {
  console.log(retorno);
});

function promiseExemplo() {
  return new Promise(function(resolve, reject) {
    let retorno = "Retorno da função";

    resolve(retorno);
  });
}

promiseExemplo()
  .then(function(retorno) {
    console.log(retorno);
  })
  .catch(function(erro) {
    console.log(erro);
  });
