'use strict';

/**
 * @name ProfileController
 * @desc Controller for the profile screen.
 * @doc https://github.com/toddmotto/angularjs-styleguide#controllers
 */
function ProfileController($firebase, $firebaseAuth, FIREBASE_URL, $state) {

  // create reference to view model
  var profile = this;

  // create firebase references
  profile.ref = new Firebase(FIREBASE_URL);
  profile.authObj = $firebaseAuth(profile.ref);

  // check authentication state of user
  profile.authData = profile.authObj.$getAuth();

  // find user in users table
  profile.firebaseUser = $firebase(profile.ref.child('users').child(profile.authData.uid));

  console.log(profile.firebaseUser);

  if(profile.user){
    profile.email = profile.firebaseUser.email;
    profile.firstName = profile.firebaseUser.firstName;
    profile.lastName = profile.firebaseUser.lastName;
    profile.age = profile.firebaseUser.age;
  }

  // save updated profile information
  profile.saveData = function() {
    var updatedData = {
      email: profile.email,
      firstName: profile.firstName,
      lastName: profile.lastName,
      age: profile.age
    }

    // store user data in profile object
    var profileRef = $firebase(profile.ref.child('users').child(profile.authData.uid));
    profileRef.$set(updatedData);

  }


}

// resolve
ProfileController.resolve = {

}

// load controller
angular.module('app').controller('ProfileController', ProfileController);
