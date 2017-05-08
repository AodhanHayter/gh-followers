class UsersService {
  constructor($http) {
    this.$http = $http;
    this.getUsers = function () {
      return this.$http.get('https://api.github.com/users');
    };
  }
}
export default UsersService;
