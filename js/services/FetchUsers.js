app.factory('fetchUsers', ['$http', ($http) => {
    return $http.get('https://api.github.com/search/users?q=tom+repos:%3E10+followers:%3E100')
        .success( data => data )
        .error( error => error ) 
}]);

app.factory('fetchFollowers', ['$http', ($http) => {    
    return (user) => {
        return $http.get(user)
            .success( data => data )
            .error( error => error )
    }
}]);