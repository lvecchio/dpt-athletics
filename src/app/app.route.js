'use strict';

/**
 * @name config
 * @desc Config function for angular routeProvider
 * @doc https://github.com/toddmotto/angularjs-styleguide#routing-resolves
 */
function config ($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/dashboard");

  // Setup states
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      controller: 'DashboardController as dashboard',
      templateUrl: 'app/states/dashboard/dashboardView.html'
    })
    .state('measurements', {
      url: '/measurements'
    })
    .state('goals', {
      url: '/goals'
    })
}

// load route configuration
angular.module('app').config(config);

