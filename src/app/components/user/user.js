import './user.scss';

class UserComponent {
  constructor(usersService, $stateParams, $state) {
    this.usersService = usersService;
    if ($stateParams.login) {
      this.usersService.getUser($stateParams.login)
        .then(re => {
          this.user = re.data;
        })
        .catch(err => {
          if (err.status === 404) {
            this.notFound = true;
          }
        });
    } else {
      $state.go('users');
    }
  }
}
UserComponent.$inject = ['usersService', '$stateParams', '$state', '$log'];
export const User = {
  template: require('./user.html'),
  controller: UserComponent,
  restrict: 'E',
  transclude: true
};
