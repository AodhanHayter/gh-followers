(function () {
    'use strict';

    angular.module('followersApp').component('gitUsers', {
        controllerAs: 'vm',
        controller: function(userService){
            var vm=this;
            vm.users = null; 
            vm.$onInit = function(){
              userService.getAllusers().then(function(users){
                  vm.users = users;
              })
            }
        },
       
       
        templateUrl: 'users/git-users.html'
    });
})();


