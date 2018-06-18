"use strict";

app.controller("HomeController", function(UserFactory){
  var vm = this;

  vm.users=[]

  UserFactory.getUsers().then(function(data){
    vm.users = data.data;

  })
});
