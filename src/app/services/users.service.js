class UsersService {
  constructor($http) {
    this.$http = $http;
    this.getUsers = function () {
      return this.$http.get('https://api.github.com/users');
    };
    this.getUser = function (login) {
      return this.$http.get('https://api.github.com/users/' + login);
    };
  }
}
export default angular.module('services.users-service', [])
  .service('usersService', UsersService)
  .name;
