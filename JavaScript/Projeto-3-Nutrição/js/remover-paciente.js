

//seleciona a tag table do html
var tabela = document.querySelector("table");

//adiciona o eventlistner de double click e passa a função event
tabela.addEventListener("dblclick", function (event){

    //condição para não remover o cabeçalho
    if (event.target.tagName == 'TD') {

    //adicona classe do css com efeito de opacidade ao remover um paciente
    event.target.parentNode.classList.add("fadeOut");

        //setTimout da uma segurada na ação criada no css
        setTimeout(function(){

// target pega onde foi clicado e o parentNode seleciona somente o target, remove para remvoer
            event.target.parentNode.remove();

            },500);
        }

    });