angular
    .module('users')
    .controller('UsersController', ['$scope', 'Users', function ($scope, Users) {
        // Function to get all users and assign them to $scope
        Users.getAllUsers().then((response) => {
            this.users = response.data;
        });
    }])