describe('ListController', function () {
    var $componentController, $window;

    beforeEach(module('followersApp'));
    beforeEach(module('list'));

    beforeEach(inject(function (_$componentController_, _$window_,) {
        $componentController = _$componentController_;
        $window = _$window_;
    }));

    it('should have controller defined', function () {
        var ctrl = $componentController('list');
        expect(ctrl).toBeDefined();
    });

    it('should call $window.open when calling openUrl', function() {
        var ctrl = $componentController('list');
        var url = 'https://oneurltoopen.com';
        spyOn($window, 'open');
        ctrl.openUrl(url);
        expect($window.open).toHaveBeenCalledWith(url);
    });

    it('should have defined the correct bindings sending users', function () {
        var users = [{ id: 2, login: 'pablodotnet' }, { id: 3, login: 'anotheruser' }];
        var bindings = { type: 'users', users: users, withSearch: true };
        var ctrl = $componentController('list', null, bindings);
        expect(ctrl.type).toEqual('users');
        expect(ctrl.users).toEqual(users);
        expect(ctrl.withSearch).toBe(true);
    });

    it('should have defined the correct bindings sending repositories', function () {
        var repositories = [{ id: 2214, name: 'first_repo' }, { id: 34234, name: 'second_repo' }];
        var bindings = { type: 'repositories', repositories: repositories };
        var ctrl = $componentController('list', null, bindings);
        expect(ctrl.type).toEqual('repositories');
        expect(ctrl.repositories).toEqual(repositories);
    });
});