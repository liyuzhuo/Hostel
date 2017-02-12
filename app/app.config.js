'use strict';

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
