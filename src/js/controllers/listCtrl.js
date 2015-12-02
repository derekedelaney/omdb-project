angular.module('myModule').controller('listCtrl', ['$scope', 'myListFactory', 'toastr',
    function($scope, myListFactory, toastr){
        $scope.pageTitle = "My Movies";
        $scope.movies = myListFactory.getMovies();

        $scope.removeMovie = function(movieId){
            myListFactory.removeMovie(movieId);
            $scope.movies = myListFactory.getMovies();
            toastr.info('Deleted movie');
        }
    }
]);
