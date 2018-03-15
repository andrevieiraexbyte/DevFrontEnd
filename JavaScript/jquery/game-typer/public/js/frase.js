$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);


//função fazendo uma requisição ajax retornando dados do servidor
function fraseAleatoria(){
  $("#spinner").toggle();// mostra o spinner

  $.get("http://localhost:3000/frases",trocaFraseAleatoria)
  .fail(function(){//mostra menssgens de erro caso haja algo de errado com o servidor
     $("#err").toggle();
     setTimeout(function(){
      $("err").toggle();
     },1500);
  })
  .always(function(){//função que mostra o spinner
    $("#spinner").toggle();
  });
}

function trocaFraseAleatoria(data){//esse argumento e onde estão os dados buscado através do método get
  console.log(data);
  var frase = $(".frase");

  //arredonda o número, e usamos o tamanho do array
  var numeroAleatorio = Math.floor(Math.random()*data.length);

  frase.text(data[numeroAleatorio].texto);// acessando a propriedade texto que está no array

  atualizaTamanhoFrase();//função para atualizar a quantidade de palvras

  atualizaTempoInicial(data[numeroAleatorio].tempo); //acessando a propriedade tempo que está no array

}
// função que busca uma frase escolhida através do id dentro do array recebido pela requisição no servidor
function buscaFrase(){

  $("#spinner").toggle();//gif animado ao fazer uma requisição

  var fraseId = $("#frase-id").val();//recebe o valor que esta no html
  var dados = {id : fraseId}; //objeto js que guarda a id

  $.get("http://localhost:3000/frases",dados , trocaFrase)
    .fail(function(){
        $("#err").toggle();//menssagen de erro caso servidor ou tenha alguma falha
            setTimeout(function(){
               $("err").toggle();
            },2000);
  })
    .always(function(){
        $("#spinner").toggle();
    });

}

function trocaFrase(data){//pega a requisição e troca a frase pelo id escolhido

  var frase = $(".frase");
  frase.text(data.texto); // texto que vem do servidor  na requisição ajax
  atualizaTamanhoFrase(); //atualiza o campo tamanho da frase
  atualizaTempoInicial(data.tempo);//atualiza o campo de tempo
}