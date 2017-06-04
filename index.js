'use strict'

const app = angular.module('followersApp', ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'main.html'
        })
        .when('/:github_user/followers', {
            templateUrl: 'followers.html'
        })
        .otherwise({
            redirectTo: "/"
        })
})
