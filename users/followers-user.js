(function () {
    'use strict';

    angular.module('followersApp').component('followersUser', {
        bindings: {
            userId: '<'
        },

         controllerAs: 'vm',
        controller: function () {
            var vm = this;
            
        },
        templateUrl: 'users/followers-user.html'
    });
})();


