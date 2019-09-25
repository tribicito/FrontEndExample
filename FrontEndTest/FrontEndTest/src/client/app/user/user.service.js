(function () {
    "use strict";

    var moduleName = "app.service";
    var factoryName = "userService";
    var factoryInjection = [];

    function userService() {

        var srv = this;
                
        srv.sessionModel = {
            users: []
        };
               
        function users() {
            return srv.sessionModel.users;
        }

        function addUser(user) {

            srv.sessionModel.users.push(user);            
        }

        return {
            users: users(),
            addUser: addUser
        };
    }

    userService.$inject = factoryInjection;

    angular
        .module(moduleName)
        .factory(factoryName, userService);

})();