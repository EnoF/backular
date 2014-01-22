(function () {
    'use strict';

    var app = angular.module('<%= appname %>App');

    app.controller('<%= name %>Controller', function ($scope) {

    });

    app.directive('<%= name %>', function () {
        return {
            restrict: 'EA',
            scope: {

            },
            controller: '<%= name %>Controller'
        };
    });
}());