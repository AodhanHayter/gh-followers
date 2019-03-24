describe('UserDetailsController', function () {
    var $componentController, $routeParams, $rootScope, Users, $q, $window;
    var userDetails = { id: 1, login: 'pablodotnet', html_url: 'https://oneurl.com' };
    var userFollowers = [{ id: 4, login: 'follower_one' }, { id: 5, login: 'follower_two '}];
    var userFollowings = [{ id: 49, login: 'following_one' }, { id: 59, login: 'following_two '}];
    var userRepositories = [{ id: 4942, name: 'repository_one' }, { id: 5912, name: 'repository_two '}];

    beforeEach(module('followersApp'));
    beforeEach(module('userDetails'));

    beforeEach(inject(function (_$componentController_, _$routeParams_, _$rootScope_, _Users_, _$q_, _$window_) {
        $componentController = _$componentController_;
        $routeParams = _$routeParams_;
        $rootScope = _$rootScope_;
        $q = _$q_;
        $window = _$window_;
        $routeParams.username = 'pablodotnet';
        Users = _Users_;
        spyOn(Users, 'getUserDetails').and.returnValue($q.resolve({ data: userDetails }));
        spyOn(Users, 'getUserFollowers').and.returnValue($q.resolve({ data: userFollowers }));
        spyOn(Users, 'getUserFollowings').and.returnValue($q.resolve({ data: userFollowings }));
        spyOn(Users, 'getUserRepositories').and.returnValue($q.resolve({ data: userRepositories }));
    }));

    it('should have controller defined', function () {
        var ctrl = $componentController('userDetails');
        expect(ctrl).toBeDefined();
    });

    it('should have username defined from routeParams', function () {
        var ctrl = $componentController('userDetails');
        expect(ctrl.username).toEqual('pablodotnet');
    });

    it('should have called all functions to get user details', function () {
        var ctrl = $componentController('userDetails');
        $rootScope.$apply();
        expect(Users.getUserDetails).toHaveBeenCalled();
        expect(Users.getUserFollowers).toHaveBeenCalled();
        expect(Users.getUserFollowings).toHaveBeenCalled();
        expect(Users.getUserRepositories).toHaveBeenCalled();
    });

    it('should have assigned user details to user variable', function () {
        var ctrl = $componentController('userDetails');
        $rootScope.$apply();
        expect(ctrl.user).toEqual(userDetails);
    });

    it('should have assigned user followers to followers variable', function () {
        var ctrl = $componentController('userDetails');
        $rootScope.$apply();
        expect(ctrl.followers).toEqual(userFollowers);
    });

    it('should have assigned user followings to followings variable', function () {
        var ctrl = $componentController('userDetails');
        $rootScope.$apply();
        expect(ctrl.followings).toEqual(userFollowings);
    });

    it('should have assigned user repositories to repositories variable', function () {
        var ctrl = $componentController('userDetails');
        $rootScope.$apply();
        expect(ctrl.repositories).toEqual(userRepositories);
    });

    it('should call $window.open when calling openUrl', function() {
        var ctrl = $componentController('userDetails');
        var url = 'https://oneurltoopen.com';
        spyOn($window, 'open');
        ctrl.openUrl(url);
        expect($window.open).toHaveBeenCalledWith(url);
    });

});