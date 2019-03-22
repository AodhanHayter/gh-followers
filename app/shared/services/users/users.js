app.factory('Users',
    ['$http',
        function ($http) {

            var fnsObject;
            var usersUrl = 'https://api.github.com/users';

            fnsObject = {
                getAllUsers: function () {
                    return $http.get(usersUrl);
                }

            }; //return

            return fnsObject;

        }
    ]); //factory