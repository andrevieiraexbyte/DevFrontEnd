function percorreArrya(trsPacientes, comportamento){
	for(var i = 0; i <= trsPacientes.length -1; i++){
	
	var pacienteTrAtual = trsPacientes[i];


	comportamento (pacienteTrAtual);
	}
}
