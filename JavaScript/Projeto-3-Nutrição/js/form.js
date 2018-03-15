//captura evento do click mouse no botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click",function(event){
		event.preventDefault();

			//adiciona o valor passado no formulario par ao javascript
			var form = document.querySelector("#form-adiciona");


			var paciente = obtemPacienteDoFormulario(form);



			// recebe o paciente
			var erros = validaPaciente(paciente);
			// verifíca se contém erros de dados inseridos no paciente
			if(erros.length > 0){
				exibeMensagensDeErro(erros);
				 // passa os valores do array de erros para a ul/li crianda no html
				return;

			};

			//chamando a função
			adicionaPacienteNaTabela(paciente);

			//limpa os fomulários ao clicar no botão adicionar
			form.reset();
			var mensagensErro = document.querySelector("#mensagens-erro");
			mensagensErro.innerHTML = "";


	});
	//função que cria pacietne na tabela
	function adicionaPacienteNaTabela(paciente){
		var pacienteTr = montaTr(paciente);
		//seleciona a tabela de pacientes html e passa os novos dados com appendChild filhos da tabela
			var tabela = document.querySelector("#tabela-pacientes");

			tabela.appendChild(pacienteTr);

	};
	//
	function exibeMensagensDeErro(erros){
		var ul = document.querySelector("#mensagens-erro");
			ul.innerHTML = "";
			erros.forEach(function(erro){
				var li = document.createElement("li");
				li.textContent = erro;
				ul.appendChild(li);
			});
	};

	function obtemPacienteDoFormulario(form){

		var paciente = {//criando objeto paciente
			nome: form.nome.value,
			peso: form.peso.value,
			altura: form.altura.value,
			gordura: form.gordura.value,
			imc: calculaImc (form.peso.value, form.altura.value)
		}
		return paciente; //função retorna objeto paciente com os dados
	};

	//função que monta o paciente na tabela
	function montaTr(paciente){

		var pacienteTr = document.createElement("tr");
		pacienteTr.classList.add("paciente");

				pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
				pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
				pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
				pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
				pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));


		return pacienteTr;
	};

	//função que monta o td na tabela
	function montaTd(dado,classe){
		var td = document.createElement("td");
		td.classList.add(classe);
		td.textContent = dado;

		return td;
	};

	// validando o paciente com dados inseridos corretamente no formulário
	function validaPaciente(paciente){

		// criando um array para colocar os tipos de erros possíveis
		var erros = [];

		if(paciente.nome.length == 0 ){
			erros.push("O nome não pode ser em branco");
		}

		if (!validaPeso(paciente.peso)) {
			erros.push("Peso é inválido")

		}

		if(!validaAltura(paciente.altura)){
			erros.push("Altura é inválida")

		}
		if(paciente.peso.length == 0){
			erros.push("o peso não pode ser em branco")
		}
		if(paciente.altura.length == 0){
			erros.push("a altura não pode ser em branco")
		}
		if(paciente.gordura.length == 0){
			erros.push("gordura não pode ser em branco")
		}
		if(erros == 0){
			alert("Paciente "+paciente.nome+" adicionado com sucesso");
		}

			return erros;

	};
