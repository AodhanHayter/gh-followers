'use strict'

const app = angular.module('followersApp', []);

app.controller('followersController',
	function ($scope,$http){
 		var gitUsers = 'https://api.github.com/users';

 		$http.get(gitUsers)
		.success(function(users){
			$scope.users = users;
        })
        
        
         
 	}
); 