
var atualizaDados = function(){
    var carrinhos = $(".carrinho");
    carrinhos.each(function(){

          var carrinho = $(this);
          var itens = carrinho.find(".itens-total:visible");
          var total = 0;

          for(var i=0; i < itens.length; i++){
              var quantidade = $(itens[i]).text();
              var preco = parseFloat(quantidade);
              total += preco;
           }
          carrinho.find(".valor-total").text(total);
          carrinho.find(".quantidade-de-itens").text(itens.length);
     });

};

  var removeItem = function(event){
        event.preventDefault();

        var self = $(this);
        self.closest("tr").hide();

        atualizaDados();
      };

  var undo = function(){
        var carrinho = $(this).closest(".carrinho");
        carrinho.find("tr:visible").removeClass("recuperado");
        var trs = carrinho.find("tr:hidden");
        trs.addClass("recuperado");
        trs.show();
        atualizaDados();
}

  var alternaPropaganda = function(event){
    event.preventDefault();
    $(".propaganda").toggle(1500);
    $(".alterna-propaganda").toggle();
  }

  var aposInicializado = function(){

            atualizaDados();
              $(".undo").click(undo);
                $(".remove-item").click(removeItem);
                  $(".carrinho").each(function(){
                    $(this).find("tr:nth-child(3n)").each(function(){
                      umaPropaganda().insertAfter($(this));
                    });
             });
                  $(".carrinho tbody tr").hover(daDestaque,tiraDestaque);
                  $(".alterna-propaganda").click(alternaPropaganda);

      };
    $(aposInicializado);

    var daDestaque = function(){
      $(this).find(".remove-item").fadeIn();
       $(this).addClass("hovering");
    }
    var tiraDestaque = function(){
      $(this).find(".remove-item").fadeOut(0);
       $(this).removeClass("hovering");
    }



$(".carrinho").each(function(){
  $(this).find("tr:nth-child(3n)").each(function(){


  });

});

var umaPropaganda = function(){
    var propagandas = [" oque acha de comprar uma motocicleta?",
                                      "O que acha de comprar uma lancha?",
                                      "O que acha de comparar uma bicicleta?",
                                      "O que acha de comparar um carro?"];

var posicao = Math.floor(propagandas.length * Math.random() );
  var texto = propagandas[posicao];
    var tr = $("<tr>").addClass("propaganda").append($("<td>"));
      tr.find("td").attr("colspan",6).text(texto);
        return tr;

};
