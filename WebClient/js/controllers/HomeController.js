'use strict';

app.controller('HomeController', ['$scope', 'notifier', 'stats', function($scope, notifier, stats) {

    stats.systemStats().then(function(data)
    {
        $scope.trips = data.trips;
        $scope.finishedTrips = data.finishedTrips;
        $scope.users = data.users;
        $scope.drivers = data.drivers;
        notifier.success("System stats loaded!");
    });
    stats.trips().then(function(data)
    {
        $scope.tripsList = data;
        notifier.success("Trips data loaded!");
    });
    stats.drivers().then(function(data)
    {
        $scope.driversList = data;
        notifier.success("Drivers data loaded!");
    });
    /*stats.cities().then(function(data)
    {
    });*/
}]);