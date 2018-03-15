google.load('visualization', '1', {'packages':['corechart']});
		google.setOnLoadCallback(desenhaGrafico);

function desenhaGrafico(){
	var dados = new google.visualization.DataTable();
	dados.addColumn('string', 'Mês');
	dados.addColumn('number', '2014');
	dados.addColumn('number', '2015');
	dados.addColumn('number', '2016');

	dados.addRows(12);

	

	dados.setValue(0,0, 'Janeiro');
	dados.setValue(0,1, 1023,29);
	dados.setValue(0,2, 210.50);
	dados.setValue(0,3, 501,01);


	dados.setValue(1,0, 'Fevereiro');
	dados.setValue(1,1, 501,29);
	dados.setValue(1,2, 700.50);
	dados.setValue(1,3, 301,01);


	dados.setValue(2,0, 'Março');
	dados.setValue(2,1, 989,29);
	dados.setValue(2,2, 564.50);
	dados.setValue(2,3, 887,01);

	dados.setValue(3,0, 'Abril');
	dados.setValue(3,1, 212,29);
	dados.setValue(3,2, 450.50);
	dados.setValue(3,3, 669,01);

	dados.setValue(4,0, 'Maio');
	dados.setValue(4,1, 854,29);
	dados.setValue(4,2, 330.50);
	dados.setValue(4,3, 245,01);

	dados.setValue(5,0, 'Junho');
	dados.setValue(5,1, 980,29);
	dados.setValue(5,2, 225.50);
	dados.setValue(5,3, 457,01);

	dados.setValue(6,0, 'Julho');
	dados.setValue(6,1, 365,29);
	dados.setValue(6,2, 665.50);
	dados.setValue(6,3, 789,01);

	dados.setValue(7,0, 'Agosto');
	dados.setValue(7,1, 335,29);
	dados.setValue(7,2, 745.50);
	dados.setValue(7,3, 745,01);

	dados.setValue(8,0, 'Setembro');
	dados.setValue(8,1, 414,29);
	dados.setValue(8,2, 699.50);
	dados.setValue(8,3, 999,01);

	dados.setValue(9,0, 'Outubro');
	dados.setValue(9,1, 441,29);
	dados.setValue(9,2, 778.50);
	dados.setValue(9,3, 455,01);

	dados.setValue(10,0, 'Novembro');
	dados.setValue(10,1, 441,29);
	dados.setValue(10,2, 887.50);
	dados.setValue(10,3, 556,01);

	dados.setValue(11,0, 'Dezembro');
	dados.setValue(11,1, 857,29);
	dados.setValue(11,2, 444.50);
	dados.setValue(11,3, 222,01);

	var formatter = new google.visualization.DateFormat({ formatType:'medium',});
	formatter.format(dados,0);

	var valorFormatter = new google.visualization.NumberFormat({
		decimalSymbol:',', prefix:'R$'});
	valorFormatter.format(dados, 1);
	valorFormatter.format(dados, 2);
	
	
	var div = document.getElementById('meu_grafico');
	var grafico = new google.visualization.LineChart(div);
	grafico.draw(dados, {width:1200, height:340, title: 'Minhas Finanças'});


}