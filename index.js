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

		$scope.follows = function(id){
			$('.insert').html('');
			$('.modal-title').html(id + ' - followers')
			var followers = 'https://api.github.com/users/'+id+'/followers';
			var html = '';
			$http.get(followers)
				.success(function(followers){
					//$scope.followers = followers;
					angular.forEach(followers, function(value, key) {
					  console.log(value);
					  html += '<div class="col-sm-4 insert2">'+
		  						'<img src="'+value.avatar_url+'">'+
		  					'<h4>'+value.id+' - '+value.login+'</h4>'+
		  					'</div>';
					});
				$('.insert').html(html);
				})
			
		};

	}
);