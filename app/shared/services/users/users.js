app.factory('Users',
    ['$http', '__env',
        function ($http, __env) {
            var fnsObject;
            var apiKey = __env.githubApiKey;
            var usersUrl = 'https://api.github.com/users';

            fnsObject = {
                getAllUsers: function () {
                    return $http.get(usersUrl+`?access_token=${apiKey}`);
                },
                getUserDetails: function(username) {
                    return $http.get(usersUrl+`/${username}?access_token=${apiKey}`);
                },
                getUserFollowers: function(username) {
                    return $http.get(usersUrl+`/${username}/followers?access_token=${apiKey}`);
                },
                getUserFollowings: function(username) {
                    return $http.get(usersUrl+`/${username}/following?access_token=${apiKey}`);
                },
                getUserRepositories: function(username) {
                    return $http.get(usersUrl+`/${username}/repos?access_token=${apiKey}`);
                }

            };

            return fnsObject;

        }
    ]);