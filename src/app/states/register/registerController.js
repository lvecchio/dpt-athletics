'use strict';

/**
 * @name RegisterController
 * @desc Controller for the register screen.
 * @doc https://github.com/toddmotto/angularjs-styleguide#controllers
 */
function RegisterController($firebase, $firebaseAuth, FIREBASE_URL, $state) {

  // create reference to view model
  var register = this;

  // create firebase references
  register.ref = new Firebase(FIREBASE_URL);
  register.authObj = $firebaseAuth(register.ref);

  // createUser method
  register.createUser = function() {

    register.authObj.$createUser(register.email, register.password).then(function(){
      console.log("User created successfully");

      return register.authObj.$authWithPassword({
        email: register.email,
        password: register.password
      });

    }).then(function(authData){
      console.log("Logged in as: ", authData.uid);
      console.log(authData);

      // create user record with uid & email
      var newUser = {
        uid: authData.uid,
        email: authData.password.email
      };

      // store user data in profile object
      var profileRef = $firebase(register.ref.child('users'));
      profileRef.$set(authData.uid, newUser);

    }).catch(function(error) {
      console.log("Error: ", error);
    });

    // switch to dashboard state
    $state.go('dashboard');

  }

}

// resolve
RegisterController.resolve = {

}

// load controller
angular.module('app').controller('RegisterController', RegisterController);
