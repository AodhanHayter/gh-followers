"use strict";


app.controller("FollowersController", function(FollowersFactory){
  //Getting user
  var url = window.location.href;
  var urlElems = []
  urlElems=url.split("/")
  var user = urlElems[urlElems.length-1]

  var vm = this;

  vm.followers=[]

  FollowersFactory.getFollowers(user).then(function(data){
    vm.followers = data.data;
  })
});
