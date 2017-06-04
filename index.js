'use strict'

const app = angular.module('followersApp', ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'main_controller',
            templateUrl: 'main.html'
        })
        .when('/:github_user/followers', {
            templateUrl: 'followers.html'
        })
        .otherwise({
            redirectTo: "/"
        })
})

app.controller('main_controller', function($scope, $http, $location){
    $scope.users_list = []

    $http.get('https://api.github.com/users')
        .then(function success(response){
            var github_users = response.data
            angular.forEach(github_users, function(doc){
                var url = doc.url
                $http.get(url)
                    .then(function success(response){
                        $scope.users_list.push(response.data)
                    },function error(response){
                        $location.path('/404')
                    })
            })
        },function error(response){
            $location.path('/404')
        })
})
