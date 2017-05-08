export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/followers');

  $stateProvider
    .state('users', {
      url: '/followers',
      component: 'users'
    })
    .state('user', {
      url: '/followers/:login',
      component: 'users'
    });
}
