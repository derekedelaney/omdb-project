angular.module('myModule').factory('omdbFactory', ['$http',
    function($http) {
        return {
            titleSearch:function(val) {
                return $http.get('http://www.omdbapi.com/?t=' + val);
            },
            generalSearch:function(val) {
                return $http.get('http://www.omdbapi.com/?s=' + val);
            }
        }
    }
]);