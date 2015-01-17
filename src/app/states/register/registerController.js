'use strict';

/**
 * @name RegisterController
 * @desc Controller for the register screen.
 * @doc https://github.com/toddmotto/angularjs-styleguide#controllers
 */
function RegisterController(FirebaseService, $state) {

  // create reference to view model
  var register = this;

  // registerUser method
  register.registerUser = function() {

    FirebaseService.createUser(register.email, register.password);

    // switch to dashboard state
    $state.go('dashboard');

  }

}

// resolve
RegisterController.resolve = {

}

// load controller
angular.module('app').controller('RegisterController', RegisterController);
