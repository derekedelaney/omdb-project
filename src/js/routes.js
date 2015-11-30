'use strict';

angular.module('myModule').config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/search');

        $stateProvider.state('search', {
            url: '/search',
            templateUrl: 'templates/search.tpl.html',
            controller: 'searchCtrl'
	    }).state('myList', {
            url:'/myList',
            templateUrl: 'templates/list.tpl.html',
            controller: 'listCtrl'
        });

}]);