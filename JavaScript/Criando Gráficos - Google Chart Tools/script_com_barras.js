google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(desenhaGrafico);

function desenhaGrafico(){
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Mês');
	data.addColumn('number', 'Gastos');
	data.addRows(12);

	data.setValue(0,0, 'Janeiro');
	data.setValue(0,1, 15440);	


	var grafico = new google.visualization.ColumnChart(document.getElementById('grafico'));


	grafico.draw(data,{ 
		width: 700, height: 300, title: 'Gastos', vAxis: {title:'Valor'}});	
}