angular.module("app").controller("controlador1", function ($scope,distribuidorFactory) {
    $scope.listado = [
        {id: 1, descripcion: "Distribuidor1"},
        {id: 2, descripcion: "Distribuidor2"}
    ];

    $scope.distribuidores = [
        {idDistribuidor: 1, Distribuidor: "Distribuidor1"},
        {idDistribuidor: 2, Distribuidor: "Distribuidor2"}
    ];
    $scope.distribuidor = null;
    $scope.descripcion="Descripcion del distribuidor";
    $scope.submit = function () {
        var str = "Id Distribuidor : " + $scope.distribuidor;
        str += " Distribuidor : " + $scope.descripcion;
        alert(str);
    };
    
    var getListDistribuidores = function(){
        distribuidorFactory.getList();
    };
    getListDistribuidores();
});