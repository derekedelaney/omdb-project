angular.module('myModule').factory('omdbFactory', ['$http',
    function($http) {
        return {
            titleSearch:function(title) {
                return $http.get('http://www.omdbapi.com/?t=' + title + '&tomatoes=true&plot=full');
            },
            generalSearch:function(title) {
                return $http.get('http://www.omdbapi.com/?s=' + title);
            },
            imdbSearch:function(movieId) {
                return $http.get('http://www.omdbapi.com/?i=' + movieId + '&plot=full&r=json');
            }
        };
    }
]);
