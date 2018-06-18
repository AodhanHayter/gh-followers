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

	$(function(){
		$(document).on('click', '.link-followers', function(){
			let followers_url = $(this).text();
			let user = {
				id: $(this).data('user-id'),
				login: $(this).data('user-login'),
				followers: null
			}

			$http.get(followers_url).then((response) => {
				user.followers = response.data;

				$scope.user = user;
				$("#followersModal").modal({show: true});
			});
		});
	});
});

/*
 SCROLLING EFFECTS
*/

$(function(){
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});
});