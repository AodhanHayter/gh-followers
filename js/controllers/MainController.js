app.controller('MainController', ['$scope', 'fetchUsers', 'fetchFollowers',($scope, fetchUsers, fetchFollowers) => {
    $scope.message = 'Choose an user';   
    $scope.followerMessage = 'Your followers!';
    $scope.users = [];
    $scope.followers = [];
    
    fetchUsers.success(data => {
        const sanitazedData = data.items.map(user => {
            return {
                username: user.login,
                followersUrl: user.followers_url
            }
        });
        $scope.users = sanitazedData;
    });
    
    $scope.showFollowers = function(user){
        $scope.message = `User selected: ${user.username}`;
        fetchFollowers(user.followersUrl)
            .success(data => {
                const followersInfo = data.map(follower => {
                    return {
                        username: follower.login,
                        img: follower.avatar_url                        
                    }
                })
                $scope.followers = followersInfo;
            })            
    };

    $scope.resetState = function(){
        $scope.followers = [];
        $scope.message = 'Select and user to continue';
        $scope.followerMessage = 'No followers :( ';
    }
}])  
