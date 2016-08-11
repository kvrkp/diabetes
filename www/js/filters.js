'use strict';

/* Filters */
angular.module('diabetesFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
