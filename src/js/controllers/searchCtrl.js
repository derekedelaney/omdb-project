angular.module('myModule').controller('searchCtrl', ['$scope', 'omdbFactory',
    function($scope, omdbFactory){
        $scope.pageTitle = "Search Movies";
        
        $scope.searchFunction = function(){
            omdbFactory.titleSearch($scope.searchText, "").then(
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
    }
]);
