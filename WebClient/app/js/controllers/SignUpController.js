'use strict';

app.controller('SignUpController', ['$scope', '$location', 'auth', 'notifier', function($scope, $location, auth, notifier) {
    $scope.signup = function(userDetiles,isDriver,carName) {
        var user = userDetiles;
        user.isDriver = isDriver;
        if(isDriver)
        {
            user.carName = carName
        }
        auth.signup(user).then(function(message) {
            console.log(message);
            notifier.success('Registration successful!');
            $location.path('/');
        }).catch(function(errorMessage){
            notifier.error(errorMessage);
        })

    }

    $scope.isDriverOptions = [
        {type : 'No', isDriver : false},
        {type : 'Yes', isDriver : true}
    ]

    $scope.isDriverSelection = $scope.isDriverOptions[0];

    $scope.carName='';
}]);