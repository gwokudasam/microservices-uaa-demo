'use strict';

describe('Controller Tests', function() {

    describe('Device Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockDevice, MockDeviceGroup;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockDevice = jasmine.createSpy('MockDevice');
            MockDeviceGroup = jasmine.createSpy('MockDeviceGroup');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Device': MockDevice,
                'DeviceGroup': MockDeviceGroup
            };
            createController = function() {
                $injector.get('$controller')("DeviceDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'gatewayApp:deviceUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
