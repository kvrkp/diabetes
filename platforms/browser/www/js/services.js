'use strict';

/* Services */
var diabetesServices = angular.module('diabetesServices', ['ngResource']);

diabetesServices.factory('User', [function() {
	var sdo = {
		name: "",
		dob: "",
		bloodgroup: "",
		sex: "",
		weight: 0,
		height: "",
		diabetesType: "",
		email: ""
	};
	return sdo;
}]);
