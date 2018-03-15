//seleciona o tempo inicia que está definido no html e passa seu valor para está variável
        var tempoInicial = $("#tempo-digitacao").text();
         //selecionando o textarea e passando seu valor para variável
        var campo = $(".campo-digitacao");


// inicializa todas as functions
$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    $(".botao-remover").click(removeLinha);
    atualizaPlacar();
    $("#user").selectize({
      create: true,
      sortField: 'text'
    });
    $('.tooltip').tooltipster({
     trigger: "custom"
    });

});

//atuazlia tempo ao atualizar a fraze utilizando o tempo que vem definido do servidor na requisição feita ajax
function atualizaTempoInicial(tempo){
  tempoInicial = tempo;
  $("#tempo-digitacao").text(tempo);
}

function atualizaTamanhoFrase(){
          // pega classe frase do html e o seu conteúdo
        var frase = $(".frase").text();
        // quebra a frase onde tem espaços em branco colocando em um array
        var numPalavras = frase.split(" ").length;
        //pega id html e passa seu conteúdo para a variável
        var tamanhoFrase = $("#tamanho-frase");
        // coloca o valor de numPlavaras em tamanhoFrase
        tamanhoFrase.text(numPalavras);
}

function inicializaContadores(){
        //criando uma funcção que detecta os caractéres e a quantidade de plavras no textarea
        campo.on("input",function(){
          var conteudo = campo.val();
          //expressao regular para corrigir a falha nos spaces e a quantidade de palvaras
          var qtdPalavras = conteudo.split(/\S+/ ).length-1;
          $("#contador-palavras").text(qtdPalavras);

          var qtdCaracteres = conteudo.length;//passa o tamanho da variável para qtdCaracteres
          $("#contador-caracteres").text(qtdCaracteres);
          });
}

function inicializaCronometro(){

        //função que foca no textarea e decrementa o tempo
        campo.one("focus",function(){
        //pega o valor de texto no html e passa para variável
        var tempoRestante = $("#tempo-digitacao").text();
        // criando um ID para setInterval
         var cronometroID = setInterval(function(){
            tempoRestante --;
            // o tempoRestante e passado para o html e vai decremetnando
              $("#tempo-digitacao").text(tempoRestante);
                //condicional para desabilidar o textarea no html


                if (tempoRestante < 1) {
                  clearInterval(cronometroID);
                  finalizaJogo();
                }
              },1000);//milisegundos
    });
}

function finalizaJogo(){
                campo.attr("disabled",true); // atribuie o html como disabled
                //classe do css para mudar a cor quando desativar o textarea
                campo.addClass("campo-desativado");
                inserePlacar();

}




// essa função e responsável por comparar o texto e o digitado se está
// certo ou não retornando a borda verde ou vermelha
function inicializaMarcadores(){
        campo.on("input", function(){
         var frase = $(".frase").text();
            var digitado = campo.val();

            if (frase.startsWith(digitado)) {
              campo.addClass("borda-verde");
              campo.removeClass("borda-vermelha");
            }else{
              campo.addClass("borda-vermelha");
              campo.removeClass("borda-verde");
            }
        });
    }

//function que permite clicar no botão reiniciar e o tempo voltar ao seu estádo original
//, limpar o campo de digitação e zerar os contadores de palvaravras e caracteres
    function reiniciaJogo(){
            //como o campo estava desabilitado agora eu habilito novamente
            campo.attr("disabled",false);
            //deixa o campo textarea seu valor em branco
            campo.val("");
            //os contadores seram =0 ao usar o botão reiniciar
            $("#contador-palavras").text("0");
            $("#contador-caracteres").text("0");
            $("#tempo-digitacao").text(tempoInicial);
            // aqui eu chamo a function resposável por fazer o tempo decrementar
            //, quando houver seleção no campo textarea.
            inicializaCronometro();
            //remove o css do textearea deixando o background padrão
            campo.removeClass("campo-desativado");
            campo.removeClass("borda-vermelha");
            campo.removeClass("borda-verde");
          }


