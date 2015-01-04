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
    .state('login', {
      url: '/login',
      controller: 'LoginController as login',
      templateUrl: 'app/states/login/loginView.html'
    })
    .state('register', {
      url: '/register',
      controller: 'RegisterController as register',
      templateUrl: 'app/states/register/registerView.html'
    })
    .state('dashboard', {
      url: '/dashboard',
      controller: 'DashboardController as dashboard',
      templateUrl: 'app/states/dashboard/dashboardView.html'
    })
    .state('measurements', {
      url: '/measurements',
      templateUrl: 'app/states/measurements/measurementsView.html'
    })
    .state('goals', {
      url: '/goals',
      templateUrl: 'app/states/goals/goalsView.html'
    })
}

// load route configuration
angular.module('app').config(config);

