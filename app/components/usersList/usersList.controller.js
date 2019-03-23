angular
    .module('usersList')
    .controller('UsersListController', ['$scope', function ($scope) {
        // Function to open user details page
        this.openDetails = function(user) {
            console.log(user);
        }
    }])