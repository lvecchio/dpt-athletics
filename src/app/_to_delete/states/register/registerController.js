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

    // create user object
    var user = {
      email: register.email,
      password: register.password
    };

    FirebaseService.createUser(user)
      .then(function() {
      return FirebaseService.login(user); // log in the new user
    }).then(function(authData) {
      console.log("Logged in as: " + authData.uid);
      console.log(authData);
      return FirebaseService.createProfile(user, authData); // create a profile w/ our user
    });
  };
}

// resolve
RegisterController.resolve = {

};

// load controller
angular.module('app').controller('RegisterController', RegisterController);
