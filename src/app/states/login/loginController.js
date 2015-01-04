'use strict';

/**
 * @name LoginController
 * @desc Controller for the login screen.
 * @doc https://github.com/toddmotto/angularjs-styleguide#controllers
 */
function LoginController($firebase, $firebaseAuth, FIREBASE_URL, $state) {

  // create reference to view model
  var login = this;

  // create firebase references
  login.ref = new Firebase(FIREBASE_URL);
  login.authObj = $firebaseAuth(login.ref);

  // signIn method
  login.signIn = function() {
    login.authObj.$authWithPassword({
      email: login.email,
      password: login.password
    }).then(function(authData){
      console.log('Logged in as: ', authData.password.email);

      // switch to dashboard state
      $state.go('dashboard');

    }).catch(function(error){
      console.error('Authentication failed: ', error);
    });
  }

  // register method
  login.register = function () {
    $state.go('register');
  }

}

// resolve
LoginController.resolve = {

}

// load controller
angular.module('app').controller('LoginController', LoginController);
