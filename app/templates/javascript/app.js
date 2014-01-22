(function () {
    'use strict';

    angular.module('<%= appName %>', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
}());