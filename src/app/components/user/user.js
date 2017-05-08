import './user.scss';

class UserComponent {
  constructor(usersService, $stateParams, $state) {
    this.usersService = usersService;
    if ($stateParams.login) {
      this.usersService.getUser($stateParams.login)
        .then(re => {
          this.user = re.data;
        });
    } else {
      $state.go('users');
    }
  }
}
export const User = {
  template: require('./user.html'),
  controller: UserComponent,
  restrict: 'E',
  transclude: true
};
