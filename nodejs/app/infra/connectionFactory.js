var mysql = require ('mysql');


var connectMYSQL = function(){
	if (!process.env.NODE_ENV) {
		return mysql.createConnection({
			host : 'localhost',
			user : 'andre',
			password : 'andre',
			database : 'catalogo_produtos'
		});
	}
	if (process.env.NODE_ENV == 'test') {
		return mysql.createConnection({
			host : 'localhost',
			user : 'andre',
			password : 'andre',
			database : 'catalogo_produtos_test'
		});
	}
}

module.exports = function(){
	return connectMYSQL;

}