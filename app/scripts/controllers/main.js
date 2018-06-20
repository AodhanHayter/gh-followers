'use strict';

/**
 * @ngdoc function
 * @name githubStalkerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubStalkerApp
 */
angular.module('githubStalkerApp')
  .controller('MainCtrl', function ($http) {
    this.$http = $http;
    this.goBack = function () {
      $('#fetchedusers').show('fast');
      $('#fetchedfollowers').hide('fast');
      $('#mainuser').hide('fast');
    };
    this.fetchUsers = function () {
      return this.$http.get('https://api.github.com/search/users?q=followers:%3E10');
    };
    this.fetchFollowers = function (login) {
    	console.log(login);
      $http.get('https://api.github.com/users/'+login+'/followers').then(req =>{
      this.followers= req.data;
      console.log(req.data)

      });
      $http.get('https://api.github.com/users/' + login).then(req =>{
      this.mainuser= req.data;
      console.log(req.data)

      });
    
    // this.mainuser=getMainuser(login)
      // this.mainuser= this.$http.get('https://api.github.com/users/' + login);
      // console.log(this.followers);
      $('#fetchedusers').hide('fast');
      $('#fetchedfollowers').show('fast');
      $('#mainuser').show('fast');
    };
    this.fetchUsers().then(req =>{
    	this.users= req.data.items
    	console.log(req.data.items);
    });

  })
    .component('mainComp', {
    controller: 'MainCtrl',
      templateUrl: '../../views/main.html'

  });
