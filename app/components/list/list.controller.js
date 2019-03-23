angular
    .module('list')
    .controller('ListController', ['$scope', '$window',
        function ($scope, $window) {
            // Function to open url in new tab
            this.openUrl = (url) => {
                $window.open(url);
            }
        }
    ])