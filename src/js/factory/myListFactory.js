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
            },
            hasMovie:function(movie){
                for (var i in movies){
                    if(movies[i].imdbID == movie.imdbID){
                        return true;
                    }
                    else return false;
                }
            }
        };
    }
]);
