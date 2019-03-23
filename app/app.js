'use strict'

var env = {};

// Import from env.js
if (window) {
    Object.assign(env, window.__env);
}

const app = angular.module('followersApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'navBar',
    'users',
    'userDetails'
])

// Registering environment in AngularJS as constant
// so we can use it in all project where needed
app.constant('__env', env);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/users', {
        template: '<users></users>',
    }).
    when('/users/:username', {
        template: '<user-details></user-details>'
    }).
    otherwise({
        redirectTo: '/users'
    });
}]);