angular.module("app").factory("distribuidorFactory", function ($q, $http) {
    var factory = {};
    factory.getList = function () {
        var parametros = {};
        $http.post("http://192.168.50.37:8989/SoftvWCFService.svc/TipoDistribuidor/GetTipoDistribuidorList", JSON.stringify(parametros)).success(function(data,status,headers,config){
            console.log(data);
        }).error();
    };
    factory.getList();
    return factory;
});

