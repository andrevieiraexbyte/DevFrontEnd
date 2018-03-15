// chamda de bibliotecas
require('angular');


var AppMainController = require ('./controllers/AppMainController');

//criação do modulo
angular.module('app',[]);

// criar um controllers

angular.module('app').controller('AppMainController',['$scope','$http',AppMainController]);
