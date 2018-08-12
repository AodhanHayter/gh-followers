(function () {
    'use strict';

    angular.module('followersApp').component('userDetail', {
        bindings: {
            userId: '<'
        },
        controllerAs:'vm',
        controller: function(userService){
            var vm = this;
            vm.followers = null;

            vm.$onInit = function () {
                if(vm.userId){
                    userService.getFollowers(vm.userId).then(function(followers){
                        vm.followers = followers;
                        console.log(followers)
                    });  
                }
            
             }  
            
        },

        templateUrl: 'users/user-detail.html'
    });
})();

