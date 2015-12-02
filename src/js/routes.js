'use strict';

angular.module('myModule').config(['$stateProvider', '$urlRouterProvider', 'toastrConfig',
    function($stateProvider, $urlRouterProvider, toastrConfig){

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

        angular.extend(toastrConfig, {
            positionClass: 'toast-top-center',
            tapToDismiss: true,
            closeButton: true,
            closeHtml: '<button>&times;</button>'
        });

}]);
