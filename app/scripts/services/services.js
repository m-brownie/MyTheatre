angular.module('myTheatreApp')
    .factory('myTheatreFactory', ['$http', function ($http) {

    var myTheatreFactory = {};    
        
    var urlBase = 'https://api.themoviedb.org/3/';
    var apiKey = '?api_key=8918f340bddbe963dd421f52011e267f';
    var jsonp = '&callback=JSON_CALLBACK';

    return {

        /*
        * Get all the movies.
        */
        discoverMovies: function (year, month, day) {
            // return $http.jsonp(urlBase + 'discover/movie' + apiKey + jsonp);
            return $http.jsonp(urlBase + "discover/movie" + apiKey + "&callback=JSON_CALLBACK&release_date.gte=" + year + "-" + month + "-" + day);
        }
    }

}]);