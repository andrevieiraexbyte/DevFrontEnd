class DateHelper { // class que isola uma data para tratala no formatão que precisamos

    constructor(){

            throw new Error('DateHelper não pode ser instanciada');
            // dizendo que date tem método estatico por isso não pode ser instanciada
    }

   static dataParaTexto(data) {// método que recebe um texto e converte para data

            // utilizando template string para interpolarizar strings
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
        
    }


   static textoParaData(texto) { // método que recebe uma data e converte para texto

        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
        throw new Error('Deve estar no formato aaaa-mm-dd');
        return new Date(...texto.split('-').map((item, indice) => - indice % 2));
    }


}