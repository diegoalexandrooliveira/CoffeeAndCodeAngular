// função sincrona
function funcaoSincrona(){
  return "Retorno da função";
}

let retorno = funcaoSincrona();




// função assincrona com callBack

function callBackExemplo(callBack) {
  let retorno = "Retorno da função";

  return callBack(retorno);
}

callBackExemplo(function(retorno) {
  console.log(retorno);
});



// função assincrona com promise

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


  // função assincrona com observable

function observableExemplo() {
  return Observable.of("Retorno da função");
}

observableExemplo()
  .subscribe(function(retorno) {
    console.log(retorno);
  });
