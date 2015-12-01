angular.module('myModule').factory('omdbFactory', ['$http',
    function($http) {
        return {
            titleSearch:function(title, year) {
                if (!year)
                    year = "";
                return $http.get('http://www.omdbapi.com/?t=' + title + '&y=' + year + '&plot=full&r=json');
            },
            generalSearch:function(title) {
                return $http.get('http://www.omdbapi.com/?s=' + title);
            }
        };
    }
]);
