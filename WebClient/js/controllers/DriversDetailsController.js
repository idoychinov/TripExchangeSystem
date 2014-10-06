'use strict';

app.controller('DriversDetailsController', ['$scope', 'notifier', 'identity','drivers', function($scope, notifier, identity, drivers) {
    $scope.identity = identity;

    if(identity.isAuthenticated())
    {
        $scope.content="views/partials/drivers-details.html";

    }
    else
    {
        $scope.content="views/partials/unauthorized.html";
    }
}]);