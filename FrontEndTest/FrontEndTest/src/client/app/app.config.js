(function () {
    "use strict";

    var constantName = "appConfig";
    var moduleName = "app.config";
    var moduleInjection = [];
    
    var appConfig = {
        applicationName: "FrontEndExample.web",
        applicationVersion: "1.0.0.0"
    };

    angular
       .module(moduleName, moduleInjection)
       .constant(constantName, appConfig);

})();