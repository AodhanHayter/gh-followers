describe('resizeImg filter', function () {

    var $filter;

    beforeEach(module('followersApp'));

    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }));

    it('returns correct url with size param defined', function () {
        var resizeImg = $filter('resizeImg');
        expect(resizeImg('https://imgurl.com', '40')).toEqual('https://imgurl.com?size=40');
    });

    it('returns correct url with size defined after another param', function () {
        var resizeImg = $filter('resizeImg');
        expect(resizeImg('https://imgurl.com?v=1', '40')).toEqual('https://imgurl.com?v=1&size=40');
    });
});