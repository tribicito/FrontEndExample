(function () {
    "use strict";

    var moduleName = "app.route";
    var moduleInjection = ["ui.router"];
    var configInjection = ["$stateProvider", "$urlRouterProvider"];
    
    function configRoute($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("shell", {
                templateUrl: "src/client/app/shell/shell.html",
                controller: "ShellController",
                controllerAs: "vm"
            })
            .state("shell.user", {
                   url: "/user",
                   views: {
                       'content': {
                           templateUrl: "src/client/app/user/user.html",
                           controller: "UserController",
                           controllerAs: "vm"
                       }
                   }
            })
            .state("shell.overview", {
                url: "/overview",
                views: {
                    'content': {
                        templateUrl: "src/client/app/home/home.html",
                        controller: "HomeController",
                        controllerAs: "vm"
                    },
                    'content@shell.overview': {
                        templateUrl: "src/client/app/overview/overview.html",
                        controller: "OverviewController",
                        controllerAs: "vm"
                    }
                }
            });

        $urlRouterProvider.when("/", "/overview").otherwise("/");

    }

    configRoute.$inject = configInjection;

    angular
        .module(moduleName, moduleInjection)
        .config(configRoute);    

})();