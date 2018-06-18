'use strict'

function user(){
	this.id = null;
	this.login = null;
	this.followers_url = null; 
}

let app = angular.module('followersApp', []);

app.controller('fController', function($scope, $http) {
	let url = 'https://api.github.com/users';

	$http.get(url).then((response) => {
		$scope.users = response.data;
	})
});