angular
    .module('usersList')
    .component('usersList', {
        templateUrl: 'components/usersList/usersList.template.html',
        controller: "UsersListController",
        bindings: {
            users: "="
        }
    });