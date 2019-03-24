//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [
            'lib/angular/angular.js',
            'lib/angular-animate/angular-animate.js',
            'lib/angular-aria/angular-aria.js',
            'lib/angular-loader/angular-loader.js',
            'lib/angular-material/angular-material.js',
            'lib/angular-messages/angular-messages.js',
            'lib/angular-mocks/angular-mocks.js',
            'lib/angular-route/angular-route.js',
            '*.js',
            'shared/**/*.js',
            'components/**/*.template.html',
            'components/**/*.module.js',
            'components/**/*.component.js',
            'components/**/*.controller.js',
            'components/**/*.component.spec.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ]

    });
};