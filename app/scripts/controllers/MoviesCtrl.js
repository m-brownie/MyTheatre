'use strict';

angular.module('myTheatreApp').controller('MoviesCtrl', function ($scope, myTheatreMoviesFactory) {
    // Gestion de la date du jour
    var date = new Date();
    var year = date.getUTCFullYear();
    var month  = date.getUTCMonth() + 1;
    var day = date.getUTCDate();

    // Récupération de la liste des derniers films sortie
    myTheatreMoviesFactory.discoverMovies(year, month, day).success(function(data) {
        $scope.movies = data.results;

        // Configuration des images
        $scope.configImagePoster = "http://image.tmdb.org/t/p/w300";
        $scope.configImageBackdrop = "http://image.tmdb.org/t/p/w500";
        var configImageBackdrop = "http://image.tmdb.org/t/p/original";

        // On prend un élément au hasard dans le tableau pour en faire l'image de fond de la page
        var item = data.results[Math.floor(Math.random() * data.results.length)];
        $scope.$parent.backgroundImage = configImageBackdrop + item.backdrop_path;
    });
});
