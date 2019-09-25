(function () {
    "use strict";

    var moduleName = "app.connection";
    var moduleInjection = [];
    var constantName = "connectionConfig";
    var connectionConfig = {        
        "connectionBase": {            
            connection: "http://localhost:8080/"
        }
    };

    angular
        .module(moduleName, moduleInjection)
        .constant(constantName, connectionConfig);

})();