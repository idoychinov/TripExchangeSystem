'use strict';

app.controller('DriversController', ['$scope', 'notifier', 'identity','drivers', function($scope, notifier, identity, drivers) {
    $scope.identity = identity;
    $scope.page = 1;

    $scope.loadPage = function() {
        drivers.listWithFilters($scope.page, $scope.search, identity.isAuthenticated()).then(function (data) {
            $scope.driversList = data;
            notifier.success("Drivers data loaded!");
        })
            .catch(function (data) {
                notifier.success("Error loading driver data");
            });
    };

    $scope.loadPage();

}]);