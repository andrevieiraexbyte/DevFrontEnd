//criando uma classe padrão ES6 primeira letra e maiúscula
class Negociacao {

    constructor(data, quantidade, valor) { // criando um construtor para a classe onde definimos os traibutos

        // definição de atributos e o valores vem do método constructor
        this._data = new Date(data.getTime()); // instanciando objeto Date e tornando imutável
        this._quantidade = quantidade; // this referencia exatamente esse atrtibuto
        this._valor = valor;
        // congela o objeto, nesta ordem os valores acima seram passados, mas ainda assim não garente esconder os dados pois conseguimos exergar os dados.
        Object.freeze(this);

    }// fim do construtor

    get volume() {

        return this._quantidade * this._valor;
    }

    //métodos acessadores
    get data() {
        return new Date(this._data.getTime());//tornando a data imutável
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }


}//fim da classe