'use strict'

const app = angular.module('followersApp', ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'main_controller',
            templateUrl: 'main.html'
        })
        .when('/:github_user/followers', {
            controller: 'followers_controller',
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

app.controller('followers_controller', function($scope, $http, $location, $routeParams){
    var github_user = $routeParams.github_user
    $http.get('https://api.github.com/users/'+github_user)
        .then(function success(response){
            $scope.user = response.data
        },function error(response){
            $location.path('/404')
        })

    $http.get('https://api.github.com/users/'+ github_user +'/followers')
        .then(function success(response){
            $scope.followers_list = response.data
        },function error(response){
            $location.path('/404')
        })

    $scope.go_back = function(){
        $location.path('/')
    }


})
