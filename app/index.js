'use strict'

const app = angular.module('followersApp', [
	'ngRoute',
	'ngMaterial',
    'ngMessages',
    'navBar',
    'dashboard',
    'usersList'
])

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.
	when('/dashboard', {
		template: '<dashboard></dashboard>',
	}).
	otherwise({
		redirectTo: '/dashboard'
	});
}]);