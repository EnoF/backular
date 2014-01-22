(function(){
    'use strict';

    describe('Widget: <%= name %>', function () {

        // load the controller's module
        beforeEach(module('<%= appname %>App'));

        var <%= name %>Controller,
            scope;

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            <%= name %>Controller = $controller('<%= name %>Controller', {
                $scope: scope
            });
        }));

        it('should do [@TODO]', function(){

        });

    });
}());