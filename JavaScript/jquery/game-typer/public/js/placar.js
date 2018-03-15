//atrelando a função mostraPlacar ao click
$("#botao-placar").click(mostraPlacar);
//botão que sincroniza o placar salvo no servidor
$("#botao-sync").click(sincronizaPlacar);

// função que insere o jogador na tabela com sues pontos conquistados
function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $("#user").val();
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario,numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);

    $(".placar").slideDown(600);

    scrollPlacar();
}

// cria linhas e colunas passando os jogadores através do javascript direto no html
function novaLinha(usuario,palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    console.log(linha);
    return linha;
}
//função para remover linha
function removeLinha(event){
 event.preventDefault();//segura o evento de subir a páginas ao clicar no botão
  var linha = $(this).parent().parent();//selecionando o pai do pai para remover

  linha.fadeOut(600); // deixa o conteúdo com display:none
      setTimeout(function(){//essa função faz com que espere o tempo de 600milisegundo para executar o remover linha
      linha.remove();
      },600);
}

// função que ao terminar o jogo faz um scroll colocando o placar em evidência
function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;

    $("body").animate(//animete pega o css e passa funções
    {
            scrollTop: posicaoPlacar + "px"
    },600);
}

function mostraPlacar(){
    $(".placar").stop().slideToggle(600);//função que escode ou mostra o placar com animação
}//.stop trava as animações ao clicar várias vezes

function sincronizaPlacar(){
        var placar = [];//array
        var linhas = $("tbody>tr");//buscando linha da tabela

        linhas.each(function(){//percorre o arrya linhas
            var usuario = $(this).find("td:nth-child(1)").text();//buscando filhos com seletor css
            var palavras = $(this).find("td:nth-child(2)").text();

            var score ={
                usuario: usuario,
                pontos: palavras
            };
            placar.push(score);//pegando os dados no array e passando para score
            });

            var dados = {// criando um objeto e passando o array
                placar: placar
            };

            //fazendo um post, aqui passamos os dados que queremos enviar
            $.post("http://localhost:3000/placar",dados,function(){
console.log("Placar sincronizado com sucesso");
            $(".tooltip").tooltipster("open");// usando tooltip para mostrar menssagens de sucesso ou falhas ao sincronizar
        }).fail(function(){
            $(".tooltip").tooltipster("open").tooltipster("content","Falha ao sincronizar.")
        }).always(function(){
            setTimeout(function(){
            $(".tooltip").tooltipster("close");

            },1200);
        });
}
//pega o placar e insere na tabela novamente
function atualizaPlacar(){
        $.get("http://localhost:3000/placar",function(data){
                $(data).each(function(){
                        var linha = novaLinha(this.usuario, this.pontos);
                        console.log(linha);
                        linha.find(".botao-remover").click(removeLinha);
                            $("tbody").append(linha);
                });
        });
}