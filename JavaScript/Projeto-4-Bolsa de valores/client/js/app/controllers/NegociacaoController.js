class NegociacaoController {// criação da classe

	constructor() {

		let $ = document.querySelector.bind(document);// através do bind(document) podemos passar a function querySelector para o $
		this._inputData = $('#data');// a variável recebe o oque foi passado no id data no formulário
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		// aqui o this com o constructor da classe evita que a acada criação de uma negociação se percorra o dom inteiro para pegar os valores.
		this._listaNegociacoes = new ListaNegociacoes();

	}

	adiciona(event) {

		event.preventDefault(); // preveni o recarregamento padrão da página

		this._listaNegociacoes.adiciona(this._criaNegociacao());//adiciona na lista
		this._limpaFormulario();//chamando função limpa formulário
		console.log(this._listaNegociacoes.negociacoes);

	}
	_criaNegociacao() {

		return new Negociacao(// criando uma negocição, recebendo os valores dos formulários
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value);
	}

	_limpaFormulario() {// funcção para limpar formulário
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;

		this._inputData.focus();
	}
}