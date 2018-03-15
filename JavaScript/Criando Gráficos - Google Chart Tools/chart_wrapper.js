google.load('visualization', '1', {packages:['corechart']});
google.setOnLoadCallback(desenhaGrafico);

	function desenhaGrafico(){
	
		var wrapper = new google.visualization.ChartWrapper({ 
		dataSourceUrl:'https://spreadsheets.google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&range=B1:D11&pub=1',
		chartType: 'BarChart', 
		containerId: 'meu_grafico', 
		options:{width:900,height:300}
		});
		wrapper.draw();
	}