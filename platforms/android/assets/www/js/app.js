'use strict';
 
/* App Module */
var diabetesApp = angular.module('diabetesApp', [
  'ngRoute',
  'ngGrid',
  'diabetesControllers',
  'diabetesFilters',
  'diabetesServices'
]);
diabetesApp.config(['$routeProvider',
  function($routeProvider) {
	  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
	  $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: 'registerCtrl'});
	  $routeProvider.otherwise({redirectTo: '/home'});
  }])
  .run(function($rootScope, validateCookie) {
    $rootScope.$on('$routeChangeSuccess', function () {
        validateCookie($rootScope);
    }) 
  })
.factory('validateCookie', function($rootScope, $http){
    return function(scope) {
    	$rootScope.sitename="http://www.vanavanisalem.org/diabetes/";
    }
});
