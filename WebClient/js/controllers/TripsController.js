'use strict';

app.controller('TripsController', ['$scope', 'notifier', 'identity', 'trips', 'cities', function($scope, notifier, identity ,trips, cities) {

    $scope.identity = identity;
    $scope.page = 1;

   $scope.loadPage = function() {

       trips.listWithFilters($scope.page, $scope.sort.value, $scope.order.value, $scope.from ,$scope.to , $scope.finished, $scope.mine,identity.isAuthenticated()).then(function (data) {
            $scope.tripsList = data;
            notifier.success("Trips data loaded!");
        })
            .catch(function (data) {
                notifier.success("Error loading trips data");
            });
    };

    cities.getAll().then(function(data){

        $scope.cities = data;
        notifier.success("Cities loaded!");
    })
    .catch(function (data) {
        notifier.success("Error loading cities data");
    });

    $scope.sortOptions = [
        {type : 'Driver', value : 'driver'},
        {type : 'Date', value : 'date'},
        {type : 'Seats', value : 'seats'}
    ];

    $scope.orderOptions = [
        {type : 'Ascending', value:'asc'},
        {type : 'Descending', value:'desc'}
    ];


    $scope.sort = $scope.sortOptions[0];
    $scope.order = $scope.orderOptions[0];

    $scope.loadPage();
}]);