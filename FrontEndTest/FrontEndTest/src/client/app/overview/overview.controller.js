(function () {
    "use strict";

    var moduleName = "app.controller";
    var controllerId = "OverviewController";
    var controllerInjection = ["userService"];

    function overviewController(userService) {

        var vm = this;

        vm.users = userService.users;
        vm.test = userService.users.length;

        function calculateColorStatistics() {

            // Go thru the vm.users array to calculate the different colors and ages
            vm.users.forEach(function(x){


            })
        }
        
    }

    overviewController.$inject = controllerInjection;

    angular
        .module(moduleName)
        .controller(controllerId, overviewController);

})();