'use strict';

/* Controllers */
var diabetesControllers = angular.module('diabetesControllers', []);

diabetesControllers.controller('homeCtrl', [ '$scope', function($scope) {
	console.log("In homectrl");
	$scope.version = '1.0.0';
} ]);

diabetesControllers.controller('registerCtrl', [ '$scope', 'User', function($scope, User) {
	console.log("In registerCtrl");
	$scope.User = User;
	
	$scope.register = function() {
		console.log("registered:" + User.name);
	}

	$scope.clear = function() {
		console.log("cleared");
	}
} ]);
