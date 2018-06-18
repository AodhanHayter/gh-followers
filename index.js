'use strict'

const app = angular.module('followersApp', [])

$(function(){
	var url = 'https://api.github.com/users';

	$.get(url, null, function(users){
		$('#list').empty();

		users.forEach(function(user){
			$('#list').append('<li><div class="user-button" data-id-user="' + user.id + '" data-login="' + user.login + '" data-followers-url="' + user.followers_url + '" data-toggle="modal" data-target="#followersModal">' + user.id + ' - ' + user.login + '</div></li>');
		})
	});
});