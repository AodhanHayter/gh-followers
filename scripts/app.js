'use strict';

const app = angular.module('followersApp', ["ui.router"]);

//Creating routes
app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("home", {
      url:"/home",
      templateUrl:"views/home.html",
      controller:"HomeController",
      controllerAs:"home"
    })
    .state("followers",{
      url:"/followers/:user",
      templateUrl:"views/followers.html",
      controller:"FollowersController",
      controllerAs:"followers"
    });

    $urlRouterProvider.otherwise("/home");

})
