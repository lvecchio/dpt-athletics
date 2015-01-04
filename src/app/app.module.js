'use strict';

/**
 * @name app
 * @desc Main module for angular app
 * @doc https://github.com/toddmotto/angularjs-styleguide#modules
 */
angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'mobile-angular-ui',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://durbrow-performance.firebaseio.com/');


