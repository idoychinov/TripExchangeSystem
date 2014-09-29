'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {


        $routeProvider
            .when('/register', {
                templateUrl: 'views/partials/register.html',
                controller: 'SignUpController'
            })
            .when('/', {
                templateUrl: 'views/partials/home.html',
                controller: 'HomeController'
            })
            .when('/trips', {
                templateUrl: 'views/partials/trips.html',
                controller: 'TripsController'
            })
            .when('/drivers', {
                templateUrl: 'views/partials/drivers.html',
                controller: 'DriversController'
            })
            .otherwise({ redirectTo: '/' });
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://spa2014.bgcoder.com');