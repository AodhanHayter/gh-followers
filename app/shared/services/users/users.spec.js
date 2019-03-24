describe('Users Service', function () {
    var $q, Users, $httpBackend, $scope;

    beforeEach(module('followersApp'));

    beforeEach(inject(function (_Users_, _$q_, _$httpBackend_, _$rootScope_) {
        $q = _$q_;
        Users = _Users_;
        $httpBackend = _$httpBackend_;
        $scope = _$rootScope_.$new();
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('gets all users', function () {
        var users;
        var expectedResponse = [{ id: 1 }, { id: 2 }, { id: 3 }];

        $httpBackend.whenGET('https://api.github.com/users').respond(expectedResponse);
        Users.getAllUsers().then(function (response) {
            users = response.data;
        });
        $httpBackend.flush();
        expect(users.length).toBeGreaterThan(0);
    });

    it('get single user details', function () {
        var user;
        var expectedResponse = { 
            id: 5, 
            login: 'pablodotnet', 
            html_url: 'https://oneurl.com', 
            avatar_url: 'https://avatarurl.com' 
        };

        $httpBackend.whenGET('https://api.github.com/users/pablodotnet').respond(expectedResponse);
        Users.getUserDetails('pablodotnet').then(function (response) {
            user = response.data;
        });
        $httpBackend.flush();
        expect(user).toEqual(expectedResponse);
    });

    it('gets all user\'s followers', function () {
        var followers;
        var expectedResponse = [
            { id: 10, login: 'follower_one' }, 
            { id: 22, login: 'follower_two' }, 
            { id: 33, login: 'follower_three' }
        ];

        $httpBackend.whenGET('https://api.github.com/users/pablodotnet/followers').respond(expectedResponse);
        Users.getUserFollowers('pablodotnet').then(function (response) {
            followers = response.data;
        });
        $httpBackend.flush();
        expect(followers.length).toBeGreaterThan(0);
    });

    it('gets all user\'s followings', function () {
        var followings;
        var expectedResponse = [
            { id: 20, login: 'following_one' }, 
            { id: 32, login: 'following_two' }, 
            { id: 43, login: 'following_three' }
        ];

        $httpBackend.whenGET('https://api.github.com/users/pablodotnet/following').respond(expectedResponse);
        Users.getUserFollowings('pablodotnet').then(function (response) {
            followings = response.data;
        });
        $httpBackend.flush();
        expect(followings.length).toBeGreaterThan(0);
    });

    it('gets all user\'s repositories', function () {
        var repositories;
        var expectedResponse = [
            { id: 2052, html_url: 'https://github.com/repository_one' }, 
            { id: 3212, html_url: 'https://github.com/repository_two' }, 
            { id: 4376, html_url: 'https://github.com/repository_three' }
        ];

        $httpBackend.whenGET('https://api.github.com/users/pablodotnet/repos').respond(expectedResponse);
        Users.getUserRepositories('pablodotnet').then(function (response) {
            repositories = response.data;
        });
        $httpBackend.flush();
        expect(repositories.length).toBeGreaterThan(0);
    });
});