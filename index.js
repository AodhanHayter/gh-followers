'use strict'

const app = angular.module('followersApp', []);

app.controller('followersController',
	function ($scope,$http){
 		var gitUsers = 'https://api.github.com/users';

 		$http.get(gitUsers)
		.success(function(users){
			$scope.users = users;
        })
        
        $scope.userSelected = '';
        $scope.followers = [];
        
        $scope.followersList = function(id){
            $scope.followers = [];
			$scope.userSelected = id;
			var apiFollowers = 'https://api.github.com/users/'+id+'/followers';
			$http.get(apiFollowers)
				.success(function(followers){
					$scope.followers = followers;				
				})

        };
         
 	}
); 