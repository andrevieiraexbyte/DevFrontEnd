class ListaNegociacoes{
    constructor(){
        this._negociacoes = []
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //devolve uma cópia da lista vazia e cria uma nova lista com os dados da negociação
        // ou seja faz uma cópia de toda a lista.
        return [].concat(this._negociacoes);
    }
}