google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(desenhaGrafico);

	function desenhaGrafico(){
		var dados = new google.visualization.DataTable();
		dados.addColumn('string', 'Habilidades');
		dados.addColumn('number', 'Nível');

		dados.addRows(5);

		dados.setValue(0,0, 'HTML5');
		dados.setValue(0,1, 7);

		dados.setValue(1,0, 'CSS3');
		dados.setValue(1,1, 6);

		dados.setValue(2,0, 'JavaScript');
		dados.setValue(2,1, 5);

		dados.setValue(3,0, 'MySql');
		dados.setValue(3,1, 5);

		dados.setValue(4,0, 'Java');
		dados.setValue(4,1, 5);


		var div = document.getElementById('meu_grafico');
		var grafico = new google.visualization.PieChart(div);
	
		grafico.draw(dados, {width: 700, height:340, title: 'Habilidades', is3D: true});


		google.visualization.events.addListener(grafico , 'select', avisaDoClique);    

        function avisaDoClique(event)  {
                document.getElementById('msg').innerHTML += "Clique efetuado! <br/>";
            }

	}