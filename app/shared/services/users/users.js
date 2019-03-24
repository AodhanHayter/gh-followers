app.factory('Users',
    ['$http', '__env',
        function ($http, __env) {
            var fnsObject;
            var apiKey = __env.githubApiKey;
            var usersUrl = 'https://api.github.com/users';
            var options = {
                params: {
                    access_token: apiKey
                }
            };

            fnsObject = {
                getAllUsers: function () {
                    return $http.get(usersUrl, options);
                },
                getUserDetails: function(username) {
                    return $http.get(usersUrl+`/${username}`, options);
                },
                getUserFollowers: function(username) {
                    return $http.get(usersUrl+`/${username}/followers`, options);
                },
                getUserFollowings: function(username) {
                    return $http.get(usersUrl+`/${username}/following`, options);
                },
                getUserRepositories: function(username) {
                    return $http.get(usersUrl+`/${username}/repos`, options);
                }

            };

            return fnsObject;

        }
    ]);