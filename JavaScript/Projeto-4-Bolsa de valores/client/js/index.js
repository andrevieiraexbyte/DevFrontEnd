// variável campos array que pega os valores passados no input
var campos =[
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

  // adicionando tbody e table do index.html ao index.js
  var tbody = document.querySelector('table tbody');

//selecionado todo o form com elementos do array, adicionando um callback ao subimetar no formulário
document.querySelector('.form').addEventListener('submit', function(event){

    //criando uma tr dinâmica
    var tr = document.createElement('tr');

      // iterando no array de forma funcional
      campos.forEach(function(campo){

       // criando uma td dinâmica
      var td = document.createElement('td');
       //o td agora recebe o valor que tem em campo
       td.textContent = campo.value;
       //adicionando a td como filho de tr
         tr.appendChild(td);
         console.log(tr);

    });// fim do forEach

      //variável tdVolume recebe os elementos do campo 1 e 2 da td e multiplica seus valores
      var tdVolume = document.createElement('td');
        tdVolume.textContent = campos[1].value*campos[2].value;
         //adiciona tdVolume como filho de tr
          tr.appendChild(tdVolume);
           // adiciona tr como filha de tbody
            tbody.appendChild(tr);
              //evida que a página seja recarregada
              event.preventDefault();

              //deixa os campos com esses valores definos quando recarregamos a pagina
              campos[0].value = '';
              campos[1].value = 1;
              campos[2].value = 0;

              campos[0].focus();//focus serve para onde o cursor do mouse iniciará quando recarregar a página



});// fim do document.querySelector