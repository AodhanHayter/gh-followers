(function(){
    'use strict'

    angular.module('followersApp').factory('userService',function(apiBase, $http){
        var self = this;

        self.getAllusers = function(){
            return $http.get(apiBase)
                .then(function(result){
                    return result.data
                    console.log(result.data)
                })
        }

        self.getUser = function(userId){
            return $http.get(apiBase + userId)
                .then(function(result){
                    return result.data
                    console.log(result.data)
                })
        }

        
        self.getFollowers = function(userId){
            return $http.get(apiBase + '/'+ userId + '/followers'   )
                .then(function(result){
                    return result.data
                    console.log(result.data)
                })
        }


        return this;

    }); 
})();   