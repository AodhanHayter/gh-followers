import './users.scss';

class UsersComponent {
  constructor(usersService) {
    this.usersService = usersService;
    this.usersService.getUsers()
      .then(re => {
        this.users = re.data;
      });
  }
}
UsersComponent.$inject = ['usersService'];
export const Users = {
  template: require('./users.html'),
  controller: UsersComponent,
  restrict: 'E',
  transclude: true
};
