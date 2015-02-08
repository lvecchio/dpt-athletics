(function() {
  'use strict';

  // load route configuration
  angular.module('app').config(config);

  /**
   * @name config
   * @desc Config function for angular routeProvider
   * @doc https://github.com/toddmotto/angularjs-styleguide#routing-resolves
   */
  function config ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");

    // Setup states
    $stateProvider
      .state('login', {
        url: '/login',
        controller: 'Login as vm',
        templateUrl: 'app/users/login.html'
      })
      .state('register', {
        url: '/register',
        controller: 'Register as vm',
        templateUrl: 'app/users/register.html'
      })
      .state('base', {
        abstract: true,
        url: '/base',
        templateUrl: 'app/layout/shell.html',
        controller: 'Shell as vm'
      })
      .state('base.dashboard', {
        url: '/dashboard',
        controller: 'Dashboard as vm',
        templateUrl: 'app/dashboard/dashboard.html'
      })
      .state('base.measurements', {
        url: '/measurements',
        controller: 'Measurements as vm',
        templateUrl: 'app/measurements/measurements.html'
      })
      .state('base.profile', {
        url: '/profile',
        controller: 'Profile as vm',
        templateUrl: 'app/users/profile.html'
      })
      .state('base.goals', {
        url: '/goals',
        templateUrl: 'app/goals/goals.html'
      })
      .state('base.clients', {
        url: '/clients',
        controller: 'Clients as vm',
        templateUrl: 'app/users/clients.html'
      })

  }


})();




