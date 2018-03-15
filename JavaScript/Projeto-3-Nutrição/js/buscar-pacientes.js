var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    //fazendo requisição http com javascript.
      var xhr = new XMLHttpRequest();
      //onde está a requisição a ser feita
      xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

      //armazena em uma variável o conteúdo do xhr responseText
      xhr.addEventListener("load", function(){

        // verificando se está tudo certo com o servidor
        if (xhr.status == 200) {
          var resposta = xhr.responseText;
          var pacientes = JSON.parse(resposta);


          pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);

          });
      }else{
        var erroAjax = document.querySelector("#erro-ajax")
          erroAjax.classList.remove("invisivel");
      }
});
       //requisição sendo enviada e retorando para a função
      xhr.send();


});