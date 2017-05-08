import './users.scss';

class UsersComponent {
  constructor(usersService, $log) {
    this.usersService = usersService;
    this.log = $log;
    this.usersService.getUsers()
      .then(re => {
        this.users = re.data;
      });
  }
}
export const Users = {
  template: require('./users.html'),
  controller: UsersComponent,
  restrict: 'E',
  transclude: true
};
