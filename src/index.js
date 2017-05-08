import angular from 'angular';

import {Users} from './app/components/users/users';
import {User} from './app/components/user/user';
import UsersService from './app/services/users.service';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, [
    'ui.router'
  ])
  .config(routesConfig)
  .component('users', Users)
  .component('user', User)
  .service('usersService', UsersService);
