"use strict";

app.factory("UserFactory", function($http){


  var urlUsers = "https://api.github.com/users";

  var UserFactory = {

    getUsers:function(){
      return $http.get(urlUsers).success(function(data){
        return data
      })
      .error(function(err){
        console.log(err)
      })
    }
  }

  return UserFactory;

})
