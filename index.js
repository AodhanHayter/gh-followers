'use strict'

const app = angular.module('followersApp', []);

$('#followers').modal('show');

app.controller('followersCtr',
	function ($scope,$http){

		var users = 'https://api.github.com/users';
		$scope.titulo = 'followers app';

		$http.get(users)
		.success(function(users){
			$scope.users = users;
		})

		

	}
);