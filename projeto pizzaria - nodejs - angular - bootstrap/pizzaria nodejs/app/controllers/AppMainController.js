// modulo de exportação ((exigencia do browserify))



    module.exports = function ($scope,$http) {

        $scope.nomeFantasia = "Pizzaria do Vando";

        /*
        $scope.listaClientes = [
            {nome: "Vando", telefone: "66666666", endereco: "Recanto"},
            {nome: "Vanderlei", telefone: "66666666", endereco: "Taguá"}
        ];
        */

        var excluirClientesJSON = function(cliente) {

          // Suporte no limpar do objeto
          cliente.delete = true;

            $http.post('http://nt.thalissonoliveira.com.br/post.php', cliente).then(
                          function(data, status){
                              console.log(data);
                              console.log(status);
                              listarClientesJSON();
                          }
                );
        }

        var salvarClientesJSON = function(cliente) {
            $http.post('http://nt.thalissonoliveira.com.br/post.php', cliente).then(
                          function(data, status){
                              console.log(data);
                              console.log(status);
                              listarClientesJSON();
                          }
                );
        }


        // trazer os dados via JSON
        var listarClientesJSON = function() {
            $http.get('http://nt.thalissonoliveira.com.br/post.php').then(
                          function(data, status){
                              console.log(data);
                              console.log(status);
                              $scope.listaClientes = data.data;
                          }
                );
        }

        listarClientesJSON();

        $scope.funcAdicionar = function(cliente) {

            // a edição fica ativa
            //$scope.listaClientes.push(cliente);

            // Adiciona o objeto à lista e não repete
            salvarClientesJSON(angular.copy(cliente));

            // Devido a verificação do css $dirty, o Pristine serve
            // para dizer que os campos ainda não foram utilizados
            $scope.formCliente.$setPristine();


            // Limpar os dados
            delete $scope.cliente;

        }

        $scope.funcSalvar = function(cliente) {

          salvarClientesJSON(angular.copy(cliente));
        }

        $scope.editando = false;

        $scope.funcEditar = function(cliente) {

            $scope.cliente = cliente;
            $scope.editando = true;

        }

        /*
          Exclusão no vetor
        $scope.funcExcluir = function(id) {

            // Excluindo pelo indice do vetor
            $scope.listaClientes.splice(id,1);

        }
        */

        $scope.funcExcluir = function(cliente) {

            $scope.listaClientes.splice($scope.listaClientes.indexOf(cliente),1);

            excluirClientesJSON(cliente);

        }

        $scope.funcOrdem = function(coluna) {

          $scope.ordem = coluna;
          $scope.reverso = !$scope.reverso;

        }

    }
