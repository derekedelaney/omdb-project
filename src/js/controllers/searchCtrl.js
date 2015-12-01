angular.module('myModule').controller('searchCtrl', ['$scope', 'omdbFactory', 'myListFactory', 'toastr',
    function($scope, omdbFactory, myListFactory, toastr){
        $scope.pageTitle = "Search Movies";
        
        $scope.searchFunction = function(){
            omdbFactory.titleSearch($scope.searchText).then(
                function(success) {
                    $scope.movie = success.data;
                },
                function(error) {
                    $scope.movie = error;
                }
            );
            omdbFactory.generalSearch($scope.searchText).then(
                function(sucess) {
                    $scope.related = sucess.data.Search;
                },
                function(error) {
                    $scope.related = error;
                }
            );
        };

        $scope.updateClick = function(movieId, title){
            $scope.searchText = "";
            omdbFactory.imdbSearch(movieId).then(
                function(success) {
                    $scope.movie = success.data;
                },
                function(error) {
                    $scope.movie = error;
                }
            );
            omdbFactory.generalSearch(title).then(
                function(sucess) {
                    $scope.related = sucess.data.Search;
                },
                function(error) {
                    $scope.related = error;
                }
            );
        };

        $scope.addMovie = function(movie){
            myListFactory.addMovie(movie);
            toastr.success('Successfully added ' + movie.Title + ' to your list');
        };
    }
]);
