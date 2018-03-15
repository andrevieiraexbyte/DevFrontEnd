
// percorrendo o html através da classe .paciente pegando todos com quereySelectorAll
var pacientes = document.querySelectorAll(".paciente");

// adicionando um paciente por iteração
for (var i = 0; i < pacientes.length; i++) {
	
	var paciente = pacientes[i];
	
		

		// fazendo um select específico em uma tablea html
		var tdPeso = paciente.querySelector(".info-peso").textContent;
		var tdAltura = paciente.querySelector(".info-altura").textContent;

		// passando os valores do selector para uma variávels onde eu possa manipular os dados
		var peso = tdPeso;
		var altura = tdAltura;

		var imc = peso / (altura * altura);

		var tdImc = paciente.querySelector(".info-imc");

		//passando valor de variável para dentro do html 
		tdImc.textContent = imc;

			var pesoEValido = validaPeso(peso);
			var alturaEValida = validaAltura(altura);
			
			if (!pesoEValido) {

				pesoEValido = false;
				tdImc.textContent = "Peso inválido!";
				paciente.classList.add("paciente-invalido");//modificando o style direto no arquivo css isso faz com que uma calsse seja adicionada no html
			};
			if (!alturaEValida) {

				alturaEValida = false;
				tdImc.textContent = "Altura inválida!";
				paciente.classList.add("paciente-invalido");//modificando o style direto no arquivo css, 
				
			};

			if (pesoEValido && alturaEValida) {
				var imc = calculaImc(peso,altura);
				tdImc.textContent = imc; //toFixed para 2 casa decimais
			};
}//fim do for calcúla imc



	function validaPeso(peso){
		if (peso >= 0 && peso < 1000){

			return true;
	}	else{
			return false;
		}
	};		

	function validaAltura(altura){
		if (altura >= 0 && altura <= 3.0) {
			return true;
		}else{
			return false;
		}
	};


	// função que calcúla imc
	function calculaImc(peso,altura){
		var imc = 0;
		imc = peso / (altura * altura);
		return imc.toFixed(2);
	};