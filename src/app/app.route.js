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
      //.state('login', {
      //  url: '/login',
      //  controller: 'LoginController as login',
      //  templateUrl: 'app/states/login/loginView.html'
      //})
      //.state('register', {
      //  url: '/register',
      //  controller: 'RegisterController as register',
      //  templateUrl: 'app/states/register/registerView.html'
      //})
      .state('profile', {
        url: '/profile',
        controller: 'ProfileController as profile',
        templateUrl: 'app/states/profile/profileView.html'
      })
      .state('dashboard', {
        url: '/dashboard',
        controller: 'Dashboard as vm',
        templateUrl: 'app/dashboard/dashboard.html'
      })
      .state('measurements', {
        url: '/measurements',
        controller: 'MeasurementsController as measurements',
        templateUrl: 'app/states/measurements/measurementsView.html'
      })
      .state('goals', {
        url: '/goals',
        templateUrl: 'app/states/goals/goalsView.html'
      })
  }


})();




