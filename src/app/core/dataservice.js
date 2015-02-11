(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($firebase, $firebaseAuth, FIREBASE_URL, $q) {

    // create firebase references
    var ref = new Firebase(FIREBASE_URL);
    var authObject = $firebaseAuth(ref);
    var data = $firebase(new Firebase(FIREBASE_URL)).$asObject();

    /* DATASERVICE API */
    var service = {
      login:              login,
      logout:             logout,
      resolveUser:        resolveUser,
      createUser:         createUser,
      removeUser:         removeUser,
      findUserByName:     findUserByName,
      createProfile:      createProfile,
      sendPasswordReset:  sendPasswordResetEmail,
      resetPassword:      resetPassword
    };

    return service;

    function login(user) {
      return authObject.$authWithPassword({
        email   : user.email,
        password: user.password
      });
    }

    function logout() {
      return authObject.$unauth();
    }

    function resolveUser() {
      return authObject.$getAuth();
    }

    function createUser(user) {
      return authObject.$createUser(user.email, user.password);
    }

    function removeUser(user) {
      return authObject.$removeUser(user.email, user.password);
    }

    function findUserByName(user) {
      // TODO: change all console.log's to logger.
      console.log('Athlete passed into service: ');
      console.dir(user);

      var defer = $q.defer();
      ref.child('users').once('value', function (userPathSnapshot) {
        userPathSnapshot.forEach(function (userSnap) {

          if ( user.FirstName === userSnap.val().firstName &&
            user.LastName === userSnap.val().lastName) {

            console.log('found a match!');
            defer.resolve(userSnap);
          }

        });
      });

      return defer.promise;
    }

    function createProfile(user, authData) {
      var profile = {
        email           : user.email,
        firstName       : '', // string
        lastName        : '', // string
        age             : '', // integer
        accountStatus   : '', // [active, inactive]
        fitnessLevel    : '', // [blue, gold, whatevs]
        classesAttended : '' // number
      };
      var user = $firebase(ref.child('users').child(authData.uid));

      return user.$set(profile);
    }

    function updateProfile(user) {
      // stub
    }

    function sendPasswordResetEmail(user) {
      return authObject.$resetPassword(user.email);
    }

    function resetPassword(user) {
      return authObject.$changePassword({
        email: user.email,
        oldPassword: user.oldPassword,
        newPassword: user.newPassword
      });
    }

  }
})();
