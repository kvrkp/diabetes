'use strict';

/* Controllers */
var diabetesControllers = angular.module('diabetesControllers', []);

diabetesControllers.controller('homeCtrl', [ '$scope', function($scope) {
	console.log("In homectrl");
	document.getElementById("name").innerHTML = "My innerHTML";
	
    var db = window.sqlitePlugin.openDatabase({name: 'diabetes.db', location: 'default'});
    db.transaction(function(tx) {
        tx.executeSql('SELECT name, dob, bloodgroup, sex, weight, height, diabetesType, email FROM DiabetesTable', [], function(tx, rs) {
      	  document.getElementById("name").innerHTML = rs.rows.item(0).name + ',' + rs.rows.item(0).dob;
        }, function(tx, error) {
          console.log('SELECT error: ' + error.message);
        }, function() {
        	db.close();
        });
      });
    
} ]);

diabetesControllers.controller('registerCtrl', [ '$scope', 'User', function($scope, User) {
	console.log("In registerCtrl");
	$scope.User = User;
	
	$scope.register = function() {
		console.log("registered:" + User.name);
	    var db = window.sqlitePlugin.openDatabase({name: 'diabetes.db', location: 'default'});
        db.transaction(function(tx) {
        	tx.executeSql('DROP TABLE DiabetesTable');
            tx.executeSql('CREATE TABLE DiabetesTable (name, dob, bloodgroup, sex, weight, height, diabetesType, email)');
            tx.executeSql('INSERT INTO DiabetesTable (name, dob, bloodgroup, sex, weight, height, diabetesType, email) VALUES (?,?,?,?,?,?,?,?)', [User.name, User.dob, User.bloodgroup, User.sex, User.height, User.weight, User.diabetesType, User.email]);
          }, function(error) {
            console.log('Transaction ERROR: ' + error.message);
          }, function() {
            console.log('Populated database OK');
            db.close();
          });
  	}

	$scope.clear = function() {
		console.log("cleared");
	}
} ]);
