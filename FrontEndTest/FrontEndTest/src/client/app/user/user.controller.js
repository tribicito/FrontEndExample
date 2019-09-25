(function () {
    "use strict";

    var moduleName = "app.controller";
    var controllerId = "UserController";
    var controllerInjection = ["$state", "userService"];

    function userController($state, userService) {

        var vm = this;

        vm.registerUser = registerUser;

        vm.user = {
            firstName: "",
            lastName: "",
            age: "",
            colorPreference: ""
        };

        function registerUser() {
            userService.addUser(vm.user);

            $state.go("shell.overview");
        }
                
    }

    userController.$inject = controllerInjection;

    angular
        .module(moduleName)
        .controller(controllerId, userController);

})();