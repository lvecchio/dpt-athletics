'use strict';

/**
 * @name LoginController
 * @desc Controller for the login screen.
 * @doc https://github.com/toddmotto/angularjs-styleguide#controllers
 */
function LoginController(FirebaseService, $state) {

  // create reference to view model
  var login = this;

  // signIn method
  login.signIn = function() {

    // create user object with login information
    var user = {
      email: login.email,
      password: login.password
    };

    FirebaseService.login(user).then(function(authData){
      console.log('Logged in as: ', authData.password.email);
      // switch to dashboard state
      $state.go('dashboard');

    }).catch(function(error){
      console.error('Authentication failed: ', error);
    });

  };

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
