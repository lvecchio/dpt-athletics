'use strict';

/**
 * @name ProfileController
 * @desc Controller for the profile screen.
 * @doc https://github.com/toddmotto/angularjs-styleguide#controllers
 */
function ProfileController(FirebaseService, $state) {

  // create reference to view model
  var profile = this;

  // get user id
  profile.uid = FirebaseService.resolveUser().uid;

  // get current user's profile
  console.log(FirebaseService.getProfile());


}

// resolve
ProfileController.resolve = {

};

// load controller
angular.module('app').controller('ProfileController', ProfileController);
