(function () {
    "use strict";

    var moduleName = "app.service";
    var factoryName = "inspectionService";
    var factoryInjection = ["$http", "$q", "commonService", "commonConfig"];

    function inspectionService($http, $q, commonService, commonConfig) {

        var urlBase = commonConfig.connectionBase.app;

        function getUsers() {

            var data = [];
                        
                return $http.get(urlBase + "users/")
                    .then(function (response) {

                        if (response && response.data) {
                            data = response.data;                           
                        }

                        return $q.when({ content: data });
                    })
                    .catch(function (response) {
                       return $q.reject(response);
                    });            
        }

        

        return {
            getUsers: getUsers
        };
    }

    inspectionService.$inject = factoryInjection;

    angular
        .module(moduleName)
        .factory(factoryName, inspectionService);

})();