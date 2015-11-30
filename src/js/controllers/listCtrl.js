angular.module('myModule').controller('listCtrl', ['$scope', 'omdbFactory',
    function($scope, omdbFactory){
        $scope.pageTitle = "My Movies";

    }
]);