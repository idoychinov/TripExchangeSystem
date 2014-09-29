'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

        var routeUserChecks = {
            authenticated: {
                authenticate: function(auth) {
                    return auth.isAuthenticated();
                }
            }
        };

        $routeProvider
            .when('/', {
                templateUrl: '/views/partials/home.html',
                controller: 'HomeController'
            })
            .when('/register', {
                templateUrl: '/views/partials/register.html',
                controller: 'SignUpController'
            })
            .when('/trips', {
                templateUrl: '/views/partials/trips.html',
                controller: 'TripsController'
            })
            .when('/drivers', {
                templateUrl: '/views/partials/drivers.html',
                controller: 'DriversController'
            })
            .when('/drivers/:id', {
                templateUrl: '/views/partials/drivers-details.html',
                controller: 'DriversDetailsController',
                resolve: routeUserChecks.authenticated
            })
            .when('/trips/:id', {
                templateUrl: '/views/partials/trips-details.html',
                controller: 'TripsDetailsController',
                resolve: routeUserChecks.authenticated
            })
            .when('/unauthorized', {
                templateUrl: '/views/partials/unauthorized.html'
            })
            .otherwise({ redirectTo: '/' });
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://spa2014.bgcoder.com');

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/unauthorized');
        }
    })
});
