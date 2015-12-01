angular.module('myModule').controller('listCtrl', ['$scope', 'myListFactory',
    function($scope, myListFactory){
        $scope.pageTitle = "My Movies";
        $scope.movies = myListFactory.getMovies();

        $scope.removeMovie = function(movieId){
            myListFactory.removeMovie(movieId);
            $scope.movies = myListFactory.getMovies();
        }
    }
]);
