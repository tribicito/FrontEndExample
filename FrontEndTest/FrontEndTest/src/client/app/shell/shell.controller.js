(function () {
    "use strict";

    var moduleName = "app.controller";
    var controllerId = "ShellController";
    var controllerInjection = [];

    function shellController() {

        var vm = this;    
    }

    shellController.$inject = controllerInjection;

    angular
        .module(moduleName)
        .controller(controllerId, shellController);

})();