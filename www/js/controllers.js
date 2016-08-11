'use strict';

/* Controllers */
var diabetesControllers = angular.module('diabetesControllers', []);

diabetesControllers.controller('homeCtrl', [ '$scope', function($scope) {
	$scope.version = '1.0.0';
} ]);

diabetesControllers.controller('registerCtrl', [ '$scope', 'User', function($scope, User) {
	$scope.User = User;
	
	$scope.register = function() {
		console.log("registered:" + User.name);
	}

	$scope.clear = function() {
		console.log("cleared");
	}
} ]);
