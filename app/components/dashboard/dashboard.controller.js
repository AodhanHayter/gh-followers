angular
    .module('dashboard')
    .controller('DashboardController', ['$scope', 'Users', function ($scope, Users) {
        $scope.users = null;

        // Function to get all users and assign them to $scope
        Users.getAllUsers().then((response) => {
            $scope.users = response.data;
        });
    }])