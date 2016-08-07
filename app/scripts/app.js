'use strict';

angular.module('myTheatreApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
      // Home
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MyTheatreCtrl'
      })

      // Films
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: "MoviesCtrl"
      })

      // Séries
      .when('/shows', {
        templateUrl: 'views/shows.html',
        controller: "ShowsCtrl"
      })

      // Autre
      .otherwise({
        redirectTo: '/'
      });
  });
