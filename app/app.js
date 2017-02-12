'use strict';

// Declare app level module which depends on views, and components
var hostelApp = angular.module('hostelApp', ['ngRoute']);

hostelApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'partials/home.html'
        }).
        when('/rooms', {
          templateUrl: 'partials/rooms.html'
        }).
        when('/food', {
          templateUrl: 'partials/food.html'
        }).
        otherwise({
          redirectTo:'partials/home.html'
        });
    }
  ]);
