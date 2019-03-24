describe('UsersController', function () {
    var $componentController, $rootScope, Users, $q;
    var allUsers = [{ id: 4, login: 'userOne' }, { id: 5, login: 'userTwo '}];

    beforeEach(module('followersApp'));
    beforeEach(module('users'));

    beforeEach(inject(function (_$componentController_, _$rootScope_, _Users_, _$q_) {
        $componentController = _$componentController_;
        $rootScope = _$rootScope_;
        $q = _$q_;
        Users = _Users_;
        spyOn(Users, 'getAllUsers').and.returnValue($q.resolve({ data: allUsers }));
    }));

    it('should have controller defined', function () {
        var ctrl = $componentController('users');
        expect(ctrl).toBeDefined();
    });

    it('should have called getAllUsers and assigned them to users variable', function () {
        var ctrl = $componentController('users');
        $rootScope.$apply();
        expect(Users.getAllUsers).toHaveBeenCalled();
        expect(ctrl.users.length).toEqual(allUsers.length);
    });

});