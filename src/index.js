import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';
import {Users} from './app/components/users/users';
import {User} from './app/components/user/user';
import usersService from './app/services/users.service';

export default angular
  .module('app', [
    'ui.router',
    usersService
  ])
  .config(routesConfig)
  .component('users', Users)
  .component('user', User)
  .name;
