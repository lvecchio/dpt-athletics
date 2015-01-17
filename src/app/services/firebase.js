'use strict';

/**
 * @name FirebaseService
 * @desc Service for all Firebase logic
 * @doc https://github.com/toddmotto/angularjs-styleguide#services-and-factory
 */
function FirebaseService () {
  var FirebaseService = {};

  FirebaseService.someValue = '';
  FirebaseService.someMethod = function () {

  };
  return FirebaseService;
}



// load controller
angular.module('app').factory('FirebaseService', FirebaseService);
