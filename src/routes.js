export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/users');

  $stateProvider
    .state('users', {
      url: '/users',
      component: 'users'
    })
    .state('user', {
      url: '/user/:login',
      component: 'user'
    });
}
