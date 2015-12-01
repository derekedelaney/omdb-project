angular.module('myModule').factory('myListFactory', [
    function() {
        var movies = [];
        return {
            addMovie:function(movie) {
                movies.push(movie);
            },
            getMovies:function() {
                return movies;
            },
            removeMovie:function(movieId) {
                for (var i = 0; i < movies.length; i++) {
                    if(movies[i].imdbID == movieId){
                        movies.splice(i, 1);
                    }
                }
            }
        };
    }
]);
