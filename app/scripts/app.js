'use strict';

angular.module('myTheatreApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MyTheatreCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
