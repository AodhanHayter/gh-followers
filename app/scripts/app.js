'use strict';

/**
 * @ngdoc overview
 * @name githubStalkerApp
 * @description
 * # githubStalkerApp
 *
 * Main module of the application.
 */
angular
  .module('githubStalkerApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ngSanitize'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    var mainstate = {
      name: 'main',
      url: '/',
      template: 'mainComp'
    }
    var followersstate = {
      name: 'followers',
      url: '/followers/{login}',
      template: 'followersComp'
          }
    $stateProvider.state(mainstate);
  $stateProvider.state(followersstate);
  })
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
