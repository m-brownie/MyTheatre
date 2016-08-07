'use strict';

// Controlleur principale
angular.module('myTheatreApp').controller('MyTheatreCtrl', function ($scope, $location, myTheatreMoviesFactory) {

    // Création du menu
    $scope.menus = [{
        title: 'Cinéma',
        link: '#movies',
    }, {
        title: 'Séries',
        link: '#shows'
    }];

    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
});
