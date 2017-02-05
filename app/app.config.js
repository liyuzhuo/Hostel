'use strict';

angular.
  module('hostelApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/', {
          template: '/partials/home.html'
        }).
        when('/rooms', {
          template: '/partials/rooms.html'
        }).
        when('/food', {
          template: '/partials/food.html'
        });
    }
  ]);
