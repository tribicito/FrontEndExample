(function () {
    "use strict";

    var moduleName = "app.controller";
    var controllerId = "HomeController";
    var controllerInjection = ["$state"];

    function homeController($state) {

        var vm = this;

        vm.enterUserInformation = enterUserInformation;

        function enterUserInformation() {
            $state.go("shell.user");
        }
                
    }

    homeController.$inject = controllerInjection;

    angular
        .module(moduleName)
        .controller(controllerId, homeController);

})();