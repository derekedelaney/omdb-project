angular.module('myModule').factory('omdbFactory', ['$http',
    function($http) {
        return {
            titleSearch:function(title, year) {
                if (!year)
                    year = "";
                return $http.get('http://www.omdbapi.com/?t=' + title + '&y=' + year + '&tomatoes=true&plot=full');
            },
            generalSearch:function(title) {
                return $http.get('http://www.omdbapi.com/?s=' + title);
            }
        };
    }
]);
