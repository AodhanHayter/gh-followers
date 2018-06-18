"use strict";

app.factory("FollowersFactory", function($http){



  var FollowersFactory = {

    //var user = "1nueve";

    getFollowers:function(user){
      var url = `https://api.github.com/users/${user}/followers`;
      return $http.get(url).success(function(data){
        return data
      })
      .error(function(err){
        console.log(err)
      })
    }
  }

  return FollowersFactory;

})
