angular
    .module('list')
    .component('list', {
        templateUrl: 'components/list/list.template.html',
        controller: "ListController",
        bindings: {
            type: "@",
            users: "=",
            repositories: "=",
            withSearch: "<"
        }
    });