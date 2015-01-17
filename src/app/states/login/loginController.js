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
    FirebaseService.login(login.email, login.password);

    // switch to dashboard state
    $state.go('dashboard');
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
