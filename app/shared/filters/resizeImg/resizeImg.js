app.filter('resizeImg', function() {
    return function(imgUrl, size) {
        var param = imgUrl.includes('?') ? '&' : '?';
        var newUrl = imgUrl + `${param}size=${size}`;
        return newUrl;
    }
});