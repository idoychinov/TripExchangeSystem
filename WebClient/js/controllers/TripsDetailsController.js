'use strict';

app.controller('TripsDetailsController', ['$scope', 'notifier', 'identity', 'trips', function($scope, notifier, identity, trips) {
    $scope.identity = identity;

}]);