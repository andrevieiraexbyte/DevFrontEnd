

		
		google.load('visualization', '1', {'packages':['corechart']});
		google.setOnLoadCallback(desenhaGrafico);

			function desenhaGrafico(){
				var data = new google.visualization.DataTable();
				data.addColumn('string', 'Mês');
				data.addColumn('number', 'Gastos em R$');

				data.addRows(5);

				data.setValue(0,0, 'Janeiro');
				data.setValue(0,1, 20450.0);

				data.setValue(1,0, 'Fevereiro');
				data.setValue(1,1, 21870.0);

				data.setValue(2,0, 'Março');
				data.setValue(2,1, 22250.0);

				data.setValue(3,0, 'Abril');
				data.setValue(3,1, 21769.0);

				data.setValue(4,0, 'Mario');
				data.setValue(4,1, 23234.0);

				var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
				chart.draw(data, { width: 400, height: 240, title: 'Gastos do mês', colors:['red']});
				
		}
		

		function desenhaGrafico(){
				var data = new google.visualization.DataTable();
				data.addColumn('string', 'Mês');
				data.addColumn('number', 'Gastos em R$');

				data.addRows(12);

				data.setValue(0,0, 'Janeiro');
				data.setValue(0,1, 1345.0);

				data.setValue(1,0, 'Fevereiro');
				data.setValue(1,1, 1387.0);

				data.setValue(2,0, 'Março');
				data.setValue(2,1, 1444.0);

				data.setValue(3,0, 'Abril');
				data.setValue(3,1, 1282.0);

				data.setValue(4,0, 'Maio');
				data.setValue(4,1, 1321.0);

				data.setValue(5,0, 'Junho');
				data.setValue(5,1, 1478.0);

				data.setValue(6,0, 'Julho');
				data.setValue(6,1, 1567.0);

				data.setValue(7,0, 'Agosto');
				data.setValue(7,1, 1466.0);

				data.setValue(8,0, 'Setembro');
				data.setValue(8,1, 1399.0);

				data.setValue(9,0, 'Outubro');
				data.setValue(9,1, 1412.0);

				data.setValue(10,0, 'Novembro');
				data.setValue(10,1, 1415.0);

				data.setValue(11,0, 'Dezembro');
				data.setValue(11,1, 1437.0);

				var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
				chart.draw(data, { width: 1000, height: 240, title: 'Gastos do mês',curveType:'function'});
				
		}