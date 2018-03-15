google.load('visualization','1',{packages:['geochart']});
google.setOnLoadCallback(desenhaGrafico);

function desenhaGrafico(){
	
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'País-Estado');
	
	data.addColumn('number', 'População (hab)');
	
	
	data.addRows(3);
	
	data.setValue(1,0, 'BR-GO');
	data.setValue(1,1, 45986);
	
	data.setValue(2,0, 'BR-ES');
	
	data.setValue(0,0, 'BR-SP');
	data.setValue(0,1, 190732);
	data.setValue(2,1, 29461);
	
	
	
	
	var grafico = new google.visualization.GeoChart(document.getElementById('mapa'));
	grafico.draw(data, {region: 'BR', resolution:'provinces'});
	
	
	
}