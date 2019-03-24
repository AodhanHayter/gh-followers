angular
    .module('users')
    .controller('UserDetailsController', ['$scope', 'Users', '$routeParams', '$window', 
        function ($scope, Users, $routeParams, $window) {
            this.username = $routeParams.username;

            // Function to get all user information
            Users.getUserDetails(this.username).then((response) => {
                this.user = response.data;
            });

            // Function to get all user followers
            Users.getUserFollowers(this.username).then((response) => {
                this.followers = response.data;
            });

            // Function to get all user followings
            Users.getUserFollowings(this.username).then((response) => {
                this.followings = response.data;
            });

            // Function to get all user repositories
            Users.getUserRepositories(this.username).then((response) => {
                this.repositories = response.data;
            });

            // Function to open url in new tab
            this.openUrl = (url) => {
                $window.open(url);
            }
        }
    ])