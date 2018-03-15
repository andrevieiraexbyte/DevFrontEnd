
//seleciona o que foi digitado na label
var campoFiltro = document.querySelector("#filtrar-tabela");

//seleciona todos os pacientes para a uma nova variável
campoFiltro.addEventListener("input",function(){
  console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente");

  // percorre oque foi digitado e compara com os já cadastrados
  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      //uso da expressão regular
      var expressao = new RegExp(this.value, "i");

      // condição de teste da expressão, deixa o paciente invisível através da classe css
      if (expressao.test(nome)) {
        paciente.classList.remove("invisivel");

      }else{
          paciente.classList.add("invisivel");
          }
        }

      }else{
          for (var i = 0; i < pacientes.length; i++) {
           var paciente = pacientes[i];
          paciente.classList.remove("invisivel");
          }
        }
});