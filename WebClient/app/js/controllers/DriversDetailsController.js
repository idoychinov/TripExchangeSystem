'use strict';

app.controller('DriversDetailsController', ['$scope', 'notifier', 'identity','drivers', function($scope, notifier, identity, drivers) {
    $scope.identity = identity;

}]);