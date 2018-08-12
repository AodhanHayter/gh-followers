// (function(){

//     'use strict'

// const app = angular.module('followersApp', [])



// })();


(function () {
    'use strict';

    var appModule = angular.module('followersApp', ['ui.router']);

    appModule.value('apiBase', 'https://api.github.com/users');

  

    appModule.config(function ($stateProvider, $urlRouterProvider) {


        var states = [
            {
                name: 'home',
                url: '',
                template: '<home></home>',
                component: 'home'
            },
            {
                name: 'home2',
                url: '/',
                template: '<home></home>'
            },
            {
                name: 'users',
                url: '/users',
                template: '<git-users></git-users>'
            },
            {
                name: 'user',
                url: '/user/{userId}',
                resolve: {
                    userId: function($stateParams){
                        return $stateParams.userId
                    }
                },
                template:'<user-detail user-id="$resolve.userId"></user-detail>'
            },
            {
                name: 'user.followers',
                url: '/followers',
                template: '<followers-user user="vm.user"></followers-user>'
            },
        ];

        $urlRouterProvider.when('/users/:userId', '/users/:userId/followers');
        $urlRouterProvider.otherwise('/');

        states.forEach(function (state) {       
            $stateProvider.state(state);
        });
    });

})();