var hpa = {};

(function(mui) {
	'use strict';

	var appModule = angular.module('hpa', ['category']);

	appModule.config(function($routeProvider) {
		$routeProvider.when('/category', {
			templateUrl: 'partials/categoryList.html',
			controller: 'CategoryListCtrl'
		});
		$routeProvider.otherwise({
			redirectTo: '/category'
		});
	});
})(hpa);
