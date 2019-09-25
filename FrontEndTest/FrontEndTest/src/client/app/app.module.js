(function () {
    "use strict";

    var moduleName = "app";
    var moduleInjection = [
        "app.config",
        "app.connection",
        "app.controller",
        "app.service",
        "app.route",
        "app.template",
        "ngAnimate",
        "ngSanitize",
        "ui.bootstrap"        
    ];

    var configAppInjection = ["appConfig", "connectionConfig"];

    function configApp(appConfig, connectionConfig) {

        angular.merge(appConfig, connectionConfig);
                
        
    }

    configApp.$inject = configAppInjection;

    angular.module(moduleName, moduleInjection);

    angular
       .module(moduleName)
       .config(configApp);

})();